let handler = async function (m, { conn }) {
  let user = global.db.data.users[m.sender];

  if (!user.registered) {
    return m.reply('🩵 *ERROR*');
  }

  user.registered = false;
  m.reply('Registro eliminado');
}

handler.help = ['unreg'];
handler.tags = ['rg'];
handler.command = ['unreg'];
handler.register = true;

export default handler;
