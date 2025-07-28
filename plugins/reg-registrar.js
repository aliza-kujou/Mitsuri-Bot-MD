import axios from 'axios'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, args, usedPrefix, command }) {
    let user = global.db.data.users[m.sender]
    let name2 = conn.getName(m.sender)
    let whe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
    let perfil = await conn.profilePictureUrl(whe, 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg')

    if (user.registered === true) {
        return m.reply(`*🟣Ya estas registrado.*`)
    }
    
    if (!Reg.test(text)) return m.reply(`Formato imcorrecto\n\nVerdsdero uso: ${usedPrefix + command} Nombre.edad\nEjemplo: *${usedPrefix + command} ${name2}.14*`)
    
    let [_, name, splitter, age] = text.match(Reg)
    if (!name) return m.reply('El nombre no puede estar vacio.')
    if (!age) return m.reply('La edsd no puede estar vacía.')
    if (name.length >= 100) return m.reply('El nombre es largo.')
    
    age = parseInt(age)
    if (age > 1000) return m.reply('*La edad falla*')
    if (age < 5) return m.reply('*La edad falla*')
    
    user.name = name.trim()
    user.age = age
    user.regTime = +new Date
    user.registered = true
    global.db.data.users[m.sender].money += 600
    global.db.data.users[m.sender].estrellas += 10
    global.db.data.users[m.sender].exp += 245
    global.db.data.users[m.sender].joincount += 5    

    let who;
    if (m.quoted && m.quoted.sender) {
        who = m.quoted.sender;
    } else {
        who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    }
    
    let sn = createHash('md5').update(m.sender).digest('hex')
    let regbot = `╔━━▣━━━━⌬⌬━━▣
┃Nombre: ${name}
┃Edad: ${age}
┗━━▣━━━━⌬⌬━━▣

《🎁》 𝐑𝖾𝖼𝗼𝗆𝗉𝖾𝗇𝗌𝗮𝗌

╔⌬━━━━━━━━━━━━▣
┃💎Diamantes: 100
┃
┃💰Makicoins: 200
┃
┃✨Experiencia: 1000
┃
┃🎫Tokens: 22
╚⌬━━━━━━━━━━━━▣

   ━━━SIGUENOS━━━

╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹
https://whatsapp.com/channel/0029VbAa5sNCsU9Hlzsn651S
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

> © Powered by Félix Manuel`

  await conn.sendMessage(m.chat, {
        text: regbot,
        contextInfo: {
            externalAdReply: {
                title: '⊱『🩵𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥🔥』⊰',
                thumbnailUrl: 'https://files.catbox.moe/445fzg.jpg',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });

/*    await m.react('🩵')
  await conn.sendMessage(m.chat, {
           text: regbot, 
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,                      
                containsAutoReply: true,     
                renderLargerThumbnail": true,
                title: '⊱『✅𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥✅』⊰',  
                body: dev,  
                containsAutoReply: true,
                showAdAttribution: true,
                mediaType: 1, 
                thumbnailUrl: 'https://cdnmega.vercel.app/media/J1ZzFDYC@wNBS8rKd-Ynw264guxMkO8Hx2CuTdAuyfE0ijGbS3Dw' }}}, {quoted: m})
*/

let chtxt = `👤 *𝖴𝗌uario* » ${m.pushName || 'Anónimo'}
🗂 *𝖵𝖾𝗋𝗂𝖿𝗂𝖼𝖺𝖼𝗂𝗈́𝗇* » ${user.name}
💎 *𝖤𝖽𝖺𝖽* » ${user.age} años
🩵 *𝖨𝖣 𝖽𝖾 𝗋𝖾𝗀𝗂𝗌𝗍𝗋𝗈* »
⤷ ${sn}`;

    let channelID = '120363402362088282@newsletter';
        await conn.sendMessage(channelID, {
        text: chtxt,
        contextInfo: {
            externalAdReply: {
                title: "【 🩵 𝐍𝐔𝐄𝐕𝐎 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 🩵 】",
                body: '𝚁𝚎𝚐𝚒𝚜𝚝𝚛𝚘𝚜 𝙼𝚊𝚔𝚒𝚖𝚊 2.0 𝙱𝚘𝚝',
                thumbnailUrl: perfil,
                sourceUrl: redes,
                mediaType: 1,
                showAdAttribution: false,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: null });
};

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar']

export default handler
