// Codigo creado por Félix https://github.com/mantis-has
// Sistema de videos con botones 
// Si usas MakiBaileys podras ussr los bitones
// No quites los creditos

import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return m.reply(`🟣 Ingresa un texto para buscar en YouTube\n> *Ejemplo:* ${usedPrefix + command} Mitsuri`);

  await m.react('🕒'); // Reacción mientras busca tu petición 

  try {
    let api = await (await fetch(`https://delirius-apiofc.vercel.app/search/ytsearch?q=${encodeURIComponent(text)}`)).json();
    let result = api.data[0];

    let txt = `${result.title}`;

    await conn.sendMessage(m.chat, {
      image: { url: result.image },
      caption: txt,
      footer: dev,
      buttons: [
        {
          buttonId: `.ytmp4 ${result.url}`,
          buttonText: { displayText: 'Aceptar Descarga' }
        }
      ],
      viewOnce: true,
      headerType: 4
    }, { quoted: m });

    await m.react('✅'); // Reacción al terminar la petición 
  } catch (e) {
    await m.react('✖️');
    m.reply(`Error: ${e.message}`);
  }
};

handler.command = ['play2', 'mp4'];
export default handler;
