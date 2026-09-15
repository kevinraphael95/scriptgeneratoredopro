/* ================= DATA ================= */
const ARCHETYPES = [{"n": "Ally of Justice", "h": "0x1"}, {"n": "Genex", "h": "0x2"}, {"n": "R-Genex", "h": "0x1002"}, {"n": "Genex Ally", "h": "0x2002"}, {"n": "Horus", "h": "0x3"}, {"n": "Horus the Black Flame Dragon", "h": "0x1003"}, {"n": "Amazoness", "h": "0x4"}, {"n": "Arcana Force", "h": "0x5"}, {"n": "Dark World", "h": "0x6"}, {"n": "Ancient Gear", "h": "0x7"}, {"n": "HERO", "h": "0x8"}, {"n": "Elemental HERO", "h": "0x3008"}, {"n": "Vision HERO", "h": "0x5008"}, {"n": "Evil HERO", "h": "0x6008"}, {"n": "Masked HERO", "h": "0xa008"}, {"n": "Destiny HERO", "h": "0xc008"}, {"n": "Neos", "h": "0x9"}, {"n": "lswarm", "h": "0xa"}, {"n": "Steelswarm", "h": "0x100a"}, {"n": "Infernity", "h": "0xb"}, {"n": "Alien", "h": "0xc"}, {"n": "Saber", "h": "0xd"}, {"n": "X-Saber", "h": "0x100d"}, {"n": "XX-Saber", "h": "0x300d"}, {"n": "Elementsaber", "h": "0x400d"}, {"n": "Watt", "h": "0xe"}, {"n": "Ojama", "h": "0xf"}, {"n": "Gusto", "h": "0x10"}, {"n": "Karakuri", "h": "0x11"}, {"n": "Frog", "h": "0x12"}, {"n": "Meklord", "h": "0x13"}, {"n": "Meklord Emperor", "h": "0x3013"}, {"n": "Meklord Army", "h": "0x6013"}, {"n": "Meklord Astro", "h": "0x9013"}, {"n": "Allure Queen", "h": "0x14"}, {"n": "B.E.S.", "h": "0x15"}, {"n": "roid", "h": "0x16"}, {"n": "Vehicroid", "h": "0x1016"}, {"n": "Speedroid", "h": "0x2016"}, {"n": "Synchro", "h": "0x17"}, {"n": "Synchron", "h": "0x1017"}, {"n": "Synchro Dragon", "h": "0x2017"}, {"n": "Cloudian", "h": "0x18"}, {"n": "Gladiator", "h": "0x19"}, {"n": "Gladiator Beast", "h": "0x1019"}, {"n": "Dark Scorpion", "h": "0x1a"}, {"n": "Phantom Beast", "h": "0x1b"}, {"n": "Mecha Phantom Beast", "h": "0x101b"}, {"n": "Spirit Message", "h": "0x1c"}, {"n": "Koa'ki Meiru", "h": "0x1d"}, {"n": "Chrysalis", "h": "0x1e"}, {"n": "Neo-Spacian", "h": "0x1f"}, {"n": "Shien", "h": "0x20"}, {"n": "Earthbound", "h": "0x21"}, {"n": "Earthbound Immortal", "h": "0x1021"}, {"n": "Earthbound Servant", "h": "0x2021"}, {"n": "Jurrac", "h": "0x22"}, {"n": "Malefic", "h": "0x23"}, {"n": "Scrap", "h": "0x24"}, {"n": "Iron Chain", "h": "0x25"}, {"n": "Morphtronic", "h": "0x26"}, {"n": "T.G.", "h": "0x27"}, {"n": "Batteryman", "h": "0x28"}, {"n": "Dragunity", "h": "0x29"}, {"n": "Naturia", "h": "0x2a"}, {"n": "Ninja", "h": "0x2b"}, {"n": "Armor Ninja", "h": "0x102b"}, {"n": "Flamvell", "h": "0x2c"}, {"n": "Nitro", "h": "0x2d"}, {"n": "Gravekeeper's", "h": "0x2e"}, {"n": "Ice Barrier", "h": "0x2f"}, {"n": "Vylon", "h": "0x30"}, {"n": "Fortune Lady", "h": "0x31"}, {"n": "Volcanic", "h": "0x32"}, {"n": "Blackwing", "h": "0x33"}, {"n": "Assault Blackwing", "h": "0x1033"}, {"n": "Crystal", "h": "0x34"}, {"n": "Crystal Beast", "h": "0x1034"}, {"n": "Ultimate Crystal", "h": "0x2034"}, {"n": "Fabled", "h": "0x35"}, {"n": "Machina", "h": "0x36"}, {"n": "Mist Valley", "h": "0x37"}, {"n": "Lightsworn", "h": "0x38"}, {"n": "Laval", "h": "0x39"}, {"n": "Gishki", "h": "0x3a"}, {"n": "Red-Eyes", "h": "0x3b"}, {"n": "Reptilianne", "h": "0x3c"}, {"n": "Six Samurai", "h": "0x3d"}, {"n": "Secret Six Samurai", "h": "0x103d"}, {"n": "Worm", "h": "0x3e"}, {"n": "Majestic", "h": "0x3f"}, {"n": "Forbidden One", "h": "0x40"}, {"n": "LV", "h": "0x41"}, {"n": "Nordic", "h": "0x42"}, {"n": "Nordic Ascendant", "h": "0x3042"}, {"n": "Nordic Beast", "h": "0x6042"}, {"n": "Nordic Alfar", "h": "0xa042"}, {"n": "Nordic Relic", "h": "0x5042"}, {"n": "Junk", "h": "0x43"}, {"n": "The Agent", "h": "0x44"}, {"n": "Archfiend", "h": "0x45"}, {"n": "Red Dragon Archfiend", "h": "0x1045"}, {"n": "Polymerization|Fusion", "h": "0x46"}, {"n": "Fusion Dragon", "h": "0x1046"}, {"n": "Gem-", "h": "0x47"}, {"n": "Gem-Knight", "h": "0x1047"}, {"n": "Number", "h": "0x48"}, {"n": "Number C", "h": "0x1048"}, {"n": "Number C39", "h": "0x5048"}, {"n": "Skyblaster", "h": "0x49"}, {"n": "Timelord", "h": "0x4a"}, {"n": "Aesir", "h": "0x4b"}, {"n": "Trap Hole", "h": "0x4c"}, {"n": "Beast's Battle", "h": "0x4d"}, {"n": "Evol", "h": "0x4e"}, {"n": "Evoltile", "h": "0x304e"}, {"n": "Evolsaur", "h": "0x604e"}, {"n": "Evolzar", "h": "0x504e"}, {"n": "Dark Lucius", "h": "0x4f"}, {"n": "/Assault Mode", "h": "0x104f"}, {"n": "Venom", "h": "0x50"}, {"n": "Starving Venom", "h": "0x1050"}, {"n": "Gadget", "h": "0x51"}, {"n": "Guardian", "h": "0x52"}, {"n": "Gate Guardian", "h": "0x1052"}, {"n": "Skull Guardian", "h": "0x2052"}, {"n": "Constellar", "h": "0x53"}, {"n": "Gagaga", "h": "0x54"}, {"n": "Photon", "h": "0x55"}, {"n": "Inzektor", "h": "0x56"}, {"n": "Resonator", "h": "0x57"}, {"n": "Wind-Up", "h": "0x58"}, {"n": "Gogogo", "h": "0x59"}, {"n": "Penguin", "h": "0x5a"}, {"n": "Inmato", "h": "0x5b"}, {"n": "Sphinx", "h": "0x5c"}, {"n": "Ultimate Insect", "h": "0x5d"}, {"n": "Dark Mimic", "h": "0x5e"}, {"n": "Mystic Swordsman", "h": "0x5f"}, {"n": "Bamboo Sword", "h": "0x60"}, {"n": "Ninjitsu Art", "h": "0x61"}, {"n": "Toon", "h": "0x62"}, {"n": "Reactor", "h": "0x63"}, {"n": "Harpie", "h": "0x64"}, {"n": "Infestation", "h": "0x65"}, {"n": "Warrior", "h": "0x66"}, {"n": "Symphonic Warrior", "h": "0x1066"}, {"n": "Magnet Warrior", "h": "0x2066"}, {"n": "Koala", "h": "0x67"}, {"n": "Kangaroo", "h": "0x68"}, {"n": "Hieratic", "h": "0x69"}, {"n": "Butterspy", "h": "0x6a"}, {"n": "Bounzer", "h": "0x6b"}, {"n": "Helios", "h": "0x6c"}, {"n": "Djinn", "h": "0x6d"}, {"n": "Djinn of Rituals", "h": "0x106d"}, {"n": "Prophecy", "h": "0x6e"}, {"n": "Spellbook", "h": "0x106e"}, {"n": "Heroic", "h": "0x6f"}, {"n": "Heroic Challenger", "h": "0x106f"}, {"n": "Heroic Champion", "h": "0x206f"}, {"n": "Chronomaly", "h": "0x70"}, {"n": "Madolche", "h": "0x71"}, {"n": "Geargia", "h": "0x72"}, {"n": "Geargiano", "h": "0x1072"}, {"n": "Xyz", "h": "0x73"}, {"n": "CXyz", "h": "0x1073"}, {"n": "Xyz Dragon", "h": "0x2073"}, {"n": "Armored Xyz", "h": "0x4073"}, {"n": "Mermail", "h": "0x74"}, {"n": "Abyss-", "h": "0x75"}, {"n": "Heraldic Beast", "h": "0x76"}, {"n": "Atlantean", "h": "0x77"}, {"n": "Nimble", "h": "0x78"}, {"n": "Fire Fist", "h": "0x79"}, {"n": "Noble", "h": "0x7a"}, {"n": "Noble Knight", "h": "0x107a"}, {"n": "Noble Arms", "h": "0x207a"}, {"n": "Infernoble", "h": "0x407a"}, {"n": "Infernoble Knight", "h": "0x507a"}, {"n": "Infernoble Arms", "h": "0x607a"}, {"n": "Galaxy", "h": "0x7b"}, {"n": "Galaxy-Eyes", "h": "0x107b"}, {"n": "Galaxy-Eyes Tachyon Dragon", "h": "0x307b"}, {"n": "Fire Formation", "h": "0x7c"}, {"n": "Hazy", "h": "0x7d"}, {"n": "Hazy Flame", "h": "0x107d"}, {"n": "Zexal", "h": "0x7e"}, {"n": "ZW -", "h": "0x107e"}, {"n": "ZS -", "h": "0x207e"}, {"n": "Utopic", "h": "0x7f"}, {"n": "Utopia", "h": "0x107f"}, {"n": "Utopic Future", "h": "0x207f"}, {"n": "Duston", "h": "0x80"}, {"n": "Fire King", "h": "0x81"}, {"n": "Fire King Avatar", "h": "0x1081"}, {"n": "Dododo", "h": "0x82"}, {"n": "Puppet", "h": "0x83"}, {"n": "Gimmick Puppet", "h": "0x1083"}, {"n": "Battlin' Boxer", "h": "0x84"}, {"n": "Super Defense Robot", "h": "0x85"}, {"n": "Star Seraph", "h": "0x86"}, {"n": "Umbral Horror", "h": "0x87"}, {"n": "Bujin", "h": "0x88"}, {"n": "Hole", "h": "0x89"}, {"n": "Envy", "h": "0x8a"}, {"n": "Traptrix", "h": "0x108a"}, {"n": "Malicevorous", "h": "0x8b"}, {"n": "Druid", "h": "0x8c"}, {"n": "Ghostrick", "h": "0x8d"}, {"n": "Vampire", "h": "0x8e"}, {"n": "Zubaba", "h": "0x8f"}, {"n": "Sylvan", "h": "0x90"}, {"n": "Necrovalley", "h": "0x91"}, {"n": "Heraldry", "h": "0x92"}, {"n": "Cyber", "h": "0x93"}, {"n": "Cyber Dragon", "h": "0x1093"}, {"n": "Cyber Angel", "h": "0x2093"}, {"n": "Cyberdark", "h": "0x4093"}, {"n": "Cybernetic", "h": "0x94"}, {"n": "Rank-Up-Magic", "h": "0x95"}, {"n": "Fishborg", "h": "0x96"}, {"n": "Artifact", "h": "0x97"}, {"n": "Magician", "h": "0x98"}, {"n": "Odd-Eyes", "h": "0x99"}, {"n": "Superheavy Samurai", "h": "0x9a"}, {"n": "Superheavy Samurai Soul", "h": "0x109a"}, {"n": "Melodious", "h": "0x9b"}, {"n": "Melodious Maestra", "h": "0x109b"}, {"n": "tellarknight", "h": "0x9c"}, {"n": "Stellarknight", "h": "0x109c"}, {"n": "Shaddoll", "h": "0x9d"}, {"n": "Yang Zing", "h": "0x9e"}, {"n": "Performapal", "h": "0x9f"}, {"n": "Legendary Knight", "h": "0xa0"}, {"n": "Legendary Dragon", "h": "0xa1"}, {"n": "Magician", "h": "0xa2"}, {"n": "Dark Magician", "h": "0x10a2"}, {"n": "Magician Girl", "h": "0x20a2"}, {"n": "Dark Magician Girl", "h": "0x30a2"}, {"n": "Stardust", "h": "0xa3"}, {"n": "Kuriboh", "h": "0xa4"}, {"n": "Winged Kuriboh", "h": "0x10a4"}, {"n": "Change", "h": "0xa5"}, {"n": "sprout", "h": "0xa6"}, {"n": "Artorigus", "h": "0xa7"}, {"n": "Laundsallyn", "h": "0xa8"}, {"n": "Fluffal", "h": "0xa9"}, {"n": "Qli", "h": "0xaa"}, {"n": "Apoqliphort", "h": "0x10aa"}, {"n": "Deskbot", "h": "0xab"}, {"n": "Goblin", "h": "0xac"}, {"n": "Goblin Biker", "h": "0x10ac"}, {"n": "Frightfur", "h": "0xad"}, {"n": "Dark Contract", "h": "0xae"}, {"n": "D/D", "h": "0xaf"}, {"n": "D/D/D", "h": "0x10af"}, {"n": "Gottoms", "h": "0xb0"}, {"n": "Burning Abyss", "h": "0xb1"}, {"n": "U.A.", "h": "0xb2"}, {"n": "Yosenju", "h": "0xb3"}, {"n": "Nekroz", "h": "0xb4"}, {"n": "Ritual Beast", "h": "0xb5"}, {"n": "Ritual Beast Tamer", "h": "0x10b5"}, {"n": "Spiritual Beast", "h": "0x20b5"}, {"n": "Spiritual Beast Tamer", "h": "0x30b5"}, {"n": "Ritual Beast Ulti-", "h": "0x40b5"}, {"n": "Entity", "h": "0xb7"}, {"n": "Outer Entity", "h": "0x10b7"}, {"n": "Elder Entity", "h": "0x20b7"}, {"n": "Old Entity", "h": "0x40b7"}, {"n": "Blaze Accelerator", "h": "0xb9"}, {"n": "Raidraptor", "h": "0xba"}, {"n": "Infernoid", "h": "0xbb"}, {"n": "Jinzo", "h": "0xbc"}, {"n": "Gaia The Fierce Knight", "h": "0xbd"}, {"n": "Monarch", "h": "0xbe"}, {"n": "Charmer", "h": "0xbf"}, {"n": "Possessed", "h": "0xc0"}, {"n": "Familiar-Possessed", "h": "0x10c0"}, {"n": "PSY-Frame", "h": "0xc1"}, {"n": "PSY-Framegear", "h": "0x10c1"}, {"n": "Power Tool", "h": "0xc2"}, {"n": "Edge Imp", "h": "0xc3"}, {"n": "Zefra", "h": "0xc4"}, {"n": "Void", "h": "0xc5"}, {"n": "Performage", "h": "0xc6"}, {"n": "Dracoslayer", "h": "0xc7"}, {"n": "Igknight", "h": "0xc8"}, {"n": "Aroma", "h": "0xc9"}, {"n": "Empowered Warrior", "h": "0xca"}, {"n": "Aether", "h": "0xcb"}, {"n": "Prediction Princess", "h": "0xcc"}, {"n": "Aqua", "h": "0xcd"}, {"n": "Aquaactress", "h": "0x10cd"}, {"n": "Aquarium", "h": "0x20cd"}, {"n": "Chaos", "h": "0xcf"}, {"n": "Black Luster Soldier", "h": "0x10cf"}, {"n": "Majespecter", "h": "0xd0"}, {"n": "Graydle", "h": "0xd1"}, {"n": "Kozmo", "h": "0xd2"}, {"n": "Kaiju", "h": "0xd3"}, {"n": "Paleozoic", "h": "0xd4"}, {"n": "Dante", "h": "0xd5"}, {"n": "Destruction Sword", "h": "0xd6"}, {"n": "Buster Blader", "h": "0xd7"}, {"n": "Dinomist", "h": "0xd8"}, {"n": "Shiranui", "h": "0xd9"}, {"n": "Shiranui Spectralsword", "h": "0x10d9"}, {"n": "Dracoverlord", "h": "0xda"}, {"n": "Phantom Knights", "h": "0xdb"}, {"n": "The Phantom Knights", "h": "0x10db"}, {"n": "Super Quant", "h": "0xdc"}, {"n": "Super Quantum", "h": "0x10dc"}, {"n": "Super Quantal Mech Beast", "h": "0x20dc"}, {"n": "Blue-Eyes", "h": "0xdd"}, {"n": "Exodia", "h": "0xde"}, {"n": "Lunalight", "h": "0xdf"}, {"n": "Amorphage", "h": "0xe0"}, {"n": "Metalfoes", "h": "0xe1"}, {"n": "Triamid", "h": "0xe2"}, {"n": "Cubic", "h": "0xe3"}, {"n": "Celtic Guard", "h": "0xe4"}, {"n": "Cipher", "h": "0xe5"}, {"n": "Cipher Dragon", "h": "0x10e5"}, {"n": "Flower Cardian", "h": "0xe6"}, {"n": "Silent Swordsman", "h": "0xe7"}, {"n": "Silent Magician", "h": "0xe8"}, {"n": "Magna Warrior", "h": "0xe9"}, {"n": "Crystron", "h": "0xea"}, {"n": "Chemicritter", "h": "0xeb"}, {"n": "Abyss", "h": "0xec"}, {"n": "Abyss Actor", "h": "0x10ec"}, {"n": "Abyss Script", "h": "0x20ec"}, {"n": "Subterror", "h": "0xed"}, {"n": "Subterror Behemoth", "h": "0x10ed"}, {"n": "SPYRAL", "h": "0xee"}, {"n": "SPYRAL GEAR", "h": "0x10ee"}, {"n": "SPYRAL MISSION", "h": "0x20ee"}, {"n": "Darklord", "h": "0xef"}, {"n": "Windwitch", "h": "0xf0"}, {"n": "Zoodiac", "h": "0xf1"}, {"n": "Pendulum", "h": "0xf2"}, {"n": "Pendulum Dragon", "h": "0x10f2"}, {"n": "Pendulumgraph", "h": "0x20f2"}, {"n": "Predap", "h": "0xf3"}, {"n": "Predaplant", "h": "0x10f3"}, {"n": "Invoked", "h": "0xf4"}, {"n": "Gandora", "h": "0xf5"}, {"n": "Skyscraper", "h": "0xf6"}, {"n": "Lyrilusc", "h": "0xf7"}, {"n": "Supreme King", "h": "0xf8"}, {"n": "Supreme King Gate", "h": "0x10f8"}, {"n": "Supreme King Dragon", "h": "0x20f8"}, {"n": "True Draco|True King", "h": "0xf9"}, {"n": "Phantasm Spiral", "h": "0xfa"}, {"n": "Gouki", "h": "0xfc"}, {"n": "Trickstar", "h": "0xfb"}, {"n": "World Chalice", "h": "0xfd"}, {"n": "World Legacy", "h": "0xfe"}, {"n": "Clear Wing", "h": "0xff"}, {"n": "Bonding -", "h": "0x100"}, {"n": "Code Talker", "h": "0x101"}, {"n": "Rokket", "h": "0x102"}, {"n": "Altergeist", "h": "0x103"}, {"n": "Krawler", "h": "0x104"}, {"n": "Metaphys", "h": "0x105"}, {"n": "Vendread", "h": "0x106"}, {"n": "F.A.", "h": "0x107"}, {"n": "Magical Musket", "h": "0x108"}, {"n": "The Weather", "h": "0x109"}, {"n": "Parshath", "h": "0x10a"}, {"n": "Tindangle", "h": "0x10b"}, {"n": "Mekk-Knight", "h": "0x10c"}, {"n": "Mythical Beast", "h": "0x10d"}, {"n": "Evolution Pill", "h": "0x10e"}, {"n": "Borrel", "h": "0x10f"}, {"n": "Relinquished", "h": "0x110"}, {"n": "Eyes Restrict", "h": "0x1110"}, {"n": "Armed Dragon", "h": "0x111"}, {"n": "Knightmare", "h": "0x112"}, {"n": "Elemental Lord", "h": "0x113"}, {"n": "Fur Hire", "h": "0x114"}, {"n": "Sky Striker", "h": "0x115"}, {"n": "Sky Striker Ace", "h": "0x1115"}, {"n": "Crusadia", "h": "0x116"}, {"n": "Impcantation", "h": "0x117"}, {"n": "Cynet", "h": "0x118"}, {"n": "Salamangreat", "h": "0x119"}, {"n": "Dinowrestler", "h": "0x11a"}, {"n": "Orcust", "h": "0x11b"}, {"n": "Thunder Dragon", "h": "0x11c"}, {"n": "Forbidden", "h": "0x11d"}, {"n": "Danger!", "h": "0x11e"}, {"n": "Nephthys", "h": "0x11f"}, {"n": "Prank-Kids", "h": "0x120"}, {"n": "Mayakashi", "h": "0x121"}, {"n": "Valkyrie", "h": "0x122"}, {"n": "Rose", "h": "0x123"}, {"n": "Rose Dragon", "h": "0x1123"}, {"n": "Machine Angel", "h": "0x124"}, {"n": "Smile", "h": "0x125"}, {"n": "Time Thief", "h": "0x126"}, {"n": "Infinitrack", "h": "0x127"}, {"n": "Witchcrafter", "h": "0x128"}, {"n": "Evil Eye", "h": "0x129"}, {"n": "Endymion", "h": "0x12a"}, {"n": "Marincess", "h": "0x12b"}, {"n": "Tenyi", "h": "0x12c"}, {"n": "Simorgh", "h": "0x12d"}, {"n": "Fortune Fairy", "h": "0x12e"}, {"n": "Battlewasp", "h": "0x12f"}, {"n": "Unchained", "h": "0x130"}, {"n": "Unchained Soul", "h": "0x1130"}, {"n": "Dream Mirror", "h": "0x131"}, {"n": "Mathmech", "h": "0x132"}, {"n": "Dragonmaid", "h": "0x133"}, {"n": "Generaider", "h": "0x134"}, {"n": "@Ignister", "h": "0x135"}, {"n": "A.I.", "h": "0x136"}, {"n": "Ancient Warriors", "h": "0x137"}, {"n": "Megalith", "h": "0x138"}, {"n": "Onomat", "h": "0x139"}, {"n": "Palladium", "h": "0x13a"}, {"n": "Rebellion", "h": "0x13b"}, {"n": "Codebreaker", "h": "0x13c"}, {"n": "Nemeses", "h": "0x13d"}, {"n": "Barbaros", "h": "0x13e"}, {"n": "Plunder Patroll", "h": "0x13f"}, {"n": "Adamancipator", "h": "0x140"}, {"n": "Rikka", "h": "0x141"}, {"n": "Eldlich", "h": "0x142"}, {"n": "Eldlixir", "h": "0x143"}, {"n": "Golden Land", "h": "0x144"}, {"n": "Phantasm", "h": "0x145"}, {"n": "Dogmatika", "h": "0x146"}, {"n": "Melffy", "h": "0x147"}, {"n": "Potan", "h": "0x148"}, {"n": "Roland", "h": "0x149"}, {"n": "Appliancer", "h": "0x14a"}, {"n": "Numeron", "h": "0x14b"}, {"n": "Numeron Gate", "h": "0x114b"}, {"n": "Fossil", "h": "0x14c"}, {"n": "Spiritual Art", "h": "0x14d"}, {"n": "Spiritual Earth Art", "h": "0x314d"}, {"n": "Spiritual Fire Art", "h": "0x514d"}, {"n": "Spiritual Water Art", "h": "0x614d"}, {"n": "Spiritual Wind Art", "h": "0xa14d"}, {"n": "Dual Avatar", "h": "0x14e"}, {"n": "Tri-Brigade", "h": "0x14f"}, {"n": "Virtual World", "h": "0x150"}, {"n": "Virtual World Gate", "h": "0x1150"}, {"n": "Drytron", "h": "0x151"}, {"n": "Magistus", "h": "0x152"}, {"n": "Ki-sikil", "h": "0x153"}, {"n": "Lil-la", "h": "0x154"}, {"n": "Evil Twin", "h": "0x155"}, {"n": "Live Twin", "h": "0x156"}, {"n": "Sun", "h": "0x157"}, {"n": "Sunavalon", "h": "0x1157"}, {"n": "Sunvine", "h": "0x2157"}, {"n": "Sunseed", "h": "0x4157"}, {"n": "Springans", "h": "0x158"}, {"n": "Myutant", "h": "0x159"}, {"n": "S-Force", "h": "0x15a"}, {"n": "Starry Knight", "h": "0x15b"}, {"n": "Doll Monster", "h": "0x15c"}, {"n": "Rank-Down-Magic", "h": "0x15d"}, {"n": "Amazement", "h": "0x15e"}, {"n": "Attraction", "h": "0x15f"}, {"n": "Branded", "h": "0x160"}, {"n": "War Rock", "h": "0x161"}, {"n": "Materiactor", "h": "0x162"}, {"n": "Ogdoadic", "h": "0x163"}, {"n": "Solfachord", "h": "0x164"}, {"n": "GranSolfachord", "h": "0x1164"}, {"n": "Ursarctic", "h": "0x165"}, {"n": "Despia", "h": "0x166"}, {"n": "Magikey", "h": "0x167"}, {"n": "Gunkan", "h": "0x168"}, {"n": "of the Forest", "h": "0x169"}, {"n": "Mystical Beast of the Forest", "h": "0x1169"}, {"n": "Mystical Spirit of the Forest", "h": "0x2169"}, {"n": "Stealth Kragen", "h": "0x16a"}, {"n": "Numerounius", "h": "0x16b"}, {"n": "Number", "h": "0x16c"}, {"n": "Swordsoul", "h": "0x16d"}, {"n": "Icejade", "h": "0x16e"}, {"n": "Floowandereeze", "h": "0x16f"}, {"n": "Topologic", "h": "0x170"}, {"n": "Hyperion", "h": "0x171"}, {"n": "Beetrooper", "h": "0x172"}, {"n": "P.U.N.K.", "h": "0x173"}, {"n": "Exosister", "h": "0x174"}, {"n": "Dinomorphia", "h": "0x175"}, {"n": "Lady of Lament", "h": "0x176"}, {"n": "Seventh", "h": "0x177"}, {"n": "Barian", "h": "0x178"}, {"n": "Barian's", "h": "0x1178"}, {"n": "Battleguard", "h": "0x2178"}, {"n": "Kairyu-Shin", "h": "0x179"}, {"n": "Sea Stealth", "h": "0x17a"}, {"n": "Therion", "h": "0x17b"}, {"n": "Scareclaw", "h": "0x17c"}, {"n": "Libromancer", "h": "0x17d"}, {"n": "Vaylantz", "h": "0x17e"}, {"n": "Labrynth", "h": "0x17f"}, {"n": "Welcome Labrynth", "h": "0x117f"}, {"n": "Runick", "h": "0x180"}, {"n": "Spright", "h": "0x181"}, {"n": "Tearlaments", "h": "0x182"}, {"n": "Vernusylph", "h": "0x183"}, {"n": "Mokey Mokey", "h": "0x184"}, {"n": "Wingman", "h": "0x185"}, {"n": "Doodle", "h": "0x186"}, {"n": "Doodle Beast", "h": "0x1186"}, {"n": "Doodlebook", "h": "0x2186"}, {"n": "G Golem", "h": "0x187"}, {"n": "Rainbow Bridge", "h": "0x188"}, {"n": "Bystial", "h": "0x189"}, {"n": "Kashtira", "h": "0x18a"}, {"n": "Ghoti", "h": "0x18b"}, {"n": "Rescue-ACE", "h": "0x18c"}, {"n": "Purrely", "h": "0x18d"}, {"n": "Mikanko", "h": "0x18e"}, {"n": "Aquamirror", "h": "0x18f"}, {"n": "Firewall", "h": "0x190"}, {"n": "Mannadium", "h": "0x191"}, {"n": "Nemleria", "h": "0x192"}, {"n": "Gold Pride", "h": "0x193"}, {"n": "Labyrinth Wall", "h": "0x194"}, {"n": "Favorite", "h": "0x195"}, {"n": "Vanquish Soul", "h": "0x196"}, {"n": "Nouvelles", "h": "0x197"}, {"n": "Recipe", "h": "0x198"}, {"n": "Visas", "h": "0x199"}, {"n": "Memento", "h": "0x19a"}, {"n": "Centur-Ion", "h": "0x19b"}, {"n": "Vaalmonica", "h": "0x19c"}, {"n": "Yubel", "h": "0x19d"}, {"n": "Voiceless Voice", "h": "0x19e"}, {"n": "White", "h": "0x19f"}, {"n": "White Aura", "h": "0x119f"}, {"n": "Counter", "h": "0x200"}, {"n": "Battlin' Boxing", "h": "0x201"}, {"n": "Veda", "h": "0x202"}, {"n": "Diabell", "h": "0x203"}, {"n": "Diabellstar", "h": "0x1203"}, {"n": "Sinful Spoils", "h": "0x204"}, {"n": "Snake-Eye", "h": "0x205"}, {"n": "Patissciel", "h": "0x206"}, {"n": "Heart", "h": "0x207"}, {"n": "Tistina", "h": "0x208"}, {"n": "Toy", "h": "0x1a0"}, {"n": "Tenpai Dragon", "h": "0x1a1"}, {"n": "Sangen", "h": "0x1a2"}, {"n": "Ragnaraika", "h": "0x1a3"}, {"n": "Salamandra", "h": "0x1a4"}, {"n": "Ashened", "h": "0x1a5"}, {"n": "Millennium", "h": "0x1a6"}, {"n": "Exodd", "h": "0x1a7"}, {"n": "Fiendsmith", "h": "0x1a8"}, {"n": "Blue Tears", "h": "0x1a9"}, {"n": "White Forest", "h": "0x1aa"}, {"n": "Tachyon", "h": "0x1ab"}, {"n": "Mulcharmy", "h": "0x1ac"}, {"n": "Emblema", "h": "0x1ad"}, {"n": "Shark", "h": "0x1ae"}, {"n": "Shark Drake", "h": "0x11ae"}, {"n": "Wedju", "h": "0x1af"}, {"n": "Primite", "h": "0x1b0"}, {"n": "Six Strike", "h": "0x1b1"}, {"n": "Metalmorph", "h": "0x1b2"}, {"n": "Morganite", "h": "0x1b3"}, {"n": "Azamina", "h": "0x1b4"}, {"n": "Mimighoul", "h": "0x1b5"}, {"n": "Ryzeal", "h": "0x1b6"}, {"n": "Schoolwork", "h": "0x1b7"}, {"n": "Ryu-Ge", "h": "0x1b8"}, {"n": "Maliss", "h": "0x1b9"}, {"n": "Argostars", "h": "0x1ba"}, {"n": "Aqua Jet", "h": "0x1bb"}, {"n": "Dragon Ruler", "h": "0x1bc"}, {"n": "Mitsurugi", "h": "0x1bd"}, {"n": "Regenesis", "h": "0x1be"}, {"n": "Dominus", "h": "0x1bf"}, {"n": "Dragontail", "h": "0x1c0"}, {"n": "Yummy", "h": "0x1c1"}, {"n": "Apophis", "h": "0x1c2"}, {"n": "Serket", "h": "0x1c3"}, {"n": "K9", "h": "0x1c4"}, {"n": "Mort-vivant", "h": "0x710"}];

