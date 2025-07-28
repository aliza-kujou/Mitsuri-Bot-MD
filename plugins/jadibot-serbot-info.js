import ws from 'ws'
import { format } from 'util'

let handler = async (m, { conn }) => {
  let uniqueUsers = new Map()

  if (!global.conns || !Array.isArray(global.conns)) {
    global.conns = []
  }

  global.conns.forEach((conn) => {
    if (conn.user && conn.ws?.socket?.readyState !== ws.CLOSED) {
      uniqueUsers.set(conn.user.jid, conn)
    }
  })

  let uptime = process.uptime() * 1000
  let formatUptime = clockString(uptime)

  let totalUsers = uniqueUsers.size

  let txt = `LISTA DE BOTS ACTIVOS`
  txt += `\n\n`
  txt += `OficialBot: 1\n`
  txt += `SubBots: ${totalUsers || 0}\n`

  if (totalUsers > 0) {
    txt += `\nNúmeros de los Subs\n`
    let i = 1
    for (let jid of uniqueUsers.keys()) {
      txt += `  ${i++}. wa.me/${jid.split('@')[0]}\n`
    }
  }

  await conn.reply(m.chat, txt.trim(), m, fake)
}

handler.command = ['listjadibot', 'bots']
handler.help = ['bots']
handler.tags = ['serbot']
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor((ms % 3600000) / 60000)
  let s = Math.floor((ms % 60000) / 1000)
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}
