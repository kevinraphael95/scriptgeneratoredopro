// ==========================================================================
// EDOPro Script Studio — logique applicative
// Dépend de data.js (window.YGO_DATA) chargé avant ce fichier.
// ==========================================================================

const D = window.YGO_DATA;

/* ------------------------------------------------------------------ */
/* État global                                                        */
/* ------------------------------------------------------------------ */
const state = {
  tab: "generator",
  card: {
    id: "",
    name: "",
    typeCategory: "MONSTER",
    setcode: [],       // consts SET_*
    listedNames: [],   // consts CARD_*
    hasGraveEffect: false,
  },
  effects: [],
  activeEffectId: null,
  nextId: 1,
};

const PRESETS = [
  { id: "IGNITION", label: "Ignition (effet d'action)", type: ["EFFECT_TYPE_IGNITION"], needsCode: false, defaultRange: ["LOCATION_MZONE"] },
  { id: "QUICK_O", label: "Quick Effect optionnel", type: ["EFFECT_TYPE_QUICK_O"], needsCode: true, defaultCode: "EVENT_FREE_CHAIN", defaultRange: ["LOCATION_MZONE", "LOCATION_HAND"] },
  { id: "ACTIVATE", label: "Activation (Magie / Piège)", type: ["EFFECT_TYPE_ACTIVATE"], needsCode: true, defaultCode: "EVENT_FREE_CHAIN", defaultRange: [] },
  { id: "TRIGGER_O", label: "Trigger optionnel", type: ["EFFECT_TYPE_SINGLE", "EFFECT_TYPE_TRIGGER_O"], needsCode: true, defaultCode: "EVENT_SUMMON_SUCCESS", defaultRange: [] },
  { id: "TRIGGER_F", label: "Trigger obligatoire", type: ["EFFECT_TYPE_FIELD", "EFFECT_TYPE_TRIGGER_F"], needsCode: true, defaultCode: "EVENT_DESTROYED", defaultRange: [] },
  { id: "CONTINUOUS", label: "Effet continu", type: ["EFFECT_TYPE_SINGLE", "EFFECT_TYPE_CONTINUOUS"], needsCode: false, defaultRange: ["LOCATION_MZONE"] },
  { id: "FIELD", label: "Effet de terrain / champ", type: ["EFFECT_TYPE_FIELD"], needsCode: false, defaultRange: ["LOCATION_MZONE", "LOCATION_SZONE"] },
  { id: "CUSTOM", label: "Personnalisé (choisir les types manuellement)", type: [], needsCode: false, defaultRange: [] },
];

function findConst(group, name) {
  return (D.constants[group] || []).find((c) => c.const === name);
}

/* ------------------------------------------------------------------ */
/* Modèle d'effet par défaut                                          */
/* ------------------------------------------------------------------ */
function createEffect() {
  const id = state.nextId++;
  return {
    id,
    label: `Effet ${state.effects.length + 1}`,
    preset: "IGNITION",
    extraTypes: [],
    code: "",
    category: ["CATEGORY_SPECIAL_SUMMON"],
    range: ["LOCATION_MZONE"],
    property: [],
    hintTiming: [],
    countLimitType: "HARD_USE",
    countLimitCode: "",
    condition: "NONE",
    conditionArchetype: "",
    conditionPhase: [],
    cost: "NONE",
    costAmount: 1000,
    operation: "SPECIAL_SUMMON",
    operationAmount: 2,
    operationLocation: ["LOCATION_DECK"],
    hintMsg: "",
    extraReason: "",
  };
}

/* ------------------------------------------------------------------ */
/* Petits composants UI réutilisables                                 */
/* ------------------------------------------------------------------ */
let comboSeq = 0;

// Sélecteur unique "recherchable" (input + datalist) contraint à la liste
function renderSingleCombo({ group, value, onChange, allowEmpty = true, emptyLabel = "—" }) {
  const listId = `dl-${comboSeq++}`;
  const items = D.constants[group] || [];
  const options = items
    .map((c) => `<option value="${c.label} (${c.const})">`)
    .join("");
  const current = findConst(group, value);
  const displayVal = current ? `${current.label} (${current.const})` : "";
  const wrap = document.createElement("div");
  wrap.className = "combo";
  wrap.innerHTML = `
    <input type="text" list="${listId}" value="${displayVal}" placeholder="${emptyLabel} — tapez pour rechercher (${items.length} options)">
    <datalist id="${listId}">${options}</datalist>
  `;
  const input = wrap.querySelector("input");
  input.addEventListener("change", () => {
    const m = input.value.match(/\(([^)]+)\)\s*$/);
    const constName = m ? m[1] : (allowEmpty ? "" : value);
    if (constName === "" || findConst(group, constName)) {
      onChange(constName);
    } else {
      input.value = displayVal; // valeur invalide -> on annule
    }
  });
  return wrap;
}