const RACES = ["WARRIOR","SPELLCASTER","FAIRY","FIEND","ZOMBIE","MACHINE","AQUA","PYRO","ROCK","WINGEDBEAST","PLANT","INSECT","THUNDER","DRAGON","BEAST","BEASTWARRIOR","DINOSAUR","FISH","SEASERPENT","REPTILE","PSYCHIC","DIVINE","CREATORGOD","WYRM","CYBERSE","ILLUSION","CYBORG","MAGICALKNIGHT","HIGHDRAGON","OMEGAPSYCHIC","CELESTIALWARRIOR","GALAXY","YOKAI"];
const RACE_LABELS_FR = {WARRIOR:"Guerrier",SPELLCASTER:"Magicien",FAIRY:"Fée",FIEND:"Démon",ZOMBIE:"Zombie",MACHINE:"Machine",AQUA:"Aqua",PYRO:"Pyro",ROCK:"Rocher",WINGEDBEAST:"Bête Ailée",PLANT:"Plante",INSECT:"Insecte",THUNDER:"Tonnerre",DRAGON:"Dragon",BEAST:"Bête",BEASTWARRIOR:"Bête-Guerrière",DINOSAUR:"Dinosaure",FISH:"Poisson",SEASERPENT:"Serpent de Mer",REPTILE:"Reptile",PSYCHIC:"Psychique",DIVINE:"Divin",CREATORGOD:"Dieu Créateur",WYRM:"Wyrm",CYBERSE:"Cyberse",ILLUSION:"Illusion",CYBORG:"Cyborg",MAGICALKNIGHT:"Chevalier Magique",HIGHDRAGON:"Haut-Dragon",OMEGAPSYCHIC:"Oméga Psychique",CELESTIALWARRIOR:"Guerrier Céleste",GALAXY:"Galaxie",YOKAI:"Yokai"};

