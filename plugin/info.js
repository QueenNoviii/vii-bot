let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Eci Novianti
╠➥ Script: @Arya Bot
║
╠➥ Github: https://github.com/Arya274/Arya-Bot
╠➥ Instagram: @ecinvntii_
╠➥ YouTube: Eci Novianti
║
╠═〘 Thanks To 〙 ═
╠   All my friend
╠
╠
╠
║
╠═〘 DONASI 〙 ═
╠➥ 
╠➥ Tsel: 0823476161626
╠➥
║
║>Request? Wa.me//6282347616126
║
╠═〘 VII BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

