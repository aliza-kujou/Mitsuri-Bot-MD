// Codigo Creado por felix manuel, no quites créditos
// Se recomienda MakiBaileys para tus proyectos 
 let linkRegex = /(https?:\/\/(?:www\.)?(?:t\.me|telegram\.me|whatsapp\.com)\/\S+)|(https?:\/\/chat\.whatsapp\.com\/\S+)|(https?:\/\/whatsapp\.com\/channel\/\S+)/i

export async function before(m, { isAdmin, isBotAdmin, conn }) {
  if (m.isBaileys && m.fromMe) return !0
  if (!m.isGroup) return !1

  let chat = global.db.data.chats[m.chat]
  let settings = global.db.data.settings[this.user.jid] || {}
  let grupo = `https://chat.whatsapp.com`
  let isGroupLink = linkRegex.exec(m.text)

  if (!chat.antiLink || !m.text || !isGroupLink) return !0
  if (isAdmin && m.text.includes(grupo)) {
    return conn.reply(m.chat, `✨ Compartiste imformación pero eres Maestro Zempai.`, m, fake)
  }

  if (!isAdmin) {
    // Si el bot no es admin
    if (!isBotAdmin) {
      return conn.reply(m.chat, `🙅‍♂️ *No tengo Ramgo suficiente para expulsar este infrsctor de este Reyno (Grupo)*`, m, fake)
    }

    // Evita expulsar por link del mismo grupo
    const thisGroupLink = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroupLink)) return !0

    // Acción anti-link
    await conn.reply(
      m.chat,
      `🟣 *${await conn.getName(m.sender)}* ha compartido Información de otro Reyno (Grupo).\n\n*🙅‍♂️ Serà expulsado de nuestro reyno*`,
      m, fake
    )

    if (settings.restrict) {
      try {
        // Borra el mensaje
        await conn.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        })

        // Expulsa al usuario
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
      } catch (e) {
        return conn.reply(m.chat, `🙅‍♂️ Error al expulsar del reyno: ${e}*`, m, fake)
      }
    } else {
      return conn.reply(m.chat, `✨ *No puedo eliminar debido a que mi Maestro (Creador) no lo permite*`, m, fake)
    }
  }

  return !0
}
