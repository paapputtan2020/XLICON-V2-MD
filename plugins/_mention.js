//Guru ka Maal Hai 
//Made For Guru Bot
//created on Diwali(12th Nov)
//copy with credits
//lodusheks stay away



let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://files.catbox.moe/ziuq3k.mp4,https://i.imgur.com/ELYmYVL.mp4,https://i.imgur.com/jScGfyR.mp4,https://i.imgur.com/aWhULNy.mp4,https://i.imgur.com/5HWVtoo.mp4"
    let url = "https://www.instagram.com/reel/C44VfZ-voAc/"
    let murl = "https://www.instagram.com/reel/C44VfZ-voAc/"
    let hash = global.botname
    let img = "https://files.catbox.moe/68l7jo.png"
    let num = ["917025045312"]

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,99,0,99,0,99,0],
        fileName: "_p4x_ppx_007_",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "↺ |◁   II   ▷|   ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
	
    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (num.includes(phoneNumber)) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler
