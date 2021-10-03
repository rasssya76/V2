/* WLCOME

Author: Fernazer
Author2: Rudi Achil

TQTQ TO DALAM BASE INI 

RUDI ACHIL (Team)
HEGA (Team)
AJIS JS (Team)
ALVA RIZI (Team)
FERNAZER (Author)

// TQTQ BIG TO

// ORTU
// ALLAH SWT
// DOI GUE, MWEHEHE YG BUAT SEMMGAT HEHE 

// TQTQ TO PUBLIC

// PENGGUNA BOT WA
// SUBSCRIBER GUE
// PENGGUNA BOT FERNAZER
// ALL CREATOR BOT

SILAHKAN DI PAKE YA, KLO ADA YG DI ENC BRARTI GK BOLEH KALIAN UBAH 
GPP SC NYA JELEK YG PENTING HASIL USAHA  SENDIRI

/******************************* FERNAZER *******************************/
/******************************* LOAD WACONNECT *******************************/
const {
  WAConnection: _WAConnection,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  GroupSettingChange,
  ChatModification,
  MessageType
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
/******************************* FERNAZER *******************************/
/******************************* LOAD MODULES *******************************/
const util = require('util');
const translate = require("@vitalets/google-translate-api");
const axios = require("axios")
const crypto = require('crypto')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const fs = require('fs')
const toMs = require('ms')
const ms = require('parse-ms')
const qrcode = require('qrcode')
const moment = require('moment-timezone')
const { spawn, exec } = require('child_process')
const fetch = require('node-fetch')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const googleIt = require('google-it')
const googleImage = require('g-i-s')
const yts = require( 'yt-search')
const ig = require('insta-fetcher')
const request = require('request');
const cheerio = require('cheerio') 
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
/******************************* FERNAZER *******************************/
/******************************* LOAD LIB *******************************/
const { msgFilter } = require('./lib/antispam')
const { color, bgcolor } = require('./lib/color')
const {dafontDown,dafontSearch } = require('./lib/dafont')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins,getRandom,start, info, success, close } = require('./lib/functions')
const { pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly } = require('./lib/photooxy')
const {  fetchJson,  getBase64,  createExif } = require('./lib/fetcher')
const { yta, ytv, upload } = require('./lib/ytdl')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { mediafireDl } = require('./lib/mediafire')
const { Otakudesu } = require('./lib/otakudesu')
const { pinterest } = require('./lib/pinterest')
const { recognize } = require('./lib/ocr')
const { webp2mp4File} = require('./lib/webp2mp4')
const { webp2gifFile } = require("./lib/gif.js")
const { exif } = require('./lib/exif')
const setGelud = require('./lib/gameGelud.js')
const F = require('./lib/fernazer')
/******************************* FERNAZER *******************************/
/******************************* RETURN *******************************/
const baterainye = JSON.parse(fs.readFileSync('./settings/frnazer.json'))
const {
    batre, 
    chargi, 
} = baterainye
const setting = JSON.parse(fs.readFileSync('./settings/pengaturan.json'))
/******************************* FERNAZER *******************************/
/******************************* RETURN *******************************/
let antiviewonce = JSON.parse(fs.readFileSync('./database/group/antiviewonce.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
let antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
/******************************* FERNAZER *******************************/
/******************************* RETURN *******************************/
const _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const voting = JSON.parse(fs.readFileSync('./database/voting.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const { addVote, delVote } = require('./database/vote.js')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const antitelegram = JSON.parse(fs.readFileSync('./database/group/antitelegram.json'))
const antilinkytv = JSON.parse(fs.readFileSync('./database/group/antilinkyt.json'))
const antilinkytc = JSON.parse(fs.readFileSync('./database/group/antilinkytchannel.json'))
const a = '```'
const mastahfernazer = 'BELUM JADI BRE'
/******************************* FERNAZER *******************************/
/******************************* RETURN *******************************/
// Tictactoe By https://github.com/Fernazer
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
lolkey = 'e1c2d00f694146152526e03d' // Klo Abis Beli Sendiri
ban = []
join_fer = []
blocked = []
hit_today = []
battre = batre
charg = chargi
charging = false
baterai = {
    baterai: 0,
    cas: false
}
aread = false
ngetik = false
vn = true
autocomposing = true 
autorecording = true 
autojoin = false;
/******************************* FERNAZER *******************************/
/******************************* UBAH DI SETTING *******************************/
prefix = setting.prefix
namabotlu = setting.namabotlu
gopay = setting.gopay
/******************************* FERNAZER *******************************/
/******************************* FUNCTION *******************************/
function addMetadata(packname, author) {
	if (!packname) packname = `${config.packname}`; if (!author) author = ` ${config.author}`;
	author = author.replace(/[^a-zA-Z0-9]/g, '');
	let name = `${author}_${packname}`

	if (fs.existsSync(`./src/sticker/${name}.exif`)) {
		return `./src/sticker/${name}.exif`
	}
	const json = {
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}

	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

	let len = JSON.stringify(json).length
	let last

	if (len > 256) {
		len = len - 256
		bytes.unshift(0x01)
	} else {
		bytes.unshift(0x00)
	}

	if (len < 16) {
		last = len.toString(16)
		last = "0" + len
	} else {
		last = len.toString(16)
	}

	const buf2 = Buffer.from(last, "hex")
	const buf3 = Buffer.from(bytes)
	const buf4 = Buffer.from(JSON.stringify(json))

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

	fs.writeFile(`./src/sticker/${name}.exif`, buffer, (err) => {
		return `./src/sticker/${name}.exif`
	}
	)
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}       
const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
 function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }

function convertBalanceToString(angka) {
	var balancenyeini = '';
	var angkarev = angka.toString().split('').reverse().join('');
	for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) balancenyeini += angkarev.substr(i, 3) + '.';
	return '' + balancenyeini.split('', balancenyeini.length - 1).reverse().join('');
}
function randomString(length){
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyzsadw'
    let str = '';
	lengt = length || 9
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * 65)];
    }
	return str
}
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
        case 0: hari = "Minggu"; break;
        case 1: hari = "Senin"; break;
        case 2: hari = "Selasa"; break;
        case 3: hari = "Rabu"; break;
        case 4: hari = "Kamis"; break;
        case 5: hari = "Jum`at"; break;
        case 6: hari = "Sabtu"; break;
        }
        switch(bulan1) {
        case 0: bulan1 = "Januari"; break;
        case 1: bulan1 = "Februari"; break;
        case 2: bulan1 = "Maret"; break;
        case 3: bulan1 = "April"; break;
        case 4: bulan1 = "Mei"; break;
        case 5: bulan1 = "Juni"; break;
        case 6: bulan1 = "Juli"; break;
        case 7: bulan1 = "Agustus"; break;
        case 8: bulan1 = "September"; break;
        case 9: bulan1 = "Oktober"; break;
        case 10: bulan1 = "November"; break;
        case 11: bulan1 = "Desember"; break;
        }
        var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
        var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";
            
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
                        
/******************************* FERNAZER *******************************/
/******************************* STICK CMD *******************************/
function _0x5863(_0x4dd050,_0x353181){const _0x1b5a4d=_0x1b5a();return _0x5863=function(_0x5863b4,_0x182f9b){_0x5863b4=_0x5863b4-0x6c;let _0x83a7ef=_0x1b5a4d[_0x5863b4];return _0x83a7ef;},_0x5863(_0x4dd050,_0x353181);}(function(_0x335b82,_0x583fc2){const _0x1f708d=_0x5863,_0x5e1217=_0x335b82();while(!![]){try{const _0x593873=parseInt(_0x1f708d(0x71))/0x1*(-parseInt(_0x1f708d(0x6d))/0x2)+-parseInt(_0x1f708d(0x72))/0x3*(parseInt(_0x1f708d(0x6e))/0x4)+-parseInt(_0x1f708d(0x6c))/0x5+-parseInt(_0x1f708d(0x70))/0x6+parseInt(_0x1f708d(0x7a))/0x7+-parseInt(_0x1f708d(0x76))/0x8+parseInt(_0x1f708d(0x79))/0x9;if(_0x593873===_0x583fc2)break;else _0x5e1217['push'](_0x5e1217['shift']());}catch(_0x243920){_0x5e1217['push'](_0x5e1217['shift']());}}}(_0x1b5a,0xdbd16));const addCmd=(_0x1562b8,_0x3a3bbd)=>{const _0x1b88fa=_0x5863,_0x34d2b1={'id':_0x1562b8,'chats':_0x3a3bbd};_scommand[_0x1b88fa(0x75)](_0x34d2b1),fs[_0x1b88fa(0x73)](_0x1b88fa(0x6f),JSON[_0x1b88fa(0x74)](_scommand));},getCommandPosition=_0x2673a6=>{const _0x2cbc42=_0x5863;let _0x28011a=null;Object[_0x2cbc42(0x78)](_scommand)[_0x2cbc42(0x77)](_0x1ba9dc=>{_scommand[_0x1ba9dc]['id']===_0x2673a6&&(_0x28011a=_0x1ba9dc);});if(_0x28011a!==null)return _0x28011a;},getCmd=_0x345d0d=>{const _0x4e5f75=_0x5863;let _0x2cfdd2=null;Object[_0x4e5f75(0x78)](_scommand)[_0x4e5f75(0x77)](_0x154dfb=>{_scommand[_0x154dfb]['id']===_0x345d0d&&(_0x2cfdd2=_0x154dfb);});if(_0x2cfdd2!==null)return _scommand[_0x2cfdd2][_0x4e5f75(0x7b)];},checkSCommand=_0x1aec6f=>{const _0x2a92df=_0x5863;let _0x1875fa=![];return Object[_0x2a92df(0x78)](_scommand)[_0x2a92df(0x77)](_0x34a9e6=>{_scommand[_0x34a9e6]['id']===_0x1aec6f&&(_0x1875fa=!![]);}),_0x1875fa;};function _0x1b5a(){const _0xd62c18=['3iGMNnm','writeFileSync','stringify','push','6496928TEgKcr','forEach','keys','44499069JjzxML','6699861zlKeYk','chats','621275eahtrC','3175858YZWeyU','6610036ZDaxCc','./database/scommand.json','4945686YJGdpY','1pyxKVJ'];_0x1b5a=function(){return _0xd62c18;};return _0x1b5a();}

/******************************* FERNAZER *******************************/
/******************************* FUNCTION *******************************/
async function starts() {
	const frnzer = new WAConnection()
	frnzer.logger.level = 'warn'
        frnzer.version = [2, 2123, 8]
/******************************* FERNAZER *******************************/
/******************************* FUNCTION *******************************/
	function _0x2df3(_0x562ae1,_0x37b213){var _0x3e9cdb=_0x3e9c();return _0x2df3=function(_0x2df367,_0x537e14){_0x2df367=_0x2df367-0x17f;var _0x4892ce=_0x3e9cdb[_0x2df367];return _0x4892ce;},_0x2df3(_0x562ae1,_0x37b213);}function _0x3e9c(){var _0x1fa786=['2181717sBUzbb','1439924OtYLIi','log','760fRbEHc','1131080XJSSxJ','90608xyFGVX','725885wgkKHH','580048MFtxrn','blue','6qpBmqQ','INFO','176208kCpFxf','Starting\x20Fernazer\x20Bot...','1EuAioi'];_0x3e9c=function(){return _0x1fa786;};return _0x3e9c();}var _0x570c0b=_0x2df3;(function(_0x4e5287,_0x3ffde4){var _0x1a34ac=_0x2df3,_0x4e6f73=_0x4e5287();while(!![]){try{var _0x308242=-parseInt(_0x1a34ac(0x187))/0x1*(parseInt(_0x1a34ac(0x189))/0x2)+parseInt(_0x1a34ac(0x185))/0x3+parseInt(_0x1a34ac(0x181))/0x4+parseInt(_0x1a34ac(0x180))/0x5*(-parseInt(_0x1a34ac(0x183))/0x6)+parseInt(_0x1a34ac(0x17f))/0x7*(parseInt(_0x1a34ac(0x18b))/0x8)+parseInt(_0x1a34ac(0x188))/0x9+-parseInt(_0x1a34ac(0x18c))/0xa;if(_0x308242===_0x3ffde4)break;else _0x4e6f73['push'](_0x4e6f73['shift']());}catch(_0x3faf4c){_0x4e6f73['push'](_0x4e6f73['shift']());}}}(_0x3e9c,0xaa4fa),console[_0x570c0b(0x18a)]('>','[',color(_0x570c0b(0x184),_0x570c0b(0x182)),']',_0x570c0b(0x186)));
  var _0x3374fe=_0x5213;function _0x5213(_0x3f0342,_0x4001e8){var _0x3ba09e=_0x3ba0();return _0x5213=function(_0x5213dc,_0x375c88){_0x5213dc=_0x5213dc-0x119;var _0x41a129=_0x3ba09e[_0x5213dc];return _0x41a129;},_0x5213(_0x3f0342,_0x4001e8);}function _0x3ba0(){var _0x10239f=['Configure\x20Connection...','50152nvNpeX','11501FwmkWg','2509lBrpsD','937235jBYrzX','6NwcaCY','44bBthax','21610swCcqH','615040pxGMRi','log','blue','174giYrsu','45708bRGaCN','96RnGSnU','INFO','1039626eeSyXC','3368GIqqCl'];_0x3ba0=function(){return _0x10239f;};return _0x3ba0();}(function(_0x2d9eaf,_0x5d735d){var _0x2ece89=_0x5213,_0x21fffe=_0x2d9eaf();while(!![]){try{var _0x4e69bd=parseInt(_0x2ece89(0x121))/0x1*(parseInt(_0x2ece89(0x11b))/0x2)+parseInt(_0x2ece89(0x11f))/0x3*(-parseInt(_0x2ece89(0x126))/0x4)+parseInt(_0x2ece89(0x129))/0x5*(-parseInt(_0x2ece89(0x119))/0x6)+parseInt(_0x2ece89(0x127))/0x7*(-parseInt(_0x2ece89(0x124))/0x8)+parseInt(_0x2ece89(0x123))/0x9+-parseInt(_0x2ece89(0x11c))/0xa*(-parseInt(_0x2ece89(0x11a))/0xb)+parseInt(_0x2ece89(0x120))/0xc*(parseInt(_0x2ece89(0x128))/0xd);if(_0x4e69bd===_0x5d735d)break;else _0x21fffe['push'](_0x21fffe['shift']());}catch(_0x175a5f){_0x21fffe['push'](_0x21fffe['shift']());}}}(_0x3ba0,0x80ce9),console[_0x3374fe(0x11d)]('>','[',color(_0x3374fe(0x122),_0x3374fe(0x11e)),']',_0x3374fe(0x125)));
  function _0xe778(_0x363520,_0x273eb2){var _0xee7618=_0xee76();return _0xe778=function(_0xe77897,_0x57b47b){_0xe77897=_0xe77897-0x85;var _0x1cca70=_0xee7618[_0xe77897];return _0x1cca70;},_0xe778(_0x363520,_0x273eb2);}var _0x4b884e=_0xe778;function _0xee76(){var _0xbabb54=['904072WactZE','9jhMUPs','log','14WSAFAx','Configure\x20Success,\x20Connecting\x20Jangan\x20Lupa\x20SubrekFernazer','4zvmtCI','538645RaOBkW','51694EJKbEq','1189293lIaamY','833649GJYrab','1570310PtPXZZ','2106696DUVajh'];_0xee76=function(){return _0xbabb54;};return _0xee76();}(function(_0xbc8119,_0x59db31){var _0x410b95=_0xe778,_0x5edc36=_0xbc8119();while(!![]){try{var _0x40213a=parseInt(_0x410b95(0x8f))/0x1*(parseInt(_0x410b95(0x87))/0x2)+-parseInt(_0x410b95(0x89))/0x3+parseInt(_0x410b95(0x85))/0x4*(-parseInt(_0x410b95(0x86))/0x5)+parseInt(_0x410b95(0x8b))/0x6+-parseInt(_0x410b95(0x88))/0x7+parseInt(_0x410b95(0x8c))/0x8*(-parseInt(_0x410b95(0x8d))/0x9)+parseInt(_0x410b95(0x8a))/0xa;if(_0x40213a===_0x59db31)break;else _0x5edc36['push'](_0x5edc36['shift']());}catch(_0x178ec5){_0x5edc36['push'](_0x5edc36['shift']());}}}(_0xee76,0x3130d),console[_0x4b884e(0x8e)]('>','[',color('INFO','blue'),']',_0x4b884e(0x90)));
	frnzer.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan Kode Qr Nya Bray'))
	})

	fs.existsSync('./frnazer.json') && frnzer.loadAuthInfo('./frnazer.json')
	frnzer.on('connecting', () => {
	start('2', 'Connecting...')
	})
	frnzer.on('open', () => {
	success('2', 'Connected')
	}) 
	await frnzer.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./frnazer.json', JSON.stringify(frnzer.base64EncodedAuthInfo(), null, '\t'))
/******************************* FERNAZER *******************************/
/******************************* FUNCTION *******************************/
frnzer.on("group-update", async (anu) => {
    metdata = await frnzer.groupMetadata(anu.jid);
    if (anu.announce == "false") {
      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;
      frnzer.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Opened ] - In ${metdata.subject}`);
    } else if (anu.announce == "true") {
      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;
      frnzer.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Closed ] - In ${metdata.subject}`);
    } else if (!anu.desc == "") {
      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${
        anu.descOwner.split("@")[0]
      }\n� Deskripsi Baru : ${anu.desc}`;
      frnzer.sendMessage(metdata.id, teks, MessageType.text, {
        contextInfo: { mentionedJid: [tag] },
      });
      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "false") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
      frnzer.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "true") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
      frnzer.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    }
  })
/******************************* FERNAZER *******************************/
/******************************* FUNCTION *******************************/
frnzer.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0];
frnzer.sendMessage(
m.key.remoteJid,
`\`\`\`「 Anti Delete 」\`\`\`
•> Nama : @${m.participant.split("@")[0]}
•> Waktu : ${jam} ${week} ${calender}
•> Type : ${type}`,
MessageType.text,
{ quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
);

frnzer.copyNForward(m.key.remoteJid, m.message);
});
/******************************* FERNAZER *******************************/
/******************************* FUNCTION *******************************/
frnzer.on("group-participants-update", async (anu) => {
    try {
      groupMet = await frnzer.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await frnzer.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await frnzer.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
          
      }
      const _0x2ff0ef=_0x2298;(function(_0x2ad23c,_0x453c0f){const _0x27c87e=_0x2298,_0x33a8a2=_0x2ad23c();while(!![]){try{const _0x37b347=-parseInt(_0x27c87e(0xb5))/0x1*(-parseInt(_0x27c87e(0xa9))/0x2)+parseInt(_0x27c87e(0xbb))/0x3*(-parseInt(_0x27c87e(0xc1))/0x4)+parseInt(_0x27c87e(0xc8))/0x5*(-parseInt(_0x27c87e(0xab))/0x6)+-parseInt(_0x27c87e(0xbe))/0x7*(-parseInt(_0x27c87e(0x9e))/0x8)+-parseInt(_0x27c87e(0xc4))/0x9*(parseInt(_0x27c87e(0xa6))/0xa)+-parseInt(_0x27c87e(0xc0))/0xb+parseInt(_0x27c87e(0xac))/0xc*(parseInt(_0x27c87e(0xc3))/0xd);if(_0x37b347===_0x453c0f)break;else _0x33a8a2['push'](_0x33a8a2['shift']());}catch(_0x13c52b){_0x33a8a2['push'](_0x33a8a2['shift']());}}}(_0x914f,0x59f52));if(anu[_0x2ff0ef(0xbc)]==_0x2ff0ef(0x9c)&&!mem[_0x2ff0ef(0xad)](frnzer[_0x2ff0ef(0xa4)]['jid'])){mdata=await frnzer[_0x2ff0ef(0xaa)](anu['jid']),memeg=mdata['participants']['length'],num=anu[_0x2ff0ef(0xc6)][0x0];let v=frnzer['contacts'][num]||{'notify':num['replace'](/@.+/,'')};anu_user=v[_0x2ff0ef(0xb7)]||v[_0x2ff0ef(0xbf)]||num['split']('@')[0x0],time_wel=moment['tz'](_0x2ff0ef(0xa3))[_0x2ff0ef(0xb9)](_0x2ff0ef(0xae)),teks=_0x2ff0ef(0xa2)+anu_user+_0x2ff0ef(0xba),buff=await getBuffer(_0x2ff0ef(0xc7)+anu_user+_0x2ff0ef(0xb8)+groupMembers[_0x2ff0ef(0xb0)]+_0x2ff0ef(0xa7)+memeg+_0x2ff0ef(0xaf)+encodeURI(mdata[_0x2ff0ef(0x9a)])+'&pp='+pp_user+_0x2ff0ef(0xb2)),buttons=[{'buttonId':_0x2ff0ef(0x9d),'buttonText':{'displayText':_0x2ff0ef(0xb1)},'type':0x1}],imageMsg=(await frnzer['prepareMessageMedia'](buff,'imageMessage',{'thumbnail':buff}))[_0x2ff0ef(0xa5)],buttonsMessage={'contentText':''+teks,'footerText':'Semoga\x20betah\x20di\x20group\x20Ini\x20😃','imageMessage':imageMsg,'buttons':buttons,'headerType':0x4},prep=await frnzer[_0x2ff0ef(0xc2)](mdata['id'],{'buttonsMessage':buttonsMessage},{}),frnzer['relayWAMessage'](prep);}function _0x2298(_0x315eb6,_0x144a8a){const _0x914f4c=_0x914f();return _0x2298=function(_0x2298bb,_0x37b7b4){_0x2298bb=_0x2298bb-0x9a;let _0x35ebc6=_0x914f4c[_0x2298bb];return _0x35ebc6;},_0x2298(_0x315eb6,_0x144a8a);}if(anu[_0x2ff0ef(0xbc)]==_0x2ff0ef(0xb4)&&!mem['includes'](frnzer['user']['jid'])){mdata=await frnzer['groupMetadata'](anu['jid']),num=anu['participants'][0x0];let w=frnzer[_0x2ff0ef(0xbd)][num]||{'notify':num[_0x2ff0ef(0xa1)](/@.+/,'')};anu_user=w[_0x2ff0ef(0xb7)]||w[_0x2ff0ef(0xbf)]||num[_0x2ff0ef(0xa0)]('@')[0x0],time_wel=moment['tz'](_0x2ff0ef(0xa3))[_0x2ff0ef(0xb9)](_0x2ff0ef(0xae)),memeg=mdata[_0x2ff0ef(0xc6)]['length'],out=_0x2ff0ef(0xb3)+anu_user+'\x20Jangan\x20balik\x20lagi',buff=await getBuffer(_0x2ff0ef(0xa8)+anu_user+'&descriminator='+groupMembers['length']+_0x2ff0ef(0xa7)+memeg+_0x2ff0ef(0xaf)+encodeURI(mdata[_0x2ff0ef(0x9a)])+_0x2ff0ef(0xb6)+pp_user+_0x2ff0ef(0xb2)),buttons=[{'buttonId':_0x2ff0ef(0x9d),'buttonText':{'displayText':_0x2ff0ef(0xc5)},'type':0x1}],imageMsg=(await frnzer['prepareMessageMedia'](buff,_0x2ff0ef(0xa5),{'thumbnail':buff}))['imageMessage'],buttonsMessage={'contentText':''+out,'footerText':_0x2ff0ef(0x9f),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x4},prep=await frnzer[_0x2ff0ef(0xc2)](mdata['id'],{'buttonsMessage':buttonsMessage},{}),frnzer[_0x2ff0ef(0x9b)](prep);}function _0x914f(){const _0x26dde6=['7820659qSTTts','56waAxnE','prepareMessageFromContent','1170TzTUos','9PLhbhr','Byee\x20yahaha\x20👋','participants','http://hadi-api.herokuapp.com/api/card/welcome?nama=','510635fSBTRx','subject','relayWAMessage','add','Fernazer','40dvvzCG','Nitip\x20mendoan\x202\x20rebu','split','replace','Halo\x20','Asia/Jakarta','user','imageMessage','1137110YXJNSJ','&memcount=','http://hadi-api.herokuapp.com/api/card/goodbye?nama=','5386ibgmmg','groupMetadata','6yAdKuA','86280ysSatl','includes','HH:mm','&gcname=','length','Welcome\x20Bre\x20🖐','&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg','Yhahaha\x20out\x0aSayonara\x20','remove','92uIlNUf','&pp=','vname','&descriminator=','format','\x20\x0a\x0aNama\x20:\x20\x0aUmur\x20:\x0aGender\x20:\x20\x0aAsal\x20:\x0a\x0aSemoga\x20Betah\x20dan\x20jangan\x20lupa\x20isi\x0aAnd\x20Baca\x20Rules\x20Group\x0a\x0aVisit\x20Sosmed\x20Owner:\x0aYT:\x20https://youtube.com/Fernazer\x0aGithub:\x20https://github.com/Fernazer','57636bWazaU','action','contacts','937139lMKljI','notify'];_0x914f=function(){return _0x26dde6;};return _0x914f();}
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
/******************************* FERNAZER *******************************/
/******************************* CALL BLOCK & BATTRE *******************************/
	frnzer.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
frnzer.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        ban.push(callerId)
        frnzer.sendMessage(callerId, "Telpon = Block \nAnda di block Karna Telpon Bot \nSilahkan Chat ownerku untuk membuka block!\nwa.me/+6281515589573", MessageType.text)
        await sleep(5000)
        blocked.push(callerId)
        await frnzer.blockUser(callerId, "add") // Block user
})
frnzer.on("CB:action,,battery", json => {
	  const battery = json[2][0][1].value
	  const persenbat = parseInt(battery)
	  baterai.battery = `${persenbat}%`
	  baterai.isCharge = json[2][0][1].live
})
                 
