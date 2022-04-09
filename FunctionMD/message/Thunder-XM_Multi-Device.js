 "use strict";
 const fs = require('fs')
 const cron = require('node-cron')
 const uptime = process.uptime();
 const { exec } = require('child_process')
 const axios = require("axios")
 const Exif = require('../sticker/exif.js');
 const util = require("util");
 const exif = new Exif();
 const moment = require("moment-timezone")
 const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
 const speed = require("performance-now");
 const fetch = require('node-fetch')
 const brainly = require('brainly-scraper');
 let google = require('google-it')
 const kotz = require("kotz-api");
 const hx = require('hxz-api')

 const ffmpeg = require('fluent-ffmpeg')
 const {
getContentType, downloadContentFromMessage,	generateWAMessage, generateWAMessageFromContent, makeChatsSocket
} = require('@adiwajshing/baileys');
 const { 
  color, 
  runtime,
  fetchJson, 
  getRandom, 
webp2mp4File
 } = require('../function.js')
 const { 
  yta, 
  ytv, 
  searchResult 
 } = require('../scrape/ytdl')
 const {
   ramalan_jodoh, 
   tafsir_mimpi,
   nomer_hoki,
   ramalan_cinta,
   suami_istri,
   ramalan_jodoh_bali,
   arti_nama,
   kecocokan_nama,
   kecocokan_nama_pasangan,
   tanggal_jadian_pernikahan,
   sifat_usaha_bisnis,
   pekerjaan_weton_lahir,
   rejeki_hoki_weton,
   ramalan_nasib,
   cek_potensi_penyakit,
   perhitungan_feng_shui,
   arti_kartu_tarot,
   petung_hari_baik,
   hari_sangar_taliwangke,
   primbon_hari_naas,
   rahasia_naga_hari,
   primbon_arah_rejeki,
   ramalan_peruntungan,
   weton_jawa,
   sifat_karakter_tanggal_lahir,
   potensi_keberuntungan,
   primbon_memancing_ikan,
   masa_subur,
   zodiak,
   shio
  } = require('../scrape/primbon') 
 const  Searchnabi  = require('../scrape/kisahnabi.js');
 const { detikNews } = require('../scrape/detik') 
 const { textpro } = require('../scrape/textpro') 
 let { cnn } = require('../scrape/cnn.js') 
 const geayubi = fs.readFileSync("./FunctionMD/scrape/Result/geayubi.json");
 const bocil = fs.readFileSync("./FunctionMD/scrape/Result/bocil.json");
 const { wikiSearch } = require('../scrape/wiki.js');
 const { wallpaperaccess } = require('../scrape/wallpaperaccess') 
 const { TiktokDownloader } = require('../scrape/tiktokdl') 
 let antilink = JSON.parse(fs.readFileSync('./storage/group/antilink.json'))
 const Options = require('../settings/options.js')
 const afk = require("../../storage/user/afk.js");
 let _afk = JSON.parse(fs.readFileSync('./storage/user/afk.json'));
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
 let textproo = Options.textpro
 let thumb = fs.readFileSync('./storage/image/thumb.jpg') 
 const { pinterest, wallpaper, porno, hentai, quotesAnime } = require('../scrape/ApiOrScrap')
 const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../../storage/user/game");
 const { Gempa } = require("../scrape/gempa.js");
 let { covid } = require('../scrape/covid.js') 
const { jadwaltv }= require('../scrape/jadwaltv');
const { lirikLagu } = require('../scrape/lirik')



 let tebakgambar = []
 let gamewaktu = 30
 
 let OwnerNumber = Options.info.owner 