const ATTRIBUTES = ["EARTH","WATER","FIRE","WIND","LIGHT","DARK","DIVINE"];
const ATTR_LABELS_FR = {EARTH:"Terre",WATER:"Eau",FIRE:"Feu",WIND:"Vent",LIGHT:"Lumière",DARK:"Ténèbres",DIVINE:"Divin"};

const CATEGORIES = [
 ["DESTROY","Détruire"],["RELEASE","Sacrifier"],["REMOVE","Bannir"],["TOHAND","Ajouter à la main"],
 ["TODECK","Renvoyer au Deck"],["TOGRAVE","Envoyer au Cimetière"],["DECKDES","Milling"],["HANDES","Défausse"],
 ["SUMMON","Invocation Normale"],["SPECIAL_SUMMON","Invocation Spéciale"],["TOKEN","Créer un Jeton"],
 ["FLIP","Retourner"],["POSITION","Changer position"],["CONTROL","Prendre le contrôle"],["DISABLE","Neutraliser"],
 ["DISABLE_SUMMON","Empêcher invocation"],["DRAW","Piocher"],["SEARCH","Chercher"],["EQUIP","Équiper"],
 ["DAMAGE","Dégâts"],["RECOVER","Récupérer LP"],["ATKCHANGE","Modif. ATK"],["DEFCHANGE","Modif. DEF"],
 ["COUNTER","Compteurs"],["COIN","Pile ou face"],["DICE","Lancer de dé"],["LEAVE_GRAVE","Quitter le Cimetière"],
 ["LVCHANGE","Modif. Niveau"],["NEGATE","Annuler"],["ANNOUNCE","Déclarer"],["FUSION_SUMMON","Invoc. Fusion"],["TOEXTRA","Renvoyer à l'Extra Deck"]
];