// Sélecteur multiple par tags (input + datalist + liste de tags supprimables)
function renderMultiCombo({ group, values, onChange, placeholder }) {
  const listId = `dl-${comboSeq++}`;
  const items = D.constants[group] || [];
  const wrap = document.createElement("div");
  wrap.className = "combo";
  const options = items.map((c) => `<option value="${c.label} (${c.const})">`).join("");
  wrap.innerHTML = `
    <input type="text" list="${listId}" placeholder="${placeholder || `Ajouter... (${items.length} options)`}">
    <datalist id="${listId}"></datalist>
    <div class="tag-list"></div>
  `;
  wrap.querySelector(`#${listId}`).outerHTML = `<datalist id="${listId}">${options}</datalist>`;
  const input = wrap.querySelector("input");
  const tagList = wrap.querySelector(".tag-list");

  function renderTags() {
    tagList.innerHTML = "";
    values.forEach((constName) => {
      const item = findConst(group, constName);
      const label = item ? item.label : constName;
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.innerHTML = `${label} <button type="button">&times;</button>`;
      tag.querySelector("button").addEventListener("click", () => {
        const idx = values.indexOf(constName);
        if (idx >= 0) values.splice(idx, 1);
        renderTags();
        onChange(values);
      });
      tagList.appendChild(tag);
    });
  }
  renderTags();

  input.addEventListener("change", () => {
    const m = input.value.match(/\(([^)]+)\)\s*$/);
    const constName = m ? m[1] : null;
    if (constName && findConst(group, constName) && !values.includes(constName)) {
      values.push(constName);
      renderTags();
      onChange(values);
    }
    input.value = "";
  });
  return wrap;
}

function renderNativeSelect({ options, value, onChange }) {
  const sel = document.createElement("select");
  options.forEach((o) => {
    const opt = document.createElement("option");
    opt.value = o.value;
    opt.textContent = o.label;
    if (o.value === value) opt.selected = true;
    sel.appendChild(opt);
  });
  sel.addEventListener("change", () => onChange(sel.value));
  return sel;
}