module.exports = async (
    sock,
    m,
    store   
    ) => {
   
   try{            
   const from = m.key.remoteJid
   const CMD = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
   const prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(CMD) ? CMD.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#'	  
   const quoted = m.quoted ? m.quoted : m
   const mime = (quoted.m || quoted).mimetype || ''
   const chatmessage = (m.xtype === 'conversation') ? m.message.conversation : (m.xtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
// const ordermessage = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
   const ordermessage = (m.xtype === 'conversation') ? m.message.conversation : (m.xtype == 'imageMessage') ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.xtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.xtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
   const chats = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
   const args = ordermessage.trim().split(/ +/).slice(1)
   const botNumber = sock.user.id.split(':')[0] + '@s.whatsapp.net'

   const order = ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase()
   const sender = m.sender
   const quotedMsg = m.isMedia
   const q = args.join(' ')       
   const isCmd = ordermessage.startsWith(prefix)   
   const isGroup = from.endsWith('@g.us') 
   const itulho = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid 
   const isOwner = OwnerNumber.includes(itulho)      
   const groupMetdata = isGroup ? await sock.groupMetadata(from) : ''
   const groupName = isGroup ? await groupMetdata.subject : ''   
   const isAntiLink = isGroup ? antilink.includes(m.sender) : false
   const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
   const groupMembers = isGroup ? groupMetadata.participants : ''
   const groupAdmins = isGroup ? m.getGroupAdmins(groupMembers) : ''
   const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
   const isGroupAdmins = groupAdmins.includes(m.sender)
   const more = String.fromCharCode(8206);
   const readMore = more.repeat(4000);
    function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
   }
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}

       
   
    let LETT = 1;    
    let MenuList = `• *INFO ${Options.info.botName}*\n\n`
    MenuList += `Tag : @${m.sender.split("@")[0]}\n`
    MenuList += ` 👋🏻 *Hello:* ${m.pushName} ${m.sayingtime + m.timoji}\n`
    MenuList += ` 🕒 *Time:* ${time}\n`
    MenuList += ` 🌙 *Go to idul Fitri:*\n*${m.harinye} Hari*, *${m.jamnye} Jam*, *${m.menitnye} Menit*, *${m.detiknye} Detik*`
    MenuList += ` 🩸 *Version:* ${Options.info.version}\n`
    MenuList += ` 💻 *Type:* Baileys-md\n`
    MenuList += ` 🪧 *Bot Name:* ${Options.info.botName}\n\n${readMore}`    
    MenuList += `• *ALL MENU*\n\n`
    MenuList += `_📁️DEFAULT & TESTER_\n`
    MenuList += `${LETT++} ${prefix}menu\n`
    MenuList += `${LETT++} ${prefix}test\n`
    MenuList += `${LETT++} ${prefix}temp\n`
    MenuList += `${LETT++} ${prefix}listsection1\n`
    MenuList += `${LETT++} ${prefix}listsection2\n`
    MenuList += `${LETT++} ${prefix}p\n\n`
    MenuList += `_INFO BOT_\n`
    MenuList += `${LETT++} ${prefix}runtime\n`
    MenuList += `${LETT++} ${prefix}speed\n\n`
    MenuList += `_⬇️DOWNLOADER_\n`
    MenuList += `${LETT++} ${prefix}play query\n`
    MenuList += `${LETT++} ${prefix}tiktokvideo link\n`
    MenuList += `${LETT++} ${prefix}tiktokaudio link\n`
    MenuList += `${LETT++} ${prefix}youtubemp4 link\n`
    MenuList += `${LETT++} ${prefix}youtubemp3 link\n\n`
    MenuList += `_🖨️CONVERTER_\n`
    MenuList += `${LETT++} ${prefix}sticker\n`
    MenuList += `${LETT++} ${prefix}toimg\n`
    MenuList += `${LETT++} ${prefix}tovid\n\n`
    MenuList += `_🖥️BAILEYS DOCS_\n`
    MenuList += `${LETT++} ${prefix}delete\n\n`
    MenuList += `_🏢GROUP_\n`
    MenuList += `${LETT++} ${prefix}add\n`
    MenuList += `${LETT++} ${prefix}kick\n`
    MenuList += `${LETT++} ${prefix}promote\n`
    MenuList += `${LETT++} ${prefix}demote\n`
    MenuList += `${LETT++} ${prefix}antilink\n`
    MenuList += `${LETT++} ${prefix}afk\n`
    MenuList += `${LETT++} ${prefix}setnamegroup\n`
    MenuList += `${LETT++} ${prefix}setdesc\n`
    MenuList += `${LETT++} ${prefix}revoke\n`
    MenuList += `${LETT++} ${prefix}group <open/close>\n`
    MenuList += `${LETT++} ${prefix}hidetag\n\n`
    MenuList += `_🏞️RPG_\n` 
    MenuList += `${LETT++} ${prefix}berburu\n`
    MenuList += `${LETT++} ${prefix}mancing\n`
    MenuList += `${LETT++} ${prefix}menambang\n`
    MenuList += `${LETT++} ${prefix}mining\n`
    MenuList += `${LETT++} ${prefix}heal\n\n`
    MenuList += `_🖌️️TEXTPRO_\n` 
    MenuList += `${LETT++}. ${prefix}sci_fi _text_\n`
    MenuList += `${LETT++}. ${prefix}blackpink\n`
    MenuList += `${LETT++}. ${prefix}lightglow\n`
    MenuList += `${LETT++}. ${prefix}glass\n`
    MenuList += `${LETT++}. ${prefix}hoorror_blood\n`
    MenuList += `${LETT++}. ${prefix}sand\n`
    MenuList += `${LETT++}. ${prefix}sketch\n`
    MenuList += `${LETT++}. ${prefix}magma\n`
    MenuList += `${LETT++}. ${prefix}batman\n`
    MenuList += `${LETT++}. ${prefix}demon\n`
    MenuList += `${LETT++}. ${prefix}sci_fi\n`
    MenuList += `${LETT++}. ${prefix}ice\n`
    MenuList += `${LETT++}. ${prefix}sea_metal\n`
    MenuList += `${LETT++}. ${prefix}skeleton\n`
    MenuList += `${LETT++}. ${prefix}transformer\n`
    MenuList += `${LETT++}. ${prefix}warning\n`
    MenuList += `${LETT++}. ${prefix}denim\n\n`
    MenuList += `_ℹ️INFO USER_\n` 
    MenuList += `${LETT++} ${prefix}profile\n`
    MenuList += `${LETT++} ${prefix}inventori\n`
    MenuList += `${LETT++} ${prefix}leaderboard\n\n`
    MenuList += `_🛍️Transaksi 🛒_\n` 
    MenuList += `${LETT++} ${prefix}jual _barang_ _jumlah_\n`
    MenuList += `${LETT++} ${prefix}sel _barang_ _jumlah_\n`
    MenuList += `${LETT++} ${prefix}buy _barang_ _jumlah_\n`
    MenuList += `${LETT++} ${prefix}beli _barang_ _jumlah_\n\n`
    MenuList += `_📺Internet_\n`
    MenuList += `${LETT++} ${prefix}detiknews\n`
    MenuList += `${LETT++} ${prefix}wiki\n`
    MenuList += `${LETT++} ${prefix}wallpaperaccess\n`
    MenuList += `${LETT++} ${prefix}google\n`
    MenuList += `${LETT++} ${prefix}gempa\n`
    MenuList += `${LETT++} ${prefix}covidindo\n`
    MenuList += `${LETT++} ${prefix}jadwaltv\n`
    MenuList += `${LETT++} ${prefix}pinterest\n`
    MenuList += `${LETT++} ${prefix}lirik\n`
    MenuList += `${LETT++} ${prefix}brainly\n\n`
    MenuList += `_📸Random Pict_\n`
    MenuList += `${LETT++} ${prefix}waifu\n`
    MenuList += `${LETT++} ${prefix}awoo\n`
    MenuList += `${LETT++} ${prefix}shinobu\n`
    MenuList += `${LETT++} ${prefix}neko\n`
    MenuList += `${LETT++} ${prefix}megumin\n`
    MenuList += `${LETT++} ${prefix}couple\n\n`
    MenuList += `_🎷Sound🎷_\n`
    MenuList += `${LETT++} ${prefix}sound1\n\n`
    MenuList += `🃏Primbon🃏\n`
    MenuList += `${LETT++} ${prefix}artinama\n\n`
    MenuList += `_🛐Islami🛐_\n`
    MenuList += `${LETT++} ${prefix}kisahnabi\n\n`
    MenuList += `🇯🇵AniManga\n`
    MenuList += `${LETT++} ${prefix}manga\n`
    MenuList += `${LETT++} ${prefix}chara\n\n`
    MenuList += `_💽Random Video_\n`
    MenuList += `${LETT++} ${prefix}asupan\n\n`
    MenuList += `🏓_Game_\n`
    MenuList += `${LETT++} ${prefix}tebakgambar\n`
   
    
      
   //Participant Mention
   const mentionByTag = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
       
   const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
   mention != undefined ? mention.push(mentionByreply) : []
   const mentionUser = mention != undefined ? mention.filter(n => n) : []    
   const reply = async (teks) => {

   sock.sendMessage(from, 
        { text: teks, mentions: [m.sender] },
        { quoted : m })  
    }      
   
// Auto Read & Presence Online
sock.sendReadReceipt(from, m.sender, [m.key.id])
sock.sendPresenceUpdate('paused', from)
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `Thunder-Multi`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:rifza\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}               