const EFFECT_TYPES = {
  MONSTER:[
    ["IGNITION","Ignition — activable librement"],
    ["QUICK_O","Effet Rapide (optionnel)"],
    ["QUICK_F","Effet Rapide (obligatoire)"],
    ["TRIGGER_O","Déclencheur (optionnel)"],
    ["TRIGGER_F","Déclencheur (obligatoire)"],
    ["FLIP","Effet Flip"],
    ["CONTINUOUS","Continu (passif, sans activation)"],
    ["SINGLE","Passif simple (ex : immunité)"],
    ["FIELD","Statut octroyé (grant — ex : ne peut être ciblé)"]
  ],
  ST:[
    ["ACTIVATE","Activation normale"],
    ["CONTINUOUS","Continu (effet persistant sur le terrain)"],
    ["FIELD","Statut octroyé à d'autres cartes (grant)"],
    ["EQUIP","Effet accordé au monstre équipé"],
    ["QUICK_O","Effet Rapide"]
  ]
};

const CONDITIONS = [
  ["NONE","Aucune condition"],
  ["CONTROL_MONSTER","Vous contrôlez ≥1 monstre"],
  ["CONTROL_ARCHETYPE","Vous contrôlez un monstre du setcode listé"],
  ["OPP_CONTROL_MONSTER","L'adversaire contrôle ≥1 monstre"],
  ["GY_HAS_MONSTER","Votre Cimetière contient ≥1 monstre"],
  ["CUSTOM","Lua personnalisé"]
];

