// Codigo creado por Félix Manuel 
// Se recomienda usar MakiBaileys, es un bailyes super bueno
// github:fet6489/MakiBaileys 
var handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, '✨ Responde o etiqueta a la persona que deseas expulsar', m ); //Mensaje advertiendo cuando no mensionan al usuario
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';
    //const nn = conn.getName(m.sender);

    if (user === conn.user.jid) {
        return conn.reply(m.chat, '🙅‍♂️ No puedo eliminar la bot del grupo', m, ); // Menssje evitando eliminar al bot
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, '😥 Es imposible elimimar al creador del grupo', m, ); // Mensaje para no eliminar al propietario del grupo
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, '🙂‍↔️ Es imposible eliminar a mi creador', m ); // No se puede eliminar al creador
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');

//conn.reply('18293142989@s.whatsapp.net', `Un Admin Acabo De Eliminar Un Usuario En El Grupo:\n> ${groupMetadata.subject}.`, m, fake, );
};

handler.help = ['kick']; // Esto identifica
handler.tags = ['grupo']; // Aqui es el archivo 
handler.command = ['kick','echar','hechar','sacar','ban']; // Comando principal 
handler.admin = true; // Comando solo para admins
handler.group = true; // Comando solo para grupos
handler.register = true // Comando solo para personas registradas
handler.botAdmin = true; // El bot debe ser admin del grupo 

export default handler;
