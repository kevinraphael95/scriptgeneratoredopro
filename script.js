
/* ================= STATE ================= */
let cardType = "MONSTER";
let setcodes = [];
let effects = [];
let effSeq = 0;

/* ================= INIT ================= */
window.onload = function(){
  populateSelect('m-attribute', ATTRIBUTES.map(a=>[a, ATTR_LABELS_FR[a]]), 'LIGHT');
  populateSelect('m-race', RACES.map(r=>[r, RACE_LABELS_FR[r]]), 'DRAGON');
  buildMonsterFlagPills();
  buildLinkMarkerPills();
  buildArchetypeDatalist();
  renderEffects();
  syncThemeIcon();
  render();
};

/* ================= THEME ================= */
function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  try{ localStorage.setItem('kartouche-theme', next); }catch(e){}
  syncThemeIcon();
}
function syncThemeIcon(){
  const t = document.documentElement.getAttribute('data-theme') || 'light';
  document.getElementById('theme-icon-dark').style.display = t === 'light' ? 'block' : 'none';
  document.getElementById('theme-icon-light').style.display = t === 'dark' ? 'block' : 'none';
}

function populateSelect(id, pairs, selected){
  const el = document.getElementById(id);
  el.innerHTML = pairs.map(([v,l])=>`<option value="${v}" ${v===selected?'selected':''}>${l}</option>`).join('');
}

function buildArchetypeDatalist(){
  const dl = document.getElementById('archetype-list');
  dl.innerHTML = ARCHETYPES.map(a=>`<option value="${a.n}">`).join('');
}

function onArchetypeSearch(input){
  const match = ARCHETYPES.find(a=>a.n.toLowerCase()===input.value.toLowerCase());
  if(match){
    if(!setcodes.find(s=>s.h===match.h)){
      setcodes.push({n:match.n, h:match.h});
    }
    input.value='';
    render();
  }
}

function removeSetcode(h){
  setcodes = setcodes.filter(s=>s.h!==h);
  render();
}

function buildMonsterFlagPills(){
  const c = document.getElementById('monster-flags');
  c.innerHTML = MONSTER_FLAGS.map(([id,label])=>`
    <label class="pill" id="pill-flag-${id}">
      <input type="checkbox" id="flag-${id}" onchange="onFlagChange('${id}')"> ${label}
    </label>`).join('');
}
function onFlagChange(id){
  document.getElementById('pill-flag-'+id).classList.toggle('checked', document.getElementById('flag-'+id).checked);
  render();
}

function buildLinkMarkerPills(){
  const c = document.getElementById('link-marker-pills');
  c.innerHTML = LINK_MARKERS.map(([id,glyph])=>`
    <label class="pill" id="pill-lm-${id}">
      <input type="checkbox" id="lm-${id}" onchange="onLinkMarkerChange('${id}')"> ${glyph} ${id.replace('_',' ')}
    </label>`).join('');
}
function onLinkMarkerChange(id){
  document.getElementById('pill-lm-'+id).classList.toggle('checked', document.getElementById('lm-'+id).checked);
  render();
}

/* ================= TABS ================= */
function switchTab(tab){
  document.getElementById('view-generator').classList.toggle('active', tab==='generator');
  document.getElementById('view-reference').classList.toggle('active', tab==='reference');
  document.getElementById('btn-tab-generator').classList.toggle('active', tab==='generator');
  document.getElementById('btn-tab-reference').classList.toggle('active', tab==='reference');
  if(tab==='reference') buildReference();
}

/* ================= CARD TYPE ================= */
function setCardType(t){
  cardType = t;
  document.querySelectorAll('.type-switch button').forEach(b=>b.classList.remove('active'));
  document.querySelector('.type-switch .'+t).classList.add('active');
  document.getElementById('monster-fields').style.display = t==='MONSTER' ? 'block':'none';
  document.getElementById('spell-fields').style.display = t==='SPELL' ? 'block':'none';
  document.getElementById('trap-fields').style.display = t==='TRAP' ? 'block':'none';
  // reset effect type selects to first valid option for new context
  effects.forEach(e=>{ e.typeMain = (t==='MONSTER') ? 'IGNITION' : 'ACTIVATE'; });
  renderEffects();
  render();
}

function onMonsterMainChange(){ render(); }

/* ================= EFFECTS ================= */
function addEffect(){
  effSeq++;
  effects.push({
    id: effSeq,
    label: 'Effet '+effSeq,
    typeMain: cardType==='MONSTER' ? 'IGNITION' : 'ACTIVATE',
    categories: [],
    optScope: 'CARD', optN: 1, optOath: false, optDuel: false,
    cond: 'NONE', condRaw: '',
    cost: 'NONE', costAmount: 1000, costRaw: '',
    op: (cardType==='MONSTER' ? 'SPECIAL_SUMMON_DECK' : 'DRAW'), opAmount: 1, opRaw: '',
    continuousRaw: '',
    eventCode: 'EVENT_SUMMON_SUCCESS', eventRaw: '',
    cloneEvent: 'NONE'
  });
  renderEffects();
  render();
}
function removeEffect(id){
  effects = effects.filter(e=>e.id!==id);
  renderEffects();
  render();
}
function updateEff(id, field, value){
  const e = effects.find(x=>x.id===id);
  if(e){ e[field]=value; render(); }
}
function toggleEffCategory(id, cat){
  const e = effects.find(x=>x.id===id);
  if(!e) return;
  if(e.categories.includes(cat)) e.categories = e.categories.filter(c=>c!==cat);
  else e.categories.push(cat);
  renderEffects();
  render();
}