const COSTS = [
  ["NONE","Sans coût"],
  ["LP","Payer des LP"],
  ["DISCARD","Défausser des cartes"],
  ["BANISH_GY","Bannir des cartes du Cimetière (coût)"],
  ["TRIBUTE","Sacrifier un monstre"],
  ["CUSTOM","Lua personnalisé"]
];

const OPERATIONS = [
  ["SPECIAL_SUMMON_DECK","Invoquer Spécialement depuis le Deck"],
  ["SPECIAL_SUMMON_GY","Invoquer Spécialement depuis le Cimetière"],
  ["TOHAND_DECK","Chercher : Deck → Main"],
  ["TOHAND_GY","Récupérer : Cimetière → Main"],
  ["DESTROY_FIELD","Détruire 1+ carte(s) sur le terrain"],
  ["BANISH_FIELD","Bannir 1+ carte(s) sur le terrain"],
  ["BANISH_GY_OP","Bannir des cartes du Cimetière (effet)"],
  ["BOUNCE_FIELD_HAND","Renvoyer une carte du terrain à la main"],
  ["MILL","Envoyer des cartes du Deck au Cimetière"],
  ["DRAW","Piocher des cartes"],
  ["DAMAGE","Infliger des dégâts à l'adversaire"],
  ["RECOVER","Récupérer des LP"],
  ["ATK_UP","Augmenter l'ATK (jusqu'à la fin du tour)"],
  ["ATK_DOWN","Diminuer l'ATK (jusqu'à la fin du tour)"],
  ["NEGATE_ACTIVATION","Annuler une activation et détruire"],
  ["TOKEN_SUMMON","Faire apparaître un/des Jeton(s)"],
  ["CUSTOM","Lua personnalisé"]
];

