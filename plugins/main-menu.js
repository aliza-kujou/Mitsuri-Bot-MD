//* Código creado por Félix, no quites créditos *//

let handler = async (m, { conn }) => {
  try {
    let menu = `
¡Hola! Soy Mitsuri-Bot-MD (OficialBot) 

╭━━ *INFO-BOT* ━━╮
┃Creador: Félix Manuel 
┃Baileys: MakiBaileys 
┃Tiempo activo: Activo
┃Registros: --
╰━━━━━━━━━━━━━

Comandos disponibles

╭━━━━ *USERS* ━━╮
┃#catbox [imagen]
┃#inspect [enlace]
┃#inspeccionar [enlace]
╰━━━━━━━━━━━━━

╭━━━ *SUB-BOTS* ━╮
┃#code 
┃#qr
┃#setprimary
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