function renderEffects(){
  const container = document.getElementById('effects-container');
  document.getElementById('effects-empty').style.display = effects.length ? 'none' : 'block';
  document.getElementById('eff-count-sub').innerText = effects.length + (effects.length>1 ? ' effets' : ' effet');

  const typeOptions = EFFECT_TYPES[cardType==='MONSTER' ? 'MONSTER' : 'ST'];

  container.innerHTML = effects.map((e, effIdx) => { const n = effIdx+1; return `
    <div class="eff-card">
      <div class="eff-head">
        <span class="eff-badge">#${e.id}</span>
        <input class="eff-label" value="${e.label}" oninput="updateEff(${e.id},'label',this.value)">
        <button class="icon-btn" onclick="removeEffect(${e.id})" title="Supprimer">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z"/></svg>
        </button>
      </div>
      <div class="eff-body">

        <div class="field-grid">
          <div class="field">
            <label>Type d'effet</label>
            <select onchange="updateEff(${e.id},'typeMain',this.value)">
              ${typeOptions.map(([v,l])=>`<option value="${v}" ${e.typeMain===v?'selected':''}>${l}</option>`).join('')}
            </select>
          </div>
          <div class="field">
            <label>Portée OPT</label>
            <select onchange="updateEff(${e.id},'optScope',this.value)">
              <option value="CARD" ${e.optScope==='CARD'?'selected':''}>Par carte nommée (id)</option>
              <option value="COPY" ${e.optScope==='COPY'?'selected':''}>Par exemplaire sur le terrain</option>
              <option value="NONE" ${e.optScope==='NONE'?'selected':''}>Aucune limite</option>
            </select>
          </div>
          <div class="field">
            <label>Fois par tour</label>
            <input type="number" min="1" value="${e.optN}" oninput="updateEff(${e.id},'optN',this.value)">
          </div>
          <div class="field">
            <label>Options OPT</label>
            <div class="pill-row">
              <label class="pill ${e.optOath?'checked':''}"><input type="checkbox" ${e.optOath?'checked':''} onchange="updateEff(${e.id},'optOath',this.checked)"> Serment (Oath)</label>
              <label class="pill ${e.optDuel?'checked':''}"><input type="checkbox" ${e.optDuel?'checked':''} onchange="updateEff(${e.id},'optDuel',this.checked)"> Par duel entier</label>
            </div>
          </div>
        </div>

        ${['TRIGGER_O','TRIGGER_F'].includes(e.typeMain) ? `
        <div class="field-grid">
          <div class="field">
            <label>Event déclencheur</label>
            <select onchange="updateEff(${e.id},'eventCode',this.value)">
              ${TRIGGER_EVENTS.map(([v,l])=>`<option value="${v}" ${e.eventCode===v?'selected':''}>${l}</option>`).join('')}
            </select>
          </div>
          ${e.eventCode==='CUSTOM' ? `<div class="field span2"><label>Event Lua (ex: EVENT_PHASE+PHASE_MAIN)</label><input type="text" value="${e.eventRaw||''}" placeholder="EVENT_..." oninput="updateEff(${e.id},'eventRaw',this.value)"></div>` : `
          <div class="field">
            <label>Se déclenche aussi sur</label>
            <select onchange="updateEff(${e.id},'cloneEvent',this.value)">
              ${CLONE_EVENTS.map(([v,l])=>`<option value="${v}" ${e.cloneEvent===v?'selected':''}>${l}</option>`).join('')}
            </select>
          </div>`}
        </div>` : ''}

        <div class="field">
          <label>Catégories (SetCategory — cumulables)</label>
          <div class="cat-grid">
            ${CATEGORIES.map(([v,l])=>`
              <label class="pill ${e.categories.includes(v)?'checked':''}">
                <input type="checkbox" ${e.categories.includes(v)?'checked':''} onchange="toggleEffCategory(${e.id},'${v}')"> ${l}
              </label>`).join('')}
          </div>
        </div>

        <div class="field-grid">
          <div class="field">
            <label>Condition préalable</label>
            <select onchange="updateEff(${e.id},'cond',this.value)">
              ${CONDITIONS.map(([v,l])=>`<option value="${v}" ${e.cond===v?'selected':''}>${l}</option>`).join('')}
            </select>
          </div>
          <div class="field">
            <label>Coût d'activation</label>
            <select onchange="updateEff(${e.id},'cost',this.value)">
              ${COSTS.map(([v,l])=>`<option value="${v}" ${e.cost===v?'selected':''}>${l}</option>`).join('')}
            </select>
          </div>
          ${e.cost==='LP' ? `<div class="field"><label>Montant LP</label><input type="number" value="${e.costAmount}" oninput="updateEff(${e.id},'costAmount',this.value)"></div>` : ''}
          ${(e.cost==='DISCARD'||e.cost==='BANISH_GY'||e.cost==='TRIBUTE') ? `<div class="field"><label>Nombre de cartes</label><input type="number" min="1" value="${e.costAmount}" oninput="updateEff(${e.id},'costAmount',this.value)"></div>` : ''}
        </div>
        ${e.cost==='CUSTOM' ? `<div class="field"><label>Corps de s.costN (raw)</label><textarea placeholder="if chk==0 then return ... end\\nDuel...(...)" oninput="updateEff(${e.id},'costRaw',this.value)">${e.costRaw}</textarea></div>` : ''}

        ${e.cond==='CUSTOM' ? `<div class="field"><label>Corps de s.conN (raw)</label><textarea placeholder="return Duel...(...)" oninput="updateEff(${e.id},'condRaw',this.value)">${e.condRaw}</textarea></div>` : ''}

        ${(e.typeMain==='CONTINUOUS'||e.typeMain==='SINGLE'||e.typeMain==='FIELD') ? `
        <div class="field">
          <label>Lignes ajoutées dans initial_effect (SetCode / SetValue / SetOperation…)</label>
          <textarea placeholder="e${n}:SetCode(EFFECT_CANNOT_BE_BATTLE_TARGET)" oninput="updateEff(${e.id},'continuousRaw',this.value)">${e.continuousRaw}</textarea>
          <span class="hint">Un effet Continu/Passif n'a pas de target/operation — c'est ici que vous branchez le vrai comportement (immunité, restriction, octroi de stats…).</span>
        </div>` : `
        <div class="field-grid">
          <div class="field span2">
            <label>Action de résolution (target + operation)</label>
            <select onchange="updateEff(${e.id},'op',this.value)">
              ${OPERATIONS.map(([v,l])=>`<option value="${v}" ${e.op===v?'selected':''}>${l}</option>`).join('')}
            </select>
          </div>
          ${['SPECIAL_SUMMON_DECK','SPECIAL_SUMMON_GY','TOHAND_DECK','TOHAND_GY','DESTROY_FIELD','BANISH_FIELD','BANISH_GY_OP','MILL','DRAW','TOKEN_SUMMON'].includes(e.op) ? `<div class="field"><label>Quantité</label><input type="number" min="1" value="${e.opAmount}" oninput="updateEff(${e.id},'opAmount',this.value)"></div>` : ''}
          ${['DAMAGE','RECOVER','ATK_UP','ATK_DOWN'].includes(e.op) ? `<div class="field"><label>Valeur</label><input type="number" min="0" step="100" value="${e.opAmount}" oninput="updateEff(${e.id},'opAmount',this.value)"></div>` : ''}
        </div>
        ${e.op==='CUSTOM' ? `<div class="field"><label>Corps complet de s.tgN / s.opN (raw)</label><textarea placeholder="function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)&#10;&#9;if chk==0 then return true end&#10;end&#10;function s.op${n}(e,tp,eg,ep,ev,re,r,rp)&#10;&#9;-- ...&#10;end" oninput="updateEff(${e.id},'opRaw',this.value)">${e.opRaw}</textarea></div>` : ''}
        `}

      </div>
    </div>
  `; }).join('');
}