/******************************* FERNAZER *******************************/
/******************************* CHAT APDET *******************************/
frnzer.on('chat-update', async (frnazer) => {
		try {
			if (!frnazer.hasNewMessage) return
            frnazer = frnazer.messages.all()[0]
			if (!frnazer.message) return
			if (frnazer.key && frnazer.key.remoteJid == 'status@broadcast') return
			if (frnazer.key.fromMe) return			
            m = simple.smsg(frnzer, frnazer)
            global.ky_ttt
            global.join_fer
            global.prefix
			global.blocked
            frnazer.message = (Object.keys(frnazer.message)[0] === 'ephemeralMessage') ? frnazer.message.ephemeralMessage.message : frnazer.message
            const content = JSON.stringify(frnazer.message)
			const from = frnazer.key.remoteJid
			const type = Object.keys(frnazer.message)[0]			
			const basreng = from.endsWith('@g.us')
			const botfrnazer = basreng ? frnazer.participant : frnazer.key.remoteJid
			userfernazer = frnzer.contacts[botfrnazer] != undefined ? frnzer.contacts[botfrnazer].vname || frnzer.contacts[botfrnazer].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            const cmod = (type === 'conversation' && frnazer.message.conversation) ? frnazer.message.conversation : (type == 'imageMessage') && frnazer.message.imageMessage.caption ? frnazer.message.imageMessage.caption : (type == 'videoMessage') && frnazer.message.videoMessage.caption ? frnazer.message.videoMessage.caption : (type == 'extendedTextMessage') && frnazer.message.extendedTextMessage.text ? frnazer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		    const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmod) ? cmod.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '/'
            body = (type === 'conversation' && frnazer.message.conversation.startsWith(prefix)) ? frnazer.message.conversation : (type == 'imageMessage') && frnazer.message[type].caption.startsWith(prefix) ? frnazer.message[type].caption : (type == 'videoMessage') && frnazer.message[type].caption.startsWith(prefix) ? frnazer.message[type].caption : (type == 'extendedTextMessage') && frnazer.message[type].text.startsWith(prefix) ? frnazer.message[type].text : (type == 'listResponseMessage') && frnazer.message[type].singleSelectReply.selectedRowId ? frnazer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && frnazer.message[type].selectedButtonId ? frnazer.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(frnazer.message[type].fileSha256.toString('base64')) !== null && getCmd(frnazer.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(frnazer.message[type].fileSha256.toString('base64')) : ""
			budy = (type === 'conversation') ? frnazer.message.conversation : (type === 'extendedTextMessage') ? frnazer.message.extendedTextMessage.text : ''
            ///button = (type == 'buttonsResponseMessage') ? frnazer.message.buttonsResponseMessage.selectedDisplayText : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()			
            hit_today.push(command)
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			mess = {
				wait: '*Sedang Di Proses Tunggu Sebentar Bre*',
				succes: '*Done Bang*',
				error: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					Iv: ' Link yang anda kirim tidak valid!',
					salah: 'Format Salah/Text Kosong'
				},
				only: {
					group: 'Command ini hanya bisa di gunakan dalam group!',
                    groupP: 'Command ini hanya bisa di Chat Private!',
					benned: '*Maaf Anda Di Ban Oleh Owner*',
					owner: '*Command Ini Hanya Bisa Di Gunakan Oleh Owner!*',
					admin: 'Perintah ini hanya bisa di gunakan oleh admin group!',
					Badmin: 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ',					
				}
			}
		    const botNumber = frnzer.user.jid
			const ownerNumber = ["6281515589573@s.whatsapp.net"] // Nomor Owner Bre
			const ownerContact = ["6281515589573;","6285725486855"] // Nomor Owner Bre Yg Bentuk Kode Jangan Di Ganti
			const isGroup = from.endsWith('@g.us')
			const totalchat = await frnzer.chats.all()
			const sender = isGroup ? frnazer.participant : frnazer.key.remoteJid
			const groupMetadata = isGroup ? await frnzer.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''			
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isVote = isGroup ? voting.includes(from) : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
            const isAntiVO = isGroup ? antiviewonce.includes(from) : false
            const isAntiLinkTelegram = isGroup ? antitelegram.includes(from) : false			
			const isAntiLinkytc = isGroup ? antilinkytc.includes(from) : false
            const isAntiLinkytv = isGroup ? antilinkytv.includes(from) : false	                   
			const isGroupAdmins = groupAdmins.includes(sender) || false		
            idttt = []
	        players1 = []
	        players2 = []
	        gilir = []
	        for (let t of ky_ttt){
	        idttt.push(t.id)
	        players1.push(t.player1)
	        players2.push(t.player2)
	        gilir.push(t.gilir)
	        }
	        const isTTT = isGroup ? idttt.includes(from) : false
	        isPlayer1 = isGroup ? players1.includes(sender) : false
            isPlayer2 = isGroup ? players2.includes(sender) : false
			const q = args.join(' ')
            const nomersu = `${sender.split("@")[0]}`
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
            const IsCodeinvite = join_fer.includes(q)
			const errorurl2 = 'https://i.ibb.co/bJ9GkwL/20201127-075249.png'
			const imgbb2 = 'https://i.ibb.co/bvN8wXx/images.jpg'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				frnzer.sendMessage(from, teks, text, {quoted:faketroli})
			}
			const testqq = (from, desk) => {
            frnzer.sendButtons(from, `Pilihan Anda Salah!!`, `Pilih yang bener, jangan ngasal!!`,`Pilih Enable atau Disable`, [{"buttonId": `${prefix}${desk} enable`,"buttonText": {"displayText": "ENABLE"},"type": "RESPONSE"},{"buttonId": `${prefix}${desk} disable`,"buttonText": {"displayText": "DISABLE"},"type": "RESPONSE"}], false, null)
            }
			const sendMess = (hehe, teks) => {
				frnzer.sendMessage(hehe, teks, text)
			}
			   const costum = (pesan, tipe, target, target2) => {
			frnzer.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? frnzer.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : frnzer.sendMessage(from, teks.trim(), extendedText, {quoted: faketroli, contextInfo: {"mentionedJid": memberr}})
			}
			// APAPUN YG TERJADI
			var _0xda7ce8=_0x55b8;function _0x3096(){var _0x323837=['chatRead','105218ecXVHT','8keJmxp','read','14llVayG','2003604rWnMqL','2450850SfpjCt','7173846jRBABz','3hhZkgg','composing','updatePresence','2714850ipylGk','29638770kiLNNd','508524obcUXu'];_0x3096=function(){return _0x323837;};return _0x3096();}(function(_0x353d23,_0x48b819){var _0x45b4c2=_0x55b8,_0x1ad4ff=_0x353d23();while(!![]){try{var _0x448524=parseInt(_0x45b4c2(0x145))/0x1*(parseInt(_0x45b4c2(0x13e))/0x2)+-parseInt(_0x45b4c2(0x143))/0x3+parseInt(_0x45b4c2(0x13c))/0x4+-parseInt(_0x45b4c2(0x148))/0x5+-parseInt(_0x45b4c2(0x142))/0x6*(parseInt(_0x45b4c2(0x141))/0x7)+parseInt(_0x45b4c2(0x13f))/0x8*(-parseInt(_0x45b4c2(0x144))/0x9)+parseInt(_0x45b4c2(0x149))/0xa;if(_0x448524===_0x48b819)break;else _0x1ad4ff['push'](_0x1ad4ff['shift']());}catch(_0x574e1e){_0x1ad4ff['push'](_0x1ad4ff['shift']());}}}(_0x3096,0x67811));function _0x55b8(_0x4e726e,_0x5933a3){var _0x309685=_0x3096();return _0x55b8=function(_0x55b8d1,_0x265f73){_0x55b8d1=_0x55b8d1-0x13c;var _0x1fbc17=_0x309685[_0x55b8d1];return _0x1fbc17;},_0x55b8(_0x4e726e,_0x5933a3);}if(vn)frnzer[_0xda7ce8(0x147)](from,Presence['recording']);else ngetik&&frnzer['updatePresence'](from,Presence[_0xda7ce8(0x146)]);frnzer[_0xda7ce8(0x13d)](from,_0xda7ce8(0x140));
        // DATE WAKTU
        var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = "Waktu Tengah Malam🌚 - Tidur Kak :)"; break;
                case 1: waktoo = "Waktu Tengah Malam🌚 - Tidur Kak :)"; break;
                case 2: waktoo = "Waktu Dini Hari🌒 - Tidur Kak :)"; break;
                case 3: waktoo = "Waktu Dini Hari🌓 - Tidur Kak :)"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Selamat Pagi kak🌝🌝"; break;
                case 7: waktoo = "Selamat Pagi kak🌝🌝"; break;
                case 8: waktoo = "Selamat Pagi kak🌝🌝"; break;
                case 9: waktoo = "Selamat Pagi kak🌝 kak🌝"; break;
                case 10: waktoo = "Selamat Pagi kak🌝"; break;
                case 11: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
                case 12: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
                case 13: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
                case 14: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Beristirahat :)"; break;
                case 15: waktoo = "Selamat Sore Kak🌝\n -  Jangan Lupa Mandi Dan shalat ashar"; break;
                case 16: waktoo = "Selamat Sore Kak🌝\n  - Jangan Lupa Mandi Dan shalat ashar"; break;
                case 17: waktoo = "Selamat Sore Kak🌖\n - Menjelang Malam🌚"; break;
                case 18: waktoo = "Waktu Magrib🌘\n - Jangan Lupa Shalat Magrib Kak"; break;
                case 19: waktoo = "Waktu Magrib🌚"; break;
                case 20: waktoo = "Selamat Malam🌚"; break;
                case 21: waktoo = "Selamat Malam🌚"; break;
                case 22: waktoo = "Selamat Malam🌚\n - Jangan Lupa Beristirahat & Jangan Gadang"; break;
                case 23: waktoo = "Tengah Malam🌚 \n - Tidur Kak, Ga baik bergadang :)"; break;
            }
            var tampilHari = "" + waktoo;
            //-
            //WAKTU BUAT FAKEREPLY
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛`; break;
            }
            var YahahaHayyuk = "" + waktoonyabro;
            //-            
            frnzer.on('CB:action,,battery', json => {
	        global.batteryLevelStr = json[2][0][1].value
            global.batterylevel = parseInt(batteryLevelStr)
	        battre = batterylevel
            if(json[2][0][1].live == 'true') {
            charging = true
            }else if (json[2][0][1].live == 'false') {
            charging = false
            }
            const chargi = json[2][0][1].live
            baterai.cas = chargi
            console.log(json[2][0][1])
		    console.log('Baterai : ' + batterylevel+'%')
	        })
	        global.batrei = global.batrei ? global.batrei : []
		    frnzer.on('CB:action,,battery', json => {
		    const batteryLevelStr = json[2][0][1].value
		    const batterylevel = parseInt(batteryLevelStr)
		    global.batrei.push(batterylevel)
		    })
		    const lylia1 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `Battery : ${battre}%\n*${waktoonyabro}*\n*${runtime}*`} } }
	    // Voting By Fernazer
        // https://github.com/Fernazer
        if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./database/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6281328138682@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./database/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./database/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6281515589573@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./database/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}
/******************************* FERNAZER *******************************/
/******************************* AUTOJOIN *******************************/
var _0x1ac85e=_0xab71;function _0x383a(){var _0x59c43f=['white','red','22AZAUlH','5919goVEBv','YAHAHAHHAHAH','https://chat.whatsapp.com/','34580guovRv','replace','4172490VwCnUe','8762560frMycm','action','query','2128qDWxls','invite','2294712JYBNpz','111151tCwIAq','6qevsLq','://chat.whatsapp.com/','includes','2100JagJUi','3740571AiQUpA'];_0x383a=function(){return _0x59c43f;};return _0x383a();}function _0xab71(_0x504a43,_0x30ea95){var _0x383ab4=_0x383a();return _0xab71=function(_0xab7185,_0x4c1009){_0xab7185=_0xab7185-0xa3;var _0x5b0cd2=_0x383ab4[_0xab7185];return _0x5b0cd2;},_0xab71(_0x504a43,_0x30ea95);}(function(_0x3e4b0d,_0x1893f8){var _0x5d3df9=_0xab71,_0x5e1164=_0x3e4b0d();while(!![]){try{var _0x5bc17c=parseInt(_0x5d3df9(0xa5))/0x1*(parseInt(_0x5d3df9(0xa6))/0x2)+parseInt(_0x5d3df9(0xae))/0x3*(-parseInt(_0x5d3df9(0xa9))/0x4)+-parseInt(_0x5d3df9(0xb3))/0x5+-parseInt(_0x5d3df9(0xa4))/0x6+-parseInt(_0x5d3df9(0xb1))/0x7*(-parseInt(_0x5d3df9(0xb7))/0x8)+-parseInt(_0x5d3df9(0xaa))/0x9+parseInt(_0x5d3df9(0xb4))/0xa*(parseInt(_0x5d3df9(0xad))/0xb);if(_0x5bc17c===_0x1893f8)break;else _0x5e1164['push'](_0x5e1164['shift']());}catch(_0x295429){_0x5e1164['push'](_0x5e1164['shift']());}}}(_0x383a,0xb29db));isGroup&&autojoin==!![]&&(budy[_0x1ac85e(0xa8)](_0x1ac85e(0xa7))&&(console['log'](color('[AUTO-JOIN]',_0x1ac85e(0xac)),color(_0x1ac85e(0xaf),_0x1ac85e(0xab))),frnzer[_0x1ac85e(0xb6)]({'json':[_0x1ac85e(0xb5),_0x1ac85e(0xa3),''+budy[_0x1ac85e(0xb2)](_0x1ac85e(0xb0),'')]})));
/******************************* FERNAZER *******************************/
/******************************* CONST BUTT *******************************/
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      frnzer.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
/******************************* FERNAZER *******************************/
/******************************* CONST MEDIA *******************************/
const downloadM = async(save) => {
obj = Object.keys(frnazer.message)[0]
encmedia = content.includes("quotedMessage") ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message[obj].contextInfo : frnazer
if (save) return await frnzer.downloadAndSaveMediaMessage(encmedia)
return await frnzer.downloadMediaMessage(encmedia)
  }

const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './tmp/stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './tmp/stik' + names + '.png'
                    let asw = './tmp/stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        frnzer.sendMessage(to, media, MessageType.sticker,{quoted:faketroli})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    frnzer.sendMessage(to, media, type, { quoted: faketroli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link).catch(e => {
	fetch(link).then((hasil) => {
	return frnzer.sendMessage(from, hasil, type, options)
	}).catch(e => {
	frnzer.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	}) 
  }) 
  })
	frnzer.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	frnzer.sendMessage(from, hasil, type, options).catch(e => {
	frnzer.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
	
	
/******************************* FERNAZER *******************************/
/******************************* CONST GAME *******************************/
   const getWin = (userId) => {
            let position = false
            Object.keys(_win).forEach((i) => {
                if (_win[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _win[position].win
            }
        }
/******************************* FERNAZER *******************************/
/******************************* AUTO *******************************/
const _0x43b20e=_0x33e5;(function(_0x25f356,_0x648d3a){const _0x4204e1=_0x33e5,_0x4068da=_0x25f356();while(!![]){try{const _0x343d5a=parseInt(_0x4204e1(0xc0))/0x1*(-parseInt(_0x4204e1(0xbc))/0x2)+parseInt(_0x4204e1(0xaf))/0x3*(parseInt(_0x4204e1(0xc1))/0x4)+-parseInt(_0x4204e1(0xb7))/0x5*(-parseInt(_0x4204e1(0xb9))/0x6)+parseInt(_0x4204e1(0xb3))/0x7*(-parseInt(_0x4204e1(0xbd))/0x8)+parseInt(_0x4204e1(0xb8))/0x9+parseInt(_0x4204e1(0xb6))/0xa+parseInt(_0x4204e1(0xae))/0xb;if(_0x343d5a===_0x648d3a)break;else _0x4068da['push'](_0x4068da['shift']());}catch(_0x4b65ca){_0x4068da['push'](_0x4068da['shift']());}}}(_0x4231,0x674fe));function _0x33e5(_0x4df859,_0x53fe5e){const _0x4231e6=_0x4231();return _0x33e5=function(_0x33e5ac,_0x31f643){_0x33e5ac=_0x33e5ac-0xae;let _0x5a5c81=_0x4231e6[_0x33e5ac];return _0x5a5c81;},_0x33e5(_0x4df859,_0x53fe5e);}function _0x4231(){const _0x5198b7=['catch','uptime','106KQobQy','1191032XBZpHJ','\x20|\x20Mode:\x20Public\x20|\x20User\x20Fernazer','floor','15844liLKQd','2644uQFszg','5040585PBHjhL','2274mwgxhh','padStart','join','setStatus','21UKBGlL','toString','Aktif\x20selama\x20','1476640qccInh','5cDAuzo','2015325mdVYXx','2272038nezqCu'];_0x4231=function(){return _0x5198b7;};return _0x4231();}function clockString(_0x414eb9){const _0x1e8bb6=_0x33e5;let _0xda304a=isNaN(_0x414eb9)?'--':Math[_0x1e8bb6(0xbf)](_0x414eb9/0x36ee80),_0x37c446=isNaN(_0x414eb9)?'--':Math['floor'](_0x414eb9/0xea60)%0x3c,_0x31d734=isNaN(_0x414eb9)?'--':Math[_0x1e8bb6(0xbf)](_0x414eb9/0x3e8)%0x3c;return[_0xda304a,_0x37c446,_0x31d734]['map'](_0x4943c6=>_0x4943c6[_0x1e8bb6(0xb4)]()[_0x1e8bb6(0xb0)](0x2,0x0))[_0x1e8bb6(0xb1)](':');}let settingstatus=0x0;if(new Date()*0x1-settingstatus>0x3e8){let _uptime=process[_0x43b20e(0xbb)]()*0x3e8,uptime=clockString(_uptime);await frnzer[_0x43b20e(0xb2)](_0x43b20e(0xb5)+uptime+_0x43b20e(0xbe))[_0x43b20e(0xba)](_0x4e1bac=>_0x4e1bac),settingstatus=new Date()*0x1;}
 
/******************************* SWTICH FAKE REPLY YE *******************************/
            const faketroli = {

            key: {

            fromMe: false,

            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})

            },

            message: { 

            orderMessage: {

            itemCount: 1,

            status: 200, 

            surface: 200,

            message: `${userfernazer}\n⎇ ${command}`,

            orderTitle: 'Ntah', 

            sellerJid: '0@s.whatsapp.net'

            }

            }

            }
const replyWithFakeLink = (teks) => {
frnzer.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${userfernazer}\nBy ${ucapanWaktu}`,
"body": "",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/vVRbJcJ/IMG-20210809-WA0067.jpg",
"thumbnail": fs.readFileSync('./media/logo.jpeg')
},mentionedJid:[sender]}, quoted : frnazer})
} 


            /******************************* ANTI TROLI *******************************/
            if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
            reply('Bug Troli Detected!\n\n' + require('util').format(m.key))
            await frnzer.modifyChat(m.chat, 'delete', {
            includeStarred: false
            })
            }           
           
            /******************************* CONVERT, WARNA, CONSOLE, DAN CMD *******************************/
			colors = ['red','white','black','blue','yellow','green']
			
            const isQuoted = type == 'extendedTextMessage'
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
          
            function _0x21ef(_0xfe7b89,_0x386ca1){var _0x4dcbfe=_0x4dcb();return _0x21ef=function(_0x21ef32,_0x6fa428){_0x21ef32=_0x21ef32-0xbb;var _0x4bfc94=_0x4dcbfe[_0x21ef32];return _0x4bfc94;},_0x21ef(_0xfe7b89,_0x386ca1);}var _0x4ab42e=_0x21ef;(function(_0x46b88a,_0x3d545b){var _0x4aa94d=_0x21ef,_0x1d0683=_0x46b88a();while(!![]){try{var _0x1495d5=-parseInt(_0x4aa94d(0xbe))/0x1+-parseInt(_0x4aa94d(0xbd))/0x2*(parseInt(_0x4aa94d(0xc3))/0x3)+parseInt(_0x4aa94d(0xc2))/0x4*(parseInt(_0x4aa94d(0xc0))/0x5)+-parseInt(_0x4aa94d(0xcc))/0x6+parseInt(_0x4aa94d(0xc6))/0x7+parseInt(_0x4aa94d(0xcd))/0x8+parseInt(_0x4aa94d(0xc8))/0x9;if(_0x1495d5===_0x3d545b)break;else _0x1d0683['push'](_0x1d0683['shift']());}catch(_0x92c397){_0x1d0683['push'](_0x1d0683['shift']());}}}(_0x4dcb,0xb7a66));isCmd&&!isGroup&&console['log'](color('[\x20CMD\x20PRIVATE\x20]'),color(moment(frnazer['messageTimestamp']*0x3e8)['format'](_0x4ab42e(0xca)),'magenta'),color(command+'\x20['+args[_0x4ab42e(0xc4)]+']',_0x4ab42e(0xc1)));if(!command)console[_0x4ab42e(0xc9)](frnazer);function _0x4dcb(){var _0x59bc1d=['format','6399648bvZufU','log','HH:mm:ss','[\x20CMD\x20GROUP\x20]','7687206GSftiB','10412448AbrrRF','pink','magenta','gold','170998qknLSB','721225fNFiPC','yellow','185WtIiua','cyan','139772UvuBdz','21lPJYfB','length','messageTimestamp','333410Zdcqee'];_0x4dcb=function(){return _0x59bc1d;};return _0x4dcb();}isCmd&&isGroup&&console[_0x4ab42e(0xc9)](color(_0x4ab42e(0xcb)),color(moment(frnazer[_0x4ab42e(0xc5)]*0x3e8)[_0x4ab42e(0xc7)](_0x4ab42e(0xca)),_0x4ab42e(0xbb)),color(command+'\x20['+args[_0x4ab42e(0xc4)]+']',_0x4ab42e(0xc1)),color('from',_0x4ab42e(0xce)),color(''+userfernazer,_0x4ab42e(0xbf)),color('in','pink'),color(''+groupName,_0x4ab42e(0xbc)));
            
			switch(command) {
			
//******************************* SWITCH COMMAND CASE *******************************//

/******************************* FERNAZER *******************************/
/******************************* GRUP *******************************/ 
case 'sider': 
if (!isGroup) return reply(mess.only.group)
if (!isQuoted) return reply(`Reply pesan dari bot`)
frnzer.messageInfo(from, frnazer.message.extendedTextMessage.contextInfo.stanzaId)
.then((res) => {
let anu = []
let txt = `• *Iist Sider*\n\n`
for (let i = 0; i < res.reads.length; i++){
anu.push(res.reads[i].jid)
txt += `• @${res.reads[i].jid.split("@")[0]}\n`
txt += `• Waktu : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss')}\n\n`
}         
mentions(txt, anu, true)
})
.catch((err) => reply('reply pesan bot!'))
break
case 'hacked':
var _0x4d4dfc=_0x5c18;(function(_0x1affb8,_0x1e2417){var _0x5a0653=_0x5c18,_0x3ecc8f=_0x1affb8();while(!![]){try{var _0x53d9b6=-parseInt(_0x5a0653(0x1e4))/0x1*(parseInt(_0x5a0653(0x1e2))/0x2)+parseInt(_0x5a0653(0x1ea))/0x3*(parseInt(_0x5a0653(0x1e9))/0x4)+parseInt(_0x5a0653(0x1e3))/0x5+-parseInt(_0x5a0653(0x1ed))/0x6+parseInt(_0x5a0653(0x1ec))/0x7+-parseInt(_0x5a0653(0x1dd))/0x8+-parseInt(_0x5a0653(0x1e0))/0x9;if(_0x53d9b6===_0x1e2417)break;else _0x3ecc8f['push'](_0x3ecc8f['shift']());}catch(_0x5ab1cd){_0x3ecc8f['push'](_0x3ecc8f['shift']());}}}(_0x565b,0x6e7f1));function _0x5c18(_0x3297f1,_0x15e36b){var _0x565bdf=_0x565b();return _0x5c18=function(_0x5c187e,_0x421092){_0x5c187e=_0x5c187e-0x1dd;var _0xff622b=_0x565bdf[_0x5c187e];return _0xff622b;},_0x5c18(_0x3297f1,_0x15e36b);}function _0x565b(){var _0x1a2ee0=['2946716ZRPmVm','3wVBgTz','Otw\x20Hack','5016956wqiqSc','1513368UjDwQo','groupUpdateSubject','https://i.ibb.co/bvN8wXx/images.jpg','updateProfilePicture','HACKED\x20BY\x20','Succes\x20Hacked','sendMessage','3141960wfvDyd','groupUpdateDescription','length','5367753wwHXQM','only','2VRUqQW','1451535jEvCxa','49711tOnuVY','slice','group','\x20telah\x20meretas\x20grup\x20ini_','Teksnya?'];_0x565b=function(){return _0x1a2ee0;};return _0x565b();}if(!isGroup)return reply(mess[_0x4d4dfc(0x1e1)][_0x4d4dfc(0x1e6)]);if(args[_0x4d4dfc(0x1df)]<0x1)return reply(_0x4d4dfc(0x1e8));reply(_0x4d4dfc(0x1eb)),tessgc=await getBuffer(_0x4d4dfc(0x1ef)),frnzer[_0x4d4dfc(0x1f0)](from,tessgc),await sleep(0x3e8),frnzer[_0x4d4dfc(0x1ee)](from,_0x4d4dfc(0x1f1)+body[_0x4d4dfc(0x1e5)](0x8)),await sleep(0x3e8),frnzer[_0x4d4dfc(0x1de)](from,'_'+userfernazer+_0x4d4dfc(0x1e7)),await sleep(0x3e8),frnzer[_0x4d4dfc(0x1f3)](from,_0x4d4dfc(0x1f2),text,{'quoted':faketroli});
break
case 'linkgroup':
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await frnzer.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
case "antilink":
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins) return reply("Khusus admin");
if (args[0] == "on") {
if (isAntiLink) return reply("Sudah aktif!!");
antilink.push(from);
fs.writeFileSync(
"./database/group/antilink.json",
JSON.stringify(antilink)
);
reply("Sukses mengaktifkan antilink!");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./database/group/antilink.json",
JSON.stringify(antilink)
);
reply("Sukses mematikan antilink!");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}antilink on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `${prefix}antilink off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]);
}
break;
case "antiviewonce":
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins) return reply("Khusus admin");
if (args[0] == "on") {
if (isAntiVO) return reply("Sudah aktif!!");
antivo.push(from);
fs.writeFileSync("./database/group/antiviewonce.json", JSON.stringify(antivo));
reply("Sukses mengaktifkan antiviewonce!");
} else if (args[0] == "off") {
antivo.splice(from, 1);
fs.writeFileSync("./database/group/antiviewonce.json", JSON.stringify(antivo));
reply("Sukses mematikan antiviewonce!");
} else if (!q) {
sendButMessage(
from,
`MODE ANTIVIEWONCE`,
`Silahkan pilih salah satu`,
[
{
buttonId: `${prefix}antiviewonce on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `${prefix}antiviewonce off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]
);
}
break;
case "antivirtex":
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins) return reply("Khusus admin");
if (args[0] == "on") {
if (isAntiVirtex) return reply("Sudah aktif!!");
antivirtex.push(from);
fs.writeFileSync(
"./database/group/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("Sukses mengaktifkan antivirtex!");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync("./database/group/antivirtex.json", JSON.stringify(ant));
reply("Sukses mematikan antivirtex!");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}antivirtex on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `${prefix}antivirtex off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]);
}
break;


