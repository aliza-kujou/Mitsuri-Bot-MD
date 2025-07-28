// Codigo creado por Félix Manuel https://github.com/mantis-has
import { igdl } from 'ruhend-scraper'

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
if (!args[0]) {
return conn.reply(m.chat, '✨ Ingresa Un Link De Facebook para descargar.', m, fake)}
let res
try {
await m.react(rwait)
conn.reply(m.chat, `🕒 *Descargando su video de facebook.*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, 
thumbnail: icons,
sourceUrl: channel }}})
res = await igdl(args[0])
} catch {
await m.react(error)
return conn.reply(m.chat, '😥 Hubo un Error al obtener los datos. Porfavor, Verifica el enlace.', m, fake)}
let result = res.data
if (!result || result.length === 0) {
return conn.reply(m.chat, '😥 No se encontraron resultados de tu solicitud. porfavor, vuelve a intentarlo con otros datos.', m, fake)}
let data
try {
await m.react(rwait)
data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)")
} catch {
await m.react(error)
return conn.reply(m.chat, '😥 Hubo un Error al procesar los datos.', m, fake)}
if (!data) {
return conn.reply(m.chat, '😥 No se encontró una resolución adecuada.', m)}
let video = data.url
try {
await m.react(rwait)
await conn.sendMessage(m.chat, { video: { url: video }, caption: 'Aquí está tu video\n' + textbot, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m })
await m.react(done)
} catch {
await m.react(error)
return conn.reply(m.chat, '😥 Hubo un Error al enviar el video.', m, fake)}}

handler.help = ['facebook', 'fb']
handler.tags = ['descargas']
handler.command = ['facebook', 'fb']
handler.cookies = 1
handler.register = true

export default handler
