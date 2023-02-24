const ListaEntera = [
    "Surtr",
    "AH MUZEN CAB",
    "AMATERASU",
    "AHNUR",
    "APOLLO",
    "ARACHNE",
    "Aquiles",
    "ARTEMIS",
    "AWILIX",
    "BAKASURA",
    "BASTET",
    "BELLONA",
    "Caribis",
    "CAMAZOTZ",
    "Cernunnos",
    "CHAAC",
    "CHERNOBOG",
    "CHIRON",
    "Cliomio",
    "CU CHULAINN",
    "CUPID",
    "DA JI",
    "Danzatuculo",
    "ERLANG SHEN",
    "FAFNIR",
    "FENRIR",
    "Gilgamesh",
    "GUAN YU",
    "HACHIMAN",
    "heimdallir",
    "HERCULES",
    "HORUS",
    "HOU YI",
    "HUN BATZ",
    "iskthar",
    "IZANAMI",
    "JING WEI",
    "KALI",
    "KING ARTHUR",
    "Lanzelot",
    "LOKI",
    "MEDUSA",
    "MERCURY",
    "Mulan",
    "NE ZHA",
    "NEITH",
    "NEMESIS",
    "NIKE",
    "ODIN",
    "OSIRIS",
    "PELE",
    "RAMA",
    "RATATOSKR",
    "RAVANA",
    "SERQET",
    "SET",
    "Shiva",
    "SKADI",
    "SUN WUKONG",
    "SUSANO",
    "THANATOS",
    "THOR",
    "TYR",
    "tsucuyomi infinito",
    "ULLR",
    "VAMANA",
    "XBALANQUE",
    "APHRODITE",
    "AH PUCH",
    "ANUBIS",
    "AO KUANG",
    "Agni",
    "ARES",
    "ARTIO",
    "ATHENA",
    "Atlas",
    "Baba yaga",
    "BACCHUS",
    "BARON SAMEDI",
    "CERBERUS",
    "CABRAKAN",
    "CHENG'E",
    "CHRONOS",
    "tuculo",
    "DISCORDIA",
    "Freya ",
    "GANESHA",
    "GEB",
    "HADES",
    "HE BO",
    "HEL",
    "HERA",
    "ISIS",
    "JANUS",
    "JORMUNGANDR",
    "KHEPRY",
    "KUZENBO",
    "KUKULKAN",
    "KUMBHAKARNA",
    "Mati",
    "La puta gotica",
    "Morrigan",
    "MERLIN",
    "NOX",
    "NU WA",
    "Olorun",
    "Persefone",
    "POSEIDON",
    "RA",
    "SCYLLA",
    "SOBEK",
    "SOL",
    "SYLVANUS",
    "TERRA",
    "THOTH",
    "Thiamat",
    "Raiyin",
    "VULCAN",
    "XING TIAN",
    "YMIR",
    "Yemoya",
    "tio Juan",
    "ZEUS",
    "ZHONG KUI"
]
const Fisico = [
    "Surtr",
    "AH MUZEN CAB",
    "AMATERASU",
    "AHNUR",
    "APOLLO",
    "ARACHNE",
    "Aquiles",
    "ARTEMIS",
    "AWILIX",
    "BAKASURA",
    "BASTET",
    "BELLONA",
    "Caribis",
    "CAMAZOTZ",
    "Cernunnos",
    "CHAAC",
    "CHERNOBOG",
    "CHIRON",
    "Cliomio",
    "CU CHULAINN",
    "CUPID",
    "DA JI",
    "Danzatuculo",
    "ERLANG SHEN",
    "FENRIR",
    "Gilgamesh",
    "GUAN YU",
    "HACHIMAN",
    "heimdallir",
    "HERCULES",
    "HORUS",
    "HOU YI",
    "HUN BATZ",
    "iskthar",
    "IZANAMI",
    "JING WEI",
    "KALI",
    "KING ARTHUR",
    "Lanzelot",
    "LOKI",
    "MEDUSA",
    "MERCURY",
    "Mulan",
    "NE ZHA",
    "NEITH",
    "NEMESIS",
    "NIKE",
    "ODIN",
    "OSIRIS",
    "PELE",
    "RAMA",
    "RATATOSKR",
    "RAVANA",
    "SERQET",
    "SET",
    "Shiva",
    "SKADI",
    "SUN WUKONG",
    "SUSANO",
    "THANATOS",
    "THOR",
    "TYR",
    "tsucuyomi infinito",
    "ULLR",
    "VAMANA",
    "XBALANQUE"
];
const Magico = [
    "APHRODITE",
    "AH PUCH",
    "ANUBIS",
    "AO KUANG",
    "Agni",
    "ARES",
    "ARTIO",
    "ATHENA",
    "Atlas",
    "Baba yaga",
    "BACCHUS",
    "BARON SAMEDI",
    "CERBERUS",
    "CABRAKAN",
    "CHENG'E",
    "CHRONOS",
    "tuculo",
    "DISCORDIA",
    "Freya ",
    "GANESHA",
    "GEB",
    "HADES",
    "HE BO",
    "HEL",
    "HERA",
    "ISIS",
    "JANUS",
    "JORMUNGANDR",
    "KHEPRY",
    "KUZENBO",
    "KUKULKAN",
    "KUMBHAKARNA",
    "Mati",
    "La puta gotica",
    "Morrigan",
    "MERLIN",
    "NOX",
    "NU WA",
    "Olorun",
    "Persefone",
    "POSEIDON",
    "RA",
    "SCYLLA",
    "SOBEK",
    "SOL",
    "SYLVANUS",
    "TERRA",
    "THOTH",
    "Thiamat",
    "Raiyin",
    "VULCAN",
    "XING TIAN",
    "YMIR",
    "Yemoya",
    "tio Juan",
    "FAFNIR",
    "ZEUS",
    "ZHONG KUI"
]
function SmiteRandomGod3v3(user1,user2,user3,user4,user5,user6) {
    const usuarios1 = [user1,user2,user3]
    const usuarios2 = [user4,user5,user6]
    usuarios1.sort(() => Math.random() - 0.5);
    usuarios2.sort(() => Math.random() - 0.5);
    const user1Pick = Fisico[Math.floor(Math.random()*Fisico.length)];
    const user2Pick = Magico[Math.floor(Math.random()*Magico.length)];
    let user3Pick = ListaEntera[Math.floor(Math.random()*ListaEntera.length)];
    let user4Pick = Fisico[Math.floor(Math.random()*Fisico.length)];
    let user5Pick = Magico[Math.floor(Math.random()*Magico.length)];
    let user6Pick = ListaEntera[Math.floor(Math.random()*ListaEntera.length)];
    if(user3Pick == user2Pick || user3Pick == user1Pick){
        user3Pick = ListaEntera[Math.floor(Math.random()*ListaEntera.length)];
    }
    if(user6Pick == user4Pick || user3Pick == user5Pick){
        user6Pick = ListaEntera[Math.floor(Math.random()*ListaEntera.length)];
    }
   return `
   Equipo 1: 
   -${usuarios1[0]}(${user1Pick})
   -${usuarios1[1]}(${user2Pick})
   -${usuarios1[2]}(${user3Pick})
Equipo 2: 
   -${usuarios2[0]}(${user4Pick})
   -${usuarios2[1]}(${user5Pick})
   -${usuarios2[2]}(${user6Pick})
   `
}
function SmiteConquest(user1,user2,user3,user4,user5){
    return `
    - Sup: (${user1}) - ${ListaEntera[Math.floor(Math.random()*ListaEntera.length)]}
    - Adc: (${user2}) - ${ListaEntera[Math.floor(Math.random()*ListaEntera.length)]}
    - Jungla: (${user3}) - ${ListaEntera[Math.floor(Math.random()*ListaEntera.length)]}
    - Mid: (${user4}) - ${ListaEntera[Math.floor(Math.random()*ListaEntera.length)]}
    - Solo: (${user5}) - ${ListaEntera[Math.floor(Math.random()*ListaEntera.length)]}
    `
}
function SmiteRandomConquest(user1,user2,user3,user4,user5){
    const usuarios = [user1,user2,user3,user4,user5]
    usuarios.sort(() => Math.random() - 0.5);
    return `
    - Sup: (${usuarios[0]}) - ${ListaEntera[Math.floor(Math.random()*ListaEntera.length)]}
    - Adc: (${usuarios[1]}) - ${ListaEntera[Math.floor(Math.random()*ListaEntera.length)]}
    - Jungla: (${usuarios[2]}) - ${ListaEntera[Math.floor(Math.random()*ListaEntera.length)]}
    - Mid: (${usuarios[3]}) - ${ListaEntera[Math.floor(Math.random()*ListaEntera.length)]}
    - Solo: (${usuarios[4]}) - ${ListaEntera[Math.floor(Math.random()*ListaEntera.length)]}
    `
}

function SmiteRandomGod2v2(user1,user2,user3,user4) {
    const usuarios1 = [user1,user2]
    const usuarios2 = [user3,user4]
    usuarios1.sort(() => Math.random() - 0.5);
    usuarios2.sort(() => Math.random() - 0.5);
    return `
    Equipo 1: 
    -${usuarios1[0]}(${Fisico[Math.floor(Math.random()*Fisico.length)]})
    -${usuarios1[1]}(${Magico[Math.floor(Math.random()*Magico.length)]})
Equipo 2: 
    -${usuarios2[0]}(${Fisico[Math.floor(Math.random()*Fisico.length)]})
    -${usuarios2[1]}(${Magico[Math.floor(Math.random()*Magico.length)]})
    `
 }
function Random3v3(user1,user2,user3,user4,user5,user6) { 
    return  SmiteRandomGod3v3(user1,user2,user3,user4,user5,user6)
}
function Random2v2(user1,user2,user3,user4) { 
    return SmiteRandomGod2v2(user1,user2,user3,user4) 
}

module.exports = {Random3v3,Random2v2,SmiteConquest,SmiteRandomConquest}