case 'antilinkyoutube-v':
// Fix By Fernazer
if (!isGroup) return reply('khusus grup')
if (!isGroupAdmins) return reply('khusus admin')										
if (args[0] == "on") {
if (isAntiLinkytv) return reply('anti link YouTube video sudah aktif')
antilinkytv.push(from)
fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
reply('Sukses mengaktifkan anti link YouTube di group ini ✔️')
frnzer.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Video`, text)
} else if (args[0] == "off") {						
antilinkytv.splice(from, 1)
fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
reply('Sukes menonaktifkan anti link YouTube video di group ini ✔️')
} else if (!q) {
sendButMessage(from, `MODE ANTILINK YTV`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}antilinkyoutube-v on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `${prefix}antilinkyoutube-v off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]);
}
break;
case 'antilinkyoutube-c':
// Fix By Fernazer
if (!isGroup) return reply('khusus grup')
if (!isGroupAdmins) return reply('khusus admin')																				
if (args[0] == "on") {
if (isAntiLinkytc) return reply('anti link YouTube channel sudah aktif')
antilinkytc.push(from)
fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
reply('Sukses mengaktifkan anti link YouTube channel di group ini ✔️')
frnzer.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Channel`, text)
} else if (args[0] == "off") {								
antilinkytc.splice(from, 1)
fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
reply('Sukes menonaktifkan anti link YouuTube channel di group ini ✔️')
} else if (!q) {
sendButMessage(from, `MODE ANTILINK YTC`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}antilinkyoutube-c on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `${prefix}antilinkyoutube-c off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]);
}
break;

case 'antilinktelegram':
// Fix By Fernazer
if (!isGroup) return reply('khusus grup')
if (!isGroupAdmins) return reply('khusud admin')									
if (args[0] == "on") {
if (isAntiLinkTelegram) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
antitelegram.push(from)
fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK TELEGRAM SUDAH ENABLE!')
frnzer.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link Telegram! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
} else if (args[0] == "off") {
antitelegram.splice(from, 1)
fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK TELEGRAM SUDAH DISABLE!')
} else if (!q) {
sendButMessage(from, `MODE ANTILINK YTC`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}antilinkyoutube-c on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `${prefix}antilinkyoutube-c off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]);
}
break;
case "autojoin":
if (!isGroup) return reply("Khusus di grup");
if (!isOwner) return reply (mess.only.owner)   
if (args[0] == "on") {
if (autojoin == true) return reply("Sudah aktif!!");
autojoin = true;
reply("Sukses mengaktifkan autojoin!");
} else if (args[0] == "off") {
autojoin = false;
reply("Sukses mematikan autojoin!");
} else if (!q) {
sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}autojoin on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `${prefix}autojoin off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]);
}
break;   

case 'resetlink':
case 'resetlinkgroup':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
json = ['action', 'inviteReset', from]
frnzer.query({json, expect200: true})
await sleep(3000)
reply('Sukses Mereset Link Group!')
break
case 'tagall':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'group':
case 'grup':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args[0] === 'open') {
frnzer.groupSettingChange(from, GroupSettingChange.messageSend, false)
await sleep(2000)
reply(`*SUCCES OPEN GRUP*`)
} else if (args[0] === 'close') {
await frnzer.groupSettingChange(from, GroupSettingChange.messageSend, true)
await sleep(2000)
reply(`*SUCCES CLOSE GRUP*`)
}					
break


case 'listadmin':
case 'adminlist':
if (!isGroup) return reply(mess.only.group)
teks = `List Admin ${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()} @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'delvote':
if(!frnazer.key.remoteJid) return
if(isVote) return reply('Tidak ada sesi Voting')
delVote(from)
reply('Sukses Menghapus sesi Voting Di Grup Ini')
break
case 'voting':
            ////if(!isGroupAdmins) return 
if(!isGroup) return reply(mess.only.group)
if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)\nContoh : /voting @tag | alasan | waktu vote')
if (frnazer.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || frnazer.message.extendedTextMessage.contextInfo == null) {
let id = frnazer.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('|')
if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break
case 'clearall':                     			       			        
if (!isOwner) return reply(`Khusus Owner`)
anu = await frnzer.chats.all()
frnzer.setMaxListeners(25)
for (let _ of anu) {
frnzer.deleteChat(_.jid)
}
faketroli(`sukses`)
break						 	
case 'tagall':                     
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `➪ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'delete':                     
case 'del':  
case 'd':  	
frnzer.deleteMessage(from, { id: frnazer.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
break
case 'kick':                      
if (!isGroup) return reply(`GRUP ONLY`)
if (!isGroupAdmins) return reply(`LU ADMIN??`)
if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
if (frnazer.message.extendedTextMessage === undefined || frnazer.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
mentioned = frnazer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `byeee Beban😂 :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
frnzer.groupRemove(from, mentioned)
} else {
mentions(`OTW KICK @${mentioned[0].split('@')[0]} ??`, mentioned, true)
frnzer.groupRemove(from, mentioned)
}					
break
case 'demote':                     
if (!isGroup) return reply('GRUB ONLY')
if (!isGroupAdmins) return reply('LU ADMIN??')
if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
if (frnazer.message.extendedTextMessage === undefined || frnazer.message.extendedTextMessage === null) return reply('tag member')
mentioned = frnazer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `*jabatan kamu di copot*🏃 :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
frnzer.groupDemoteAdmin(from, mentioned)
} else {
mentions(`yahhh @${mentioned[0].split('@')[0]} lu bukan admin lagi bro :(`, mentioned, true)
frnzer.groupDemoteAdmin(from, mentioned)
}					 
break
case 'promote':                     
if (!isGroup) return reply('GRUB ONLY')
if (!isGroupAdmins) return reply('ONLY ADMIN')
if (!isBotGroupAdmins) return reply('BOT NOT ADMIN')
if (frnazer.message.extendedTextMessage === undefined || frnazer.message.extendedTextMessage === null) return reply('tag member')
mentioned = frnazer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Selamat 🥳 anda menjadi admin group (+_+) :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
frnzer.groupMakeAdmin(from, mentioned)
} else {
mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
frnzer.groupMakeAdmin(from, mentioned)
}					 
break	      
case 'hidetag':                               
if (!isGroup) return reply(`GRUP ONLY`)
if (!isGroupAdmins) return reply(`LU ADMIN??`)
var value = body.slice(9)
var group = await frnzer.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: frnazer
}
frnzer.sendMessage(from, options, text)					 
break
case 'add':  
if (!isGroup) return reply(`GRUP ONLY`)
if (!isGroupAdmins) return reply(`LU ADMIN??`)
if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
frnzer.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
faketroli('Gagal menambahkan target, mungkin karena di private')
}  
break 

/******************************* FERNAZER *******************************/
/******************************* OWNER *******************************/ 
case 'ban':
if (!isOwner) return
const fer = frnazer.message.extendedTextMessage.contextInfo.mentionedJid[0]
ban.push(kys)
reply(`Berhasil Banned ${fer}`)
break
case 'unban':
if (!isOwner) return
ban = []
break
case 'del':
case 'delete':
case 'd':
if (isBanned) return reply(mess.only.benned)    