/* ================= CODE GENERATION ================= */
function esc(s){ return (s||'').replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

function computeTypeBitmask(){
  if(cardType==='MONSTER'){
    const main = document.getElementById('m-main').value;
    let parts = ['TYPE_MONSTER'];
    const mainMap = {NORMAL:'TYPE_NORMAL',EFFECT:'TYPE_EFFECT',RITUAL:'TYPE_EFFECT+TYPE_RITUAL',FUSION:'TYPE_EFFECT+TYPE_FUSION',SYNCHRO:'TYPE_EFFECT+TYPE_SYNCHRO',XYZ:'TYPE_EFFECT+TYPE_XYZ',LINK:'TYPE_EFFECT+TYPE_LINK'};
    parts.push(mainMap[main]);
    if(document.getElementById('flag-pendulum').checked) parts.push('TYPE_PENDULUM');
    if(document.getElementById('flag-tuner').checked) parts.push('TYPE_TUNER');
    if(document.getElementById('flag-union').checked) parts.push('TYPE_UNION');
    if(document.getElementById('flag-spirit').checked) parts.push('TYPE_SPIRIT');
    if(document.getElementById('flag-gemini').checked) parts.push('TYPE_GEMINI');
    if(document.getElementById('flag-toon').checked) parts.push('TYPE_TOON');
    return parts.join('+');
  }
  if(cardType==='SPELL'){
    const sub = document.getElementById('s-sub').value;
    const map = {NORMAL:'TYPE_SPELL',CONTINUOUS:'TYPE_SPELL+TYPE_CONTINUOUS',EQUIP:'TYPE_SPELL+TYPE_EQUIP',QUICKPLAY:'TYPE_SPELL+TYPE_QUICKPLAY',FIELD:'TYPE_SPELL+TYPE_FIELD',RITUAL:'TYPE_SPELL+TYPE_RITUAL'};
    return map[sub];
  }
  const sub = document.getElementById('t-sub').value;
  const map = {NORMAL:'TYPE_TRAP',CONTINUOUS:'TYPE_TRAP+TYPE_CONTINUOUS',COUNTER:'TYPE_TRAP+TYPE_COUNTER'};
  return map[sub] || 'TYPE_TRAP';
}

function genCondition(e, n){
  if(e.cond==='NONE') return '';
  let body='';
  if(e.cond==='CONTROL_MONSTER') body = `function s.con${n}(e,tp,eg,ep,ev,re,r,rp)\n\treturn Duel.IsExistingMatchingCard(nil,tp,LOCATION_MZONE,0,1,nil)\nend\n\n`;
  else if(e.cond==='OPP_CONTROL_MONSTER') body = `function s.con${n}(e,tp,eg,ep,ev,re,r,rp)\n\treturn Duel.IsExistingMatchingCard(nil,1-tp,LOCATION_MZONE,0,1,nil)\nend\n\n`;
  else if(e.cond==='GY_HAS_MONSTER') body = `function s.con${n}(e,tp,eg,ep,ev,re,r,rp)\n\treturn Duel.IsExistingMatchingCard(Card.IsMonster,tp,LOCATION_GRAVE,0,1,nil)\nend\n\n`;
  else if(e.cond==='CONTROL_ARCHETYPE'){
    const hex = setcodes[0] ? setcodes[0].h : '0x0';
    body = `function s.cfilter${n}(c)\n\treturn c:IsFaceup() and c:IsSetCard(${hex})\nend\nfunction s.con${n}(e,tp,eg,ep,ev,re,r,rp)\n\treturn Duel.IsExistingMatchingCard(s.cfilter${n},tp,LOCATION_MZONE,0,1,nil)\nend\n\n`;
  } else if(e.cond==='CUSTOM'){
    body = `function s.con${n}(e,tp,eg,ep,ev,re,r,rp)\n\t${(e.condRaw||'return true').split('\n').join('\n\t')}\nend\n\n`;
  }
  return body;
}

function genCost(e, n){
  if(e.cost==='NONE') return '';
  if(e.cost==='LP') return `function s.cost${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.CheckLPCost(tp,${e.costAmount}) end\n\tDuel.PayLPCost(tp,${e.costAmount})\nend\n\n`;
  if(e.cost==='DISCARD') return `function s.cost${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsDiscardable,tp,LOCATION_HAND,0,${e.costAmount},e:GetHandler()) end\n\tDuel.DiscardHand(tp,Card.IsDiscardable,${e.costAmount},${e.costAmount},REASON_COST+REASON_DISCARD,e:GetHandler())\nend\n\n`;
  if(e.cost==='BANISH_GY') return `function s.cost${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsAbleToRemoveAsCost,tp,LOCATION_GRAVE,0,${e.costAmount},nil) end\n\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_REMOVE)\n\tlocal g=Duel.SelectMatchingCard(tp,Card.IsAbleToRemoveAsCost,tp,LOCATION_GRAVE,0,${e.costAmount},${e.costAmount},nil)\n\tDuel.Remove(g,POS_FACEUP,REASON_COST)\nend\n\n`;
  if(e.cost==='TRIBUTE') return `function s.cost${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsReleasable,tp,LOCATION_MZONE,0,${e.costAmount},e:GetHandler()) end\n\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_RELEASE)\n\tlocal g=Duel.SelectReleaseGroup(tp,Card.IsReleasable,tp,LOCATION_MZONE,0,${e.costAmount},${e.costAmount},e:GetHandler())\n\tDuel.Release(g,REASON_COST)\nend\n\n`;
  if(e.cost==='CUSTOM') return `function s.cost${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\t${(e.costRaw||'if chk==0 then return true end').split('\n').join('\n\t')}\nend\n\n`;
  return '';
}

function genTargetOperation(e, n){
  if(e.op==='CUSTOM'){
    return (e.opRaw || `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return true end\nend\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\t-- votre logique ici\nend`) + '\n\n';
  }
  const amt = e.opAmount || 1;
  const DEFAULT_CAT_BY_OP = {
    SPECIAL_SUMMON_DECK:'CATEGORY_SPECIAL_SUMMON', SPECIAL_SUMMON_GY:'CATEGORY_SPECIAL_SUMMON',
    TOHAND_DECK:'CATEGORY_TOHAND', TOHAND_GY:'CATEGORY_TOHAND',
    DESTROY_FIELD:'CATEGORY_DESTROY', BANISH_FIELD:'CATEGORY_REMOVE', BANISH_GY_OP:'CATEGORY_REMOVE',
    MILL:'CATEGORY_DECKDES'
  };
  const cat = e.categories.length ? 'CATEGORY_'+e.categories.join('+CATEGORY_') : (DEFAULT_CAT_BY_OP[e.op] || 'CATEGORY_SPECIAL_SUMMON');

  if(e.op==='SPECIAL_SUMMON_DECK') return `function s.spfilter${n}(c,e,tp)\n\treturn c:IsCanBeSpecialSummoned(e,0,tp,false,false)\nend\nfunction s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.GetLocationCount(tp,LOCATION_MZONE)>0\n\t\tand Duel.IsExistingMatchingCard(s.spfilter${n},tp,LOCATION_DECK,0,1,nil,e,tp) end\n\tDuel.SetOperationInfo(0,${cat},nil,${amt},tp,LOCATION_DECK)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tif Duel.GetLocationCount(tp,LOCATION_MZONE)<=0 then return end\n\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_SPSUMMON)\n\tlocal g=Duel.SelectMatchingCard(tp,s.spfilter${n},tp,LOCATION_DECK,0,${amt},${amt},nil,e,tp)\n\tif #g>0 then\n\t\tDuel.SpecialSummon(g,0,tp,tp,false,false,POS_FACEUP)\n\tend\nend\n\n`;

  if(e.op==='SPECIAL_SUMMON_GY') return `function s.spfilter${n}(c,e,tp)\n\treturn c:IsCanBeSpecialSummoned(e,0,tp,false,false)\nend\nfunction s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(s.spfilter${n},tp,LOCATION_GRAVE,0,1,nil,e,tp) end\n\tDuel.SetOperationInfo(0,${cat},nil,${amt},tp,LOCATION_GRAVE)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_SPSUMMON)\n\tlocal g=Duel.SelectMatchingCard(tp,s.spfilter${n},tp,LOCATION_GRAVE,0,${amt},${amt},nil,e,tp)\n\tif #g>0 then\n\t\tDuel.SpecialSummon(g,0,tp,tp,false,false,POS_FACEUP)\n\tend\nend\n\n`;

  if(e.op==='TOHAND_DECK') return `function s.thfilter${n}(c)\n\treturn c:IsAbleToHand()\nend\nfunction s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(s.thfilter${n},tp,LOCATION_DECK,0,1,nil) end\n\tDuel.SetOperationInfo(0,${cat},nil,${amt},tp,LOCATION_DECK)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_ATOHAND)\n\tlocal g=Duel.SelectMatchingCard(tp,s.thfilter${n},tp,LOCATION_DECK,0,${amt},${amt},nil)\n\tif #g>0 then\n\t\tDuel.SendtoHand(g,nil,REASON_EFFECT)\n\t\tDuel.ConfirmCards(1-tp,g)\n\tend\nend\n\n`;

  if(e.op==='TOHAND_GY') return `function s.thfilter${n}(c)\n\treturn c:IsAbleToHand()\nend\nfunction s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(s.thfilter${n},tp,LOCATION_GRAVE,0,1,nil) end\n\tDuel.SetOperationInfo(0,${cat},nil,${amt},tp,LOCATION_GRAVE)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_RTOHAND)\n\tlocal g=Duel.SelectMatchingCard(tp,s.thfilter${n},tp,LOCATION_GRAVE,0,${amt},${amt},nil)\n\tif #g>0 then\n\t\tDuel.SendtoHand(g,nil,REASON_EFFECT)\n\tend\nend\n\n`;

  if(e.op==='DESTROY_FIELD') return `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsDestructible,tp,LOCATION_ONFIELD,LOCATION_ONFIELD,1,nil) end\n\tlocal g=Duel.GetMatchingGroup(Card.IsDestructible,tp,LOCATION_ONFIELD,LOCATION_ONFIELD,nil)\n\tDuel.SetOperationInfo(0,${cat},g,${amt},0,0)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_DESTROY)\n\tlocal g=Duel.SelectMatchingCard(tp,Card.IsDestructible,tp,LOCATION_ONFIELD,LOCATION_ONFIELD,${amt},${amt},nil)\n\tif #g>0 then\n\t\tDuel.Destroy(g,REASON_EFFECT)\n\tend\nend\n\n`;

  if(e.op==='BANISH_FIELD') return `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsAbleToRemove,tp,LOCATION_ONFIELD,LOCATION_ONFIELD,1,nil) end\n\tlocal g=Duel.GetMatchingGroup(Card.IsAbleToRemove,tp,LOCATION_ONFIELD,LOCATION_ONFIELD,nil)\n\tDuel.SetOperationInfo(0,${cat},g,${amt},0,0)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_REMOVE)\n\tlocal g=Duel.SelectMatchingCard(tp,Card.IsAbleToRemove,tp,LOCATION_ONFIELD,LOCATION_ONFIELD,${amt},${amt},nil)\n\tif #g>0 then\n\t\tDuel.Remove(g,POS_FACEUP,REASON_EFFECT)\n\tend\nend\n\n`;

  if(e.op==='BANISH_GY_OP') return `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsAbleToRemove,tp,LOCATION_GRAVE,LOCATION_GRAVE,1,nil) end\n\tDuel.SetOperationInfo(0,${cat},nil,${amt},tp,LOCATION_GRAVE)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_REMOVE)\n\tlocal g=Duel.SelectMatchingCard(tp,Card.IsAbleToRemove,tp,LOCATION_GRAVE,LOCATION_GRAVE,${amt},${amt},nil)\n\tif #g>0 then\n\t\tDuel.Remove(g,POS_FACEUP,REASON_EFFECT)\n\tend\nend\n\n`;

  if(e.op==='BOUNCE_FIELD_HAND') return `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(Card.IsAbleToHand,tp,LOCATION_ONFIELD,LOCATION_ONFIELD,1,nil) end\n\tlocal g=Duel.GetMatchingGroup(Card.IsAbleToHand,tp,LOCATION_ONFIELD,LOCATION_ONFIELD,nil)\n\tDuel.SetOperationInfo(0,CATEGORY_TOHAND,g,1,0,0)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tDuel.Hint(HINT_SELECTMSG,tp,HINTMSG_RTOHAND)\n\tlocal g=Duel.SelectMatchingCard(tp,Card.IsAbleToHand,tp,LOCATION_ONFIELD,LOCATION_ONFIELD,1,1,nil)\n\tif #g>0 then\n\t\tDuel.SendtoHand(g,nil,REASON_EFFECT)\n\t\tDuel.ConfirmCards(1-tp,g)\n\tend\nend\n\n`;

  if(e.op==='MILL') return `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.GetLocationCount(tp,LOCATION_GRAVE)>=0 end\n\tDuel.SetOperationInfo(0,${cat},nil,${amt},tp,LOCATION_DECK)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tlocal g=Duel.GetDecktopGroup(tp,${amt})\n\tDuel.SendtoGrave(g,REASON_EFFECT)\nend\n\n`;

  if(e.op==='DRAW') return `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsPlayerCanDraw(tp,${amt}) end\n\tDuel.SetTargetPlayer(tp)\n\tDuel.SetTargetParam(${amt})\n\tDuel.SetOperationInfo(0,CATEGORY_DRAW,nil,0,tp,${amt})\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tlocal p,d=Duel.GetChainInfo(0,CHAININFO_TARGET_PLAYER,CHAININFO_TARGET_PARAM)\n\tDuel.Draw(p,d,REASON_EFFECT)\nend\n\n`;

  if(e.op==='DAMAGE') return `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return true end\n\tDuel.SetOperationInfo(0,CATEGORY_DAMAGE,nil,0,1-tp,${amt})\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tDuel.Damage(1-tp,${amt},REASON_EFFECT)\nend\n\n`;

  if(e.op==='RECOVER') return `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return true end\n\tDuel.SetOperationInfo(0,CATEGORY_RECOVER,nil,0,tp,${amt})\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tDuel.Recover(tp,${amt},REASON_EFFECT)\nend\n\n`;

  if(e.op==='ATK_UP' || e.op==='ATK_DOWN'){
    const sign = e.op==='ATK_UP' ? '' : '-';
    return `function s.atkfilter${n}(c)\n\treturn c:IsFaceup()\nend\nfunction s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.IsExistingMatchingCard(s.atkfilter${n},tp,LOCATION_MZONE,LOCATION_MZONE,1,nil) end\n\tDuel.SetOperationInfo(0,CATEGORY_ATKCHANGE,nil,1,0,0)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tlocal g=Duel.SelectMatchingCard(tp,s.atkfilter${n},tp,LOCATION_MZONE,LOCATION_MZONE,1,1,nil)\n\tlocal tc=g:GetFirst()\n\tif tc then\n\t\tlocal te=Effect.CreateEffect(e:GetHandler())\n\t\tte:SetType(EFFECT_TYPE_SINGLE)\n\t\tte:SetCode(EFFECT_UPDATE_ATTACK)\n\t\tte:SetReset(RESET_EVENT+RESETS_STANDARD_PHASE_END)\n\t\tte:SetValue(${sign}${amt})\n\t\ttc:RegisterEffect(te)\n\tend\nend\n\n`;
  }

  if(e.op==='NEGATE_ACTIVATION') return `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return true end\n\tDuel.SetOperationInfo(0,CATEGORY_NEGATE+CATEGORY_DESTROY,eg,1,0,0)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tif not Duel.NegateActivation(ev) then return end\n\tlocal tc=Duel.GetFirstTarget()\n\tif tc and tc:IsRelateToEffect(e) then\n\t\tDuel.Destroy(tc,REASON_EFFECT)\n\tend\nend\n\n`;

  if(e.op==='TOKEN_SUMMON') return `function s.tg${n}(e,tp,eg,ep,ev,re,r,rp,chk)\n\tif chk==0 then return Duel.GetLocationCount(tp,LOCATION_MZONE)>0 end\n\tDuel.SetOperationInfo(0,CATEGORY_TOKEN,nil,${amt},tp,0)\nend\n\nfunction s.op${n}(e,tp,eg,ep,ev,re,r,rp)\n\tlocal ct=Duel.GetLocationCount(tp,LOCATION_MZONE)\n\tif ct<=0 then return end\n\tfor i=1,math.min(ct,${amt}) do\n\t\tDuel.CreateToken(tp,TOKEN_KURIBOH)\n\tend\nend\n\n`;

  return '';
}

function generateScript(){
  const cardId = document.getElementById('card-id').value;
  const cardName = document.getElementById('card-name').value;
  const listedRaw = document.getElementById('card-listed-id').value.trim();

  let code = cardName ? `-- ${cardName}\n` : `-- Script généré — Kartouche\n`;
  code += `local s,id=GetID()\n`;
  code += `function s.initial_effect(c)\n`;

  effects.forEach((e,idx) => {
    const n = idx+1;
    code += `\t-- ${e.label}\n`;
    code += `\tlocal e${n}=Effect.CreateEffect(c)\n`;
    if(e.categories.length) code += `\te${n}:SetCategory(CATEGORY_${e.categories.join('+CATEGORY_')})\n`;

    // Type + range + code
    if(cardType==='MONSTER'){
      if(e.typeMain==='IGNITION'){ code += `\te${n}:SetType(EFFECT_TYPE_IGNITION)\n\te${n}:SetRange(LOCATION_MZONE)\n`; }
      else if(e.typeMain==='QUICK_O'){ code += `\te${n}:SetType(EFFECT_TYPE_QUICK_O)\n\te${n}:SetCode(EVENT_FREE_CHAIN)\n\te${n}:SetRange(LOCATION_MZONE)\n`; }
      else if(e.typeMain==='QUICK_F'){ code += `\te${n}:SetType(EFFECT_TYPE_QUICK_F)\n\te${n}:SetCode(EVENT_FREE_CHAIN)\n\te${n}:SetRange(LOCATION_MZONE)\n`; }
      else if(e.typeMain==='TRIGGER_O'){
        const ev = e.eventCode==='CUSTOM' ? (e.eventRaw||'EVENT_SUMMON_SUCCESS') : e.eventCode;
        code += `\te${n}:SetType(EFFECT_TYPE_SINGLE+EFFECT_TYPE_TRIGGER_O)\n\te${n}:SetCode(${ev})\n`;
      }
      else if(e.typeMain==='TRIGGER_F'){
        const ev = e.eventCode==='CUSTOM' ? (e.eventRaw||'EVENT_SUMMON_SUCCESS') : e.eventCode;
        code += `\te${n}:SetType(EFFECT_TYPE_SINGLE+EFFECT_TYPE_TRIGGER_F)\n\te${n}:SetCode(${ev})\n`;
      }
      else if(e.typeMain==='FLIP'){ code += `\te${n}:SetType(EFFECT_TYPE_FLIP+EFFECT_TYPE_TRIGGER_O)\n\te${n}:SetCode(EVENT_FLIP)\n\te${n}:SetRange(LOCATION_MZONE)\n`; }
      else if(e.typeMain==='CONTINUOUS'){ code += `\te${n}:SetType(EFFECT_TYPE_SINGLE)\n\te${n}:SetRange(LOCATION_MZONE)\n`; }
      else if(e.typeMain==='SINGLE'){ code += `\te${n}:SetType(EFFECT_TYPE_SINGLE)\n\te${n}:SetRange(LOCATION_MZONE)\n`; }
      else if(e.typeMain==='FIELD'){ code += `\te${n}:SetType(EFFECT_TYPE_FIELD)\n\te${n}:SetRange(LOCATION_MZONE)\n\te${n}:SetTargetRange(1,0)\n`; }
    } else {
      if(e.typeMain==='ACTIVATE'){ code += `\te${n}:SetType(EFFECT_TYPE_ACTIVATE)\n\te${n}:SetCode(EVENT_FREE_CHAIN)\n`; }
      else if(e.typeMain==='CONTINUOUS'){ code += `\te${n}:SetType(EFFECT_TYPE_SINGLE)\n`; }
      else if(e.typeMain==='FIELD'){ code += `\te${n}:SetType(EFFECT_TYPE_FIELD)\n\te${n}:SetTargetRange(0,1)\n`; }
      else if(e.typeMain==='EQUIP'){ code += `\te${n}:SetType(EFFECT_TYPE_EQUIP)\n`; }
      else if(e.typeMain==='QUICK_O'){ code += `\te${n}:SetType(EFFECT_TYPE_QUICK_O)\n\te${n}:SetCode(EVENT_FREE_CHAIN)\n`; }
    }

    // OPT
    if(e.optScope!=='NONE'){
      let codeFlags = [];
      if(e.optOath) codeFlags.push('EFFECT_COUNT_CODE_OATH');
      if(e.optDuel) codeFlags.push('EFFECT_COUNT_CODE_DUEL');
      const idArg = e.optScope==='CARD' ? ',id' : '';
      if(codeFlags.length){
        code += `\te${n}:SetCountLimit(${e.optN}${idArg},${codeFlags.join('+')})\n`;
      } else {
        code += `\te${n}:SetCountLimit(${e.optN}${idArg})\n`;
      }
    }

    if(e.cond!=='NONE') code += `\te${n}:SetCondition(s.con${n})\n`;
    if(e.cost!=='NONE') code += `\te${n}:SetCost(s.cost${n})\n`;
    if(e.typeMain==='CONTINUOUS' || e.typeMain==='SINGLE' || e.typeMain==='FIELD'){
      if(e.continuousRaw && e.continuousRaw.trim()) code += e.continuousRaw.split('\n').map(l=>'\t'+l).join('\n') + '\n';
    } else {
      code += `\te${n}:SetTarget(s.tg${n})\n`;
      code += `\te${n}:SetOperation(s.op${n})\n`;
    }
    code += `\tc:RegisterEffect(e${n})\n`;
    if(['TRIGGER_O','TRIGGER_F'].includes(e.typeMain) && e.cloneEvent && e.cloneEvent!=='NONE'){
      code += `\tlocal e${n}b=e${n}:Clone()\n\te${n}b:SetCode(${e.cloneEvent})\n\tc:RegisterEffect(e${n}b)\n`;
    }
    code += `\n`;
  });

  code += `end\n\n`;

  if(setcodes.length) code += `s.listed_series={${setcodes.map(s=>s.h).join(',')}}\n`;
  if(listedRaw) code += `s.listed_names={${listedRaw}}\n`;
  if(setcodes.length || listedRaw) code += `\n`;

  effects.forEach((e,idx) => {
    const n = idx+1;
    code += genCondition(e, n);
    code += genCost(e, n);
    if(e.typeMain!=='CONTINUOUS' && e.typeMain!=='SINGLE' && e.typeMain!=='FIELD'){
      code += genTargetOperation(e, n);
    }
  });

  return code.replace(/\n{3,}/g,'\n\n');
}

function highlightLua(code){
  return esc(code)
    .replace(/(--.*)/g, '<span class="lua-cm">$1</span>')
    .replace(/\b(local|function|end|return|if|then|else|elseif|for|do|not|and|or|nil|true|false)\b/g, '<span class="lua-kw">$1</span>')
    .replace(/\b(GetID|Effect|Duel|Card|CreateEffect|RegisterEffect|SetType|SetCategory|SetCode|SetProperty|SetCountLimit|SetCondition|SetCost|SetTarget|SetOperation|SetReset|SetValue|IsExistingMatchingCard|GetMatchingGroup|SelectMatchingCard|SelectReleaseGroup|GetDecktopGroup|SpecialSummon|SendtoHand|SendtoGrave|Destroy|Draw|Damage|Recover|Remove|Release|CreateToken|ConfirmCards|NegateActivation|GetFirstTarget|IsRelateToEffect|SetOperationInfo|SetTargetPlayer|SetTargetParam|GetChainInfo|GetLocationCount|CheckLPCost|PayLPCost|DiscardHand|Hint|GetHandler|IsFaceup|IsCanBeSpecialSummoned|IsAbleToHand|IsAbleToRemove|IsAbleToRemoveAsCost|IsDiscardable|IsDestructible|IsReleasable|IsMonster|IsSetCard|IsPlayerCanDraw)\b/g, '<span class="lua-fn">$1</span>')
    .replace(/\b(EFFECT_TYPE_\w+|EVENT_\w+|LOCATION_\w+|CATEGORY_\w+|REASON_\w+|POS_\w+|EFFECT_COUNT_CODE_\w+|HINT_\w+|HINTMSG_\w+|CHAININFO_\w+|EFFECT_\w+|RESET_\w+|RESETS_\w+|TOKEN_\w+)\b/g, '<span class="lua-const">$1</span>')
    .replace(/\b(\d+|0x[0-9a-fA-F]+)\b/g, '<span class="lua-num">$1</span>');
}

/* ================= RENDER ================= */
function render(){
  // conditional stat fields based on monster main type
  if(cardType==='MONSTER'){
    const main = document.getElementById('m-main').value;
    document.getElementById('m-rank-field').style.display = main==='XYZ' ? 'flex' : 'none';
    document.getElementById('m-level-field').style.display = (main==='XYZ'||main==='LINK') ? 'none' : 'flex';
    document.getElementById('m-link-field').style.display = main==='LINK' ? 'flex' : 'none';
    document.getElementById('m-linkmarkers-field').style.display = main==='LINK' ? 'block' : 'none';
    document.getElementById('m-def-field').style.display = main==='LINK' ? 'none' : 'flex';
    document.getElementById('m-scale-field').style.display = document.getElementById('flag-pendulum').checked ? 'flex' : 'none';
  }

  // setcode pills
  const pillWrap = document.getElementById('setcode-pills');
  pillWrap.innerHTML = setcodes.length ? setcodes.map(s=>`<span class="pill checked">${s.n} <span style="opacity:.6">${s.h}</span> <span onclick="removeSetcode('${s.h}')" style="cursor:pointer;margin-left:4px">✕</span></span>`).join('') : '<span class="hint">—</span>';
  document.getElementById('setcode-hint').innerText = setcodes.length ? setcodes.length+' archétype(s)' : 'Aucun';

  // filename
  const cardId = document.getElementById('card-id').value;
  document.getElementById('code-file-label').innerText = cardId ? `c${cardId}.lua` : 'c.lua';

  // type bitmask
  const bm = computeTypeBitmask();
  document.getElementById('type-bitmask').innerText = bm;
  document.getElementById('type-bitmask-sub').innerText = bm.split('+')[0];

  const code = generateScript();
  document.getElementById('lua-output').innerHTML = highlightLua(code);
  window.generatedRawLua = code;
}

/* ================= ACTIONS ================= */
function copyCode(){
  if(!window.generatedRawLua) return;
  navigator.clipboard.writeText(window.generatedRawLua).then(()=>{
    const t = document.getElementById('copy-text');
    t.innerText = 'Copié !';
    setTimeout(()=>{ t.innerText='Copier'; }, 1800);
  });
}
function exportLuaFile(){
  const cardId = document.getElementById('card-id').value;
  const filename = cardId ? `c${cardId}.lua` : 'script.lua';
  const blob = new Blob([window.generatedRawLua||''], {type:'text/plain;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}


function buildReference(){
  const grid = document.getElementById('ref-grid');
  grid.innerHTML = REF_SECTIONS.map((sec, i)=>`
    <div class="ref-card" data-sec="${i}">
      <h3>${sec.title}</h3>
      <div class="ref-list">
        ${sec.rows.map(([k,v])=>`<div class="ref-row" data-k="${k.toLowerCase()}"><span class="k">${k}</span><span class="v">${v}</span></div>`).join('')}
      </div>
    </div>
  `).join('');
}
function filterRef(q){
  q = q.trim().toLowerCase();
  document.querySelectorAll('.ref-card').forEach(card=>{
    let anyVisible = false;
    card.querySelectorAll('.ref-row').forEach(row=>{
      const match = !q || row.dataset.k.includes(q) || row.innerText.toLowerCase().includes(q);
      row.style.display = match ? 'flex' : 'none';
      if(match) anyVisible = true;
    });
    card.style.display = anyVisible ? 'flex' : 'none';
  });
}
