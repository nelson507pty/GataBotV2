global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/HxzJfIb1RhyE28RLqPeD7L' , 'https://chat.whatsapp.com/HxzJfIb1RhyE28RLqPeD7L' , 'https://chat.whatsapp.com/HxzJfIb1RhyE28RLqPeD7L' , 'https://chat.whatsapp.com/HxzJfIb1RhyE28RLqPeD7L' , 'https://chat.whatsapp.com/HxzJfIb1RhyE28RLqPeD7L'] // No tiene utilidad 
global.channelYT = ['https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA'] // No tiene utilidad
global.owner = ['50764088409' , '50764088409' , '50764088409'] // Cambia los numeros por tu o tus numeros a los cuales te comtactaran y gestionaras el Bot
global.mods = ['50764088409' , '50764088409'] // No tiene utilidad
global.prems = ['50764088409' , '50764088409'] // No tiene utilidad


global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  hardianto: 'http://hardianto-chan.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'DyotaMC05',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': 'rey2k21'
}

// Sticker WM
global.packname = 'GataBot 🐈'
global.author = 'Gata Dios'


//global.wait = '*Esperé un momento..*'


global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