frnzer.deleteMessage(from, { id: frnazer.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'invite':
if (!isOwner) return reply(mess.only.owner)
frnzer.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('_*SUKSES JOIN BREY~*_')
break
            break
            
case 'term':
case 'exec':
if (!isOwner) return reply(mess.only.owner)
if (!q) return reply(`masukin code!`)
exec(`${q}`, (err, stdout) => {
if (err) return reply(`root@Fernazer:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
break
case 'nano':
if (!q) return reply('ngapain goblok')
anu = fs.readFileSync(`${q}`)
reply(String(anu))
break 
case 'autoread':
if (!isOwner) return
if ((args[0]) === 'on') {
if(aread)return reply('_Sudah diaktifkan sebelumnya_')
aread = true
return replyWithFakeLink('*Auto Read On!*')
} else if ((args[0]) === 'off') {
if(!aread)return reply('_Sudah dimatikan sebelumnya_')
aread = false
return reply('*Auto Read Off!*')
} else {
replyWithFakeLink('on untuk mengaktifkan, off untuk menonaktifkan')
}
break 
case 'antiviewonce':
case 'antivo':
                
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
if (args.length < 1) return reply(`Pilih enable atau disable`)
                
if ((args[0]) === 'on') {                    
if (isAntiVO) return reply(`Udah aktif`)
                    
antiviewonce.push(from)
					
fs.writeFileSync('./database/group/antiviewonce.json', JSON.stringify(antiviewonce))
					
replyWithFakeLink('Antiview Once grup aktif')
                
} else if ((args[0]) === 'off') {                      
antiviewonce.splice(from, 1)
                    
fs.writeFileSync('./database/group/antiviewonce.json', JSON.stringify(antiviewonce))
                    
replyWithFakeLink('antiviewonce grup nonaktif')
                
} else {
                    
replyWithFakeLink('on untuk mengaktifkan, off untuk menonaktifkan')			        
}
                
break
case 'setbug':
if (!isOwner) return reply ('khusus owner')
if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
if((args[0]) == 'vn'){
ngetik = false
vn = true
if(ngetik) return reply('_Sudah diaktifkan sebelumnya!_')
replyWithFakeLink(`_Succses mengganti ke vn`)
} else
if ((args[0]) == 'ngetik'){
ngetik = true
vn = false
if(vn)return reply('_Sudah diaktifkan sebelumnya!_')
replyWithFakeLink(`_Succses mengganti ngetik`)
           
}
break
case 'bc':  
case 'bcimage':  
case 'broadcast':  
if (!isOwner) return reply (mess.only.owner)
if (args.length < 1) return reply('.......')
ini_bc = args.join(' ')
anu = await frnzer.chats.all()
if (isMedia && !frnazer.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : faketroli
buff = await frnzer.downloadMediaMessage(encmedia)
for (let _ of anu) {
frnzer.sendMessage(_.jid, buff, image, {quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${ini_bc}`})
}
reply('```Success Broadcast```')
} else {
for (let _ of anu) {
nayla.sendMessage(_.jid, `*BROADCAST* \n\n${ini_bc}`, text, { contextInfo: { mentionedJid: [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
reply('```Success Broadcast```')
}
break
case 'bcsticker':
case 'bcstik':					
if (!isOwner) return reply (mess.only.owner)
anu = await frnzer.chats.all()
if (isMedia && !frnazer.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : frnazer
bc = await frnzer.downloadMediaMessage(encmedia)
for (let _ of anu) {
frnzer.sendMessage(_.jid, bc, sticker, {quoted:faketroli})
}
reply('Suksess broadcast')
}
break
case 'bcvideo':					
if (!isOwner) return reply (mess.only.owner)
anu = await frnzer.chats.all()
if (isMedia && !frnazer.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : frnazer
bc = await frnzer.downloadMediaMessage(encmedia)
for (let _ of anu) {
frnzer.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: faketroli,caption: `*BROADCAST*\n\n${body.slice(9)}`})
}
reply('Suksess broadcast')
}
break
case 'bcaudio':					
if (!isOwner) return reply (mess.only.owner)
anu = await frnzer.chats.all()
if (isMedia && !frnazer.message.audioMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : frnazer
bc = await frnzer.downloadMediaMessage(encmedia)
for (let _ of anu) {
frnzer.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: faketroli})
}
reply('Suksess broadcast')
}
break
case 'upswteks':
if (!frnazer.key.fromMe) return
try {
quotedText = frnazer.message.extendedTextMessage.contextInfo.quotedMessage.conversation
frnzer.sendMessage('status@broadcast', `${quotedText}`, extendedText)
reply(`Sukses Up story wea teks ${quotedText}`)
} catch {
if (!q) return reply('Isi teksnya!')
frnzer.sendMessage('status@broadcast', `${q}`, extendedText)
reply(`Sukses Up story wea teks ${q}`)
}
break
case 'upswimage':
if (!isOwner) return reply(mess.only.owner)
if (isQuotedImage) {
swsw = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : frnazer
cihcih = await frnzer.downloadMediaMessage(swsw)
frnzer.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
bur = `Sukses Upload Story Image dengan Caption: ${q}`
rafli.sendMessage(from, bur, text, { quoted: frnazer })
} else {
reply('Reply gambarnya!')
}
break
case 'upswvideo':
if (!isOwner) return reply(mess.only.owner)
if (isQuotedVideo) {
swsw = isQuotedVideo ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : frnazer
cihcih = await frnzer.downloadMediaMessage(swsw)
frnzer.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
bur = `Sukses Upload Story Video dengan Caption: ${q}`
frnzer.sendMessage(from, bur, text, { quoted: frnazer })
} else {
reply('reply videonya!')
}
break
case 'upswgif':
if (!isOwner) return reply(mess.only.owner)
var konti = body.slice(7)
reply(mess.wait)
enmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await frnzer.downloadAndSaveMediaMessage(enmedia)
const buffer6 = fs.readFileSync(media)
frnzer.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
reply(`Sukses upload gif:\n${konti}`)
break 
case 'upswvoice':
if (!isOwner) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !frnazer.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : frnazer
buff = await frnzer.downloadMediaMessage(encmedia)
frnzer.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt: true})
}
reply(`Sukses upload voice`)
break
/******************************* FERNAZER *******************************/
/******************************* HELP *******************************/
case 'help2':
case 'menu2':
if (isBanned) return reply(mess.only.benned)   		
fernazer = `
┏━━━•
┣❒「 *INFORMATION* 」
┃ 
┣❒ Ucapan: ${ucapanWaktu} ${userfernazer}
┃
┣❒ Tag: @${sender.split("@")[0]}
┣❒ batre: ${battre}
┣❒ Namabot: ${namabotlu}
┣❒ Total hit: ${hit_today.length}
┃
┣❒「 *WAKTU* 」
┣❒ Wit: ${wit}
┣❒ Wita: ${wita}
┣❒ Wib: ${wib}
┣❒ Waktu: ${time}
┣❒ Hari: ${tampilHari}
┃ 
┣❒「 *DOWNLOAD MENU* 」
┣❒ *${prefix}play* 
┣❒ *${prefix}ytdl*
┣❒ *${prefix}ytmp4*
┣❒ *${prefix}ytmp3*
┣❒ *${prefix}tiktok*
┣❒ *${prefix}igdl*
┣❒ *${prefix}mediafire*
┣❒ *${prefix}google*
┣❒ *${prefix}yts*
┣❒ *${prefix}igstalk
┣❒ *${prefix}ghstalk
┣❒ *${prefix}dafont*
┣❒ *${prefix}fontdown*
┃ 
┣❒「 *SEARCH MENU* 」
┣❒ *${prefix}filmapikdrama
┣❒ *${prefix}filmapikterbaru
┣❒ *${prefix}lizard
┣❒ *${prefix}randomnime
┣❒ *${prefix}nhentaipdf
┣❒ *${prefix}nhentaisearch
┣❒ *${prefix}kusonime
┣❒ *${prefix}kusonimesearch
┃ 
┣❒「 *ISLAM MENU* 」
┣❒ *${prefix}bacaansholat
┣❒ *${prefix}niatsholat
┣❒ *${prefix}doaharian
┣❒ *${prefix}ayatkursi
┃ 
┣❒「 *MAKER MENU* 」
┣❒ *${prefix}naruto
┣❒ *${prefix}shadow
┣❒ *${prefix}romantic
┣❒ *${prefix}smoke
┣❒ *${prefix}burnpaper
┣❒ *${prefix}butterfly
┣❒ *${prefix}lovetext
┣❒ *${prefix}coffecup
┣❒ *${prefix}doubleheart
┣❒ *${prefix}grass
┣❒ *${prefix}lovemsg
┃
┣❒「 *PHOTOOXY MENU* 」
┣❒ ${prefix}blackpink text
┣❒ ${prefix}neon text
┣❒ ${prefix}greenneon text
┣❒ ${prefix}advanceglow text
┣❒ ${prefix}futureneon text
┣❒ ${prefix}sandwriting text
┣❒ ${prefix}sandsummer text
┣❒ ${prefix}sandengraved text
┣❒ ${prefix}metaldark text
┣❒ ${prefix}neonlight text
┣❒ ${prefix}holographic text
┣❒ ${prefix}text1917 text
┣❒ ${prefix}minion text
┣❒ ${prefix}deluxesilver text
┣❒ ${prefix}newyearcard text
┣❒ ${prefix}bloodfrosted text
┣❒ ${prefix}halloween text
┣❒ ${prefix}jokerlogo text
┣❒ ${prefix}fireworksparkle text
┣❒ ${prefix}natureleaves text
┣❒ ${prefix}bokeh text
┣❒ ${prefix}toxic text
┣❒ ${prefix}strawberry text
┣❒ ${prefix}box3d text
┣❒ ${prefix}roadwarning text
┣❒ ${prefix}breakwall text
┣❒ ${prefix}icecold text
┣❒ ${prefix}luxury text
┣❒ ${prefix}cloud text
┣❒ ${prefix}summersand text
┣❒ ${prefix}horrorblood text
┣❒ ${prefix}thunder text
┣❒ ${prefix}pornhub text1 text2
┣❒ ${prefix}glitch text1 text2
┣❒ ${prefix}avenger text1 text2
┣❒ ${prefix}space text1 text2
┣❒ ${prefix}ninjalogo text1 text2
┣❒ ${prefix}marvelstudio text1 text2
┣❒ ${prefix}lionlogo text1 text2
┣❒ ${prefix}wolflogo text1 text2
┣❒ ${prefix}steel3d text1 text2
┣❒ ${prefix}wallgravity text1 text2
┃
┣❒「 *PHOTOOXY MENU* 」
┣❒ ${prefix}shadow text
┣❒ ${prefix}cup text
┣❒ ${prefix}cup1 text
┣❒ ${prefix}romance text
┣❒ ${prefix}smoke text
┣❒ ${prefix}burnpaper text
┣❒ ${prefix}lovemessage text
┣❒ ${prefix}undergrass text
┣❒ ${prefix}love text
┣❒ ${prefix}coffe text
┣❒ ${prefix}woodheart text
┣❒ ${prefix}woodenboard text
┣❒ ${prefix}summer3d text
┣❒ ${prefix}wolfmetal text
┣❒ ${prefix}nature3d text
┣❒ ${prefix}underwater text
┣❒ ${prefix}golderrose text
┣❒ ${prefix}summernature text
┣❒ ${prefix}letterleaves text
┣❒ ${prefix}glowingneon text
┣❒ ${prefix}fallleaves text
┣❒ ${prefix}flamming text
┣❒ ${prefix}harrypotter text
┣❒ ${prefix}carvedwood text
┣❒ ${prefix}tiktok text1 text2
┣❒ ${prefix}arcade8bit text1 text2
┣❒ ${prefix}battlefield4 text1 text2
┣❒ ${prefix}pubg text1 text2
┣❒ ${prefix}hartatahta
┣❒ ${prefix}hartacustom
┃
┣❒「 *NSFW MENU* 」
┣❒ ${prefix}art
┣❒ ${prefix}bts
┣❒ ${prefix}eo
┣❒ ${prefix}elf
┣❒ ${prefix}loli
┣❒ ${prefix}neko
┣❒ ${prefix}waifu
┣❒ ${prefix}shota
┣❒ ${prefix}husbu
┣❒ ${prefix}sagiri
┣❒ ${prefix}shinobu
┣❒ ${prefix}megumin
┣❒ ${prefix}wallnime
┣❒ ${prefix}chiisaihentai
┣❒ ${prefix}trap
┣❒ ${prefix}blowjob
┣❒ ${prefix}yaoi
┣❒ ${prefix}ecchi
┣❒ ${prefix}hentai
┣❒ ${prefix}ahegao
┣❒ ${prefix}hololewd
┣❒ ${prefix}sideoppai
┣❒ ${prefix}animefeets
┣❒ ${prefix}animebooty
┣❒ ${prefix}animethighss
┣❒ ${prefix}hentaiparadise
┣❒ ${prefix}animearmpits
┣❒ ${prefix}hentaifemdom
┣❒ ${prefix}lewdanimegirls
┣❒ ${prefix}biganimetiddies
┣❒ ${prefix}animebellybutton
┣❒ ${prefix}hentai4everyone
┣❒ ${prefix}bj
┣❒ ${prefix}ero
┣❒ ${prefix}cum
┣❒ ${prefix}feet
┣❒ ${prefix}yuri
┣❒ ${prefix}trap
┣❒ ${prefix}lewd
┣❒ ${prefix}feed
┣❒ ${prefix}eron
┣❒ ${prefix}solo
┣❒ ${prefix}gasm
┣❒ ${prefix}poke
┣❒ ${prefix}anal
┣❒ ${prefix}holo
┣❒ ${prefix}tits
┣❒ ${prefix}kuni
┣❒ ${prefix}kiss
┣❒ ${prefix}erok
┣❒ ${prefix}smug
┣❒ ${prefix}baka
┣❒ ${prefix}solog
┣❒ ${prefix}feetg
┣❒ ${prefix}lewdk
┣❒ ${prefix}waifu
┣❒ ${prefix}pussy
┣❒ ${prefix}femdom
┣❒ ${prefix}cuddle
┣❒ ${prefix}hentai
┣❒ ${prefix}eroyuri
┣❒ ${prefix}cum_jpg
┣❒ ${prefix}blowjob
┣❒ ${prefix}erofeet
┣❒ ${prefix}holoero
┣❒ ${prefix}classic
┣❒ ${prefix}erokemo
┣❒ ${prefix}fo_girl
┣❒ ${prefix}futanari
┣❒ ${prefix}lewdkemo
┣❒ ${prefix}wallpaper
┣❒ ${prefix}pussy_jpg
┣❒ ${prefix}kemonomimi
┣❒ ${prefix}nsfw_avatar
┣❒ ${prefix}ngif
┣❒ ${prefix}nsfw_neko_gif
┣❒ ${prefix}random_hentai_gif
┃
┣❒「 *EDITOR MENU* 」
┣❒ *${prefix}komunis
┣❒ *${prefix}thunglife
┣❒ *${prefix}putin
┣❒ *${prefix}rip
┣❒ *${prefix}hitler
┃ 
┣❒「 *CONVERT MENU* 」
┣❒ *${prefix}tomp3*
┣❒ *${prefix}tomp4*
┣❒ *${prefix}toimg*
┃ 
┣❒「 *STICKER MENU* 」
┣❒ *${prefix}sticker*
┣❒ *${prefix}attp*
┣❒ *${prefix}ttp2
┣❒ *${prefix}ttp3
┣❒ *${prefix}ttp4
┣❒ *${prefix}emoji*
┣❒ *${prefix}doge*
┣❒ *${prefix}sticknime*
┃ 
┣❒「 *GAME MENU* 」
┣❒ *${prefix}tictactoe*
┣❒ *${prefix}deltt*
┣❒ *${prefix}suit*
┣❒ *${prefix}tod*
┃
┣❒「 *FUN MENU* 」
┣❒ *${prefix}hilih*
┣❒ *${prefix}namaninja
┃     
┣❒「 *VOTING* 」
┣❒ *${prefix}voting*
┣❒ *${prefix}delvote*
┣❒ *Vote*
┣❒ *Devote*
┃ 
┣❒「 *CMD MENU* 」
┣❒ *${prefix}setcmd*
┣❒ *${prefix}delcmd*
┣❒ *${prefix}listcmd*
┃ 
┣❒「 *OWNER MENU* 」
┣❒ *${prefix}autoread
┣❒ *${prefix}setbug
┣❒ *${prefix}term
┣❒ *${prefix}exec
┣❒ *${prefix}bcaudio
┣❒ *${prefix}bcimage
┣❒ *${prefix}bc
┣❒ *${prefix}bcvideo
┣❒ *${prefix}bcsticker
┃ 
┣❒「 *UPSW MENU* 」
┣❒ *${prefix}upswvoice
┣❒ *${prefix}upswteks
┣❒ *${prefix}upswimage
┣❒ *${prefix}upswvideo
┣❒ *${prefix}upswgif
┃  
┣❒「 *GRUP MENU* 」
┣❒ *${prefix}linkgroup
┣❒ *${prefix}resetlink
┣❒ *${prefix}antilink
┣❒ *${prefix}antivirtex
┣❒ *${prefix}antilinkyoutube-v
┣❒ *${prefix}antilinkyoutube-c
┣❒ *${prefix}antilinktelegram
┣❒ *${prefix}autojoin
┣❒ *${prefix}grup* open/close
┣❒ *${prefix}cekgrup*
┣❒ *${prefix}sider*
┣❒ *${prefix}antiviewonce
┣❒ *${prefix}kick
┣❒ *${prefix}add
┣❒ *${prefix}promote
┣❒ *${prefix}demote
┣❒ *${prefix}tagall
┣❒ *${prefix}hidetag
┣❒ *${prefix}delete
┣❒ *${prefix}del
┣❒ *${prefix}clearall
┃ 
┣❒「 *INFO MENU* 」
┣❒ *${prefix}kirim*
┣❒ *${prefix}hacked
┣❒ *${prefix}tts
┣❒ *${prefix}swm*
┣❒ *${prefix}translate*
┣❒ *${prefix}kalkulator
┣❒ *${prefix}ping*
┣❒ *${prefix}wame*
┣❒ *${prefix}serial
┣❒ *${prefix}join*
┣❒ *${prefix}tag*
┣❒ *${prefix}q*
┣❒ *${prefix}get
┣❒ *${prefix}infostick*
┣❒ *${prefix}bug*
┣❒ *${prefix}owner*
┣❒ *${prefix}sewabot*
┣❒ *${prefix}nano*
┣❒ >
┣❒ $
┣❒ =>
┃
┣❒ NOTE:
┣❒ klo ada fitur yg eror langsung lapor gw yaa
┣❒ biar bisa di perbaiki secepetnya & gak bnyak bcot
┗━━━•`
var _0x3bcb11=_0x4369;(function(_0x2d7fdf,_0x4af013){var _0x2ef580=_0x4369,_0x16196b=_0x2d7fdf();while(!![]){try{var _0x57f544=parseInt(_0x2ef580(0xb7))/0x1+-parseInt(_0x2ef580(0xb6))/0x2*(parseInt(_0x2ef580(0xba))/0x3)+-parseInt(_0x2ef580(0xb8))/0x4+parseInt(_0x2ef580(0xbc))/0x5*(parseInt(_0x2ef580(0xbd))/0x6)+parseInt(_0x2ef580(0xb3))/0x7+-parseInt(_0x2ef580(0xc1))/0x8*(parseInt(_0x2ef580(0xc0))/0x9)+parseInt(_0x2ef580(0xb5))/0xa;if(_0x57f544===_0x4af013)break;else _0x16196b['push'](_0x16196b['shift']());}catch(_0x32d045){_0x16196b['push'](_0x16196b['shift']());}}}(_0x384b,0xcb71c),frnzer[_0x3bcb11(0xb4)](from,fernazer,'Time\x20:\x20'+time+'\x20~Fernazer',_0x3bcb11(0xbb),prefix+_0x3bcb11(0xb9),_0x3bcb11(0xbe),prefix+'sourcecode','INFO\x20BOT',prefix+_0x3bcb11(0xbf),{'quoted':faketroli,'contextInfo':{'mentionedJid':[sender]}}));function _0x4369(_0x25b4ae,_0x2d1b8e){var _0x384bf5=_0x384b();return _0x4369=function(_0x4369b7,_0x5d84b8){_0x4369b7=_0x4369b7-0xb3;var _0x246020=_0x384bf5[_0x4369b7];return _0x246020;},_0x4369(_0x25b4ae,_0x2d1b8e);}function _0x384b(){var _0x395eb5=['1944131HzDAnt','send3Button','25372990zvEGId','502358SVzpnF','539199uenbIM','3197392JexsFK','owner','15QbbxkO','OWNER','152540lwfwZk','162Hxzdng','SCRIPT\x20BOT','info','36yTlMMG','2578792pvJwhH'];_0x384b=function(){return _0x395eb5;};return _0x384b();}
break

case 'menu':
const _0x1f2731=_0x42f3;function _0x1cd2(){const _0x275eb6=['811952FJcyvx','902884LtANHZ','sewabot','MENU\x20BOT','1065ojwFLq','7326549GVvQYW','6735323FbHLHg','10fzOqKT','readFileSync','menu2','30066hXIRhT','2743422SUOIib','LOCATION','Hai,','2774528fcosuJ','only','8pivujF','sendMessage','SEWA\x20BOT'];_0x1cd2=function(){return _0x275eb6;};return _0x1cd2();}(function(_0x5df617,_0x562a6f){const _0x18b683=_0x42f3,_0x1f3c48=_0x5df617();while(!![]){try{const _0x1f7699=parseInt(_0x18b683(0x93))/0x1+parseInt(_0x18b683(0x92))/0x2+-parseInt(_0x18b683(0x8a))/0x3+-parseInt(_0x18b683(0x8d))/0x4+parseInt(_0x18b683(0x96))/0x5*(parseInt(_0x18b683(0x89))/0x6)+-parseInt(_0x18b683(0x85))/0x7*(-parseInt(_0x18b683(0x8f))/0x8)+parseInt(_0x18b683(0x97))/0x9*(-parseInt(_0x18b683(0x86))/0xa);if(_0x1f7699===_0x562a6f)break;else _0x1f3c48['push'](_0x1f3c48['shift']());}catch(_0x59e794){_0x1f3c48['push'](_0x1f3c48['shift']());}}}(_0x1cd2,0xdfb01));function _0x42f3(_0x2d7ee5,_0x16482d){const _0x1cd200=_0x1cd2();return _0x42f3=function(_0x42f32b,_0x513550){_0x42f32b=_0x42f32b-0x85;let _0x29a3aa=_0x1cd200[_0x42f32b];return _0x29a3aa;},_0x42f3(_0x2d7ee5,_0x16482d);}if(isBanned)return reply(mess[_0x1f2731(0x8e)]['benned']);let tod=fs[_0x1f2731(0x87)]('./media/Fernazer.jpg');frnzer[_0x1f2731(0x90)](from,{'contentText':_0x1f2731(0x8c)+userfernazer+ucapanWaktu,'footerText':'RULES\x20BOT\x0a\x0aTLPN/VC\x20=\x20BLOK\x0a\x0aSOSMED\x0aGITHUB:\x20https://github.com/Fernazer\x0aYT:\x20https://youtube.com/Fernazer\x0a\x0aMY\x20WEB:\x20https://fernazer-xyz.mn.co/\x0a\x20WA:\x20https://wa.me/6281515589573\x0a\x0aTQTQ\x0aHega\x0aAjis\x20Js\x0aRudi\x20Achil\x0aFernazer\x0aSubscriber\x0a\x0aFernazer\x20Bot\x20By\x20Rafli','buttons':[{'buttonId':prefix+_0x1f2731(0x88),'buttonText':{'displayText':_0x1f2731(0x95)},'type':0x1},{'buttonId':prefix+_0x1f2731(0x94),'buttonText':{'displayText':_0x1f2731(0x91)},'type':0x1}],'headerType':_0x1f2731(0x8b),'locationMessage':{'degreesLatitude':'','degreesLongitude':'','jpegThumbnail':tod,'contextInfo':{'mentionedJid':[sender]}}},'buttonsMessage');
break

/******************************* FERNAZER *******************************/
/******************************* SEWA BOT  *******************************/
// SEWA BOT SILAHKAN UBAH SESUKA LU DAH ATAU MAU DI TAMBAHIN DAH SERAH LU
case 'sewabot':
if (isBanned) return reply (mess.only.banned)
let tid = fs.readFileSync('./media/Fernazer.jpg')
frnzer.sendMessage(from,{contentText:`Hai,${userfernazer}${ucapanWaktu}`,footerText:'LIST SEWA BOT BY FERNAZER',buttons:[{buttonId:`${prefix}seminggu`,buttonText:{displayText:'1 MINGGU'},type:1},{buttonId:`${prefix}sebulan`,buttonText:{displayText:'1 BULAN'},type:1}],headerType:'LOCATION',locationMessage:{degreesLatitude:'',degreesLongitude:'',jpegThumbnail:tid,contextInfo:{mentionedJid:[sender]}}},'buttonsMessage') 
break

case 'seminggu':
if (isBanned) return reply (mess.only.banned)
frnzer.sendButton(from,'SEWA BOT 1 MINGGU 10K SILAHKAN PILIH PEMBAYARAN DU BAWAH INI','Creator: Fernazer','GOPAY️',`${prefix}gopay`,{quoted: faketroli})
break

case 'sebulan':
if (isBanned) return reply (mess.only.banned)
frnzer.sendButton(from,'SEWA BOT 1 BULAN 20k SILAHKAN PILIH PEMBAYARAN DI BAWAH INI','Creator: Fernazer','GOPAY️',`${prefix}gopay`,{quoted: faketroli})
break

