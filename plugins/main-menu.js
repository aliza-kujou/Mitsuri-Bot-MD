//* Código creado por Félix, no quites créditos *//

let handler = async (m, { conn }) => {
  try {
    let menu = `
¡Hola! ${nombre} Soy Mitsuri-Bot-MD

╭━━Developed by Félix 
┃✨ GitHub:
┃https://github.com/aliza-kujou/Mitsuri-Bot-MD
┃✨ Canal OfC:
┃https://whatsapp.com/channel/0029VbBPHau6WaKuG85fvx3u
╰━━━━━━━━━━━━━

Comandos disponibles

╭━ *HERRAMIENTAS* ━╮
┃#catbox [imagen]
┃#inspect [enlace]
┃#inspeccionar [enlace]
┃#play [Búsqueda]
╰━━━━━━━━━━━━━

╭━━━ *SUB-BOTS* ━╮
┃#code 
┃#qr
┃#setprimary
┃#serbottoken 
┃#bots
┃#listjadibot
╰━━━━━━━━━━━━━

╭━ *GRUPOS* ━╮
┃#promote
┃#demote
┃#tag
┃#hidetag
┃#infogrupo
┃#link 
╰━━━━━━━━━━━━━

╭━ *REGISTROS* ━╮
┃#reg
┃#unreg 
┃#perfil
╰━━━━━━━━━━━━━

╭━ *JUEGOS* ━╮
┃#acertijo
┃#acert
┃#adivinanza
┃#tekateki
╰━━━━━━━━━━━━━

╭━━━ *OWNER* ━╮
┃#join
┃#update
┃#unir
╰━━━━━━━━━━━━━

> Powered by Félix
`.trim();

    await conn.sendMessage(m.chat, {
      image: { url: 'https://qu.ax/YJWlM.jpg' },
      caption: menu,
    }, { quoted: m });

  } catch (e) {
    await m.reply(`✘ Ocurrió un error al enviar el menú.\n\n${e}`, m);
  }
};

handler.command = ['menu', 'help', 'menú'];
handler.help = ['menu', 'help', 'menú'];
handler.tags = ['main'];
handler.register = true;

export default handler;
