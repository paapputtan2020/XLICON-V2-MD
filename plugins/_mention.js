//Guru ka Maal Hai 
//Made For Guru Bot
//created on Diwali(12th Nov)
//copy with credits
//lodusheks stay away



let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://cdn.ironman.my.id/q/kAwxo.mp4"
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
          mediaType: 1,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
    ({
        pattern: "mention ?(.*)",
    fromMe: true,
    desc: "custom mention reply",
    type: "user",
    }, async (message, match) => {
    await sendMenButton(message, match);
    )
      else {
        return
      }
}
export default handler
