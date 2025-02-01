//Guru ka Maal Hai 
//Made For Guru Bot
//created on Diwali(12th Nov)
//copy with credits
//lodusheks stay away



let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://files.catbox.moe/rczc9s.mp4,https://files.catbox.moe/pwpjtw.mp4,https://files.catbox.moe/sycer2.mp4,https://files.catbox.moe/mhytig.mp4,https://files.catbox.moe/7ckpqx.mp4,https://files.catbox.moe/4ix3rg.mp4,https://files.catbox.moe/ux488t.mp4,https://files.catbox.moe/f981q9.mp4,https://files.catbox.moe/yds0jl.mp4,https://files.catbox.moe/rb5mu2.mp4,https://files.catbox.moe/amzzl0.mp4,https://files.catbox.moe/ct4u2b.mp4,https://files.catbox.moe/dtfrj6.mp4,https://files.catbox.moe/hq2xns.mp4,https://files.catbox.moe/lp30pf.mp4,https://files.catbox.moe/2yolet.mp4,https://files.catbox.moe/2kvj0d.mp4,https://files.catbox.moe/sdhjzn.mp4,https://files.catbox.moe/t3pemg.mp4,https://files.catbox.moe/mpvg2n.mp4,https://files.catbox.moe/a6s64z.mp4,https://files.catbox.moe/94h6wa.mp4,https://files.catbox.moe/b122yy.mp4,https://files.catbox.moe/fmcedw.mp4,https://files.catbox.moe/1meij7.mp4,https://files.catbox.moe/fcm9es.mp4,https://files.catbox.moe/hbqpqd.mp4,https://files.catbox.moe/ympjui.mp4,https://files.catbox.moe/x948kk.mp4,https://files.catbox.moe/eqsrgb.mp4,https://files.catbox.moe/1e3fva.mp4,https://files.catbox.moe/t8evg7.mp4,https://files.catbox.moe/knd1tx.mp4,https://files.catbox.moe/4h93xe.mp4,https://files.catbox.moe/r1zaea.mp4,https://files.catbox.moe/zu5pol.mp4,https://files.catbox.moe/areb38.mp4,https://files.catbox.moe/kvo9su.mp4,https://files.catbox.moe/embyoz.mp4,https://files.catbox.moe/ziuq3k.mp4,https://files.catbox.moe/3xut6f.mp4,https://i.imgur.com/TUiUiFP.mp4,https://i.imgur.com/u4Qc2VW.mp4,https://i.imgur.com/UScOeKc.mp4,https://i.imgur.com/WX1vXII.mp4,https://i.imgur.com/N40etul.mp4,https://i.imgur.com/ElxEPB0.mp4,https://i.imgur.com/6Qefgpw.mp4,https://i.imgur.com/eLezp0u.mp4,https://i.imgur.com/jXMzKvv.mp4,https://i.imgur.com/wjmBWlh.mp4,https://i.imgur.com/ELYmYVL.mp4,https://i.imgur.com/jScGfyR.mp4,https://i.imgur.com/aWhULNy.mp4,https://i.imgur.com/5HWVtoo.mp4,https://i.imgur.com/LnhwrM7.mp4,https://i.imgur.com/9vgGdWJ.mp4,https://i.imgur.com/luSD3hU.mp4,https://i.imgur.com/SEHyoqt.mp4,https://i.imgur.com/J86o4DR.mp4,https://i.imgur.com/nmYKAcS.mp4,https://i.imgur.com/LJU53ek.mp4,https://i.imgur.com/XVT9YNE.mp4,https://i.imgur.com/XegoZLa.mp4,https://i.imgur.com/YO6Vye5.mp4,https://i.imgur.com/410nG4G.mp4,https://i.imgur.com/hD7yu9Z.mp4,https://i.imgur.com/GDHdFOr.mp4,https://i.imgur.com/FYIjVjG.mp4,https://i.imgur.com/EHo69s3.mp4,https://i.imgur.com/uOm2BCW.mp4,https://i.imgur.com/FM34EXu.mp4,https://i.imgur.com/O2WxNf3.mp4,https://i.imgur.com/cqTHNnu.mp4,https://i.imgur.com/IyjKSuD.mp4,https://i.imgur.com/rQNumYK.mp4,https://i.imgur.com/CsmvIu3.mp4,https://i.imgur.com/rWDICCS.mp4,https://i.imgur.com/u21Bxzm.mp4,https://i.imgur.com/pahJkTh.mp4,https://i.imgur.com/mCiKyuW.mp4,https://i.imgur.com/Sw7bqEk.mp4,https://i.imgur.com/ec3FDUy.mp4,https://i.imgur.com/VUnL9yi.mp4,https://i.imgur.com/3KCokLS.mp4,https://i.imgur.com/hmf771B.mp4,https://files.catbox.moe/g28idi.mp4,https://files.catbox.moe/h58nff.mp4"
    let url = "https://www.instagram.com/reel/C44VfZ-voAc/"
    let murl = "https://www.instagram.com/reel/C44VfZ-voAc/"
    let hash = global.botname
    let img = "https://files.catbox.moe/68l7jo.png"
    let num = ["917025045312"]

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
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