/* ------------------------------------------------------------------ */
/* Rendu — barre latérale (identité + liste d'effets)                 */
/* ------------------------------------------------------------------ */
function renderExplorer() {
  const root = document.getElementById("explorer");
  root.innerHTML = "";

  // --- Identité de la carte ---
  const idSection = document.createElement("div");
  idSection.className = "explorer-section";
  idSection.innerHTML = `<div class="explorer-header"><span><i class="fa-solid fa-address-card"></i> Identité</span></div>`;
  const idBody = document.createElement("div");
  idBody.className = "explorer-body";

  idBody.appendChild(fieldWrap("Passcode *", inputText(state.card.id, "ex: 10000001", "number", (v) => { state.card.id = v; renderCode(); renderExplorerHeaderOnly(); })));
  idBody.appendChild(fieldWrap("Nom de la carte", inputText(state.card.name, "ex: Nom de la carte", "text", (v) => { state.card.name = v; renderCode(); })));
  idBody.appendChild(fieldWrap("Type général", renderNativeSelect({
    options: [
      { value: "MONSTER", label: "Monstre" },
      { value: "SPELL", label: "Magie" },
      { value: "TRAP", label: "Piège" },
    ],
    value: state.card.typeCategory,
    onChange: (v) => { state.card.typeCategory = v; renderCode(); },
  })));

  idBody.appendChild(fieldWrap(
    "Archétypes (listed_series)",
    renderMultiCombo({ group: "SET_ARCH", values: state.card.setcode, onChange: renderCode, placeholder: "Rechercher un archétype…" }),
    "s.listed_series={...} — construit depuis archetype_setcode_constants.lua"
  ));

  idBody.appendChild(fieldWrap(
    "Cartes listées (listed_names)",
    renderMultiCombo({ group: "CARD_REF", values: state.card.listedNames, onChange: renderCode, placeholder: "Rechercher une carte…" }),
    "s.listed_names={...}"
  ));

  const graveRow = document.createElement("div");
  graveRow.className = "switch-row";
  graveRow.innerHTML = `
    <label class="switch"><input type="checkbox" ${state.card.hasGraveEffect ? "checked" : ""}><span class="track"></span></label>
    <span>A un effet au cimetière</span>
  `;
  graveRow.querySelector("input").addEventListener("change", (e) => { state.card.hasGraveEffect = e.target.checked; renderCode(); });
  idBody.appendChild(graveRow);

  idSection.appendChild(idBody);
  root.appendChild(idSection);

  // --- Liste des effets ---
  const effSection = document.createElement("div");
  effSection.className = "explorer-section";
  effSection.style.flex = "1 1 auto";
  effSection.style.display = "flex";
  effSection.style.flexDirection = "column";
  effSection.style.minHeight = "0";
  effSection.innerHTML = `<div class="explorer-header"><span><i class="fa-solid fa-bolt"></i> Effets (${state.effects.length})</span></div>`;

  const ul = document.createElement("ul");
  ul.className = "effect-list";
  ul.style.overflowY = "auto";
  state.effects.forEach((eff, idx) => {
    const li = document.createElement("li");
    li.className = eff.id === state.activeEffectId ? "active" : "";
    li.innerHTML = `<span class="dot"></span><span class="name">${idx + 1}. ${eff.label}</span><span class="del"><i class="fa-solid fa-trash"></i></span>`;
    li.querySelector(".name").addEventListener("click", () => { state.activeEffectId = eff.id; renderAll(); });
    li.querySelector(".dot").addEventListener("click", () => { state.activeEffectId = eff.id; renderAll(); });
    li.addEventListener("click", (e) => { if (e.target.closest(".del")) return; state.activeEffectId = eff.id; renderAll(); });
    li.querySelector(".del").addEventListener("click", () => {
      state.effects = state.effects.filter((x) => x.id !== eff.id);
      if (state.activeEffectId === eff.id) state.activeEffectId = state.effects[0] ? state.effects[0].id : null;
      renderAll();
    });
    ul.appendChild(li);
  });
  effSection.appendChild(ul);

  const addBtn = document.createElement("button");
  addBtn.className = "add-effect-btn";
  addBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Ajouter un effet`;
  addBtn.addEventListener("click", () => {
    const eff = createEffect();
    state.effects.push(eff);
    state.activeEffectId = eff.id;
    renderAll();
  });
  effSection.appendChild(addBtn);

  root.appendChild(effSection);
}

function renderExplorerHeaderOnly() {
  document.getElementById("code-filename").textContent = state.card.id ? `c${state.card.id}.lua` : "c.lua";
}

function fieldWrap(label, control, hint) {
  const div = document.createElement("div");
  div.className = "field";
  const l = document.createElement("label");
  l.textContent = label;
  div.appendChild(l);
  div.appendChild(control);
  if (hint) {
    const h = document.createElement("div");
    h.className = "hint";
    h.textContent = hint;
    div.appendChild(h);
  }
  return div;
}

function inputText(value, placeholder, type, onChange) {
  const input = document.createElement("input");
  input.type = type || "text";
  input.value = value || "";
  input.placeholder = placeholder || "";
  input.addEventListener("input", () => onChange(input.value));
  return input;
}

/* ------------------------------------------------------------------ */
/* Rendu — panneau éditeur d'effet                                    */
/* ------------------------------------------------------------------ */
function renderEditor() {
  const root = document.getElementById("editor");
  root.innerHTML = "";
  const eff = state.effects.find((e) => e.id === state.activeEffectId);

  if (!eff) {
    root.innerHTML = `
      <div class="editor-empty">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        Sélectionnez ou créez un effet à gauche pour commencer.
      </div>`;
    return;
  }

  // --- Panel: type & déclenchement ---
  const p1 = panel("Type & déclenchement", "fa-solid fa-bolt");
  const nameField = fieldWrap("Nom (repère interne, commentaire)", inputText(eff.label, "", "text", (v) => { eff.label = v || eff.label; renderExplorer(); renderCode(); }));
  const g1 = document.createElement("div"); g1.className = "grid3";
  g1.appendChild(fieldWrap("Modèle d'effet", renderNativeSelect({
    options: PRESETS.map((p) => ({ value: p.id, label: p.label })),
    value: eff.preset,
    onChange: (v) => { eff.preset = v; const preset = PRESETS.find((p) => p.id === v); if (preset && preset.defaultRange.length) eff.range = [...preset.defaultRange]; if (preset && preset.defaultCode) eff.code = preset.defaultCode; renderAll(); },
  })));
  g1.appendChild(fieldWrap("Déclencheur (SetCode)", renderSingleCombo({ group: "EVENT", value: eff.code, onChange: (v) => { eff.code = v; renderCode(); } }), "EVENT_* — laisser vide si non applicable"));
  g1.appendChild(fieldWrap("Zone d'effet (SetRange)", renderMultiCombo({ group: "LOCATION", values: eff.range, onChange: renderCode })));
  p1.body.appendChild(g1);
  p1.body.appendChild(document.createElement("div")).className = "section-label";
  p1.body.lastChild.textContent = "Types additionnels (EFFECT_TYPE)";
  p1.body.appendChild(renderMultiCombo({ group: "EFFECT_TYPE", values: eff.extraTypes, onChange: renderCode, placeholder: "Ajouter un type EFFECT_TYPE_* en plus du modèle…" }));
  root.appendChild(nameField);
  root.appendChild(p1.el);

  // --- Panel: catégorie / propriétés / hint timing ---
  const p2 = panel("Classification & drapeaux", "fa-solid fa-tags");
  p2.body.appendChild(sectionLabel("Catégorie(s) — SetCategory"));
  p2.body.appendChild(renderMultiCombo({ group: "CATEGORY", values: eff.category, onChange: renderCode }));
  p2.body.appendChild(sectionLabel("Propriétés — SetProperty"));
  p2.body.appendChild(renderMultiCombo({ group: "EFFECT_FLAG", values: eff.property, onChange: renderCode }));
  p2.body.appendChild(sectionLabel("Hint timing — SetHintTiming (optionnel)"));
  p2.body.appendChild(renderMultiCombo({ group: "TIMING", values: eff.hintTiming, onChange: renderCode }));
  root.appendChild(p2.el);

  // --- Panel: limite d'usage ---
  const p3 = panel("Limite d'utilisation (OPT)", "fa-solid fa-shield-halved");
  const g3 = document.createElement("div"); g3.className = "grid2";
  g3.appendChild(fieldWrap("Type de limite", renderNativeSelect({
    options: [
      { value: "HARD_USE", label: 'Hard OPT — "You can use this effect of [card] only once per turn"' },
      { value: "HARD_OATH", label: 'Hard OPT (Oath) — annulation = plus de réactivation' },
      { value: "SOFT", label: "Soft OPT — une fois par tour par exemplaire" },
      { value: "ONCE_DUEL", label: "Une fois par duel" },
      { value: "CUSTOM", label: "Code personnalisé (EFFECT_COUNT_CODE_*)" },
      { value: "NONE", label: "Aucune limite" },
    ],
    value: eff.countLimitType,
    onChange: (v) => { eff.countLimitType = v; renderAll(); },
  })));
  if (eff.countLimitType === "CUSTOM") {
    g3.appendChild(fieldWrap("Code de comptage", renderSingleCombo({ group: "EFFECT_COUNT_CODE", value: eff.countLimitCode, onChange: (v) => { eff.countLimitCode = v; renderCode(); } })));
  }
  p3.body.appendChild(g3);
  root.appendChild(p3.el);

  // --- Panel: condition ---
  const p4 = panel("Condition préalable — SetCondition", "fa-solid fa-diagram-project");
  const g4 = document.createElement("div"); g4.className = "grid2";
  g4.appendChild(fieldWrap("Condition", renderNativeSelect({
    options: [
      { value: "NONE", label: "Aucune condition" },
      { value: "CONTROL_MONSTER", label: "Contrôle au moins 1 monstre" },
      { value: "CONTROL_ARCHETYPE", label: "Contrôle un monstre de l'archétype" },
      { value: "PHASE", label: "Phase(s) de jeu spécifique(s)" },
    ],
    value: eff.condition,
    onChange: (v) => { eff.condition = v; renderAll(); },
  })));
  if (eff.condition === "CONTROL_ARCHETYPE") {
    g4.appendChild(fieldWrap("Archétype", renderSingleCombo({ group: "SET_ARCH", value: eff.conditionArchetype, onChange: (v) => { eff.conditionArchetype = v; renderCode(); } })));
  }
  if (eff.condition === "PHASE") {
    g4.appendChild(fieldWrap("Phase(s)", renderMultiCombo({ group: "PHASE", values: eff.conditionPhase, onChange: renderCode })));
  }
  p4.body.appendChild(g4);
  root.appendChild(p4.el);

  // --- Panel: coût ---
  const p5 = panel("Coût d'activation — SetCost", "fa-solid fa-coins");
  const g5 = document.createElement("div"); g5.className = "grid2";
  g5.appendChild(fieldWrap("Type de coût", renderNativeSelect({
    options: [
      { value: "NONE", label: "Sans coût" },
      { value: "LP", label: "Payer des LP" },
      { value: "DISCARD", label: "Défausser 1 carte de la main" },
      { value: "BANISH_GRAVE", label: "Bannir 1 carte du cimetière" },
      { value: "TRIBUTE", label: "Tribute 1 monstre que vous contrôlez" },
    ],
    value: eff.cost,
    onChange: (v) => { eff.cost = v; renderAll(); },
  })));
  if (eff.cost === "LP") {
    g5.appendChild(fieldWrap("Montant de LP", inputText(eff.costAmount, "1000", "number", (v) => { eff.costAmount = v; renderCode(); })));
  }
  p5.body.appendChild(g5);
  root.appendChild(p5.el);

  // --- Panel: résolution ---
  const p6 = panel("Cible & résolution — SetTarget / SetOperation", "fa-solid fa-crosshairs");
  const g6 = document.createElement("div"); g6.className = "grid3";
  g6.appendChild(fieldWrap("Action principale", renderNativeSelect({
    options: [
      { value: "SPECIAL_SUMMON", label: "Invoquer spécialement" },
      { value: "ADD_TO_HAND", label: "Ajouter à la main" },
      { value: "DESTROY", label: "Détruire sur le terrain" },
      { value: "DRAW", label: "Piocher des cartes" },
      { value: "DAMAGE", label: "Infliger des dégâts" },
      { value: "RECOVER", label: "Récupérer des LP" },
      { value: "BANISH", label: "Bannir sur le terrain" },
      { value: "CUSTOM", label: "Personnalisé (squelette à compléter)" },
    ],
    value: eff.operation,
    onChange: (v) => { eff.operation = v; renderAll(); },
  })));
  if (["SPECIAL_SUMMON", "ADD_TO_HAND"].includes(eff.operation)) {
    g6.appendChild(fieldWrap("Depuis (zone source)", renderMultiCombo({ group: "LOCATION", values: eff.operationLocation, onChange: renderCode })));
  }
  if (["DRAW", "DAMAGE", "RECOVER"].includes(eff.operation)) {
    g6.appendChild(fieldWrap("Quantité", inputText(eff.operationAmount, "2", "number", (v) => { eff.operationAmount = v; renderCode(); })));
  }
  g6.appendChild(fieldWrap("Message (Duel.Hint)", renderSingleCombo({ group: "HINTMSG", value: eff.hintMsg, onChange: (v) => { eff.hintMsg = v; renderCode(); } })));
  g6.appendChild(fieldWrap("Raison additionnelle (REASON)", renderSingleCombo({ group: "REASON", value: eff.extraReason, onChange: (v) => { eff.extraReason = v; renderCode(); } })));
  p6.body.appendChild(g6);
  root.appendChild(p6.el);
}

function panel(title, icon) {
  const el = document.createElement("div");
  el.className = "panel";
  el.innerHTML = `<div class="panel-title"><i class="${icon}"></i> ${title}</div>`;
  const body = document.createElement("div");
  el.appendChild(body);
  return { el, body };
}
function sectionLabel(text) {
  const d = document.createElement("div");
  d.className = "section-label";
  d.textContent = text;
  return d;
}

/* ------------------------------------------------------------------ */
/* Génération du code Lua                                             */
/* ------------------------------------------------------------------ */
function joinConsts(arr) {
  return arr && arr.length ? arr.join("+") : null;
}

function genEffectBlock(eff, n) {
  let c = `\t-- ${eff.label}\n`;
  c += `\tlocal e${n}=Effect.CreateEffect(c)\n`;

  const preset = PRESETS.find((p) => p.id === eff.preset) || PRESETS[0];
  const allTypes = [...preset.type, ...eff.extraTypes];
  if (allTypes.length) c += `\te${n}:SetType(${joinConsts(allTypes)})\n`;
  if (eff.code) c += `\te${n}:SetCode(${eff.code})\n`;
  if (eff.range.length) c += `\te${n}:SetRange(${joinConsts(eff.range)})\n`;
  if (eff.category.length) c += `\te${n}:SetCategory(${joinConsts(eff.category)})\n`;
  if (eff.property.length) c += `\te${n}:SetProperty(${joinConsts(eff.property)})\n`;
  if (eff.hintTiming.length) c += `\te${n}:SetHintTiming(${joinConsts(eff.hintTiming)})\n`;

  if (eff.countLimitType === "HARD_USE") c += `\te${n}:SetCountLimit(1,id)\n`;
  else if (eff.countLimitType === "HARD_OATH") c += `\te${n}:SetCountLimit(1,id,EFFECT_COUNT_CODE_OATH)\n`;
  else if (eff.countLimitType === "SOFT") c += `\te${n}:SetCountLimit(1)\n`;
  else if (eff.countLimitType === "ONCE_DUEL") c += `\te${n}:SetCountLimit(1,id,EFFECT_COUNT_CODE_DUEL)\n`;
  else if (eff.countLimitType === "CUSTOM" && eff.countLimitCode) c += `\te${n}:SetCountLimit(1,id,${eff.countLimitCode})\n`;

  if (eff.condition !== "NONE") c += `\te${n}:SetCondition(s.con${n})\n`;
  if (eff.cost !== "NONE") c += `\te${n}:SetCost(s.cost${n})\n`;
  c += `\te${n}:SetTarget(s.tg${n})\n`;
  c += `\te${n}:SetOperation(s.op${n})\n`;
  c += `\tc:RegisterEffect(e${n})\n\n`;
  return c;
}

function genConditionFn(eff, n, archetypeHex) {
  if (eff.condition === "CONTROL_MONSTER") {
    return `function s.con${n}(e,tp,eg,ep,ev,re,r,rp)\n\treturn Duel.IsExistingMatchingCard(nil,tp,LOCATION_MZONE,0,1,nil)\nend\n\n`;
  }
  if (eff.condition === "CONTROL_ARCHETYPE") {
    const arch = findConst("SET_ARCH", eff.conditionArchetype);
    const hex = arch ? arch.hex : "0x0";
    return (
      `function s.cfilter${n}(c)\n\treturn c:IsFaceup() and c:IsSetCard(${hex})\nend\n` +
      `function s.con${n}(e,tp,eg,ep,ev,re,r,rp)\n\treturn Duel.IsExistingMatchingCard(s.cfilter${n},tp,LOCATION_MZONE,0,1,nil)\nend\n\n`
    );
  }
  if (eff.condition === "PHASE") {
    const phases = eff.conditionPhase.length ? joinConsts(eff.conditionPhase) : "PHASE_MAIN1";
    return `function s.con${n}(e,tp,eg,ep,ev,re,r,rp)\n\treturn Duel.GetCurrentPhase()==${phases}\nend\n\n`;
  }
  return "";
}

function genCostFn(eff, n) {
  if (eff.cost === "LP") {
    const amt = eff.costAmount || 1000;
    return (
      `function s.cost${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.CheckLPCost(tp,${amt}) end\n\tDuel.PayLPCost(tp,${amt})\nend\n\n`
    );
  }
  if (eff.cost === "DISCARD") {
    return (
      `function s.cost${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsDiscardable,tp,LOCATION_HAND,0,1,e:GetHandler()) end\n` +
      `\tDuel.DiscardHand(tp,Card.IsDiscardable,1,1,REASON_COST+REASON_DISCARD,e:GetHandler())\nend\n\n`
    );
  }
  if (eff.cost === "BANISH_GRAVE") {
    return (
      `function s.cost${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsAbleToRemoveAsCost,tp,LOCATION_GRAVE,0,1,nil) end\n` +
      `\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_REMOVE)\n\tlocal g=Duel.SelectMatchingCard(tp,Card.IsAbleToRemoveAsCost,tp,LOCATION_GRAVE,0,1,1,nil)\n` +
      `\tDuel.Remove(g,POS_FACEUP,REASON_COST)\nend\n\n`
    );
  }
  if (eff.cost === "TRIBUTE") {
    return (
      `function s.cost${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsReleasable,tp,LOCATION_MZONE,0,1,e:GetHandler()) end\n` +
      `\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_RELEASE)\n\tlocal g=Duel.SelectReleaseGroup(tp,Card.IsReleasable,tp,LOCATION_MZONE,0,1,1,e:GetHandler())\n` +
      `\tDuel.Release(g,REASON_COST)\nend\n\n`
    );
  }
  return "";
}

function genTargetOpFns(eff, n) {
  const hint = eff.hintMsg ? eff.hintMsg : null;
  const extraReason = eff.extraReason ? `+${eff.extraReason}` : "";
  const srcLoc = joinConsts(eff.operationLocation) || "LOCATION_DECK";

  if (eff.operation === "SPECIAL_SUMMON") {
    return (
      `function s.spfilter${n}(c,e,tp)\n\treturn c:IsCanBeSpecialSummoned(e,0,tp,false,false)\nend\n` +
      `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(s.spfilter${n},tp,${srcLoc},0,1,nil,e,tp) end\n` +
      `\tDuel.SetOperationInfo(0,CATEGORY_SPECIAL_SUMMON,nil,1,tp,${srcLoc})\nend\n\n` +
      `function s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n` +
      (hint ? `\tDuel.Hint(HINT_SELECTMSG,tp,${hint})\n` : "") +
      `\tlocal g=Duel.SelectMatchingCard(tp,s.spfilter${n},tp,${srcLoc},0,1,1,nil,e,tp)\n` +
      `\tif #g>0 then\n\t\tDuel.SpecialSummon(g,0,tp,tp,false,false,POS_FACEUP)\n\tend\nend\n\n`
    );
  }
  if (eff.operation === "ADD_TO_HAND") {
    return (
      `function s.thfilter${n}(c)\n\treturn c:IsAbleToHand()\nend\n` +
      `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(s.thfilter${n},tp,${srcLoc},0,1,nil) end\n` +
      `\tDuel.SetOperationInfo(0,CATEGORY_TOHAND,nil,1,tp,${srcLoc})\nend\n\n` +
      `function s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n` +
      (hint ? `\tDuel.Hint(HINT_SELECTMSG,tp,${hint})\n` : "") +
      `\tlocal g=Duel.SelectMatchingCard(tp,s.thfilter${n},tp,${srcLoc},0,1,1,nil)\n` +
      `\tif #g>0 then\n\t\tDuel.SendtoHand(g,nil,REASON_EFFECT${extraReason})\n\t\tDuel.ConfirmCards(1-tp,g)\n\tend\nend\n\n`
    );
  }
  if (eff.operation === "DESTROY") {
    return (
      `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsDestructible,tp,0,LOCATION_ONFIELD,1,nil) end\n` +
      `\tlocal g=Duel.GetMatchingGroup(Card.IsDestructible,tp,0,LOCATION_ONFIELD,nil)\n\tDuel.SetOperationInfo(0,CATEGORY_DESTROY,g,1,0,0)\nend\n\n` +
      `function s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n` +
      (hint ? `\tDuel.Hint(HINT_SELECTMSG,tp,${hint})\n` : "") +
      `\tlocal g=Duel.SelectMatchingCard(tp,Card.IsDestructible,tp,0,LOCATION_ONFIELD,1,1,nil)\n` +
      `\tif #g>0 then\n\t\tDuel.Destroy(g,REASON_EFFECT${extraReason})\n\tend\nend\n\n`
    );
  }
  if (eff.operation === "DRAW") {
    const amt = eff.operationAmount || 1;
    return (
      `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsPlayerCanDraw(tp,${amt}) end\n` +
      `\tDuel.SetTargetPlayer(tp)\n\tDuel.SetTargetParam(${amt})\n\tDuel.SetOperationInfo(0,CATEGORY_DRAW,nil,0,tp,${amt})\nend\n\n` +
      `function s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tlocal p,d=Duel.GetChainInfo(0,CHAININFO_TARGET_PLAYER,CHAININFO_TARGET_PARAM)\n\tDuel.Draw(p,d,REASON_EFFECT${extraReason})\nend\n\n`
    );
  }
  if (eff.operation === "DAMAGE") {
    const amt = eff.operationAmount || 500;
    return (
      `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return true end\n\tDuel.SetTargetPlayer(1-tp)\n\tDuel.SetTargetParam(${amt})\n\tDuel.SetOperationInfo(0,CATEGORY_DAMAGE,nil,0,1-tp,${amt})\nend\n\n` +
      `function s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tlocal p,d=Duel.GetChainInfo(0,CHAININFO_TARGET_PLAYER,CHAININFO_TARGET_PARAM)\n\tDuel.Damage(p,d,REASON_EFFECT${extraReason})\nend\n\n`
    );
  }
  if (eff.operation === "RECOVER") {
    const amt = eff.operationAmount || 500;
    return (
      `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return true end\n\tDuel.SetTargetPlayer(tp)\n\tDuel.SetTargetParam(${amt})\n\tDuel.SetOperationInfo(0,CATEGORY_RECOVER,nil,0,tp,${amt})\nend\n\n` +
      `function s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tlocal p,d=Duel.GetChainInfo(0,CHAININFO_TARGET_PLAYER,CHAININFO_TARGET_PARAM)\n\tDuel.Recover(p,d,REASON_EFFECT${extraReason})\nend\n\n`
    );
  }
  if (eff.operation === "BANISH") {
    return (
      `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsAbleToRemove,tp,0,LOCATION_ONFIELD,1,nil) end\n` +
      `\tlocal g=Duel.GetMatchingGroup(Card.IsAbleToRemove,tp,0,LOCATION_ONFIELD,nil)\n\tDuel.SetOperationInfo(0,CATEGORY_REMOVE,g,1,0,0)\nend\n\n` +
      `function s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n` +
      (hint ? `\tDuel.Hint(HINT_SELECTMSG,tp,${hint})\n` : "") +
      `\tlocal g=Duel.SelectMatchingCard(tp,Card.IsAbleToRemove,tp,0,LOCATION_ONFIELD,1,1,nil)\n\tif #g>0 then\n\t\tDuel.Remove(g,POS_FACEUP,REASON_EFFECT${extraReason})\n\tend\nend\n\n`
    );
  }
  // CUSTOM
  return (
    `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return true end\n\t-- TODO: compléter la légalité de la cible\nend\n\n` +
    `function s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\t-- TODO: compléter la résolution de l'effet\nend\n\n`
  );
}

