import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 527222519827

//*──ׄ✰─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.owner = [
  ['18293142989', '🩵 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 🩵', true],
  ['18293142989', 'f', true],
  ['527222518356', 'México', true]
]

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.owner_lid = [
  ['149963665342644', '🩵 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 🩵 (LID)', true],
  ['149963665342644', 'F (LID)', true]
]

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['5215211111111'] 
global.prems = []

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '2.0.0'
global.languaje = 'Español'
global.nameqr = 'mі𝗍sᥙrі-ᑲ᥆𝗍-mძ'
global.sessions = 'Session'
global.jadi = 'JadiBot'
global.makiJadibts = true

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.packsticker = `┃🐬 Deymoon Club Ofc
\n    ⤷ https://cyanseven.vercel.app/\n          ┃💠 Info:
\n             ⤷ cyan-seven.vercel.app
\n                     ┃💥 Bot: 
\n                         ┃⤷ Mitsuri 
\n\n                          ┃Usuario:
 \n                               ┃⤷ Desconocido\n\n`
global.packname = `⏤͟͞ू⃪  ̸̷͢Mitsuri 𝐁𝐨𝐭𑁯ᰍ`
global.author = `Sigue el canal del Club`;
global.wm = '⏤͟͞ू⃪  ̸̷͢𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 Félix Manuel';
global.titulowm = '⏤͟͞ू⃪mі𝗍sᥙrі 𝐁𖹭t͟𑁯ᰍ';
global.igfg = 'Deymoon Club'
global.botname = 'Kanroji 𝐁𝐨𝐭 𝐌𝐃'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ Féᥣі᥊ Mᥲᥒᥙᥱᥣ'
global.textbot = 'Mitsuri kanroji'
global.gt = '͟͞𝐃𝐞𝐧𝐣𝐢';
global.namechannel = 'mі𝗍sᥙrі - 𝐂𝐡a͟𝐧n͟e͟𝐥𑁯'

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.moneda = '¥'

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺  𝑫𝑬𝒀𝑴𝑶𝑶𝑵 𝑪𝑳𝑼𝑩◞ • 🩵
global.gp4 = 'https://whatsapp.com/channel/0029VbBPHau6WaKuG85fvx3u' //Grupo Oficial
global.gp1 = 'https://whatsapp.com/channel/0029VbBPHau6WaKuG85fvx3u' //Grupo 2
global.gp2 = 'https://whatsapp.com/channel/0029VbBPHau6WaKuG85fvx3u'//
global.channel = 'https://whatsapp.com/channel/0029VbBPHau6WaKuG85fvx3u' //Canal Oficial
global.channel2 = 'https://whatsapp.com/channel/0029VbBPHau6WaKuG85fvx3u' //Canal test 
global.yt = 'https://www.youtube.com/frasesbebord' //Canal De Youtube
global.md = 'https://github.com/aliza-kujou/mantis' //Github Oficial
global.correo = 'mantisbotmd@gmail.com'
global.cn ='https://whatsapp.com/channel/0029VbBPHau6WaKuG85fvx3u';

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363420920420092@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