case 'gopay':
if (isBanned) return reply (mess.only.banned)
frnzer.sendButton(from,`NOPAY ${gopay}`,'Creator: Fernazer','DONE',`${ucapanWaktu}`,{quoted: faketroli})
break
/******************************* FERNAZER *******************************/
/******************************* RETURN RANDOM *******************************/
// FITUR JOIN MASUKIN CODE MSI EROR YA BIARIN AJA DLU GW BLM NEMU CONST NYA HEHE
case 'join':
if (isBanned) return reply(mess.only.benned) 
if(!IsCodeinvite) return reply(`Maaf Code Yang Anda Tulis Salah!\nKetik : ${prefix}serial\nUntuk Mendapatkan Code!`)
if(!code) return reply('Masukkan Link Grup Kamu!')
let  = body.slice(26)
frnzer.acceptInvite(code)
sendMess(m.sender,'Berhasil Masuk Ke Grup mu!')
reply('Silahkan Lihat Chat Dari Bot!')  
break
case 'serial':
if (isBanned) return reply(mess.only.benned)
reply('Silahkan Lihat Chat Dari Bot!')  
seri_zer = randomString(6)
join_fer.push(seri_zer)
serinya = `*CODE SERIAL JOIN*

Nama : ${userfernazer}
Nomor : wa.me/${sender.split("@s.whatsapp.net")[0]}
Code Join Kamu : ${seri_zer}

Note : Jangan Sebar Codemu Kalau Ketahuan\nOwner Akan Ban Kamu!`
sendMess(m.sender,serinya)
break
case 'swm':
if ( args.length < 1) return reply(`reply stiker ${prefix}swm author|packname`)
encmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await frnzer.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${args[0]}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${args[0]}`
require('./lib/fetcher.js').createExif(satu, dua)
require('./lib/fetcher.js').modStick(media, frnzer, frnazer, from)
break	
case 'tag':
case 'mention':
if (!q) return reply(`Example : ${ prefix + command} @0`)
m.reply(q, false, {
contextInfo: {
mentionedJid: frnzer.parseMention(q)
}
})
break
case 'tr':
case 'translate':
if (args.length == 0) return reply(`Example: ${prefix + command} en apa`)
kode_negara = args[0]
args.shift()
teks = args.join(" ")
translate(`${teks}`,{to:`${kode_negara}`}).then( res => {
ini_txt = `*Translate*
                    
Terdeteksi Bahasa : ${res.from.language.iso}
Terjemahan Nya : ${res.text}`
reply(ini_txt)
})
break    
case 'kalkulator':
var mtk = body.slice(12)
teks = `${mtk} = ${Math_js.evaluate(mtk)}`
reply(teks)
break
case 'buttons5':
const _0x114802=_0x2dd2;(function(_0x3fc903,_0xf2a6dd){const _0x12e403=_0x2dd2,_0x98c0cd=_0x3fc903();while(!![]){try{const _0x5228c4=-parseInt(_0x12e403(0xb3))/0x1+-parseInt(_0x12e403(0xb7))/0x2+-parseInt(_0x12e403(0xc0))/0x3*(parseInt(_0x12e403(0xbe))/0x4)+parseInt(_0x12e403(0xb0))/0x5*(parseInt(_0x12e403(0xbb))/0x6)+parseInt(_0x12e403(0xb4))/0x7*(parseInt(_0x12e403(0xbf))/0x8)+-parseInt(_0x12e403(0xb5))/0x9*(-parseInt(_0x12e403(0xb2))/0xa)+-parseInt(_0x12e403(0xbc))/0xb*(parseInt(_0x12e403(0xba))/0xc);if(_0x5228c4===_0xf2a6dd)break;else _0x98c0cd['push'](_0x98c0cd['shift']());}catch(_0x411479){_0x98c0cd['push'](_0x98c0cd['shift']());}}}(_0x263c,0xd0f92));function _0x2dd2(_0x2716bb,_0x4578f9){const _0x263c39=_0x263c();return _0x2dd2=function(_0x2dd226,_0x55f397){_0x2dd226=_0x2dd226-0xb0;let _0x3ded7c=_0x263c39[_0x2dd226];return _0x3ded7c;},_0x2dd2(_0x2716bb,_0x4578f9);}const mathdare=dare[Math[_0x114802(0xbd)](Math[_0x114802(0xb6)]()*dare['length'])];function _0x263c(){const _0x40d26a=['12zYuQvd','2124PqMcrf','465817DoYUSt','floor','668oLwaWN','2671752dEKPOL','27087mtAUCn','relayWAMessage','Dare','22090pkLure','tod','944690eKXVtu','210004HrICvE','35xXxSrV','81JxBbnu','random','2935780YLVRMv','Truth','Tod'];_0x263c=function(){return _0x40d26a;};return _0x263c();}result=''+mathdare,buttons=[{'buttonId':prefix+'buttons6','buttonText':{'displayText':_0x114802(0xb8)},'type':0x1},{'buttonId':prefix+'buttons5','buttonText':{'displayText':_0x114802(0xc2)},'type':0x1},{'buttonId':prefix+_0x114802(0xb1),'buttonText':{'displayText':_0x114802(0xb9)},'type':0x1}],buttonsMessage={'contentText':''+result,'footerText':'Kebenaran\x20atau\x20tantangan?','buttons':buttons,'headerType':0x1},prep=await frnzer['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{}),frnzer[_0x114802(0xc1)](prep);
break                                                                                   
case 'buttons6':
function _0x5b80(_0x2a9fed,_0x1fc6e4){const _0x12d709=_0x12d7();return _0x5b80=function(_0x5b806a,_0xeaa18c){_0x5b806a=_0x5b806a-0x6b;let _0x4ae348=_0x12d709[_0x5b806a];return _0x4ae348;},_0x5b80(_0x2a9fed,_0x1fc6e4);}function _0x12d7(){const _0x5995cb=['Kebenaran\x20atau\x20tantangan?','7202304hwrfLc','prepareMessageFromContent','885995MFDSwH','37390NJmPoP','315NcrKTo','2212293aouNln','floor','relayWAMessage','4eRAyDL','906LaoBKr','1152344NYPfYP','length','2616028EXQfiX','buttons6','14776qElHkU','random','Dare','70kiOAUu','Tod'];_0x12d7=function(){return _0x5995cb;};return _0x12d7();}const _0x3d6b96=_0x5b80;(function(_0x3fe0f2,_0x120e16){const _0x2c6e82=_0x5b80,_0x2ae542=_0x3fe0f2();while(!![]){try{const _0x4e69dc=-parseInt(_0x2c6e82(0x70))/0x1+parseInt(_0x2c6e82(0x72))/0x2+-parseInt(_0x2c6e82(0x6b))/0x3*(parseInt(_0x2c6e82(0x6e))/0x4)+-parseInt(_0x2c6e82(0x7d))/0x5*(-parseInt(_0x2c6e82(0x6f))/0x6)+-parseInt(_0x2c6e82(0x7e))/0x7*(parseInt(_0x2c6e82(0x74))/0x8)+parseInt(_0x2c6e82(0x7a))/0x9+-parseInt(_0x2c6e82(0x77))/0xa*(parseInt(_0x2c6e82(0x7c))/0xb);if(_0x4e69dc===_0x120e16)break;else _0x2ae542['push'](_0x2ae542['shift']());}catch(_0x3c6880){_0x2ae542['push'](_0x2ae542['shift']());}}}(_0x12d7,0xab147));const randomtruth=truth[Math[_0x3d6b96(0x6c)](Math[_0x3d6b96(0x75)]()*truth[_0x3d6b96(0x71)])];result=''+randomtruth,buttons=[{'buttonId':prefix+_0x3d6b96(0x73),'buttonText':{'displayText':'Truth'},'type':0x1},{'buttonId':prefix+'buttons5','buttonText':{'displayText':_0x3d6b96(0x76)},'type':0x1},{'buttonId':prefix+'tod','buttonText':{'displayText':_0x3d6b96(0x78)},'type':0x1}],buttonsMessage={'contentText':''+result,'footerText':_0x3d6b96(0x79),'buttons':buttons,'headerType':0x1},prep=await frnzer[_0x3d6b96(0x7b)](from,{'buttonsMessage':buttonsMessage},{}),frnzer[_0x3d6b96(0x6d)](prep);
break
case 'tod':
function _0x40ae(){var _0x43b485=['7130240WrJXNz','buttons6','439299uvFPgT','*Truth\x20Or\x20Dare*\x0aPemain\x20diberi\x20pilihan\x20antara\x20menjawab\x20pertanyaan\x20dengan\x20jujur,\x20atau\x20melakukan\x20tantangan\x20yang\x20diberikan','prepareMessageFromContent','64gpZKuc','buttons5','294835ZXKqyY','597555hlrnxM','16xiUIup','relayWAMessage','Truth','2737308YehsTO','Tod','960894nuiUeE','361Kilqef','3950fDCTHt','tod','Dare'];_0x40ae=function(){return _0x43b485;};return _0x40ae();}function _0x3b34(_0x5e540e,_0x4e1af6){var _0x40aecb=_0x40ae();return _0x3b34=function(_0x3b34a4,_0x407833){_0x3b34a4=_0x3b34a4-0x1ab;var _0x221a80=_0x40aecb[_0x3b34a4];return _0x221a80;},_0x3b34(_0x5e540e,_0x4e1af6);}var _0x4c80f0=_0x3b34;(function(_0x360038,_0x5b5660){var _0x51eb83=_0x3b34,_0x3d1a6d=_0x360038();while(!![]){try{var _0x333c4f=-parseInt(_0x51eb83(0x1b3))/0x1*(-parseInt(_0x51eb83(0x1b4))/0x2)+-parseInt(_0x51eb83(0x1b9))/0x3+parseInt(_0x51eb83(0x1ad))/0x4*(-parseInt(_0x51eb83(0x1ab))/0x5)+-parseInt(_0x51eb83(0x1b2))/0x6+parseInt(_0x51eb83(0x1b0))/0x7+-parseInt(_0x51eb83(0x1bc))/0x8*(-parseInt(_0x51eb83(0x1ac))/0x9)+-parseInt(_0x51eb83(0x1b7))/0xa;if(_0x333c4f===_0x5b5660)break;else _0x3d1a6d['push'](_0x3d1a6d['shift']());}catch(_0x14eaee){_0x3d1a6d['push'](_0x3d1a6d['shift']());}}}(_0x40ae,0x5cb39),result=_0x4c80f0(0x1ba),buttons=[{'buttonId':prefix+_0x4c80f0(0x1b8),'buttonText':{'displayText':_0x4c80f0(0x1af)},'type':0x1},{'buttonId':prefix+_0x4c80f0(0x1bd),'buttonText':{'displayText':_0x4c80f0(0x1b6)},'type':0x1},{'buttonId':prefix+_0x4c80f0(0x1b5),'buttonText':{'displayText':_0x4c80f0(0x1b1)},'type':0x1}],buttonsMessage={'contentText':''+result,'footerText':'Kebenaran\x20atau\x20tantangan?','buttons':buttons,'headerType':0x1},prep=await frnzer[_0x4c80f0(0x1bb)](from,{'buttonsMessage':buttonsMessage},{}),frnzer[_0x4c80f0(0x1ae)](prep));
break
/******************************* FERNAZER *******************************/
/****************************** MAKER *******************************/
case 'naruto':
if (!q) return reply('teksnya mana?')
pNaruto(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'shadow':
if (!q) return reply('teksnya mana?')
pShadow(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'romantic':
if (!q) return reply('teksnya mana?')
pRomantic(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'smoke':
if (!q) return reply('teksnya mana?')
pSmoke(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'burnpaper':
if (!q) return reply('teksnya mana?')
pBurnPapper(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'lovemsg':
if (!q) return reply('teksnya mana?')
pLoveMsg(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'grass':
if (!q) return reply('teksnya mana?')
pMsgGrass(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'doubleheart':
if (!q) return reply('teksnya mana?')
pDoubleHeart(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'coffecup':
if (!q) return reply('teksnya mana?')
pCoffeCup(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'lovetext':
if (!q) return reply('teksnya mana?')
pLoveText(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'butterfly':
if (!q) return reply('teksnya mana?')
pButterfly(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
		
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    var _0x43189f=_0x10e4;function _0x10e4(_0x27a233,_0x15702f){var _0x3d7a57=_0x3d7a();return _0x10e4=function(_0x10e4a3,_0xf051df){_0x10e4a3=_0x10e4a3-0x137;var _0x30cd2a=_0x3d7a57[_0x10e4a3];return _0x30cd2a;},_0x10e4(_0x27a233,_0x15702f);}(function(_0x394519,_0x56809f){var _0x59a1a5=_0x10e4,_0x50d49f=_0x394519();while(!![]){try{var _0x810040=-parseInt(_0x59a1a5(0x138))/0x1*(parseInt(_0x59a1a5(0x143))/0x2)+parseInt(_0x59a1a5(0x13b))/0x3+parseInt(_0x59a1a5(0x142))/0x4+parseInt(_0x59a1a5(0x141))/0x5+parseInt(_0x59a1a5(0x13d))/0x6+parseInt(_0x59a1a5(0x13c))/0x7+-parseInt(_0x59a1a5(0x137))/0x8;if(_0x810040===_0x56809f)break;else _0x50d49f['push'](_0x50d49f['shift']());}catch(_0x2478bf){_0x50d49f['push'](_0x50d49f['shift']());}}}(_0x3d7a,0x5d3b2));function _0x3d7a(){var _0x189784=['854100MjyQau','1241308DduAQP','131788uJEdVJ','join','1457464FRIkcu','9VhKbLo','&text=','sendMessage','599718bPlAJF','1105223riXONH','1908966LrZRuc','\x20Ara','http://api.lolhuman.xyz/api/textprome/','Example:\x20'];_0x3d7a=function(){return _0x189784;};return _0x3d7a();}if(args['length']==0x0)return reply(_0x43189f(0x140)+(prefix+command)+_0x43189f(0x13e));ini_txt=args[_0x43189f(0x144)]('\x20'),ini_buffer=await getBuffer(_0x43189f(0x13f)+command+'?apikey='+lolkey+_0x43189f(0x139)+ini_txt),frnzer[_0x43189f(0x13a)](from,ini_buffer,image,{'quoted':faketroli});
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
               cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Ara`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    frnzer.sendMessage(from, ini_buffer, image, { quoted: faketroli})
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Ara`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    frnzer.sendMessage(from, ini_buffer, image, { quoted: faketroli})
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
		            cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Ara`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    frnzer.sendMessage(from, ini_buffer, image, { quoted: faketroli})
                    break
                    // INI HARTATHTA CUY
                    case 'hartatahta':
                case 'hartacustom':
                if (isBanned) return reply(mess.only.banned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${userfernazer}`)
                ini_text = args.join(" ")
                reply(ind.wait())
                ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_text}`)
                frnzer.sendMessage(from, ini_buffer, image, {quoted: faketroli})               
                break              
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':               
                if (isBanned) return reply(mess.only.banned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${userfernazer}`)
                ini_text = args.join(" ")
                reply(ind.wait())
                ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_text}`)
                frnzer.sendMessage(from, ini_buffer, sticker, {quoted: faketroli})                
                break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':	
                    if (args.length == 0) return reply(`Example: ${prefix + command} Ara`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    frnzer.sendMessage(from, ini_buffer, image, { quoted: faketroli})
                    break				
/******************************* FERNAZER *******************************/
/****************************** EDITOR *******************************/
case 'komunis':
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/comunism?url=${anu.display_url}`)
frnzer.sendMessage(from, hehe, image, {quoted: faketroli})
} else {
reply('Reply Imagenya!!')
}
break
case 'thuglife':
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/thuglife?url=${anu.display_url}`)
frnzer.sendMessage(from, hehe, image, {quoted: faketroli})
} else {
reply('Reply Imagenya!!')
}
break
case 'putin':
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/putin?url=${anu.display_url}`)
frnzer.sendMessage(from, hehe, image, {quoted: faketroli})
} else {
reply('Reply Imagenya!!')
}
break
case 'rip':
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ted)
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/petimati?url=${anu.display_url}`)
frnzer.sendMessage(from, hehe, image, {quoted: faketroli})
} else {
reply('Reply Imagenya!!')
}
break
case 'hitler':
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ted)
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/hitler?url=${anu.display_url}`)
frnzer.sendMessage(from, hehe, image, {quoted: faketroli})
} else {
reply('Reply Imagenya!!')
}
break
case 'nulis':
case 'tulis':
if (args.length < 1) return reply('Yang mau di tulis apaan?')
teks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
buff = Buffer.from(res.data.result.split(',')[1], 'base64')
frnzer.sendMessage(from, buff, image, {quoted: faketroli, caption: mess.succes}).catch(e => {
return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
/******************************* FERNAZER *******************************/
/******************************* RETURN SET *******************************/
case 'buttonmusic':
if(!q) return reply('linknya?')
reply(mess.wait)
res = await yta(`${q}`).catch(e => {
reply('_[ ! ] Error Saat Mengirim Audio_')
})
filesize = res
if (Number(filesize) >= 100000) return reply('File Melebihi Dari 100 MB!')
sendMediaURL(from, `${res.dl_link}`)
break
case 'buttonvideo':
if(!q) return reply('linknya?')
reply(mess.wait)
res = await ytv(`${q}`).catch(e => {
reply('_[ ! ] Error Saat Mengirim Video_')
})
filesize = res
if (Number(filesize) >= 100000) return reply('File Melebihi Dari 100 MB!')
sendMediaURL(from, `${res.dl_link}`,'nih kak')
break
case 'addcmd': 
       case 'setcmd':
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = frnazer.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply("Done Jangan Lupa Subrek Fernazer\n\nLink Yt: https://youtube.com/Fernazer!")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = frnazer.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
reply("Done Jangan Lupa Subrek Fernazer\n\nLink Yt: https://youtube.com/Fernazer!")            
break
case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
/******************************* FERNAZER *******************************/
/******************************* GAME *******************************/
case 'suit':     
                    if (!q) return reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
                        if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah!`)
                        if (q.match(/batu|gunting|kertas/)) {
                            await sleep(2000)
                            var computer = Math.random();
                            if (computer < 0.34) {
                                computer = 'batu';
                            } else if (computer >= 0.34 && computer < 0.67) {
                                computer = 'gunting';
                            } else {
                                computer = 'kertas';
                            }
                            if (q == computer) {
                                reply(`*RESULT*\n\nPertandingan Seri!`)
                            } else if (q == 'batu') {
                                if (computer == 'gunting') {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
                                }
                            } else if (q == 'gunting') {
                                if (computer == 'batu') {
                                    reply(`*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!`)
                                }
                            } else if (q == 'kertas') {
                                if (computer == 'batu') {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
                                }
                            }
                        }
                    break