function buildScript() {
  const { card, effects } = state;
  let code = card.name ? `-- ${card.name}\n` : `-- Script généré pour EDOPro\n`;
  code += `local s,id=GetID()\n`;
  code += `function s.initial_effect(c)\n`;
  effects.forEach((eff, idx) => (code += genEffectBlock(eff, idx + 1)));
  code += `end\n\n`;

  if (card.setcode.length) {
    const hexes = card.setcode.map((c) => (findConst("SET_ARCH", c) || {}).hex).filter(Boolean);
    if (hexes.length) code += `s.listed_series={${hexes.join(",")}}\n`;
  }
  if (card.listedNames.length) {
    const ids = card.listedNames.map((c) => (findConst("CARD_REF", c) || {}).id).filter(Boolean);
    if (ids.length) code += `s.listed_names={${ids.join(",")}}\n`;
  }
  code += "\n";

  effects.forEach((eff, idx) => {
    const n = idx + 1;
    code += genConditionFn(eff, n);
    code += genCostFn(eff, n);
    code += genTargetOpFns(eff, n);
  });

  return code.trimEnd() + "\n";
}

function highlightLua(code) {
  return code
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/(--.*)/g, '<span class="lua-comment">$1</span>')
    .replace(/\b(local|function|end|return|if|then|else|elseif|and|or|not)\b/g, '<span class="lua-keyword">$1</span>')
    .replace(/\b(GetID|Effect|Duel|Card|Group|CreateEffect|RegisterEffect|Set\w+|Is\w+|Select\w+|SpecialSummon|SendtoHand|Destroy|Draw|Damage|Recover|Remove|ConfirmCards|GetChainInfo|GetCurrentPhase|Release|DiscardHand|PayLPCost|CheckLPCost|Hint|GetMatchingGroup)\b/g, '<span class="lua-function">$1</span>')
    .replace(/\b(EFFECT_[A-Z_]+|EVENT_[A-Z_]+|LOCATION_[A-Z_]+|CATEGORY_[A-Z_]+|REASON_[A-Z_]+|POS_[A-Z_]+|PHASE_[A-Z_]+|HINT_[A-Z_]+|HINTMSG_[A-Z_]+|CHAININFO_[A-Z_]+|TYPE_[A-Z_]+)\b/g, '<span class="lua-constant">$1</span>')
    .replace(/\b(\d+|0x[0-9a-fA-F]+)\b/g, '<span class="lua-number">$1</span>');
}