const TRIGGER_EVENTS = [
  ["EVENT_SUMMON_SUCCESS","Invocation Normale réussie"],
  ["EVENT_SPSUMMON_SUCCESS","Invocation Spéciale réussie"],
  ["EVENT_FLIP_SUMMON_SUCCESS","Invocation Retournement réussie"],
  ["EVENT_DESTROYED","Cette carte est détruite"],
  ["EVENT_BATTLE_DESTROYED","Détruite au combat"],
  ["EVENT_TO_GRAVE","Envoyée au Cimetière (peu importe la raison)"],
  ["EVENT_REMOVE","Cette carte est bannie"],
  ["EVENT_LEAVE_FIELD","Quitte le terrain (peu importe comment)"],
  ["EVENT_DRAW","Un joueur pioche"],
  ["EVENT_DAMAGE","Un joueur subit des dégâts"],
  ["EVENT_RECOVER","Un joueur récupère des LP"],
  ["EVENT_ATTACK_ANNOUNCE","Une attaque est déclarée"],
  ["EVENT_BATTLE_START","Début de la Battle Phase"],
  ["EVENT_PHASE+PHASE_STANDBY","Standby Phase (chaque tour)"],
  ["EVENT_PHASE+PHASE_END","End Phase (chaque tour)"],
  ["EVENT_CHAINING","Un Chain Link est activé"],
  ["EVENT_FREE_CHAIN","Libre (Quick Effect générique)"],
  ["CUSTOM","Event personnalisé (raw)"]
];
const CLONE_EVENTS = [
  ["NONE","Non — un seul déclencheur"],
  ["EVENT_SPSUMMON_SUCCESS","+ aussi sur Invocation Spéciale"],
  ["EVENT_SUMMON_SUCCESS","+ aussi sur Invocation Normale"],
  ["EVENT_FLIP_SUMMON_SUCCESS","+ aussi sur Invocation Retournement"]
];