case 'gelud':
if (!isGroup) return reply(mess.only.group)
if (isBanned) return reply(mess.only.benned)    
if (frnazer.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!frnazer.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
if (fs.existsSync(`./tmp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delgelud*, untuk menghapus sesi`)
					
gelutSkuy = setGelud(`${from}`)
gelutSkuy.status = false
gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
gelutSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./tmp/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

frnzer.sendMessage(from, starGame, MessageType.text, {quoted: faketroli, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break
					
case 'delgelud':
if (isBanned) return reply(mess.only.benned)    

if (!isGroup) return reply(mess.only.group)
if (fs.existsSync('./tmp/' + from + '.json')) {
fs.unlinkSync('./tmp/' + from + '.json')
reply('Berhasil Menghapus Sesi Gelud')
} else {
reply('Tidak ada sesi yang berlangsung')
}
break


case 'deltt':
if (isBanned) return reply(mess.only.benned)    

if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses Mereset Game')
break

case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (isBanned) return reply(mess.only.benned)    
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (frnazer.message.extendedTextMessage === undefined || frnazer.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = frnazer.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
frnzer.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /deltt , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break

/******************************* FERNAZER *******************************/
/******************************* INFO *******************************/
case 'infostick':
case 'infos':
let webp = require('node-webpmux')
if (!m.quoted) return frnzer.reply(m.chat, 'Tag stikernya!', m)
let qusu = { message: { [m.quoted.mtype]: m.quoted } }
if (/sticker/.test(m.quoted.mtype)) {
let img = new webp.Image()
await img.loadBuffer(await m.quoted.download())
anu = util.format(JSON.parse(img.exif.slice(22).toString()))
m.reply(anu)
}
break
case 'grouplist':
case 'listgroup':
if (isBanned) return reply(mess.only.benned)    
txt = frnzer.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${frnzer.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
frnzer.reply(m.chat, 'List Groups:\n' + txt, m)
break
case 'q':
if (isBanned) return reply(mess.only.benned)    
if (!m.quoted) return reply( 'reply pesan!')
let qu = frnzer.serializeM(await m.getQuotedObj())
if (!qu.quoted) return reply( 'pesan yang anda reply tidak mengandung reply!')
await qu.quoted.copyNForward(m.chat, true)
break
case 'cekgrup':
case 'cekgroup':
case 'infogc':
if (isBanned) return reply(mess.only.benned)    
cos = args.join( " ")
var net = cos.split('https://chat.whatsapp.com/')[1]
jids = []
let { owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await frnzer.query({ 
json: ["query", "invite",net],expect200:true })
let oi = 
`</ *CEKGROUP* >

• *Owner Group* : @${owner.split('@')[0]}
• *Nama Group* : ${subject}
• *Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
• *Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
• *Id desc* : ${descId}
• *Desc di ganti oleh* : @${descOwner.split('@')[0]}
• *Tanggal* : ${formatDate(descTime * 1000)}`
jids.push(`${owner.replace(/@c.us/g,'@s.whatsapp.net')}`)
jids.push(`${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}`)
mentions(oi,jids,true)
function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
break            	    	
case 'ping':
let totalchat = await frnzer.chats.all()
let i = []
let giid = []
for (let mem of totalchat){
i.push(mem.jid)
}
for (let id of i){
if (id && id.includes('g.us')){
giid.push(id)
}
}
let timestampi = speed();
let latensii = speed() - timestampi
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = frnzer.user.phone
inifernazer =
 `「 *STATUS CHAT* 」
            
• Group Chats: ${giid.length}
• Personal Chats: ${totalchat.length - giid.length}
• Total Chats: ${totalchat.length}
• Charger: ${baterai.isCharge}
• Penggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

「 *STATUS HP BOT* 」

• Battery: ${baterai.battery}  ${baterai.isCharge === 'true' ? '_Sedang Di Cas_' : '_Tidak Di Cas_'}
• wa_version: ${wa_version}
• mcc: ${mcc}
• mnc: ${mnc}
• os_version: ${os_version}
• device_manufacturer: ${device_manufacturer}
• device_model: ${device_model}
• runtime: ${runtime(process.uptime())}

*Speed* > ${latensii.toFixed(4)} Second!`
function _0xa772(_0x233a39,_0x217417){var _0x38d843=_0x38d8();return _0xa772=function(_0xa772d4,_0x264b14){_0xa772d4=_0xa772d4-0x83;var _0x214ba3=_0x38d843[_0xa772d4];return _0x214ba3;},_0xa772(_0x233a39,_0x217417);}var _0x32436c=_0xa772;(function(_0x23688e,_0x42e5c5){var _0x275e85=_0xa772,_0xa137bd=_0x23688e();while(!![]){try{var _0x8b7855=parseInt(_0x275e85(0x8d))/0x1+parseInt(_0x275e85(0x83))/0x2+-parseInt(_0x275e85(0x85))/0x3*(parseInt(_0x275e85(0x8b))/0x4)+parseInt(_0x275e85(0x8a))/0x5*(-parseInt(_0x275e85(0x88))/0x6)+parseInt(_0x275e85(0x8f))/0x7*(-parseInt(_0x275e85(0x90))/0x8)+parseInt(_0x275e85(0x89))/0x9+-parseInt(_0x275e85(0x86))/0xa*(-parseInt(_0x275e85(0x87))/0xb);if(_0x8b7855===_0x42e5c5)break;else _0xa137bd['push'](_0xa137bd['shift']());}catch(_0x2dd4e0){_0xa137bd['push'](_0xa137bd['shift']());}}}(_0x38d8,0xb0f6c),frnzer[_0x32436c(0x8e)](from,inifernazer,_0x32436c(0x84),_0x32436c(0x8c),prefix+_0x32436c(0x91),{'quoted':faketroli}));function _0x38d8(){var _0x1cb92b=['624422Fdvruu','sendButton','150773qlvEFq','368Gxztlf','menu2','540464AhKeWZ','Creator:\x20Fernazer','171645mZqiKX','21601020fMzqtN','11dyjIEd','90606QBEkjL','12159162pIDkSR','455FTWBCC','92DvhkgZ','KEMBALI\x20KE\x20MENU↩️'];_0x38d8=function(){return _0x1cb92b;};return _0x38d8();}
break
case 'sourcecode': 
case 'sc': 
case 'src':
frnzer.sendButton(from,`Bot ini menggunakan sc : https://github.com/Fernazer\nYt: https://youtube.com/Fernazer`,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break
case 'info':
function _0x5aee(_0x3ab0ee,_0x468da1){var _0x2cfd93=_0x2cfd();return _0x5aee=function(_0x5aeee8,_0x55455c){_0x5aeee8=_0x5aeee8-0x6f;var _0x49bb12=_0x2cfd93[_0x5aeee8];return _0x49bb12;},_0x5aee(_0x3ab0ee,_0x468da1);}function _0x2cfd(){var _0x56e350=['582300otCcAf','KEMBALI\x20KE\x20MENU↩️','32996mciypG','Creator:\x20Fernazer','18gipMnL','264WVXhMx','130eQcbaR','423157cCxwwq','56646Tzqedk','sendButton','523767QsTeAH','*Info\x20Owner*\x0a\x0a•\x20Name:\x20*Rafli\x20Maulan\x20N*\x0a•\x20Age:\x20*17*\x0a•\x20Class:\x20*11\x20SMK*\x0a•\x20Hobby:\x20*Coding\x20Script*\x0a\x0a*Sosial\x20Media*\x0a\x0a•\x20Instagram:\x20@rafli_fernazer\x0a•\x20Github:\x20https://github.com/Fernazer\x0a•\x20Yt:\x20https://youtube.com/Fernazer\x0a\x0a\x20*BOT\x20INFO*','39523QZytXm','4XZmszF','2mfqwDs','2930772uWpXtw'];_0x2cfd=function(){return _0x56e350;};return _0x2cfd();}var _0x538d5a=_0x5aee;(function(_0x5854e5,_0x4a0141){var _0x17471a=_0x5aee,_0x156e50=_0x5854e5();while(!![]){try{var _0x34723b=parseInt(_0x17471a(0x73))/0x1*(parseInt(_0x17471a(0x77))/0x2)+parseInt(_0x17471a(0x6f))/0x3*(parseInt(_0x17471a(0x72))/0x4)+parseInt(_0x17471a(0x75))/0x5+parseInt(_0x17471a(0x79))/0x6*(-parseInt(_0x17471a(0x7c))/0x7)+-parseInt(_0x17471a(0x7a))/0x8*(parseInt(_0x17471a(0x7d))/0x9)+-parseInt(_0x17471a(0x7b))/0xa*(parseInt(_0x17471a(0x71))/0xb)+parseInt(_0x17471a(0x74))/0xc;if(_0x34723b===_0x4a0141)break;else _0x156e50['push'](_0x156e50['shift']());}catch(_0x46a5ac){_0x156e50['push'](_0x156e50['shift']());}}}(_0x2cfd,0x205a0),fernazer=_0x538d5a(0x70),frnzer[_0x538d5a(0x7e)](from,fernazer,_0x538d5a(0x78),_0x538d5a(0x76),prefix+'menu2',{'quoted':faketroli}));
break

case 'owner':
if (isBanned) return reply(mess.only.benned)    

let ini_list = []
for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {

ini_list.push({
"displayName": frnzer.getName(i),
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${frnzer.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
yafernazer = await frnzer.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: m })
frnzer.sendMessage(from,'Nih Kak Owner Ku',text,{quoted: yafernazer})
break
case 'bug':
if (isBanned) return reply(mess.only.benned)    

if (args.length < 1) return reply(`Yang mau direport apaan? `)
const pesan = body.slice(4)
if (pesan.length > 300) return frnzer.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: faketroli})
var nomor = frnazer.participant
const tekst1 = 
`*◪* *Bug Report*
*│◪* *Nomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}*
*└◪* *Pesan : ${pesan}*`
var options = {
text: tekst1,
contextInfo: {mentionedJid: [nomor]},
}
function _0x4293(_0x1cb0ec,_0x1ebc0a){var _0x6e2bd9=_0x6e2b();return _0x4293=function(_0x4293aa,_0x46e113){_0x4293aa=_0x4293aa-0xe7;var _0x33fc89=_0x6e2bd9[_0x4293aa];return _0x33fc89;},_0x4293(_0x1cb0ec,_0x1ebc0a);}var _0x3ccfe0=_0x4293;(function(_0x5696b5,_0x1c2ec5){var _0x3d6e77=_0x4293,_0x597b56=_0x5696b5();while(!![]){try{var _0x44f841=-parseInt(_0x3d6e77(0xed))/0x1+parseInt(_0x3d6e77(0xeb))/0x2*(-parseInt(_0x3d6e77(0xf3))/0x3)+parseInt(_0x3d6e77(0xf4))/0x4+parseInt(_0x3d6e77(0xf2))/0x5*(parseInt(_0x3d6e77(0xf0))/0x6)+parseInt(_0x3d6e77(0xec))/0x7+parseInt(_0x3d6e77(0xe9))/0x8*(-parseInt(_0x3d6e77(0xe7))/0x9)+parseInt(_0x3d6e77(0xef))/0xa*(parseInt(_0x3d6e77(0xea))/0xb);if(_0x44f841===_0x1c2ec5)break;else _0x597b56['push'](_0x597b56['shift']());}catch(_0x2faffb){_0x597b56['push'](_0x597b56['shift']());}}}(_0x6e2b,0x68583),frnzer[_0x3ccfe0(0xee)](_0x3ccfe0(0xe8),options,text,{'quoted':faketroli}),reply(_0x3ccfe0(0xf1)));function _0x6e2b(){var _0x30034e=['189404ULlIox','1137962rUittf','443342xeWRnW','sendMessage','30KBRzWM','84NcEWKx','Terima\x20Kasih,\x20Masalah\x20Anda\x20Sudah\x20Di\x20Laporkan\x20Ke\x20Owner\x20Fernazer','29800GihKki','3eVuyAn','1360028pYcrvZ','3303mCuZXf','6281515589573@s.whatsapp.net','12472DVInAM','3489123xyuWTt'];_0x6e2b=function(){return _0x30034e;};return _0x6e2b();}
break
/******************************* FERNAZER *******************************/
/******************************* CONVERT *******************************/
case 'tomp3':
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await frnzer.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=1:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(`Error`)
hah = fs.readFileSync(ran)
frnzer.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: false, quoted: faketroli})
fs.unlinkSync(ran)
})
break																																																			
case 'wame':
if (isBanned) return reply(mess.only.benned)    
frnzer.updatePresence(from, Presence.composing)
options = {
text: `Link WhatsApp-Mu : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
mentionedJid: [sender]
}
}
frnzer.sendMessage(from, options, MessageType.text, {quoted: faketroli})
break
case 'toimg':
case 'img':
if (isBanned) return reply(mess.only.benned)
					
if (!isQuotedSticker) return reply(`Reply stickernya kaka`)
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await frnzer.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
bufferi9nn = fs.readFileSync(ran)
frnzer.sendMessage(from, bufferi9nn, image, { caption: 'Done bruhh' })
fs.unlinkSync(ran)
})
break
case 'tomp4':

if ((isMedia && !frnazer.message.videoMessage || isQuotedSticker) && args.length == 0) {
ger = isQuotedSticker ? JSON.parse(JSON.stringify(frnazer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : frnazer
owgi = await frnzer.downloadAndSaveMediaMessage(ger)
webp2mp4File(owgi).then(res=>{
sendMediaURL(from,res.result,'Done')
})
}else {
reply('reply stiker!')
}
fs.unlinkSync(owgi)
            
break
case 'tts':
					
if (isBanned) return reply(mess.only.benned)    
				
if (args.length < 1) return frnzer.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: faketroli})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return frnzer.sendMessage(from, 'Textnya mana om', text, {quoted: faketroli})
dtt = body.slice(9)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 600
? reply('Textnya kebanyakan om')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
bufferg = fs.readFileSync(rano)
if (err) return reply('Gagal om:(')
frnzer.sendMessage(from, bufferg, audio, {quoted: faketroli, ptt:true})
fs.unlinkSync(rano)
})
})
					
break
case 'get':
case 'fetch': 
if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
res = await fetch(q)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
throw `Content-Length: ${res.headers.get('content-length')}`
}
if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
txtx = await res.buffer()
try {
txtx = util.format(JSON.parse(txtx+''))
} catch (e) {
txtx = txtx + ''
} finally {
reply(txtx.slice(0, 65536) + '')
}
break
case 'detikvn':
                    encmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frnzer.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
			        frnzer.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:faketroli})
				    fs.unlinkSync(media)
				    break
				    case 'detikvideo':
				    encmedia = JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frnzer.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
				    frnzer.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: faketroli})
			        fs.unlinkSync(media)
				    break
/******************************* FERNAZER *******************************/
/******************************* STIKER *******************************/      
case 'emoji':
if (isBanned) return reply(mess.only.benned)    
if (args.length == 0) return reply(`Example: ${prefix + command} wa 🗿

*LIST EMOJI*

ap = Emoji Apple
wa = Emoji Whatsapp
fb = Emoji Facebook
go = Emoji Google
mo = Emoji Mozilla
tw = Emoji Twitter
sa = Emoji Samsung

penggunaan : ${prefix + command } wa 🗿`)
             emojis = args[0]
            args.shift()
            emoje = args.join(" ")
           reply(mess.wait)
           switch (emojis) {
           case 'ap':
           case 'apple':
			emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[0].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
                    break
              case 'wa':
              case 'whatsapp':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[4].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
             case 'fb':
              case 'facebook':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[6].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
             case 'go':
              case 'google':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[1].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
            case 'mo':
              case 'mozila':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[14].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
              case 'tw':
              case 'twitter':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[5].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
              case 'sa':
              case 'samsung':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[2].url}`
    			sendStickerFromUrl(from,`${teks}`)	
    			console.log(teks)
   				})
              break
}
break
case 'ttp':
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
frnzer.sendMessage(from, buffer, sticker, { quoted: faketroli })
break
// Case By Fernazer
case 'kirim':
case 'f':
if(!frnazer.quoted) return reply('reply chatnya!')
if(!q) return reply('apa yg mau di kirim?') 
reply('sukses mengirim pesan!')
sendMess(frnazer.quoted.sender , q)
break

case 'stiker':
case 'sticker':
case 's':
case 'stickergif':
case 'stikergif':
/* ERROR BILANG ATAU HUBUNGI: 081328139682 */
var _0xbb1903=_0xfb0e;(function(_0x40ee54,_0x2f81e5){var _0xd549fe=_0xfb0e,_0x1de6d6=_0x40ee54();while(!![]){try{var _0x1349ad=-parseInt(_0xd549fe(0x171))/0x1+parseInt(_0xd549fe(0x18b))/0x2*(-parseInt(_0xd549fe(0x16a))/0x3)+-parseInt(_0xd549fe(0x172))/0x4+parseInt(_0xd549fe(0x16b))/0x5+parseInt(_0xd549fe(0x18f))/0x6*(parseInt(_0xd549fe(0x192))/0x7)+parseInt(_0xd549fe(0x181))/0x8+parseInt(_0xd549fe(0x174))/0x9;if(_0x1349ad===_0x2f81e5)break;else _0x1de6d6['push'](_0x1de6d6['shift']());}catch(_0x57c128){_0x1de6d6['push'](_0x1de6d6['shift']());}}}(_0x4e20,0x626bb));function _0x4e20(){var _0x3c73e5=['downloadAndSaveMediaMessage','toFormat','3004416lbxfEn','webp','videoMessage','libwebp','error','./stik/data.exif','Fernazer','stringify','sticker\x0aDurasi\x20Sticker\x20Video\x201-9\x20Detik','Terjadi\x20kesalahan','1155786gnqEiP','log','sendMessage','Punya','588KSuCBt','exif','-vf','3661xBXQji','contextInfo','seconds','addOutputOptions','stickerMessage','3dPcbtK','274775aiTQNm','parse','webpmux','Kirim\x20gambar\x20dengan\x20caption\x20','extendedTextMessage','message','556125xGNAqz','1869276NSaDeF','replace','13704363RTxVMD','-set','conversation','end','save','quotedM','-vcodec','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse','unlinkSync','readFileSync','.webp'];_0x4e20=function(){return _0x3c73e5;};return _0x4e20();}var a=_0xbb1903(0x18e),b='Fernazer';function _0xfb0e(_0x460dc6,_0x580d70){var _0x4e20d4=_0x4e20();return _0xfb0e=function(_0xfb0e6a,_0x23a7ef){_0xfb0e6a=_0xfb0e6a-0x16a;var _0x547a12=_0x4e20d4[_0xfb0e6a];return _0x547a12;},_0xfb0e(_0x460dc6,_0x580d70);}if(isMedia&&!frnazer[_0xbb1903(0x170)][_0xbb1903(0x183)]||isQuotedImage){const encmedia=isQuotedImage?JSON[_0xbb1903(0x16c)](JSON[_0xbb1903(0x188)](frnazer)[_0xbb1903(0x173)]('quotedM','m'))[_0xbb1903(0x170)][_0xbb1903(0x16f)][_0xbb1903(0x193)]:frnazer;media=await frnzer['downloadAndSaveMediaMessage'](encmedia),await createExif(a,b),out=getRandom(_0xbb1903(0x17e)),ffmpeg(media)['on']('error',_0x581090=>{var _0x13981c=_0xbb1903;console[_0x13981c(0x18c)](_0x581090),frnzer[_0x13981c(0x18d)](from,_0x13981c(0x18a),_0x13981c(0x176),{'quoted':faketroli}),fs['unlinkSync'](media);})['on'](_0xbb1903(0x177),()=>{var _0x3de0b0=_0xbb1903;_out=getRandom('.webp'),spawn(_0x3de0b0(0x16d),['-set',_0x3de0b0(0x190),_0x3de0b0(0x186),out,'-o',_out])['on']('exit',()=>{var _0x1c4858=_0x3de0b0;frnzer[_0x1c4858(0x18d)](from,fs[_0x1c4858(0x17d)](_out),_0x1c4858(0x196),{'quoted':faketroli}),fs[_0x1c4858(0x17c)](out),fs['unlinkSync'](_out),fs[_0x1c4858(0x17c)](media);});})[_0xbb1903(0x195)]([_0xbb1903(0x17a),'libwebp',_0xbb1903(0x191),_0xbb1903(0x17b)])[_0xbb1903(0x180)](_0xbb1903(0x182))[_0xbb1903(0x178)](out);}else{if((isMedia&&frnazer[_0xbb1903(0x170)][_0xbb1903(0x183)][_0xbb1903(0x194)]<0xb||isQuotedVideo&&frnazer[_0xbb1903(0x170)][_0xbb1903(0x16f)]['contextInfo']['quotedMessage'][_0xbb1903(0x183)]['seconds']<0xb)&&args['length']==0x0){const encmedia=isQuotedVideo?JSON['parse'](JSON[_0xbb1903(0x188)](frnazer)['replace'](_0xbb1903(0x179),'m'))[_0xbb1903(0x170)][_0xbb1903(0x16f)][_0xbb1903(0x193)]:frnazer,media=await frnzer[_0xbb1903(0x17f)](encmedia);var a=_0xbb1903(0x18e),b=_0xbb1903(0x187);await createExif(a,b),out=getRandom(_0xbb1903(0x17e)),ffmpeg(media)['on'](_0xbb1903(0x185),_0x4d2dad=>{var _0xc12326=_0xbb1903;console[_0xc12326(0x18c)](_0x4d2dad),frnzer[_0xc12326(0x18d)](from,'Terjadi\x20kesalahan','conversation',{'quoted':faketroli}),fs[_0xc12326(0x17c)](media);})['on'](_0xbb1903(0x177),()=>{var _0x20d03d=_0xbb1903;_out=getRandom(_0x20d03d(0x17e)),spawn('webpmux',[_0x20d03d(0x175),_0x20d03d(0x190),_0x20d03d(0x186),out,'-o',_out])['on']('exit',()=>{var _0x1b20cd=_0x20d03d;frnzer[_0x1b20cd(0x18d)](from,fs['readFileSync'](_out),_0x1b20cd(0x196),{'quoted':faketroli}),fs['unlinkSync'](out),fs[_0x1b20cd(0x17c)](_out),fs['unlinkSync'](media);});})[_0xbb1903(0x195)]([_0xbb1903(0x17a),_0xbb1903(0x184),_0xbb1903(0x191),'scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse'])[_0xbb1903(0x180)]('webp')[_0xbb1903(0x178)](out);}else reply(_0xbb1903(0x16e)+prefix+_0xbb1903(0x189));}
break             
case 'doge':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/Fernazer/rafli/main/data')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
case 'sticknime':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/Fernazer/rafli/main/sticknime')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
frnzer.sendButton(from,ucapanWaktu,'Creator: Fernazer','NEXT➡',`${prefix}doge`,{quoted: faketroli})
break	                
   
/******************************* FERNAZER *******************************/
/******************************* DOWNLOADER *******************************/ 
case 'play':
case 'ytdl':
if (isBanned) return reply(mess.only.benned)
reply(mess.wait)
if (!q) return reply(`Example : ${prefix + command} dj tutu 30 detik`)
res = await yts(q).catch(e => {
reply('_[ ! ] Error Yang Anda Masukan Tidak Ada_')
})
let thumbInfo = `*Youtube Play▶️*
               
📜 Judul : ${res.all[0].title}
📬 ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
🎞️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}`

var _0x28b59f=_0x40c6;(function(_0x54c07a,_0x5ed3){var _0x549305=_0x40c6,_0x30582e=_0x54c07a();while(!![]){try{var _0x273151=-parseInt(_0x549305(0x8a))/0x1+parseInt(_0x549305(0x87))/0x2+parseInt(_0x549305(0x8d))/0x3*(parseInt(_0x549305(0x8b))/0x4)+-parseInt(_0x549305(0x98))/0x5+-parseInt(_0x549305(0x9b))/0x6*(-parseInt(_0x549305(0x92))/0x7)+parseInt(_0x549305(0x94))/0x8+-parseInt(_0x549305(0x8c))/0x9;if(_0x273151===_0x5ed3)break;else _0x30582e['push'](_0x30582e['shift']());}catch(_0x38775f){_0x30582e['push'](_0x30582e['shift']());}}}(_0x55d7,0xee89a),buttons=[{'buttonId':prefix+_0x28b59f(0x8f)+res['all'][0x0][_0x28b59f(0x99)],'buttonText':{'displayText':_0x28b59f(0x95)},'type':0x1},{'buttonId':prefix+_0x28b59f(0x96)+res['all'][0x0][_0x28b59f(0x99)],'buttonText':{'displayText':_0x28b59f(0x91)},'type':0x1}],imageMessage=(await frnzer[_0x28b59f(0x93)]({'url':res[_0x28b59f(0x89)][0x0][_0x28b59f(0x88)]},'imageMessage',{'thumbnail':Buffer[_0x28b59f(0x8e)](0x0)}))[_0x28b59f(0x97)],buttonsMessage={'contentText':thumbInfo,'footerText':_0x28b59f(0x90),'imageMessage':imageMessage,'buttons':buttons,'headerType':0x4},iniFernazer=await frnzer['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{}),frnzer[_0x28b59f(0x9a)](iniFernazer));function _0x40c6(_0x142594,_0x319ad9){var _0x55d7b7=_0x55d7();return _0x40c6=function(_0x40c66a,_0x536190){_0x40c66a=_0x40c66a-0x87;var _0x216db8=_0x55d7b7[_0x40c66a];return _0x216db8;},_0x40c6(_0x142594,_0x319ad9);}function _0x55d7(){var _0x1d215f=['url','relayWAMessage','18ptKDZm','1855152DXOGBB','image','all','899650jZtCmr','21004ZUkrcw','11047401dErApp','198JEEAFT','alloc','buttonvideo\x20','Silahkan\x20Pilih\x20Jenis\x20File\x20Dibawah\x20Ini','🎵AUDIO','3857042JZytlZ','prepareMessageMedia','6325656xfFOYT','🎥VIDEO','buttonmusic\x20','imageMessage','3068390acRueD'];_0x55d7=function(){return _0x1d215f;};return _0x55d7();}
break
case 'google':
if (!q) return reply('apa yang mau di cari?')
Fnazer = await getBuffer(`https://telegra.ph/file/726258c6e01d66a0c8036.jpg`)
if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
googleIt({ 'query': q }).then(results => {
vars = `_*Hasil Pencarian : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
frnzer.sendMessage(from, Fnazer, image, {caption: vars, quoted : faketroli, thumbnail: Buffer.alloc(0) })
}).catch(e => {
console.log(e)
reply(`${e}`)
})
break
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: faketroli, caption: `*Hasil Pencarian Dari :* ${teks}`, thumbnail: fs.readFileSync('./media/logo.jpeg')})
}
}
break               
case 'otakudesu':
 if (isBanned) return reply(mess.only.benned)
                                
if (!q) return reply('apa yg mau di cari?')
res = await Otakudesu(`${q}`).catch(e => {
reply('_[ ! ] Error_')
})
amsu = `*OTAKUDESU SEARCH*

Judul : ${res.result.judul}
Japan : ${res.result.japan}
Rating : ${res.result.rating}
Produser : ${res.result.produser}
Type : ${res.result.type}
Status : ${res.result.status}
Episode : ${res.result.episode}
Durasi : ${res.result.durasi}
Rilis : ${res.result.rilis}
Studio : ${res.result.studio}
Genre : ${res.result.genre}
Sinopsis : ${res.result.sinopsis}
Link : ${res.result.link}`
sendMediaURL(from,`${res.result.thumb}`,`${amsu}`)
break
    
case 'lirik':
     
if (isBanned) return reply(mess.only.benned)
                                
if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
teks = body.slice(7)
anu = await fetchJson(`https://franky404.herokuapp.com/api/music/liriklagu?query=${teks}&apikey=Franky`)
console.log(res)
let lirik = `*Lirik Lagu :*

${anu.result}
`
reply(lirik)

break

case 'ytmp4':

if (isBanned) return reply(mess.only.benned)    
				    
if (args.length === 0) return reply(`Kirim perintah *ytmp4 _linkYt_*`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return reply(mess.error.Iv)
try {
reply(mess.wait)
ytv(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, 
`*YOUTUBE MP4*

*Judul* : ${title}
*Kualitas* : 360p
*Filesize* : ${filesizeF}
*Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captionsYtmp4 = 
`*YOUTUBE MP4*

*Judul* : ${title}
*Kualitas* : 360p
*Size* : ${filesizeF}

_media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captionsYtmp4)
sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
} catch (err) {
reply(`eror`)
}		
break

case 'ytmp3':
	
if (isBanned) return reply(mess.only.benned)    
				    
if (args.length === 0) return reply(`Kirim perintah *ytmp3 _linkyt_*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(mess.error.Iv)
try {
reply(mess.wait)
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, 
`*YOUTUBE MP3*

*Judul* : ${title}
*Ext* : MP3
*Filesize* : ${filesizeF}
*Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = 
`*YOUTUBE MP3*

*Judul* : ${title}
*Ext* : MP3
*Size* : ${filesizeF}

_media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
})
})
} catch (err) {
reply(`eror`)
}		
break
case 'tiktok':
if (isBanned) return reply(mess.only.benned)    
if (!q) return reply('link tiktokny?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply('_[ ! ] Server Sedang Error_')
})
console.log(res)
sendMediaURL (from, `${res.result.nowatermark}`,'nih kak')
break


case 'ig':
case 'igdl':
		
if (isBanned) return reply(mess.only.benned)    
				    
if (!q) return reply('link Instagramny?')
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${q}`).catch(e => {
reply('Server sedang Error')
})
console.log(res)
sendMediaURL (from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    
case 'fontdown':

if (isBanned) return reply(mess.only.benned)    
				    
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('dafont')) return reply('link Invalid!')
teks = args.join(' ')
res = await dafontDown(teks) 
result = `*Dafont Downloader*

*Judul :* ${res[0].judul}
*Style :* ${res[0].style}
*Nama File :* ${res[0].output}
*Isi File :* ${res[0].isi}`
reply(result)
sendFileFromUrl(res[0].down, document, {mimetype: 'font/ttf', filename: res[0].output, quoted: faketroli})

break
case 'yts':
case 'ytsearch' :
    
  if (!q) return reply('Cari apa?')
  let results = await yts(q)
  let wktod = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
      *YOUTUBE SEARCH*
      
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
    *TIPE CHANNEL YOUTUBE*
    
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  reply(wktod)
  break
case 'fontsearch':
case 'dafont':

if (isBanned) return reply(mess.only.benned)    
				    
if (args.length < 1) return reply('Font Apa Yg Mau Di Cari? ')
teks = args.join(' ')
reply(mess.wait)
await dafontSearch(`${teks}`).then( res => {
let ada= res[0]
result = `*Dafont Search*

*Judul :* ${ada.judul}
*Style :* ${ada.style}
*Link :* ${ada.link}`
reply(result)
})

break

case 'mediafire':

if (isBanned) return reply(mess.only.benned)    
				    
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `Media Fire Downloader

*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_*Tunggu Proses Mengirim Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: faketroli})
break
case 'tourl':

if (isBanned) return reply(mess.only.benned)    
				    
if ((isMedia && !frnazer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(frnazer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : frnazer
owgi = await frnzer.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
            
break
case 'pinterest':
if (isBanned) return reply(mess.only.benned)
if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${q}`)
 
})
break
case 'igstalk':
if (!q) return reply('Usernamenya?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})      
break
case 'ghstalk': case 'githubstalk':
try {
if (!q) return reply('Usernamenya?')
await fetchJson(`https://api.github.com/users/${args.join(' ')}`).then(Y => {
console.log(`githubStalker`)
var ten = `${Y.avatar_url}`
var teks = `*Username* : ${Y.name}\n*Blog* : ${Y.blog}\n*Location* : ${Y.location}\n*Email* : ${Y.email}\n*Bio* : ${Y.bio}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Pub-repos* : ${Y.public_repos}\n*Pub-gists* : ${Y.public_gists}\n\n*Link* : ${Y.html_url}`
sendMediaURL(from,ten,teks) 
}) 
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('username tidak valid')
}
break

/******************************* FERNAZER *******************************/
/******************************* SEARCH MENU *******************************/ 
case 'filmapikterbaru':
film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
teks = '=================\n'
for (let i of film.result) {
teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
}
reply(teks.trim())
break
case 'filmapikdrama':
film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
teks = '=================\n'
for (let i of film.result) {
teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
}
reply(teks.trim())
break
case 'lizard':
try {
axios.get(`https://nekos.life/api/v2/img/lizard`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
frnzer.sendMessage(from, buf, image, {quoted: faketroli,caption: "Nih"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('emror')
}
break
case 'randomnime':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/Fernazer/rafli/main/randomnime')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
frnzer.sendMessage(from,media,image,{quoted:faketroli,caption:'NIH'})
}
)
.catch((error) => {
console.log(error); 
}
)
});
break
case 'kusonime':
var _0x3bf6d7=_0x19bb;(function(_0x3cfe70,_0x1dc68c){var _0x22471d=_0x19bb,_0xc298dc=_0x3cfe70();while(!![]){try{var _0x50643d=parseInt(_0x22471d(0xc3))/0x1+parseInt(_0x22471d(0xb6))/0x2+parseInt(_0x22471d(0xce))/0x3*(-parseInt(_0x22471d(0xbe))/0x4)+-parseInt(_0x22471d(0xd2))/0x5+-parseInt(_0x22471d(0xb5))/0x6*(parseInt(_0x22471d(0xc8))/0x7)+-parseInt(_0x22471d(0xd1))/0x8*(-parseInt(_0x22471d(0xc7))/0x9)+parseInt(_0x22471d(0xd0))/0xa;if(_0x50643d===_0x1dc68c)break;else _0xc298dc['push'](_0xc298dc['shift']());}catch(_0x25560d){_0xc298dc['push'](_0xc298dc['shift']());}}}(_0x12ea,0x84d1a));if(args[_0x3bf6d7(0xcd)]==0x0)return reply(_0x3bf6d7(0xbb)+(prefix+command)+_0x3bf6d7(0xbf));function _0x12ea(){var _0x3e8683=['912359IHKKwc','japanese','Type\x20:\x20','duration','Released\x20On\x20:\x20','length','1786368CfsLyb','Desc\x20:\x20','193150OGwTYZ','2785096gGtswo','3588085SsFHuv','Producers\x20:\x20','Genre\x20:\x20','result','18oGHqxc','1725810glRVQx','desc','thumbnail','Duration\x20:\x20','Total\x20Episode\x20:\x20','Example:\x20','Score\x20:\x20','genre','4Sljxah','\x20https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/','Japanese\x20:\x20','type','Seasons\x20:\x20','1017753NCmgZE','producers','title','released_on','9esszUD'];_0x12ea=function(){return _0x3e8683;};return _0x12ea();}ini_url=args[0x0],get_result=await fetchJson('http://api.lolhuman.xyz/api/kusonime?apikey=e1c2d00f694146152526e03d&url='+ini_url),get_result=get_result[_0x3bf6d7(0xd5)],ini_txt='Title\x20:\x20'+get_result[_0x3bf6d7(0xc5)]+'\x0a',ini_txt+=_0x3bf6d7(0xc0)+get_result[_0x3bf6d7(0xc9)]+'\x0a',ini_txt+=_0x3bf6d7(0xd4)+get_result[_0x3bf6d7(0xbd)]+'\x0a',ini_txt+=_0x3bf6d7(0xc2)+get_result['seasons']+'\x0a',ini_txt+=_0x3bf6d7(0xd3)+get_result[_0x3bf6d7(0xc4)]+'\x0a',ini_txt+=_0x3bf6d7(0xca)+get_result[_0x3bf6d7(0xc1)]+'\x0a',ini_txt+='Status\x20:\x20'+get_result['status']+'\x0a',ini_txt+=_0x3bf6d7(0xba)+get_result['total_episode']+'\x0a',ini_txt+=_0x3bf6d7(0xbc)+get_result['score']+'\x0a',ini_txt+=_0x3bf6d7(0xb9)+get_result[_0x3bf6d7(0xcb)]+'\x0a',ini_txt+=_0x3bf6d7(0xcc)+get_result[_0x3bf6d7(0xc6)]+'\x0a',ini_txt+=_0x3bf6d7(0xcf)+get_result[_0x3bf6d7(0xb7)]+'\x0a',link_dl=get_result['link_dl'];function _0x19bb(_0x316332,_0x388ecd){var _0x12ea1a=_0x12ea();return _0x19bb=function(_0x19bb89,_0x316b93){_0x19bb89=_0x19bb89-0xb5;var _0x500551=_0x12ea1a[_0x19bb89];return _0x500551;},_0x19bb(_0x316332,_0x388ecd);}for(var x in link_dl){ini_txt+='\x0a'+x+'\x0a';for(var y in link_dl[x]){ini_txt+=y+'\x20-\x20'+link_dl[x][y]+'\x0a';}}ini_buffer=await getBuffer(get_result[_0x3bf6d7(0xb8)]),frnzer['sendMessage'](from,ini_buffer,image,{'quoted':faketroli,'caption':ini_txt});
break
case 'kusonimesearch':
var _0x21c471=_0x2630;(function(_0x4e9892,_0x11ae4c){var _0x5c760d=_0x2630,_0x4888f3=_0x4e9892();while(!![]){try{var _0xed11c4=parseInt(_0x5c760d(0x1ba))/0x1+parseInt(_0x5c760d(0x1c4))/0x2*(parseInt(_0x5c760d(0x1d1))/0x3)+-parseInt(_0x5c760d(0x1ca))/0x4*(-parseInt(_0x5c760d(0x1c0))/0x5)+-parseInt(_0x5c760d(0x1d6))/0x6*(-parseInt(_0x5c760d(0x1d0))/0x7)+parseInt(_0x5c760d(0x1bd))/0x8*(-parseInt(_0x5c760d(0x1bc))/0x9)+-parseInt(_0x5c760d(0x1c2))/0xa+-parseInt(_0x5c760d(0x1cf))/0xb;if(_0xed11c4===_0x11ae4c)break;else _0x4888f3['push'](_0x4888f3['shift']());}catch(_0x44bf88){_0x4888f3['push'](_0x4888f3['shift']());}}}(_0x42ed,0xecd70));if(args[_0x21c471(0x1d3)]==0x0)return reply(_0x21c471(0x1d9)+(prefix+command)+_0x21c471(0x1d2));function _0x2630(_0x1502d5,_0x299bc8){var _0x42ed13=_0x42ed();return _0x2630=function(_0x263010,_0x344851){_0x263010=_0x263010-0x1b7;var _0x371acf=_0x42ed13[_0x263010];return _0x371acf;},_0x2630(_0x1502d5,_0x299bc8);}query=args[_0x21c471(0x1da)]('\x20'),get_result=await fetchJson(_0x21c471(0x1b7)+query),get_result=get_result[_0x21c471(0x1c6)],ini_txt=_0x21c471(0x1d4)+get_result[_0x21c471(0x1be)]+'\x0a',ini_txt+=_0x21c471(0x1d5)+get_result[_0x21c471(0x1bf)]+'\x0a',ini_txt+=_0x21c471(0x1cd)+get_result['genre']+'\x0a',ini_txt+=_0x21c471(0x1cb)+get_result[_0x21c471(0x1b9)]+'\x0a',ini_txt+=_0x21c471(0x1bb)+get_result[_0x21c471(0x1b8)]+'\x0a',ini_txt+='Type\x20:\x20'+get_result[_0x21c471(0x1db)]+'\x0a',ini_txt+=_0x21c471(0x1ce)+get_result[_0x21c471(0x1c3)]+'\x0a',ini_txt+=_0x21c471(0x1d8)+get_result['total_episode']+'\x0a',ini_txt+='Score\x20:\x20'+get_result['score']+'\x0a',ini_txt+=_0x21c471(0x1c8)+get_result[_0x21c471(0x1c7)]+'\x0a',ini_txt+='Released\x20On\x20:\x20'+get_result[_0x21c471(0x1cc)]+'\x0a',ini_txt+='Desc\x20:\x20'+get_result[_0x21c471(0x1d7)]+'\x0a',link_dl=get_result['link_dl'];for(var x in link_dl){ini_txt+='\x0a'+x+'\x0a';for(var y in link_dl[x]){ini_txt+=y+_0x21c471(0x1c5)+link_dl[x][y]+'\x0a';}}ini_buffer=await getBuffer(get_result[_0x21c471(0x1c1)]),frnzer[_0x21c471(0x1c9)](from,ini_buffer,image,{'quoted':faketroli,'caption':ini_txt});function _0x42ed(){var _0x346589=['title','japanese','5QiosOR','thumbnail','1893250aEuVwZ','status','67058TrgLsB','\x20-\x20','result','duration','Duration\x20:\x20','sendMessage','7316840UCxLui','Seasons\x20:\x20','released_on','Genre\x20:\x20','Status\x20:\x20','27517325tFERkR','2928842RAOuVO','87KkMmyM','\x20Gotoubun\x20No\x20Hanayome','length','Title\x20:\x20','Japanese\x20:\x20','12CzHMPw','desc','Total\x20Episode\x20:\x20','Example:\x20','join','type','http://api.lolhuman.xyz/api/kusonimesearch?apikey=e1c2d00f694146152526e03d&query=','producers','seasons','1804583XAOrdD','Producers\x20:\x20','102150rPksfP','1256JYCfHy'];_0x42ed=function(){return _0x346589;};return _0x42ed();} 
break       
      
case 'nhentaipdf':
var _0x3ddbc9=_0x2246;(function(_0xeaf516,_0x25c561){var _0x597765=_0x2246,_0x4aeac2=_0xeaf516();while(!![]){try{var _0x5064b7=-parseInt(_0x597765(0x1a9))/0x1+-parseInt(_0x597765(0x1aa))/0x2*(-parseInt(_0x597765(0x1a3))/0x3)+parseInt(_0x597765(0x1a6))/0x4+-parseInt(_0x597765(0x1ac))/0x5+parseInt(_0x597765(0x1a8))/0x6+-parseInt(_0x597765(0x1a2))/0x7+parseInt(_0x597765(0x1a5))/0x8;if(_0x5064b7===_0x25c561)break;else _0x4aeac2['push'](_0x4aeac2['shift']());}catch(_0x59d825){_0x4aeac2['push'](_0x4aeac2['shift']());}}}(_0x2188,0x51512));if(args[_0x3ddbc9(0x1ad)]==0x0)return reply(_0x3ddbc9(0x1af)+(prefix+command)+'\x2012345');function _0x2188(){var _0x2cd471=['14KhIghj','?apikey=e1c2d00f694146152526e03d','2551390otLOek','length','pdf','Example:\x20','http://api.lolhuman.xyz/api/nhentaipdf/','209230dEfQHQ','22755VAWySL','sendMessage','1891192VaAxoA','2575956dfJxBT','.pdf','3394938ycFvIM','626064MRvfkH'];_0x2188=function(){return _0x2cd471;};return _0x2188();}function _0x2246(_0x29bb36,_0x419c30){var _0x21889b=_0x2188();return _0x2246=function(_0x224629,_0x324224){_0x224629=_0x224629-0x1a2;var _0x6bdd29=_0x21889b[_0x224629];return _0x6bdd29;},_0x2246(_0x29bb36,_0x419c30);}henid=args[0x0],get_result=await fetchJson(_0x3ddbc9(0x1b0)+henid+_0x3ddbc9(0x1ab)),get_result=get_result['result'],ini_buffer=await getBuffer(get_result),frnzer[_0x3ddbc9(0x1a4)](from,ini_buffer,document,{'quoted':faketroli,'mimetype':Mimetype[_0x3ddbc9(0x1ae)],'filename':henid+_0x3ddbc9(0x1a7)});
break
case 'nhentaisearch':
function _0x5801(_0x21709c,_0x24ced1){var _0x3e688a=_0x3e68();return _0x5801=function(_0x580122,_0x38ff03){_0x580122=_0x580122-0x163;var _0x46eaa9=_0x3e688a[_0x580122];return _0x46eaa9;},_0x5801(_0x21709c,_0x24ced1);}var _0x4249a7=_0x5801;(function(_0x5d54c8,_0xef8256){var _0x2d663d=_0x5801,_0x6b6dd6=_0x5d54c8();while(!![]){try{var _0x501cfe=-parseInt(_0x2d663d(0x175))/0x1*(parseInt(_0x2d663d(0x17e))/0x2)+parseInt(_0x2d663d(0x173))/0x3*(parseInt(_0x2d663d(0x17b))/0x4)+parseInt(_0x2d663d(0x179))/0x5+parseInt(_0x2d663d(0x16b))/0x6*(-parseInt(_0x2d663d(0x16a))/0x7)+parseInt(_0x2d663d(0x171))/0x8*(-parseInt(_0x2d663d(0x17d))/0x9)+-parseInt(_0x2d663d(0x172))/0xa*(-parseInt(_0x2d663d(0x16f))/0xb)+parseInt(_0x2d663d(0x169))/0xc*(parseInt(_0x2d663d(0x16c))/0xd);if(_0x501cfe===_0xef8256)break;else _0x6b6dd6['push'](_0x6b6dd6['shift']());}catch(_0x2b5fc8){_0x6b6dd6['push'](_0x6b6dd6['shift']());}}}(_0x3e68,0x93b17));if(args[_0x4249a7(0x17f)]==0x0)return reply(_0x4249a7(0x16e)+(prefix+command)+'\x20Gotoubun\x20No\x20Hanayome');query=args[_0x4249a7(0x164)]('\x20'),get_result=await fetchJson(_0x4249a7(0x163)+lolkey+_0x4249a7(0x166)),get_result=get_result['result'],ini_txt=_0x4249a7(0x176);for(var x of get_result){ini_txt+=_0x4249a7(0x170)+x['id']+'\x0a',ini_txt+=_0x4249a7(0x16d)+x[_0x4249a7(0x17c)]+'\x0a',ini_txt+=_0x4249a7(0x165)+x[_0x4249a7(0x178)]+'\x0a',ini_txt+='Native\x20:\x20'+x[_0x4249a7(0x168)]+'\x0a',ini_txt+=_0x4249a7(0x167)+x['date_upload']+'\x0a',ini_txt+='Page\x20:\x20'+x[_0x4249a7(0x177)]+'\x0a',ini_txt+=_0x4249a7(0x17a)+x[_0x4249a7(0x174)]+'\x0a\x0a';}function _0x3e68(){var _0x4a31e1=['join','Title\x20Japanese\x20:\x20','&query=e1c2d00f694146152526e03d','Upload\x20:\x20','title_native','27336LgUwFQ','128142PHsZnF','186PhQpXi','2002FZSxxe','Title\x20English\x20:\x20','Example:\x20','6172133AxNmYp','Id\x20:\x20','8iQdfrh','10IhXTWY','2895pPmkhf','favourite','254PjHBUA','Result\x20:\x20\x0a','page','title_japanese','2974925dDUsJt','Favourite\x20:\x20','596FFtRqg','title_english','434034WvJbCd','3386rTtXLc','length','http://api.lolhuman.xyz/api/nhentaisearch?apikey='];_0x3e68=function(){return _0x4a31e1;};return _0x3e68();}reply(ini_txt);
break             
/******************************* FERNAZER *******************************/
/******************************* ISLAM MENU *******************************/ 
case 'ayatkursi': 		        							
reply(mess.wait)
anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/ayatkursi')
teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Tafsir :* ${anu.result.data.tafsir}`
frnzer.sendButton(from, teks,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break
case 'doaharian':         							
frnzer.updatePresence(from, Presence.composing) 
reply(mess.wait)
asu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/doaharian', {method: 'get'})
teks = '=================\n'
for (let i of asu.result.data) {
teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
}
frnzer.sendButton(from,teks,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break
case 'niatsholat':  		        								
reply(mess.wait)
anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/niatshalat', {method: 'get'})
teks = '=================\n'
for (let i of anu.result) {
teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
}
frnzer.sendButton(from,teks,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break
case 'bacaansholat': 		        
reply(mess.wait)
anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/bacaanshalat', {method: 'get'})
teks = '=================\n'
for (let i of anu.result) {
teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
}
frnzer.sendButton(from,teks,'Creator: Fernazer','KEMBALI KE MENU↩️',`${prefix}menu2`,{quoted: faketroli})
break
/******************************* FERNAZER *******************************/
/******************************* NSFW MENU *******************************/
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':                
case 'trap':                
case 'lewd':                
case 'feed':                
case 'eron':                
case 'solo':                
case 'gasm':                
case 'poke':                
case 'anal':                
case 'holo':                
case 'kuni':                
case 'tits':                
case 'kiss':                
case 'erok':                
case 'smug':                
case 'baka':                
case 'solog':                
case 'feetg':                
case 'lewdk':                
case 'waifu':                
case 'pussy':                
case 'femdom':                
case 'cuddle':                
case 'hentai':                
case 'eroyuri':                
case 'cum_jpg':                
case 'blowjob':               
case 'erofeet':                
case 'holoero':                
case 'classic':               
case 'erokemo':                
case 'fox_girl':                
case 'futanari':                
case 'lewdkemo':                
case 'wallpaper':                
case 'pussy_jpg':                
case 'kemonomimi':               
case 'nsfw_avatar':                               
if (isBanned) return reply('Maaf kamu sudah terbenned !')                			    
getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=e1c2d00f694146152526e03d`).then((gambar) => {
frnzer.sendMessage(from, gambar, image, { quoted: faketroli })
})
break
/******************************* FERNAZER *******************************/
/******************************* FUN MENU *******************************/
					case 'hilih': 
				if (args.length < 1) return reply(`Contoh: Fernazer`)
					gatauda = body.slice(7)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/hilih?apikey=${lolkey}&text=${gatauda}`)
					reply(anu.result)
					break
               case 'namaninja': 
				if (args.length < 1) return reply(`Contoh: Fernazer`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=${lolkey}&nama=${gatauda}`)
					reply(anu.result)
					break
/******************************* FERNAZER *******************************/
/******************************* JAN DI APA2IN TAR EROR *******************************/
default:
if (isGroup && isAntiVO && type == 'viewOnceMessage'){
var msg = {...frnazer}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
        
typenya["viewOnce"] = false
            
typenya["caption"] = `\`\`\`Anti ViewOnce Terdeteksi\n\n\nCaption : ${(typenya.caption === '') ? 'NONE' : typenya.caption}\`\`\``
            
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: frnazer.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: frnazer.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
            
let pe = await frnzer.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq})
            
await frnzer.relayWAMessage(pe)
console.log(color('WARNING: ANTIVIEW ONCE','red'))
}		

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
frnzer.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain kirim virus? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
frnzer.groupRemove(from, [sender])
}

