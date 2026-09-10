// ==========================================================================
// EDOPro Script Studio — Base de données et constantes Yu-Gi-Oh! / EDOPro
// Ce fichier doit être chargé AVANT app.js (ou script.js).
// ==========================================================================

window.YGO_DATA = {
  constants: {
    // --- Bâtisseurs d'Archétypes (SET_ARCH) ---
    SET_ARCH: [
      { const: "SET_HERO", hex: "0x8", label: "HÉROS (HERO)" },
      { const: "SET_ELEMENTAL_HERO", hex: "0x3008", label: "HÉROS Élémentaire" },
      { const: "SET_DESTINY_HERO", hex: "0xc008", label: "HÉROS du Destin" },
      { const: "SET_DARK_HERO", hex: "0x6008", label: "HÉROS Malveillant" },
      { const: "SET_BLUE_EYES", hex: "0xdd", label: "Yeux Bleus (Blue-Eyes)" },
      { const: "SET_RED_EYES", hex: "0x3b", label: "Yeux Rouges (Red-Eyes)" },
      { const: "SET_DARK_MAGICIAN", hex: "0xa0", label: "Magicien Sombre" },
      { const: "SET_CYBER_DRAGON", hex: "0x93", label: "Cyber Dragon" },
      { const: "SET_ALBAZ", hex: "0x17d", label: "Albaz" },
      { const: "SET_DESPIA", hex: "0x168", label: "Despia" },
      { const: "SET_KASH TIRA", hex: "0x189", label: "Kashtira" },
      { const: "SET_TEARLAMENTS", hex: "0x185", label: "Tearlaments" },
      { const: "SET_SNAKE_EYE", hex: "0x1a2", label: "Snake-Eye" },
      { const: "SET_PURRELY", hex: "0x18c", label: "Purrely" },
      { const: "SET_LABRYNTH", hex: "0x17e", label: "Labrynth" }
    ],

    // --- Références de cartes emblématiques (CARD_REF) ---
    CARD_REF: [
      { const: "CARD_DARK_MAGICIAN", id: "46986414", label: "Magicien Sombre" },
      { const: "CARD_BLUE_EYES", id: "89631139", label: "Dragon Blanc aux Yeux Bleus" },
      { const: "CARD_POLYMERIZATION", id: "24094653", label: "Polymérisation" },
      { const: "CARD_STARDUST_DRAGON", id: "44508094", label: "Dragon Poussière d'Étoile" },
      { const: "CARD_NEOS", id: "89943723", label: "HÉROS Élémentaire Neos" },
      { const: "CARD_VISAS_STARFROST", id: "56099748", label: "Visas Starfrost" }
    ],

    // --- Types d'effet (EFFECT_TYPE) ---
    EFFECT_TYPE: [
      { const: "EFFECT_TYPE_SINGLE", label: "Single (S'applique à cette carte uniquement)" },
      { const: "EFFECT_TYPE_FIELD", label: "Field (S'applique au terrain / plusieurs cartes)" },
      { const: "EFFECT_TYPE_EQUIP", label: "Equip (Lié à une carte équipée)" },
      { const: "EFFECT_TYPE_ACTIONS", label: "Actions (Déclenché par une action)" },
      { const: "EFFECT_TYPE_ACTIVATE", label: "Activate (Activation Magie/Piège)" },
      { const: "EFFECT_TYPE_FLIP", label: "Flip (Effet Flip)" },
      { const: "EFFECT_TYPE_IGNITION", label: "Ignition (Effet d'action pendant la Main Phase)" },
      { const: "EFFECT_TYPE_TRIGGER_O", label: "Trigger Optionnel (Effet déclencheur optionnel)" },
      { const: "EFFECT_TYPE_TRIGGER_F", label: "Trigger Obligatoire (Effet déclencheur forcé)" },
      { const: "EFFECT_TYPE_QUICK_O", label: "Quick Optionnel (Effet rapide optionnel)" },
      { const: "EFFECT_TYPE_QUICK_F", label: "Quick Obligatoire (Effet rapide forcé)" },
      { const: "EFFECT_TYPE_CONTINUOUS", label: "Continuous (Effet continu)" },
      { const: "EFFECT_TYPE_XMATERIAL", label: "Xyz Material (Effet accordé comme matériel)" }
    ],

    // --- Événements (EVENT) ---
    EVENT: [
      { const: "EVENT_FREE_CHAIN", label: "Free Chain (N'importe quand durant une fenêtre d'action)" },
      { const: "EVENT_SUMMON_SUCCESS", label: "Invoc. Normale réussie" },
      { const: "EVENT_SPSUMMON_SUCCESS", label: "Invoc. Spéciale réussie" },
      { const: "EVENT_FLIP_SUMMON_SUCCESS", label: "Invoc. Flip réussie" },
      { const: "EVENT_SPOUMMON", label: "Invoc. en général réussie" },
      { const: "EVENT_DESTROYED", label: "Carte détruite" },
      { const: "EVENT_TO_GRAVE", label: "Envoyé au cimetière" },
      { const: "EVENT_REMOVE", label: "Banni" },
      { const: "EVENT_TO_HAND", label: "Ajouté à la main" },
      { const: "EVENT_BATTLE_DESTROYING", label: "Détruit un monstre au combat" },
      { const: "EVENT_ATTACK_ANNOUNCE", label: "Déclaration d'attaque" },
      { const: "EVENT_CHAIN_SOLVING", label: "Résolution de chaîne" },
      { const: "EVENT_PHASE+PHASE_DRAW", label: "Draw Phase" },
      { const: "EVENT_PHASE+PHASE_STANDBY", label: "Standby Phase" },
      { const: "EVENT_PHASE+PHASE_END", label: "End Phase" }
    ],

    // --- Zones du jeu (LOCATION) ---
    LOCATION: [
      { const: "LOCATION_DECK", label: "Main Deck" },
      { const: "LOCATION_HAND", label: "Main" },
      { const: "LOCATION_MZONE", label: "Zone Monstre" },
      { const: "LOCATION_SZONE", label: "Zone Magie/Piège" },
      { const: "LOCATION_GRAVE", label: "Cimetière" },
      { const: "LOCATION_REMOVED", label: "Zone Bannie" },
      { const: "LOCATION_EXTRA", label: "Extra Deck" },
      { const: "LOCATION_OVERLAY", label: "Matériels Xyz" },
      { const: "LOCATION_FZONE", label: "Zone Terrain" },
      { const: "LOCATION_PZONE", label: "Zone Pendule" }
    ],

    // --- Catégories d'effet (CATEGORY) ---
    CATEGORY: [
      { const: "CATEGORY_DESTROY", label: "Destruction" },
      { const: "CATEGORY_RELEASE", label: "Tribut / Sacrifice" },
      { const: "CATEGORY_REMOVE", label: "Bannissement" },
      { const: "CATEGORY_TOHAND", label: "Ajouter / Renvoyer en main" },
      { const: "CATEGORY_TODECK", label: "Renvoyer au Deck" },
      { const: "CATEGORY_TOGRAVE", label: "Envoyer au Cimetière" },
      { const: "CATEGORY_SPECIAL_SUMMON", label: "Invocation Spéciale" },
      { const: "CATEGORY_TOKEN", label: "Invoquer un Jeton" },
      { const: "CATEGORY_DRAW", label: "Pioche" },
      { const: "CATEGORY_SEARCH", label: "Recherche dans le Deck (Search)" },
      { const: "CATEGORY_EQUIP", label: "Équipement" },
      { const: "CATEGORY_DAMAGE", label: "Dommages aux LP" },
      { const: "CATEGORY_RECOVER", label: "Gagner des LP" },
      { const: "CATEGORY_ATKCHANGE", label: "Modification d'ATK" },
      { const: "CATEGORY_DEFCHANGE", label: "Modification de DEF" },
      { const: "CATEGORY_COUNTER", label: "Compteurs" },
      { const: "CATEGORY_NEGATE", label: "Annuler une activation" },
      { const: "CATEGORY_DISABLE", label: "Annuler des effets" }
    ],

    // --- Drapeaux / Propriétés (EFFECT_FLAG) ---
    EFFECT_FLAG: [
      { const: "EFFECT_FLAG_CARD_TARGET", label: "Cible au moins 1 carte (Target)" },
      { const: "EFFECT_FLAG_PLAYER_TARGET", label: "Cible un joueur" },
      { const: "EFFECT_FLAG_DELAY", label: "Rattrape la fenêtre de déclenchement (Can't miss timing)" },
      { const: "EFFECT_FLAG_DAMAGE_STEP", label: "Utilisable en Damage Step" },
      { const: "EFFECT_FLAG_DAMAGE_CAL", label: "Utilisable lors du calcul des dommages" },
      { const: "EFFECT_FLAG_CANNOT_DISABLE", label: "Ne peut pas être annulé" },
      { const: "EFFECT_FLAG_CANNOT_INACTIVATE", label: "Activation inannulable" },
      { const: "EFFECT_FLAG_CLIENT_HINT", label: "Affiche une bulle d'aide sur le client" },
      { const: "EFFECT_FLAG_SET_AVAILABLE", label: "Activable si posé face cachée" }
    ],

    // --- Timings / Fenêtres de réponse (TIMING) ---
    TIMING: [
      { const: "TIMING_DRAW_PHASE", label: "Draw Phase" },
      { const: "TIMING_STANDBY_PHASE", label: "Standby Phase" },
      { const: "TIMING_MAIN_END", label: "Fin de la Main Phase" },
      { const: "TIMING_BATTLE_START", label: "Début de la Battle Phase" },
      { const: "TIMING_BATTLE_END", label: "Fin de la Battle Phase" },
      { const: "TIMING_END_PHASE", label: "End Phase" },
      { const: "TIMING_SUMMON", label: "Lors d'une Invocation" },
      { const: "TIMING_SPSUMMON", label: "Lors d'une Invocation Spéciale" }
    ],

    // --- Codes de comptage / OPT (EFFECT_COUNT_CODE) ---
    EFFECT_COUNT_CODE: [
      { const: "EFFECT_COUNT_CODE_OATH", label: "Serment (OATH) — Pas de réactivation si annulé" },
      { const: "EFFECT_COUNT_CODE_DUEL", label: "Une fois par Duel" },
      { const: "EFFECT_COUNT_CODE_CHAIN", label: "Une fois par Chaîne" }
    ],

    // --- Phases (PHASE) ---
    PHASE: [
      { const: "PHASE_DRAW", label: "Draw Phase" },
      { const: "PHASE_STANDBY", label: "Standby Phase" },
      { const: "PHASE_MAIN1", label: "Main Phase 1" },
      { const: "PHASE_BATTLE_START", label: "Battle Phase (Start)" },
      { const: "PHASE_BATTLE", label: "Battle Phase" },
      { const: "PHASE_MAIN2", label: "Main Phase 2" },
      { const: "PHASE_END", label: "End Phase" }
    ],

    // --- Messages d'indication client (HINTMSG) ---
    HINTMSG: [
      { const: "HINTMSG_SPSUMMON", label: "Sélectionner la carte à Invoquer Spécialement" },
      { const: "HINTMSG_ATOHAND", label: "Sélectionner la carte à ajouter à la main" },
      { const: "HINTMSG_DESTROY", label: "Sélectionner la carte à détruire" },
      { const: "HINTMSG_REMOVE", label: "Sélectionner la carte à bannir" },
      { const: "HINTMSG_TOGRAVE", label: "Sélectionner la carte à envoyer au cimetière" },
      { const: "HINTMSG_DISCARD", label: "Sélectionner la carte à défausser" },
      { const: "HINTMSG_TARGET", label: "Sélectionner la cible" },
      { const: "HINTMSG_FACEUP", label: "Sélectionner une carte face recto" }
    ],

    // --- Raisons de modification/destruction (REASON) ---
    REASON: [
      { const: "REASON_EFFECT", label: "Par un effet de carte" },
      { const: "REASON_COST", label: "Payé comme coût d'activation" },
      { const: "REASON_BATTLE", label: "Détruit au combat" },
      { const: "REASON_DISCARD", label: "Défaussé" },
      { const: "REASON_RELEASE", label: "Sacrifié (Tribute)" },
      { const: "REASON_MATERIAL", label: "Utilisé comme matériel" }
    ]
  }
};