function renderCode() {
  const code = buildScript();
  window.generatedRawLua = code;
  document.getElementById("lua-output").innerHTML = highlightLua(code);
  document.getElementById("code-filename").textContent = state.card.id ? `c${state.card.id}.lua` : "c.lua";
}

/* ------------------------------------------------------------------ */
/* Onglets / actions globales                                         */
/* ------------------------------------------------------------------ */
function switchTab(tab) {
  state.tab = tab;
  document.getElementById("view-generator").classList.toggle("hidden", tab !== "generator");
  document.getElementById("view-reference").classList.toggle("hidden", tab !== "reference");
  document.querySelectorAll(".topbar-tabs button").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
}

function copyCode() {
  if (!window.generatedRawLua) return;
  navigator.clipboard.writeText(window.generatedRawLua).then(() => {
    const btn = document.getElementById("copy-label");
    btn.textContent = "Copié !";
    setTimeout(() => (btn.textContent = "Copier"), 1600);
  });
}

function exportLuaFile() {
  const filename = state.card.id ? `c${state.card.id}.lua` : "script.lua";
  const blob = new Blob([window.generatedRawLua || ""], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

function renderAll() {
  renderExplorer();
  renderEditor();
  renderCode();
}

/* ------------------------------------------------------------------ */
/* Référence / guide                                                  */
/* ------------------------------------------------------------------ */
function renderReferenceExtras() {
  const counterTable = document.getElementById("counters-table-body");
  if (counterTable) {
    counterTable.innerHTML = D.counters.map((c) => `<tr><td>${c.label}</td><td><code>${c.const}</code></td><td><code>${c.hex}</code></td></tr>`).join("");
  }
  const statsEl = document.getElementById("data-stats");
  if (statsEl) {
    const totalConsts = Object.values(D.constants).reduce((a, l) => a + l.length, 0);
    statsEl.textContent = `${totalConsts} constantes de moteur, ${D.archetypes.length} archétypes et ${D.cards.length} cartes de référence chargés depuis les fichiers Lua fournis.`;
  }
}

/* ------------------------------------------------------------------ */
/* Initialisation                                                     */
/* ------------------------------------------------------------------ */
window.addEventListener("DOMContentLoaded", () => {
  // Alias pour les groupes de données composites (archétypes / cartes de référence)
  D.constants.SET_ARCH = D.archetypes.map((a) => ({ const: a.const, label: a.label, value: a.hex }));
  D.constants.SET_ARCH.forEach((a) => (a.hex = D.archetypes.find((x) => x.const === a.const).hex));
  D.constants.CARD_REF = D.cards.map((c) => ({ const: c.const, label: c.label, value: c.id, id: c.id }));

  document.querySelectorAll(".topbar-tabs button").forEach((b) => b.addEventListener("click", () => switchTab(b.dataset.tab)));
  document.getElementById("btn-copy").addEventListener("click", copyCode);
  document.getElementById("btn-export").addEventListener("click", exportLuaFile);

  const first = createEffect();
  state.effects.push(first);
  state.activeEffectId = first.id;

  renderAll();
  renderReferenceExtras();
});