if (budy.includes("://youtube.com/")){
if (!isGroup) return
if (!isAntiLinkytc) return
if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Channel*')
frnzer.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`*「 Link YouTube Channel Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
setTimeout( () => {
frnzer.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
frnzer.updatePresence(from, Presence.composing)
faketroli("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi wajib Izin Admin.*")
}, 0)
}
if (budy.includes("://youtu.be/")){
if (!isGroup) return
if (!isAntiLinkytv) return
if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Video*')
frnzer.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`*「 Link YouTube Video Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
setTimeout( () => {
frnzer.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
frnzer.updatePresence(from, Presence.composing)
faketroli("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Wajib izin Admin.*")
}, 0)
}
if (budy.includes("://t.me/")){
if (!isGroup) return
if (!isAntiLinkTelegram) return
if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Telegram*')
frnzer.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`*「 Link Telegram Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
setTimeout( () => {
frnzer.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
frnzer.updatePresence(from, Presence.composing)
faketroli("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Link Wajib Izin Admin.*")
}, 0)
}
/******************************* FERNAZER *******************************/
/******************************* JAN DI APA2IN TAR EROR *******************************/
var _0x54e260=_0x44c7;function _0x1226(){var _0x23b098=['46357nZZFZV','gilir','Game\x20telah\x20dimulai\x20sebelumnya!','5️⃣','2639016rCikZL','Yahh\x20@','👑\x20Game\x20Gelud\x20Rejected\x20🤙🏻\x0a•\x20@','player1','7338ggIVWQ','=⭕\x0aPlayer1\x20@','882055QkOqgK','6️⃣','*🎳\x20Result\x20Game\x20Tictactoe\x20🎲*\x0a\x0a*Hasil\x20Akhir:*\x0a\x0a','\x20Menolak:(','./tmp/','player2','👑\x20Gelud\x20Game\x20🤙🏻\x20\x0a\x0a\x0aDiantara\x20@','148146CqfBua','12ZMFZdh','2️⃣','=❌\x0a\x0aGiliran\x20=\x20@','3081918WHolJK','*🎳Result\x20Game\x20Tictactoe\x20🎲\x0a\x0a*Yeyyy\x20Permainan\x20Di\x20Menangkan\x20Oleh\x20*@','8️⃣','random','@s.whatsapp.net','3️⃣','length','*🎳\x20Result\x20Game\x20Tictactoe\x20🎲*\x0a\x0a*_Permainan\x20Seri\x20🗿👌_*','toLowerCase','Masukan\x20Angka\x20Dengan\x20Benar','filter','text','1️⃣','\x0a\x20\x20\x20','3755376IKvGZh','=❌\x0aPlayer2\x20@','*🎳\x20Game\x20Tictactoe\x20🎲*\x0a\x0aPlayer1\x20@','\x20Menolak🤙🏻','4️⃣','Udah\x20Di\x20Isi,\x20Isi\x20Yang\x20Lain\x20Gan','*🎳\x20Game\x20Tictactoe\x20🎲*\x0a\x0a*Hasil\x20Akhir:*\x0a\x0a','includes','Tunggu\x20Giliran\x20Gan','@]s.whatsapp.net','angka','27ZZlThS','unlinkSync','\x20&\x20@','sendMessage','9️⃣','\x0a•\x20Pemenangnya\x20adalah\x20[\x20@','7️⃣','*🎳\x20Result\x20Game\x20Tictactoe\x20🎲*\x0a\x0aYeyyy\x20Permainan\x20Di\x20Menangkan\x20Oleh\x20*@','=❌\x0a\x20\x20\x20\x0aGiliran\x20=\x20@','status','=⭕\x0aPlayer2\x20@','.json','*🎳Result\x20Game\x20Tictactoe\x20🎲*\x0a\x0a*_Permainan\x20Seri🗿👌*','existsSync','split','push'];_0x1226=function(){return _0x23b098;};return _0x1226();}(function(_0x18c032,_0x425c9f){var _0x18d9b4=_0x44c7,_0x2491d4=_0x18c032();while(!![]){try{var _0x3bbc50=-parseInt(_0x18d9b4(0xa7))/0x1+-parseInt(_0x18d9b4(0xb8))/0x2+-parseInt(_0x18d9b4(0xaf))/0x3*(parseInt(_0x18d9b4(0xb9))/0x4)+-parseInt(_0x18d9b4(0xb1))/0x5+-parseInt(_0x18d9b4(0xab))/0x6+-parseInt(_0x18d9b4(0xbc))/0x7+-parseInt(_0x18d9b4(0xca))/0x8*(-parseInt(_0x18d9b4(0xd5))/0x9);if(_0x3bbc50===_0x425c9f)break;else _0x2491d4['push'](_0x2491d4['shift']());}catch(_0x1114d8){_0x2491d4['push'](_0x2491d4['shift']());}}}(_0x1226,0x36ae9));function _0x44c7(_0x1ae47a,_0x400e1a){var _0x1226da=_0x1226();return _0x44c7=function(_0x44c78b,_0x596bcf){_0x44c78b=_0x44c78b-0x9c;var _0x588ffa=_0x1226da[_0x44c78b];return _0x588ffa;},_0x44c7(_0x1ae47a,_0x400e1a);}if(fs[_0x54e260(0xa4)](_0x54e260(0xb5)+from+'.json')){gelutSkuy=setGelud(''+from);if(sender==gelutSkuy['Y']+_0x54e260(0xd3)&&budy[_0x54e260(0xc4)]()=='y'){if(gelutSkuy[_0x54e260(0xa0)])return reply(_0x54e260(0xa9));gelutSkuy[_0x54e260(0xa0)]=!![],rand0m=[gelutSkuy['Z'],gelutSkuy['Y']],winR=rand0m[Math['floor'](Math[_0x54e260(0xbf)]()*rand0m[_0x54e260(0xc2)])],fs['writeFileSync'](_0x54e260(0xb5)+from+_0x54e260(0xa2),JSON['stringify'](gelutSkuy,null,0x2)),starGame=_0x54e260(0xb7)+gelutSkuy['Z']+_0x54e260(0xd7)+gelutSkuy['Y']+_0x54e260(0x9c)+winR+'\x20]\x20',frnzer[_0x54e260(0xd8)](from,starGame,MessageType[_0x54e260(0xc7)],{'quoted':frnazer,'contextInfo':{'mentionedJid':[winR+_0x54e260(0xc0),gelutSkuy['Z']+_0x54e260(0xc0),gelutSkuy['Y']+_0x54e260(0xc0)]}}),fs['unlinkSync']('./tmp/'+from+_0x54e260(0xa2));}else sender==gelutSkuy['Y']+'@s.whatsapp.net'&&budy[_0x54e260(0xc4)]()=='n'&&(frnzer[_0x54e260(0xd8)](from,_0x54e260(0xad)+gelutSkuy['Y']+_0x54e260(0xcd),MessageType[_0x54e260(0xc7)],{'quoted':frnazer,'contextInfo':{'mentionedJid':[gelutSkuy['Y']+_0x54e260(0xc0)]}}),fs[_0x54e260(0xd6)]('./tmp/'+from+'.json'));}isTTT&&isPlayer2&&(budy['startsWith']('Y')&&(tto=ky_ttt[_0x54e260(0xc6)](_0x36771a=>_0x36771a['id'][_0x54e260(0xd1)](from)),tty=tto[0x0],angka=tto[0x0]['angka'],ucapan=_0x54e260(0xcc)+tty[_0x54e260(0xae)][_0x54e260(0xa5)]('@')[0x0]+_0x54e260(0xcb)+tty['player2']['split']('@')[0x0]+'=⭕\x0a\x0aGiliran\x20=\x20@'+tty[_0x54e260(0xae)]['split']('@')[0x0]+'\x0a\x0a\x20\x20\x20'+angka[0x1]+angka[0x2]+angka[0x3]+_0x54e260(0xc9)+angka[0x4]+angka[0x5]+angka[0x6]+_0x54e260(0xc9)+angka[0x7]+angka[0x8]+angka[0x9],frnzer[_0x54e260(0xd8)](from,ucapan,text,{'quoted':faketroli,'contextInfo':{'mentionedJid':[tty['player1'],tty['player2']]}})),budy['startsWith']('N')&&(tto=ky_ttt[_0x54e260(0xc6)](_0x302888=>_0x302888['id'][_0x54e260(0xd1)](from)),tty=tto[0x0],naa=ky_ttt['filter'](_0x44ef51=>!_0x44ef51['id'][_0x54e260(0xd1)](from)),ky_ttt=naa,frnzer[_0x54e260(0xd8)](from,_0x54e260(0xac)+tty[_0x54e260(0xb6)][_0x54e260(0xa5)]('@')[0x0]+_0x54e260(0xb4),text,{'quoted':faketroli,'contextInfo':{'mentionedJid':[tty['player2']]}})));if(isTTT&&isPlayer1){nuber=parseInt(budy);if(isNaN(nuber))return;if(nuber<0x1||nuber>0x9)return reply(_0x54e260(0xc5));main=ky_ttt['filter'](_0x320d64=>_0x320d64['id']['includes'](from));if(!tttawal[_0x54e260(0xd1)](main[0x0]['angka'][nuber]))return reply(_0x54e260(0xcf));if(main[0x0][_0x54e260(0xa8)]['includes'](sender))return reply(_0x54e260(0xd2));s='❌',main[0x0][_0x54e260(0xd4)][nuber]=s,main[0x0][_0x54e260(0xa8)]=main[0x0][_0x54e260(0xae)],naa=ky_ttt[_0x54e260(0xc6)](_0x1032a6=>!_0x1032a6['id'][_0x54e260(0xd1)](from)),ky_ttt=naa,pop=main[0x0],ky_ttt['push'](pop),tto=ky_ttt['filter'](_0xc863cd=>_0xc863cd['id']['includes'](from)),tty=tto[0x0],angka=tto[0x0][_0x54e260(0xd4)],ttt=''+angka[0x1]+angka[0x2]+angka[0x3]+'\x0a'+angka[0x4]+angka[0x5]+angka[0x6]+'\x0a'+angka[0x7]+angka[0x8]+angka[0x9],ucapmenang=()=>{var _0x49df38=_0x54e260;return ucapan1=_0x49df38(0xbd)+tty['player1'][_0x49df38(0xa5)]('@')[0x0]+'*\x0a',ucapan2='*🎳Result\x20Game\x20Tictactoe\x20🎲*\x0a\x0a*Hasil\x20Akhir:*\x0a\x0a'+ttt,frnzer[_0x49df38(0xd8)](from,ucapan1,text,{'quoted':faketroli,'contextInfo':{'mentionedJid':[tty['player1']]}}),naa=ky_ttt[_0x49df38(0xc6)](_0x556a56=>!_0x556a56['id']['includes'](from)),ky_ttt=naa;};if(angka[0x1]==s&&angka[0x2]==s&&angka[0x3]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x4]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x5]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x2]==s&&angka[0x5]==s&&angka[0x8]==s)return ucapmenang();if(angka[0x4]==s&&angka[0x5]==s&&angka[0x6]==s)return ucapmenang();if(angka[0x7]==s&&angka[0x8]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x5]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x6]==s&&angka[0x9]==s)return ucapmenang();if(!ttt[_0x54e260(0xd1)](_0x54e260(0xc8))&&!ttt['includes'](_0x54e260(0xba))&&!ttt[_0x54e260(0xd1)](_0x54e260(0xc1))&&!ttt[_0x54e260(0xd1)](_0x54e260(0xce))&&!ttt[_0x54e260(0xd1)](_0x54e260(0xaa))&&!ttt[_0x54e260(0xd1)](_0x54e260(0xb2))&&!ttt[_0x54e260(0xd1)](_0x54e260(0x9d))&&!ttt[_0x54e260(0xd1)](_0x54e260(0xbe))&&!ttt[_0x54e260(0xd1)](_0x54e260(0xd9)))return ucapan1=_0x54e260(0xc3),ucapan2='*🎳\x20Result\x20Game\x20Tictactoe\x20🎲*\x0a\x0a*Hasil\x20Akhir:*\x0a\x0a'+ttt,reply(ucapan1),naa=ky_ttt['filter'](_0x2ef97b=>!_0x2ef97b['id']['includes'](from)),ky_ttt=naa;ucapan='*🎳\x20Game\x20Tictactoe\x20🎲*\x0a\x0aPlayer2\x20@'+tty[_0x54e260(0xb6)][_0x54e260(0xa5)]('@')[0x0]+_0x54e260(0xb0)+tty['player1']['split']('@')[0x0]+_0x54e260(0xbb)+tty[_0x54e260(0xb6)][_0x54e260(0xa5)]('@')[0x0]+'\x0a\x0a'+ttt,frnzer[_0x54e260(0xd8)](from,ucapan,text,{'quoted':faketroli,'contextInfo':{'mentionedJid':[tty[_0x54e260(0xae)],tty[_0x54e260(0xb6)]]}});}if(isTTT&&isPlayer2){nuber=parseInt(budy);if(isNaN(nuber))return;if(nuber<0x1||nuber>0x9)return reply(_0x54e260(0xc5));main=ky_ttt['filter'](_0x3f30ad=>_0x3f30ad['id'][_0x54e260(0xd1)](from));if(!tttawal[_0x54e260(0xd1)](main[0x0][_0x54e260(0xd4)][nuber]))return reply('Udah\x20Di\x20Isi,\x20Isi\x20Yang\x20Lain\x20Gan');if(main[0x0][_0x54e260(0xa8)][_0x54e260(0xd1)](sender))return reply('Tunggu\x20Giliran\x20Gan');s='⭕',main[0x0][_0x54e260(0xd4)][nuber]=s,main[0x0][_0x54e260(0xa8)]=main[0x0][_0x54e260(0xb6)],naa=ky_ttt['filter'](_0x15b91a=>!_0x15b91a['id'][_0x54e260(0xd1)](from)),ky_ttt=naa,pop=main[0x0],ky_ttt[_0x54e260(0xa6)](pop),tto=ky_ttt[_0x54e260(0xc6)](_0x1ee1cd=>_0x1ee1cd['id'][_0x54e260(0xd1)](from)),tty=tto[0x0],angka=tto[0x0][_0x54e260(0xd4)],ttt=''+angka[0x1]+angka[0x2]+angka[0x3]+'\x0a'+angka[0x4]+angka[0x5]+angka[0x6]+'\x0a'+angka[0x7]+angka[0x8]+angka[0x9],ucapmenang=()=>{var _0xfd0337=_0x54e260;return ucapan1=_0xfd0337(0x9e)+tty[_0xfd0337(0xb6)][_0xfd0337(0xa5)]('@')[0x0]+'*\x0a',ucapan2=_0xfd0337(0xd0)+ttt,frnzer['sendMessage'](from,ucapan1,text,{'quoted':faketroli,'contextInfo':{'mentionedJid':[tty[_0xfd0337(0xb6)]]}}),naa=ky_ttt['filter'](_0x376c70=>!_0x376c70['id'][_0xfd0337(0xd1)](from)),ky_ttt=naa;};if(angka[0x1]==s&&angka[0x2]==s&&angka[0x3]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x4]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x5]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x2]==s&&angka[0x5]==s&&angka[0x8]==s)return ucapmenang();if(angka[0x4]==s&&angka[0x5]==s&&angka[0x6]==s)return ucapmenang();if(angka[0x7]==s&&angka[0x8]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x5]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x6]==s&&angka[0x9]==s)return ucapmenang();if(!ttt[_0x54e260(0xd1)](_0x54e260(0xc8))&&!ttt[_0x54e260(0xd1)]('2️⃣')&&!ttt[_0x54e260(0xd1)](_0x54e260(0xc1))&&!ttt['includes'](_0x54e260(0xce))&&!ttt[_0x54e260(0xd1)](_0x54e260(0xaa))&&!ttt[_0x54e260(0xd1)]('6️⃣')&&!ttt[_0x54e260(0xd1)](_0x54e260(0x9d))&&!ttt[_0x54e260(0xd1)](_0x54e260(0xbe))&&!ttt[_0x54e260(0xd1)](_0x54e260(0xd9)))return ucapan1=_0x54e260(0xa3),ucapan2=_0x54e260(0xb3)+ttt,reply(ucapan1),naa=ky_ttt['filter'](_0x326848=>!_0x326848['id'][_0x54e260(0xd1)](from)),ky_ttt=naa;ucapan='*🎳\x20Game\x20Tictactoe\x20🎲*\x0a\x0aPlayer1\x20@'+tty['player1']['split']('@')[0x0]+_0x54e260(0xa1)+tty[_0x54e260(0xb6)][_0x54e260(0xa5)]('@')[0x0]+_0x54e260(0x9f)+tty[_0x54e260(0xae)][_0x54e260(0xa5)]('@')[0x0]+'\x0a\x0a'+ttt,frnzer['sendMessage'](from,ucapan,text,{'quoted':faketroli,'contextInfo':{'mentionedJid':[tty[_0x54e260(0xae)],tty[_0x54e260(0xb6)]]}});}else{}

/******************************* FERNAZER *******************************/
/******************************* JAN DI APA2IN TAR EROR *******************************/
if (budy.startsWith('=>')){
if (!isOwner) return
try {
return frnzer.sendMessage(from, 
`${a}📥 Input: ${budy.slice(3)}

📤 OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
${a}`
,text, {quoted:faketroli })
} catch(err) {
e = String(err)
reply(`${a} "err" :  "${e}"${a}`)
}
}
if (budy.startsWith('>')){
                if (!isOwner) return
                var konsol = budy.slice(2)
                Return = (sul) => {
                var sat = JSON.stringify(sul, null, 2)
                bang = util.format(sat)
                if (sat == undefined){
                bang = util.format(sul)
                }
                return reply(bang)
                }
                try {
                reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
                } catch(e){
                 reply(String(e))
                }
                }
if (budy.startsWith('anjir')) return reply('yooo')
   			   		if (isGroup && isCmd && budy != undefined && body.startsWith(`X`)) {
						console.log(budy)
					} else {
					}
                           }
		} catch (e) {
         
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