/* ================= STATE ================= */
let cardType = "MONSTER";
let setcodes = [];
let effects = [];
let effSeq = 0;

/* ================= INIT ================= */
window.onload = function(){
  populateSelect('m-attribute', ATTRIBUTES.map(a=>[a, ATTR_LABELS_FR[a]]));
  populateSelect('m-race', RACES.map(r=>[r, RACE_LABELS_FR[r]]));
  buildMonsterFlagPills();
  buildLinkMarkerPills();
  buildArchetypeDatalist();
  addEffect();
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

function populateSelect(id, pairs){
  const el = document.getElementById(id);
  el.innerHTML = pairs.map(([v,l])=>`<option value="${v}">${l}</option>`).join('');
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

const MONSTER_FLAGS = [
  ["pendulum","Pendule"],["tuner","Tuner"],["union","Union"],["spirit","Esprit"],["gemini","Gémeau"],["toon","Toon"]
];
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

const LINK_MARKERS = [["TOP_LEFT","↖"],["TOP","↑"],["TOP_RIGHT","↗"],["LEFT","←"],["RIGHT","→"],["BOTTOM_LEFT","↙"],["BOTTOM","↓"],["BOTTOM_RIGHT","↘"]];
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

/* ================= REFERENCE VIEW ================= */
const REF_SECTIONS = [
  {title:'Types d\'effet (EFFECT_TYPE_*)', rows:[
    ['SINGLE','0x1'],['FIELD','0x2'],['EQUIP','0x4'],['ACTIONS','0x8'],['ACTIVATE','0x10'],['FLIP','0x20'],
    ['IGNITION','0x40'],['TRIGGER_O','0x80'],['QUICK_O','0x100'],['TRIGGER_F','0x200'],['QUICK_F','0x400'],
    ['CONTINUOUS','0x800'],['XMATERIAL','0x1000'],['GRANT','0x2000'],['TARGET','0x4000']
  ].map(([k,v])=>['EFFECT_TYPE_'+k,v])},
  {title:'Catégories (CATEGORY_*)', rows: CATEGORIES.map(([k,l])=>['CATEGORY_'+k,l])},
  {title:'Attributs (ATTRIBUTE_*)', rows: ATTRIBUTES.map(a=>['ATTRIBUTE_'+a, ATTR_LABELS_FR[a]])},
  {title:'Types de monstre (RACE_*)', rows: RACES.map(r=>['RACE_'+r, RACE_LABELS_FR[r]])},
  {title:'Emplacements (LOCATION_*)', rows:[
    ['LOCATION_DECK','0x1'],['LOCATION_HAND','0x2'],['LOCATION_MZONE','0x4'],['LOCATION_SZONE','0x8'],
    ['LOCATION_GRAVE','0x10'],['LOCATION_REMOVED','0x20'],['LOCATION_EXTRA','0x40'],['LOCATION_OVERLAY','0x80'],
    ['LOCATION_ONFIELD','MZONE|SZONE'],['LOCATION_FZONE','0x100'],['LOCATION_PZONE','0x200']
  ]},
  {title:'Raisons (REASON_*)', rows:[
    ['REASON_DESTROY','0x1'],['REASON_RELEASE','0x2'],['REASON_SUMMON','0x10'],['REASON_BATTLE','0x20'],
    ['REASON_EFFECT','0x40'],['REASON_COST','0x80'],['REASON_SPSUMMON','0x800'],['REASON_DISCARD','0x4000'],
    ['REASON_FUSION','0x40000'],['REASON_SYNCHRO','0x80000'],['REASON_RITUAL','0x100000'],['REASON_XYZ','0x200000'],['REASON_LINK','0x10000000']
  ]},
  {title:'Positions (POS_*)', rows:[
    ['POS_FACEUP_ATTACK','0x1'],['POS_FACEDOWN_ATTACK','0x2'],['POS_FACEUP_DEFENSE','0x4'],['POS_FACEDOWN_DEFENSE','0x8'],
    ['POS_FACEUP','0x5'],['POS_FACEDOWN','0xa'],['POS_ATTACK','0x3'],['POS_DEFENSE','0xc']
  ]},
  {title:'Events courants (EVENT_*)', rows:[
    ['EVENT_FREE_CHAIN','1002'],['EVENT_SUMMON_SUCCESS','1100'],['EVENT_FLIP_SUMMON_SUCCESS','1101'],
    ['EVENT_SPSUMMON_SUCCESS','1102'],['EVENT_DESTROYED','1029'],['EVENT_TO_GRAVE','1014'],['EVENT_DRAW','1110'],
    ['EVENT_DAMAGE','1111'],['EVENT_RECOVER','1112'],['EVENT_ATTACK_ANNOUNCE','1130'],['EVENT_CHAINING','1027'],['EVENT_TURN_END','1210']
  ]},
  {title:'Limitations (SetCountLimit)', rows:[
    ['SetCountLimit(1)','Soft OPT — 1×/tour par exemplaire'],
    ['SetCountLimit(1,id)','Hard OPT — "you can only use 1 of this effect"'],
    ['SetCountLimit(1,id,EFFECT_COUNT_CODE_OATH)','Serment — désactivé si l\'activation est annulée'],
    ['SetCountLimit(1,id,EFFECT_COUNT_CODE_DUEL)','1× par duel entier']
  ]},
  {title:'Codes de comptage (EFFECT_COUNT_CODE_*)', rows:[
    ['EFFECT_COUNT_CODE_OATH','0x1'],['EFFECT_COUNT_CODE_DUEL','0x2'],['EFFECT_COUNT_CODE_SINGLE','0x4'],['EFFECT_COUNT_CODE_CHAIN','0x8']
  ]},
  {title:'Messages d\'aide (HINTMSG_*)', rows:[
    ['HINTMSG_DESTROY','502'],['HINTMSG_REMOVE','503'],['HINTMSG_TOGRAVE','504'],['HINTMSG_RTOHAND','505'],
    ['HINTMSG_ATOHAND','506'],['HINTMSG_TODECK','507'],['HINTMSG_SPSUMMON','509'],['HINTMSG_RELEASE','500'],['HINTMSG_DISCARD','501']
  ]},
  {title:'Archétypes (setcode) — extrait', rows: ARCHETYPES.slice(0,40).map(a=>[a.n, a.h])}
];

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