sock.setStatus = (status) => {
        sock.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }

/*if (isCmd){
let uptime = await runtime(process.uptime())
await sock.setStatus(`ACTIVE DURING : ${runtime(process.uptime())} TYPE ${prefix}menu`) 
	}*/
	

   //function Afk
   const isAfkOn = afk.checkAfkUser(m.sender, _afk)    
     
   if (isGroup) {	
    for (let x of mentionUser) {
    if (afk.checkAfkUser(x, _afk) && !isCmd) {
    const getId = afk.getAfkId(x, _afk)
    const getReason = afk.getAfkReason(getId, _afk)
    const sejak = afk.getAfkSejak(getId, _afk) 
    const cptl = `*「 AFK MODE 」*\n\n*Sssttt! Orang itu sedang afk, harap jangan ganggu*\n*Alasan*  : ${getReason}\n*Sejak* : ${sejak}`
    if (m.key.fromMe){ return }
    reply(cptl)
    }
   }
   
   if (afk.checkAfkUser(m.sender, _afk) && !isCmd) {
    const pep = `*@${m.sender.split("@")[0]}* telah kembali dari AFK!\n\n*Selama* : ${clockString(new Date - afk.getAfkTime(m.sender, _afk))}`
    reply(pep)
    _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
    fs.writeFileSync('./storage/user/afk.json', JSON.stringify(_afk))
    } 
   }

      var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
       var date = new Date(dates);
        var bulan1 = date.getMonth();
    
   //function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('../../storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('../../storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('../../storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('../../storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('../../storage/user/buruan.js')
   let DarahAwal =  Options.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']     
 // Game
cekWaktuGame(sock, tebakgambar)
if (isPlayGame(from, tebakgambar)) {
if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
var htgm = randomNomor(100, 150)
addMonay(m.sender, htgm)
reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakgambar*`)
tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
}
}
  //Auto reset
  //Jika bot on di jam 24.00 maka limit dan darah bakal reset
  //Kalo off yaa kaga, Harus tunggu besok :v
    cron.schedule('0 0 * * *', () => {
     const reset = []
     _darahOrg = reset
     console.log('Darah di reset')
     fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
     console.log('Success!')
     }, 
     {
      scheduled: true,
      timezone: 'Asia/Jakarta'
     }
   )  
     cron.schedule('0 0 * * *', () => {
     const reset = []
     _limit = reset
     console.log('Limit Di reset')
     fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limit))
     console.log('Success!')
    }, 
    {
      scheduled: true,
      timezone: 'Asia/Jakarta'
     }
    ) 
      if (chatmessage.includes(`assalamualaikum`) || chatmessage.includes(`Asalamu'alaikum`) || chatmessage.includes(`Assalamualaikum`) || chatmessage.includes(`Asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`) || chatmessage.includes(`assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`)) {
       
        sock.sendMessage(from, 
        { text: 'Waalaikumsalam' }, 
        { quoted : m })  

       }    
    if (chatmessage.includes(`kontol`) || chatmessage.includes(`Kontol`)){
       sock.sendMessage(from, 
        { text: '🗿' }, 
        { quoted : m })  

       } 
         if (isAntiLink) 
if (chatmessage.includes('https://chat.whatsapp.com')) {
               if (!m.key.fromMe) {
               reply('Antilink\nKamu akan di kick')
             let number = m.sender
               await sock.groupParticipantsUpdate(from, [number], 'remove')
               }
	  }		
    if (chatmessage.startsWith("> ") && isOwner) {
	   console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEVAL\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
		const ev = (val) => {
        var pekok = JSON.stringify(val, null, 2)
        var nyir = util.format(pekok)
        if (pekok === undefined) {
        nyir = util.format(val)
}
        return reply(nyir)
}
        try {
        reply(util.format(eval(`;(async () => { ${chatmessage.slice(2)} })()`)))
        } catch (e) {
        reply(util.format(e))
        }
	    } 
	   else 
	    if (chatmessage.startsWith("$ ") && isOwner) {
        console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEXEC\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
        exec(chatmessage.slice(2), (err, stdout) => {
	    if (err) return reply(`${err}`)
	    if (stdout) reply(`${stdout}`)
	    })
        } 
        else 
        if (chatmessage.startsWith("=> ") && isOwner) {
	    console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEVAL\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
	    try {
	    let vul =  eval(chatmessage.slice(2))
	    if (typeof vul !== 'string') vul = require("util").inspect(vul)
		reply(`${vul}`)
        } catch (err) {
		reply(`${err}`)
	   }
     }  
  if (isCmd && !isGroup)
     console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + order} [${args.length}]`, 'purple'), 'from', color(m.pushName))
   
  if (isCmd && isGroup)
     console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + order} [${args.length}]`, 'purple'), 'from', color(m.pushName), 'in', color(groupName, 'orange'))

