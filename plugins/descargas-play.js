import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `🟣 Ingresa un nombre o texto para buscar en YouTube.\n\n🚨 *Ejemplo:* ${usedPrefix + command} Haikyuu AMV`;
  }

  try {
    await m.react('🕒'); // Reacción de búsqueda

    const search = await yts(text);
    const videoInfo = search.all?.[0];

    if (!videoInfo) {
      throw '❌ No se encontraron resultados. Intenta con otro título.';
    }

    const body = `╭─⬣「 ✰ PLAY - BOT ✰ 」⬣
│Titulo: ${videoInfo.title}
│Canal: ${videoInfo.author.name}
│Duración: ${videoInfo.timestamp}
│Vistas: ${videoInfo.views.toLocaleString()}
╰─⬣`;

    await conn.sendMessage(
      m.chat,
      {
        image: { url: videoInfo.thumbnail },
        caption: body,
        footer: 'Selecciona una opción',
        buttons: [
          { buttonId: `.ytmp3 ${videoInfo.url}`, buttonText: { displayText: 'AUDIO' } },
          { buttonId: `.play2 ${videoInfo.url}`, buttonText: { displayText: 'VIDEO' } },
        ],
        viewOnce: true,
        headerType: 4,
      },
      { quoted: m }
    );

    await m.react('✅'); // Reacción de éxito
  } catch (e) {
    await m.reply(`❌ *Error:* ${e.message}`);
    await m.react('✖️');
  }
};

handler.command = ['play', 'playvid'];
handler.tags = ['downloader'];
handler.group = true;
handler.limit = 6;

export default handler;
