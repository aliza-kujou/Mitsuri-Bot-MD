// PROHIBIDO EDITAR
// Código creado por Félix OFC https://GitHub.com/mantis-has
// Nota: Si usaras el codigo ten en cuenta usar o adaptar tu handler.js a este codigo.
// Se recomienda usar MakiBaileys o otto baileys sililar github:fet6489/MakiBaileys 
let handler = async (m, { text }) => {
  // Si no se escribió texto (número o mención)
  if (!text || !text.replace(/[^0-9]/g, '')) {
    return m.reply('Debes etiquetar al bot que quieres hacer principal en este grupo.')
  }

  let botJid = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}

  global.db.data.chats[m.chat].primaryBot = botJid

  m.reply(`El bot principal para este grupo ahora es:\n*${botJid}*`)
}

handler.help = ['setprimary @bot']
handler.tags = ['owner']
handler.command = ['setprimary']
handler.admin = true

export default handler