/*if (!isGroup && isCmd) reply(`Sorry you can't use bots in private chat, please join here so you can play this bot again\nLink Join : https://chat.whatsapp.com/CeApsIw6TwtE4ZogTmfpnr\nIndonesia : Kamu akan di block dalam 30 detik\nSegera masukan bot ke dalam grup kamu\nJika terlambat chat owner\nwa.me/6289501060783\n\nEnglish : You will be blocked in 30 seconds\nImmediately add bots to your group\nIf it's late, chat the owner\nwa.me/6289501060783\n*Sorry And Thanks*`) 
await sleep(45000) 
await sock.updateBlockStatus(from, "block")*/

 switch (order) {
case 'lirik':
if (args.length < 1) return reply('title?')
reply('Wait')
lirikLagu(q).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'jadwaltv':
if (!q) return reply('Kirim perintah *#jadwaltv [channel]*')
reply(await jadwaltv(q))
break
case 'covidindo':
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
sock.sendMessage(from, {text : `Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
case 'gempa':
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
sock.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            await sock.sendMessage(from, {image : { url : acak }, caption : 'Nih bang'})
            break
break
case 'tebakgambar':
if (isPlayGame(from, tebakgambar)) return reply(`Masih ada game yang belum diselesaikan`)
kotz.tebakgambar().then( data => {
const data2 = data[0]
data2.jawaban = data2.jawaban.split('Jawaban ').join('')
var teks = `*TEBAK GAMBAR*\n\nPetunjuk : ${data2.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`
sock.sendMessage(from, { image: { url: data2.image }, caption: teks }, { quoted: m })
.then( res => {
var jawab = data2.jawaban.toLowerCase()
addPlayGame(from, 'Tebak Gambar', jawab, gamewaktu, res, tebakgambar)
})
})
break
case 'google': {
if (!q) reply(`*Example : ${prefix + order} Cara buat bakso*`) 
google({'query': q}).then(res => {
let teks = `Google Search From : ${q}\n\n`
for (let g of res) {
teks += `〽️ *Title* : ${g.title}\n`
teks += `🪙 *Description* : ${g.snippet}\n`
teks += `🪃 *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
sock.sendMessage(from, { image : { url : 'https://telegra.ph/file/75ffe3024a0ff8d563da5.jpg' }, caption : teks }) 
})
}
break
        
case 'setdesc': case 'setdescription':
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
if (!q) return reply(`Kirim perintah ${prefix + order} teks`)
await sock.groupUpdateDescription(from, q)
break
case 'group': case 'grup':
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
if (!q) return reply(`Kirim perintah ${prefix + order} _options_\nOptions : close & open\nContoh : ${prefix + order} close`)
if (q == "close") {
  sock.groupSettingUpdate(from, 'announcement')
  reply(`*Sukses menutup group*`)
} else if (q == "open") {
  sock.groupSettingUpdate(from, 'not_announcement')
  reply(`*Sukses membuka group*`)
} else {
  reply(`Kirim perintah ${prefix + order} _options_\nOptions : close & open\nContoh : ${prefix + order} close`)
}
break
case 'revoke':
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
await sock.groupRevokeInvite(from)
break
case 'setnamegroup':
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
if (!q) reply('Diganti jadi apa') 
await sock.groupUpdateSubject(from, q)
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
const res2 = await wikiSearch(q).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
const result2 = `*Judul :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
sock.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
case 'asupan':
if (q.toLowerCase() === "geayubi") {
const oi = geayubi
const jsonData = JSON.parse(oi);
const xm1 = Math.floor(Math.random() * jsonData.length);
const xm2 = jsonData[xm1];
console.log(xm2.url) 
sock.sendMessage(from, {video : { url : xm2.url }, caption : 'nih'}) 
} else if  (q.toLowerCase() === "bocil") {
const ooi = bocil
const jsonData = JSON.parse(ooi);
const x1 = Math.floor(Math.random() * jsonData.length);
const x2 = jsonData[x1];
console.log(x2.url) 
sock.sendMessage(from, {video : { url : x2.url }, caption : 'nih'}) 
} else {
reply(`𝗔𝘀𝘂𝗽𝗮𝗻 𝗮𝗽𝗮\n${prefix + order} bocil\n${prefix + order} geayubi`) 
}
break

case 'jadigambar': case 'toimg': case 'toimage':{
   if (!m.isQuotedSticker) return reply('Reply stikernya!')
   if (!m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) return reply ('Kalo toimg stikernya jangan yang bergerak tod!')
    reply('Please wait.....')
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync(`./666.jpg`, buffer)
     
     sock.sendMessage(from, { image: { url: `./666.jpg` }}, { quoted: m })
   }
  break
 case 'tomp4':{
   if (!m.isQuotedSticker) return reply('Reply stikernya!')
   if (m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) return reply ('Kalo yang ini stikernya wajib yang bergerak tod!')
    reply('Please wait.....')
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync(`./999.webp`, buffer)
     webp2mp4File(`./999.webp`).then( data => {
     fs.unlinkSync(`./999.webp`)
     sock.sendMessage(from, { video: { url: data.result }}, { quoted: m })
     })
   }
  break
case'cnn':
var server = await cnn()
//console.log(server)
let cn = 'CNN NEWS'
for (let i = 0; i < server.length; i++) {
cn += `\n\nTitle : ${server[i].judul}\nLink : ${server[i].link}\nImage: ${server[i].thumb}`
}
sock.sendMessage(from, {image : { url : server[10].thumb }, caption : cn}) 
break
case 'manga':{
if (!q) return reply(`Masukkan query!`)
let res = await fetch(`https://api.jikan.moe/v3/search/manga?q=${q}`)
let json = await res.json()
let { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
let mangaingfo = `*Title:* ${title}
*Chapters:* ${chapters}
*Volumes:* ${volumes}
*Score:* ${score}
*Synopsis:* ${synopsis}
*Link*: ${url}`
sock.sendMessage(from, {image : { url : image_url }, caption: mangaingfo})
} 
  break
case 'broadcast':
if (!isOwner) return reply('khusus owner')
if (args.length < 1) return reply(`Masukkan isi pesannya`)
const bc = await store.chats.all()
for (let i of bc) {
sock.sendMessage(i.id, { text: `*[ DEFFBOTZ BROADCAST ]*\n\n${q}` })
}
break
case 'couple': {
reply('Tunggu sebentar')
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
sock.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
sock.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
 case 'speed':
let timestamp = speed();
let latensi = speed() - timestamp
reply(`${latensi.toFixed(4)} Second`)
break
case 'hoorror_blood':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.hoorror_blood}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break 
   case 'sand':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.sand}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break
   case 'magma':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.magma}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'blackpink':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.blackpink}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sketch':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.sketch}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'glass':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.glass}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break
   case 'lightglow':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.lightglow}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sci_fi':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
      if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
      kurangLimit(m.sender, 1)
      reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
      let link = `${textproo.sci_fi}`
      let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
  
}
  break
  case 'ice':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.ice}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'demon':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.gdemon}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'batman':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.batman}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sea_metal':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.sea_metal}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'skeleton':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.skeleton}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'warning':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.warning}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'transformer':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.transformer}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'denim':{
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.denim}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
case 'kisahnabi':
const res = await Searchnabi(q) 
const result = `*Nama* : ${res.name}\n*Wafat* : ${res.wafat_usia}\n*Kelahiran* : ${res.kelahiran}\n*Singgah* : ${res.singgah}\n*Kisah* : ${res.kisah}`
sock.sendMessage(from, {image : { url : 'https://i.ibb.co/Kw282gw/b54b1faadf3b.jpg' }, caption : result}) 
break	
case 'hidetag':
if (!isGroupAdmins && !isOwner) return reply('Khusus Admin')
let mem = [];
groupMembers.map( i => mem.push(i.id) )
sock.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'pinterest': {
reply('Tunggu Sebentar')
const anu = await pinterest(q)
const result = anu[Math.floor(Math.random(), anu.length)]
sock.sendMessage(from, { image: { url: result }, caption: '▹ Media Url : '+result }, { quoted: m })
            }
            break
  case 'antilink':
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin') 
if (!isBotGroupAdmins) return reply('Bot bukan admin') 
if (q === 'on') {
if (isAntiLink) return reply('Sudah Aktif Kak')
antilink.push(m.sender)
fs.writeFileSync('./storage/user/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan fitur antilink')
sock.sendMessage(from,  {text: `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`})
} else if (q === 'off') {
if (!isAntiLink) return reply('Sudah Mati Kak')
var ini = antilink.indexOf(m.sender)
antilink.splice(ini, 1)
fs.writeFileSync('./storage/user/antilink.json', JSON.stringify(antilink))
reply('Sukses menonaktifkan fitur antilink')
} else if (!q){
 reply(`Pilih Antilink On / Off `)
}
break 		
  case 'add':{
   if (!isGroup) return reply('Khusus Grup')
   if (!isGroupAdmins) return reply('Khusus Admin')
   if (!isBotGroupAdmins) return reply('Bot Bukan Admin')
   if (args[1]){
    let number = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    sock.groupParticipantsUpdate(from, [number], "add")
   } 
  else 
   {
    sock.groupParticipantsUpdate(from, mentionUser, "add")
   }
   }
  break
  case 'kick':{
   if (!isGroup) return reply('Khusus Grup')
   if (!isGroupAdmins) return reply('Khusus Admin')
   if (!isBotGroupAdmins) return reply('Bot Bukan Admin')
   console.log(mentionUser)
   sock.groupParticipantsUpdate(from, mentionUser, "remove")
   }
  break
  case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'menambang':{
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai menambang🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi
 case 'beli': case 'buy':{
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + order} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + order} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + order} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Format salah!") }
 }
 break
 case 'sel': case 'jual':{//BY LORD RIFZA
 if (!q) return  reply(`Mau jual apa?\nExample : ${prefix + order} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Format salah!") }

 }
 break

 case 'heal':{
 if (!isCekDarah < 1) return reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return reply('Darah kamu sudah penuh')
 if (isPotion < 1) return reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
 case 'owner': case 'creator': {
   for (let x of Options.info.owner) {
   sock.sendContact(from, x.split('@s.whatsapp.net')[0], Options.info.ownerName, m)
	}			    
   }
  break
  case 'artinama':{
  if (!q) return reply('Namanya siapa?')
  let namalu = await arti_nama(q)
  let teksnya = `[ *NAMA* : ${namalu.message.nama} ]\n*Arti* : ${namalu.message.arti}`
  reply(teksnya)
  console.log(namalu)
  }
  break
  
  case 'inventori': case 'profile':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
  
  let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Darah kamu* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Besi kamu* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Emas Kamu* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Limit kamu* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Potion Kamu* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
     teksehmazeh += `*🐟Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${Options.info.botName}*_`
  
  reply(teksehmazeh)
  }
  break
  case 'mancing':{
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  if (isUmpan < 1) return reply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
  reply("1 umpan terpakai")
  var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  var ditangkap = Math.ceil(Math.random() * 20)
  setTimeout( () => {
  let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
  let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Mancing lagi🎣'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/mancing.jpg' },
      caption: caption,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai memancing🎣`)     
  }, 1500)
  kurangUmpan(m.sender, 1)
  addIkan(m.sender, ditangkap)	     
  }   
  break  
  case 'darah':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  let dapat =  getDarah(m.sender)
  reply(`${dapat}`)
  }
  break
  case 'bacok':{
  if (isCekDarah < 1) return reply('Darah kamu habis')
   kurangDarah(m.sender, 10)
  reply('success✔️')
  }
  break
  case 'menu2':{  
   let button = [{
     index: 1, 
      urlButton: {
       displayText: 'My Github', 
       url: 'https://github.com/DEFF1602'
       } 
     },     
     {
     index: 2, 
      quickReplyButton: {
       displayText: 'Click', 
       id: 'tes'
      } 
    },
    { 
     index: 3, 
      quickReplyButton: {
       displayText: 'Click2', 
       id: '#tes'
        } 
     },
     {
     index: 4, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
        } 
      },]
      m.templateButon5IMG(from, MenuList, Options.info.botName, thumb, button, m)
   }
   break
   case 'menu':
   let buttons = [{
     index: 1, 
      urlButton: {
       displayText: '𝗬𝗼𝘂𝘁𝘂𝗯𝗲', 
       url: 'https://youtube.com/channel/UCSAcYW8MkFyaVQz9asa3q5Q'
       } 
     },     
     {
      index: 1, 
       urlButton: {
       displayText: '𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺', 
       url: 'https://www.instagram.com/deff.xyz'
       }
       }, 
       {
     index: 2, 
      quickReplyButton: {
       displayText: '🌀sᴘᴇᴇᴅ', 
       id: '#speed'
      } 
    },
    { 
     index: 3, 
      quickReplyButton: {
       displayText: '⚜️ᴏᴡɴᴇʀ', 
       id: '#owner'
        } 
     }
      ]
    await m.sendButton(
    from, 
    MenuList,
    Options.info.botName,
    buttons,
    thumb, 
    await m.createMsg(
     from, 
     {
     video: {
      url: './storage/video/menu1.mp4', 
      caption: "Not detected"
      }, 
      gifPlayback: true, 
      gifAttribution: "GIPHY"
     }
     )
    )
   break
   case 'tes':{
     m.reply(from, 'hallo', { quoted : m } )
   }
   break
   case 'temp':{
   const templateMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: 'My Github', 
       url: 'https://github.com/DEFF1602'
      } },
     {
     index: 2, 
     callButton: {
      displayText: 'Owner', 
       phoneNumber: '6287708357324'
      } },
     {
     index: 3, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
       } },
    { 
     index: 4, 
      quickReplyButton: {
       displayText: 'Click2', 
       id: '#tes'
       } },
     {
     index: 5, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
       } },
     ],
    }
   const sendm =  sock.sendMessage(
    from, 
    templateMessage
    )
   }
  break  
  case 'runtime':{
    const templateMessage = {
    text: "ACTIVE FOR",
    footer: `${runtime(process.uptime())}`,
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: 'My Github', 
       url: 'https://github.com/DEFF1602'
       } }
      ]
     }
     const sendm =  sock.sendMessage(
       from, 
       templateMessage
      )
    }
  break  
  case 'listsection1':{
  // send a list message!
   const sections = [
    {
	title: "Section",
	rows: [
	   {
	    title: "List1", 
	    rowId: "option"
	   },	    
     ]
    }    
    ]

  const listMessage = {
   text: "This is a list",
   footer: "This is footer text",
   title: "List message",
   buttonText: "Required, text on the button to view the list",
   sections
   }

  const sendm =  sock.sendMessage(
     from, 
     listMessage
  )

  }
  break
  case 'listsection2':{
  // send a list message!
   const sections = [
    {
	title: "Section 1",
	rows: [
	    {
	     title: "Option 1", 
    	 rowId: "option1"
	    },
	    {
	     title: "Option 2", 
	     rowId: "option2", 
	     description: "This is a description"
	    }
     ]
    },
    {
	title: "Section 2",
	rows: [
	    {
	     title: "Option 3", 
	     rowId: "option3"
	     },
	    {
	     title: "Option 4", 
	     rowId: "option4", 
	     description: "This is a description V2"
	    }
       ]
     },
    ]

  const listMessage = {
   text: "This is a list",
   footer: "This is footer text",
   title: "List message",
   buttonText: "Required, text on the button to view the list",
   sections
   }

  const sendm =  sock.sendMessage(
      from, 
      listMessage
    )

  }
  break
  
  case 'detiknews': case 'detik':{
  if (args.length < 1) return m.reply(from, 'Cari berita apa?', { quoted : m } )
  const aku_biji = await detikNews(args.join(' ')).catch(e => console.log("Undefined"))
  console.log(aku_biji)   
  let sections = []   
  for (let i = 0; i < aku_biji.length; i++) {
  const list = {title: `${aku_biji[i].Title}`,
  rows: [
	    {
	     title: `Result detik news ${i + 1}`, 
	     rowId: `#reply ${aku_biji[i].Link}`,
	     description: ``
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  sock.sendMessage(
      from, 
      {
       text: "Cari berita di detik.com",
       footer: Options.info.botName,
       title: "[ DETIK NEWS SEARCH 🔎 ]",
       buttonText: "Click and see search results➡️",
       sections
      }
    )  
   }
  break
case 'brainly':
const anj = await brainly(q)
  var hmm2 = '────────────────💟\n'
  for (let Y of anj.data) {
  hmm2 += `*Pertanyaan:* ${Y.pertanyaan}\n\n*Jawaban:* ${Y.jawaban[0].text}\n──────────────────💖\n`
  }
  sock.sendMessage(from, {image : { url : 'https://telegra.ph/file/ba004c72b2222f4913e99.jpg' }, caption : hmm2}) 
  
break		
  
  case 'reply':{
  let textz = q || 'undefined'
  m.reply(from, textz, { quoted : m } )
  }
  break

  case 'play': case 'lagu': case 'musik': case 'yts': case 'ytsearch': 
  const _0x56d44b=_0x1b5c;function _0x1b5c(_0x38b743,_0x920b94){const _0x2fbb48=_0x2fbb();return _0x1b5c=function(_0x1b5cbb,_0x2e08b8){_0x1b5cbb=_0x1b5cbb-0x78;let _0x3a6547=_0x2fbb48[_0x1b5cbb];return _0x3a6547;},_0x1b5c(_0x38b743,_0x920b94);}function _0x2fbb(){const _0x382cc7=['230210fKfprs','title','artist','label','reply','7560810fHUefC','\x0a\x0a💽Album\x20:\x20','lagu\x20apa?','\x0a\x0a🔎Source\x20:\x20','length','7nQOZtb','352683pizFiD','#youtubemp4\x20','isYtMusic','url','push','\x0a\x0a📊Duration\x20:\x20','duration','YouTube\x20Music','65925DPjQPy','album','join','\x0a\x0aℹ️Id\x20:\x20','2525720IrHXuf','YouTube','👤Artist\x20:\x20','20vfnVSQ','424AJQMXw','sendMessage','3538482CDXJnd','#youtubemp3\x20','515000HfUrrt','botName','[\x20YouTube\x20Music\x20Search🔎\x20]','[\x20▶️\x20]\x20MP4'];_0x2fbb=function(){return _0x382cc7;};return _0x2fbb();}(function(_0x2f7a1c,_0x4e2e02){const _0x3efd71=_0x1b5c,_0x20f1a6=_0x2f7a1c();while(!![]){try{const _0x30c251=parseInt(_0x3efd71(0x8f))/0x1+parseInt(_0x3efd71(0x8b))/0x2+-parseInt(_0x3efd71(0x9a))/0x3*(-parseInt(_0x3efd71(0x86))/0x4)+-parseInt(_0x3efd71(0x83))/0x5+-parseInt(_0x3efd71(0x89))/0x6*(parseInt(_0x3efd71(0x99))/0x7)+parseInt(_0x3efd71(0x87))/0x8*(-parseInt(_0x3efd71(0x7f))/0x9)+parseInt(_0x3efd71(0x94))/0xa;if(_0x30c251===_0x4e2e02)break;else _0x20f1a6['push'](_0x20f1a6['shift']());}catch(_0x4f9d50){_0x20f1a6['push'](_0x20f1a6['shift']());}}}(_0x2fbb,0x55140));{if(args[_0x56d44b(0x98)]<0x1)return m[_0x56d44b(0x93)](from,_0x56d44b(0x96),{'quoted':m});const fresh=await searchResult(args[_0x56d44b(0x81)]('\x20'));console['log'](fresh);let sections=[];for(let i=0x0;i<fresh['length'];i++){const list={'title':i+0x1+'.\x20'+fresh[i][_0x56d44b(0x90)],'rows':[{'title':'[\x20🎵\x20]\x20MP3','rowId':_0x56d44b(0x8a)+fresh[i][_0x56d44b(0x7a)],'description':_0x56d44b(0x85)+fresh[i][_0x56d44b(0x91)]+_0x56d44b(0x95)+fresh[i][_0x56d44b(0x80)]+_0x56d44b(0x7c)+fresh[i][_0x56d44b(0x7d)]['label']+_0x56d44b(0x97)+(fresh[i][_0x56d44b(0x79)]?_0x56d44b(0x7e):_0x56d44b(0x84))+_0x56d44b(0x82)+fresh[i]['id']},{'title':_0x56d44b(0x8e),'rowId':_0x56d44b(0x78)+fresh[i][_0x56d44b(0x7a)],'description':_0x56d44b(0x85)+fresh[i][_0x56d44b(0x91)]+_0x56d44b(0x95)+fresh[i][_0x56d44b(0x80)]+_0x56d44b(0x7c)+fresh[i][_0x56d44b(0x7d)][_0x56d44b(0x92)]+_0x56d44b(0x97)+(fresh[i][_0x56d44b(0x79)]?_0x56d44b(0x7e):_0x56d44b(0x84))+_0x56d44b(0x82)+fresh[i]['id']}]};sections[_0x56d44b(0x7b)](list);}const sendm=sock[_0x56d44b(0x88)](from,{'text':'The\x20most\x20complete\x20collection\x20of\x20songs\x20mp3/mp4✔️','footer':Options['info'][_0x56d44b(0x8c)],'title':_0x56d44b(0x8d),'buttonText':'Click\x20and\x20see\x20search\x20results➡️','sections':sections});}
  break
  case 'ytmp3':
  case 'youtubemp3':{
  if (args.length < 1) return reply('linknya?')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)  
   try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      sock.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
  case 'ytmp4':
  case 'youtubemp4':{
  if (args.length < 1) return reply('linknya?')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
   try{
    await ytv(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      sock.sendMessage(from, { video: { url: dl_link }, caption: "This is the result\nHope you are happy with our service😊" }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
  
  /*
  case 'p':
   sock.sendMessage(
     from, 
     { 
      sticker: { 
       url: "https://f.top4top.io/p_2252t7a7n1.jpg" 
       } 
      }, 
     { quoted: m }
    )
  break 
  */

  case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': case 'stikergif': case 'stikgif':{			   			   
  try{
   if (m.isQuotedImage) {
    var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
    var buffer = Buffer.from([])
    for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
    }
   
    let ran = '666.webp'
    fs.writeFileSync(`./${ran}`, buffer)
     ffmpeg(`./${ran}`)
     .on("error", console.error)
     .on("end", () => {
      exec(`webpmux -set exif ./FunctionMD/sticker/data.exif ./${ran} -o ./${ran}`, async (error) => {
      sock.sendMessage(
          from, 
          { 
         sticker: fs.readFileSync(`./${ran}`) 
         })
				
        fs.unlinkSync(`./${ran}`)
			       
       })
      })
	 .addOutputOptions([
       "-vcodec", 
 	   "libwebp", 
 	   "-vf", 
	   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
	 .toFormat('webp')
	 .save(`${ran}`)
	 
    } 
    
   else 
   
  if (m.isQuotedVideo) {
   var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
   var buffer = Buffer.from([])
   for await(const chunk of stream) {
	  buffer = Buffer.concat([buffer, chunk])
	 }
   var rand2 = '777.webp'
	fs.writeFileSync(`./${rand2}`, buffer)
     ffmpeg(`./${rand2}`)
	 .on("error", console.error)
	 .on("end", () => {
	 exec(`webpmux -set exif ./FunctionMD/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
	 sock.sendMessage(
	  from, 
	    { 
	     sticker: fs.readFileSync(`./${rand2}`) 
	     }, 
	    { 
	     quoted: m 
        })
    	fs.unlinkSync(`./${rand2}`)
	  })
	})
   .addOutputOptions([
     "-vcodec", 
     "libwebp", 
     "-vf", 
     "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
    ])
   .toFormat('webp')
   .save(`${rand2}`)
   
    } 
    
   else 
   
    {
    
      m.reply(
        from, 
        `Reply gambar/video\n  [ *BATAS MAKSIMUM 10 DETIK*❗ ]\nDengan caption : ${prefix + order}`, 
        { 
         quoted : m 
         } 
       )
      }
     } catch (e){ 
     sock.sendMessage(
     from, 
     { 
      sticker: { 
       url: "https://f.top4top.io/p_2252t7a7n1.jpg" 
       } 
      }, 
     { quoted: m }
    )
    }
   }
  break
  
  case 'promote':{
  // title & participant
  console.log(mentionUser)
		await sock.groupParticipantsUpdate(
		 from, 
		 mentionUser, 
		 "promote"
		 )
	   .catch((err) => m.reply(from, err, {quoted : m }))
	  }
  break
  case 'demote':{
  // title & participant
  console.log(mentionUser)
   sock.groupParticipantsUpdate(
	 	  from, 
		  mentionUser, 
		  "demote"
		 )
		 .catch((err) => m.reply(from, err, {quoted : m })
	  )
	}
  break
  case 'sound1':{
   sock.sendMessage(
   from, 
   { 
    audio: {
     url : `https://k.top4top.io/m_2279djqoy1.mp3`
    }, 
    mimetype: 'audio/mp4', 
    ptt: true
    }, 
    {
    quoted: m
   }
   )
  }
  break
  case 'waifu': case 'megumin':
case 'shinobu':
case 'awoo': case 'neko':{
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
   let za = await fetchJson(`https:/\/\waifu.pics/api/sfw/${order}`)
            
  
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Next'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: za.url },
      caption: "Result",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
  }
 break

  case 'hapus': case 'delete': case 'del': case 'd':{
      if (!m.quoted) return  m.reply(from, 'Reply pesanya!', { quoted : m })
       if (!m.quoted.isBaileys) return  m.reply(from, 'Fitur ini hanya berlaku menghapus pesan bot yang di kirim oleh saya!', { quoted : m })
          sock.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
         }
      break
  case 'wall':
  case 'wallpaperaccess':{
  if (args.length < 1) return m.reply(from, 'Cari gambar apa?', { quoted : m } )
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
  try{
  const aku_biji = await wallpaperaccess(q)
  let jsonData = aku_biji
  let kamu_telor = Math.floor(Math.random() * jsonData.length);
  let anunya = jsonData[kamu_telor];
 
  console.log(anunya.link)
  let buttons = [
      {
       buttonId: `#wallpaperaccess ${q}`, 
       buttonText: {
        displayText: 'Next'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: anunya.link },
      caption: "Result",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
    } catch (e) { e = String(e)
      m.reply(from, 'Tidak ditemukan!', { quoted : m } )
   }
  }
  break  
  case 'sci_fi':
  case 'blackpink':{
  if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
  let link = `${textproo.sci_fi}`
  let anu = await textpro(link, q)
  console.log(anu)
   sock.sendMessage(
   from, 
   { 
    image: {
     url : anu
    }, 
    caption: `Nih kak, jangan lupa follow ig owner\n https://www.instagram.com/rifza.p.p`   
    }, 
    {
    quoted: m
   }
   )
  }
  break

  case 'tiktokaudio':{
  if (!q) return reply('Linknya?')
  if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`) 
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    sock.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break

  case 'tiktokvideo':{
  if (!q) return reply('Linknya?')
  if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
    sock.sendMessage(from, { video: { url: musim_duren_v }, caption: "This is the result\nHope you are happy with our service😊" }, { quoted: m })
   }
  break
  case 'afk':{
  let date = + new Date
  const alasan = q ? q : 'Gatau ngapain.'
  afk.addAfkUser(m.sender, date, alasan, time, _afk)
  reply(`*@${m.sender.split("@")[0]}* sekarang sedang afk\n*Dengan alasan* : ${alasan}`)
  }
  break
  default:
  
  if (isCmd) {
   
m.reply(
    from, 
    '_Command Notfound_', 
    { 
     quoted : m 
    }
   )
  } 
   
  } } catch(e) { e = String(e) 
  if (e.includes("rate-overlimit")) {return}
  if (e.includes('Connection Closed')){ return }
  if (e.includes('Timed Out')){ return }
   console.log(color(e, 'cyan')) 
  } }
  
  const LordThunder = require.resolve(__filename)
  fs.watchFile(LordThunder, () => {
  fs.unwatchFile(LordThunder)
  console.log(color(`New! >`, 'cyan'), color(`${__filename}`, 'gray'))
  delete require.cache[LordThunder]
  require(LordThunder)
  } )