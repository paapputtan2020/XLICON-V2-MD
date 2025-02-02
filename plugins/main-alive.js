

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./Assets/ALIVE-2.mp3"
    let url = "https://www.instagram.com/reel/C44VfZ-voAc/"
    let murl = "https://www.youtube.com/@MaammusMediaOfficial"
    let img = "https://cdn.ironman.my.id/q/EHFXf.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "_p4x_ppx_007_",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "ᴀɴᴀᴋᴋ ᴇɴᴛʜɪɴᴛᴇ ᴋᴇᴅ ᴀɴɴ ʙʜᴀɪ ᴠᴇʀᴛʜᴇ ᴋᴇᴅɴɴ ᴍᴇɴᴛɪᴏɴ ᴀᴅɪᴄʜ ᴠᴇʀᴩɪᴄʜᴏʟᴜᴍ😒🤦‍♂",
          body: "𝗜𝗡𝗦𝗧𝗔 𝗜𝗗 :_ᴩ4x_ᴩᴩx_007_",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/G9iaqB9irDz6S2I2QuxmgK',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
