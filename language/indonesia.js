exports.onlyPrem = `Fitur khusus member premium`
exports.aikey = `apikey open ai salah, silahkan ganti di settins.js`
exports.DelSetWel = `Sukses delete set welcome di grup ini`
exports.NoSetWel = `Belum ada set welcome di grup ini`
exports.DelSetLeft = `Sukses delete set goodbye di grup ini`
exports.NoSetLeft = `Belum ada set goodbye di grup ini`
exports.doneSet = `Sudah di ubah sebelumnya`
exports.serverErr = `Server sedang eror`
exports.kodeErr = `Kode bahasa salah, silahkan cek menggunakan perintah .kodebahasa`
exports.qc = (prefix, command) => {
  return`Contoh :

1. Kirim perintah ${prefix + command} *teks*
	• Contoh : ${prefix + command} halo
2. Reply chat dengan caption ${prefix + command}
	• Contoh : ${prefix + command}
	
Maksimal 25 karakter`
}
exports.Tts = (prefix, command) => {
    return `Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	• Contoh : ${prefix + command} id
Daftar bahasa yang di dukung ${prefix}kodebahasa`
}
exports.langkode = `*「 KODE BAHASA 」*
af : Afrikaans
sq : Albanian
ar : Arab
hy : Armenian
ca : Catalan
zh : Chinese
zh-cn : Chinese (Mandarin/China)
zh-tw : Chinese (Mandarin/Taiwan)
zh-yue : Chinese (Cantonese)
hr : Croatian
cs : Czech
da : Danish
nl : Dutch
en : English
en-au : English (Australia)
en-uk : English (United Kingdom)
en-us : English (United States)
eo : Esperanto
fi : Finnish
fr : French
de : German
el : Greek
ht : Haitian Creole
hi : Hindi
hu : Hungarian
is : Icelandic
id : Indonesian
it : Italian
ja : Japanese
ko : Korean
la : Latin
lv : Latvian
mk : Macedonian
no : Norwegian
pl : Polish
pt : Portuguese
pt-br : Portuguese (Brazil)
ro : Romanian
ru : Russian
sr : Serbian
sk : Slovak
es : Spanish
es-es : Spanish (Spain)
es-us : Spanish (United States)
sw : Swahili
sv : Swedish
ta : Tamil
th : Thai
tr : Turkish
vi : Vietnamese
cy : Welsh`
exports.limitLu = (m) =>{
	return`Sisa limit kamu : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`List ${a} dengan key ${b} sudah ada di database`
	}
exports.delstik = (a, b) =>{
	return`List ${a} dengan key ${b} tidak ada di database`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`📛 Nama: ${username} (@${m.sender.split`@`[0]})${about ? '\n💌 Bio: ' + about : ''}
👨‍❤️‍👨 Status: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#️⃣ Nomor: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 Link: https://wa.me/${m.sender.split`@`[0]}
🤷‍♂️ XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
🎚️ Level: ${level}
🎢 Role: ${role}
📊 Limit: ${limit}
®️ Registered: ${registered ? '✅ (' + tanggal(regTime) + ')' : '❌'}
⛽ Premium: ${premium ? `✅\n⏰ Expired Premium : msToDate(premiumDate - now)` : '❌'}
🛄 Last claim: ${lastclaim > 0 ? tanggal(lastclaim) : '-'}`
	}

//
exports.needReg = (a, b, c) =>{
	return`🇲🇨 Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game

🇺🇲 Please register first

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Limit kamu hari ini telah habis ⚠️\n\nSilahkan beli limit dengan cara ketik ${prefix}buy atau ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`Nomor seri (sn) nya salah\n.ceksn -- _cek serial number_`
	}
exports.NoseriOk = () =>{
	return`Berhasil membatalkan pendaftaran!`
	}
exports.ExReg = (c) =>{
	return`🇲🇨 Gunakan tanda "|" sebagai pembatas

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game


🇺🇲 Use the "|" sign as a barrier

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
	}
exports.DoneReg = () =>{
	return`Kamu sudah terdaftar di database`
	}
exports.UmurReg = () =>{
	return`Umur harus berupa angka`
	}
exports.NamaReg = () =>{
	return`Nama kamu panjang banget, gunakan nama awal saja`
	}
exports.HobiReg = () =>{
	return`Hobi kamu banyak banget, cukup 1 atau 2 hobi saja`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`╭─「 *VERIFIKASI BERHASIL* 」
│\`\`\`Verifikasi Sukses Dengan\`\`\` 
│
│\`\`\`SN: ${a}\`\`\`
│\`\`\`Pada : ${b}\`\`\`
│\`\`\`Nama : ${c}\`\`\`
│\`\`\`Umur : ${d}\`\`\`
│\`\`\`Gender : ${e}\`\`\`
│\`\`\`Nomor : @${f}\`\`\`
│\`\`\`Untuk menggunakan bot silahkan \`\`\`
│\`\`\`Kirim perintah .menu\`\`\`
│\`\`\`atau .allmenu\`\`\`
│
│\`\`\`\Total : ${i} Users\`\`\`
╰─────────────────────`
	}
exports.genderReg = (a) =>{
	return`Pilih salah satu ( cewe / cowo)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`Umur kamu terlalu tua, bukannya mati ehh malah main bot`
	}
exports.firstChat = (a, b, c) =>{
	return`Selamat ${a} ${b} 🤗, saya adalah ${c} yaitu bot whatsapp. Ada yang bisa ${c} bantu?`
	}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Sukses Menambahkan ${q} Ke Dalam Database ${a}\n\nCek dengan cara ${prefix}${b}`
	}
	
exports.AddstikOk_ = (a,b) =>{
	return`Durasi ${a} detik, yaitu durasi maksimal ${b} yang bisa bot simpan ke dalam database`
	}
exports.Addvn = () =>{
	return`Tunggu sebentar, saya akan mencoba untuk mengupload media ini ke database`
	}
	
exports.ListStik = (a) =>{
	return`_Untuk mengambil ${a} silahkan kirim pesan sesuai dengan list ${a} yang ada di atas_`
	}
exports.noAbsen = () =>{
return `❌ Tidak ada absen berlangsung di group ini! \n.absenstart -- mulai absen`
}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.DahAbsen = () =>{
	return`Kamu sudah absen`
	}
exports.DelAbsen = () =>{
	return`✅ Berhasil menghapus absen di group ini`
	}
exports.adaAbsen = () =>{
	return`Masih ada sesi absen di group ini !`
	}
exports.SAbsen = () =>{
	return`Absen dimulai\n.absen -- mulai absen`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply stiker!!\nExample : ${prefix + command} .menu\n\n\n*Note : Harus disertai Prefix!!*`
	}
exports.CmdApa = () =>{
	return`Untuk Command Apa?`
	}
exports.UCmd = () =>{
	return`Anda tidak memiliki izin untuk mengubah perintah stiker ini`
	}
exports.HashCmd = () =>{
	return`Tidak ada hash`
	}
exports.DelCmd = () =>{
	return`✅ Sticker cmd telah di hapus`
	}
exports.LockCmd = () =>{
	return`Reply pesan`
	}
exports.NoCmd = () =>{
	return`Hash tidak ditemukan di database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message Yang Ingin Disave Di Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Contoh : ${prefix + command} nama file`
	}
exports.AdMsg = (text) => {
    return `'${text}' telah terdaftar di list pesan`
}
exports.DoneMsg = (prefix, text) => {
    return `Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' tidak terdaftar di list pesan`
}
exports.DelMsg = (text) => {
    return `Berhasil menghapus '${text}' dari list pesan`
}

exports.OnBef = () => {
    return `Sudah di aktifkan sebelumnya`
}
exports.OffYaBef = () => {
    return `Sudah di nonaktifkan sebelumnya`
}
exports.OkOn = (command) => {
    return `${command} Berhasil Di Aktifkan !`
}
exports.OffBef = (command) => {
    return `${command} Berhasil Di Nonaktifkan !`
}
exports.OkMute = () => {
    return `Bot Telah Di Mute Di Group Ini`
}
exports.OkUnMute = () => {
    return `Bot Berhasil Di UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Berhasil Di unban chat`
}
exports.NoMute = () => {
    return `Bot belum di ban dalam group ini`
}

exports.NoMsgBot = () => {
    return `Pesan tersebut bukan dikirim oleh bot!`
}
exports.ToimgErr = () => {
    return `Maaf Saat Ini Belum Support Sticker Gif`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker Dengan Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Sukses Ganti Ke Mode Public`
}
exports.BotSelf = () => {
    return `Sukses Ganti Ke Mode Self\n\nUntuk mengubah ke mode public silahkan gunakan nomor bot`
}
exports.NoToStik = (prefix, command) => {
    return `Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`
}
exports.NoPpBot = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `Pesan Yang anda reply tidak mengandung reply`
}
exports.SetGcName = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*`
}
exports.SetPpGc = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Masukkan Link Group!`
}
exports.MauKick = () => {
    return `Kirim nomer/tag/reply target yang ingin di kick !`
}
exports.MauAdd = () => {
    return `Kirim nomer/tag/reply target yang ingin di add !`
}
exports.NakPm= () => {
    return `Kirim nomer/tag/reply target yang ingin di promote !`
}
exports.NakDm = () => {
    return `Kirim nomer/tag/reply target yang ingin di demote !`
}
exports.Family = () => {
    return `Soal ini belum selesai!`
}
exports.NoWm = (prefix, command) => {
    return `Kirim perintah ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Berhasil Diubah Menjadi\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*\n\nContoh : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks 1|teks 2*\n\nContoh : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `Fitur nsfw belum di aktifkan`
}
exports.CoverBanLol = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*Color Yg Kamu Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Contoh: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Contoh: ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} Yg Kamu Masukkan Salah*\n\n_Berikut List ${style2} Yg Benar, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style, style2 = "query") => {
    return `Kirim perintah: \n${prefix + command} ${style2}\n\nContoh penggunaan:\n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Contoh : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Contoh penggunaan : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Jawaban Salah`
}

exports.JwbTrue = (tebak, exp) => {
return`🎮 ${tebak} 🎮\n\nJawaban Benar 🎉\n+${exp} XP`
}
exports.TbGam = () => {
    return `Tebak Gambar`
}
exports.TbKa = () => {
    return `Tebak Kata`
}
exports.TbBe = () => {
    return `Tebak Bendera`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Susun Kata`
}
exports.TbAt = () => {
    return `Tebak Kalimat`
}
exports.TbSi = () => {
    return `Tebak Siapa`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Tebak Kabupaten`
}
exports.TbKi = () => {
    return `Tebak Kimia`
}
exports.TbLi = () => {
    return `Tebak Lirik`
}
exports.TbKan = () => {
    return `Tebak Tebakan`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Jawablah Pertanyaan Berikut :*\n${soal}\n\nTerdapat *${jawaban}* Jawaban ${find}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Telah Afk Dengan Alasan ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time, exp) => {
    return `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${desk}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbGambar_ = (jawaban) => {
    return `Waktu Habis\nJawaban:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Waktu Habis\nJawaban:  ${jawaban}}\nDeskripsi : ${desk}`
}
exports.TbKata = (soal, time, exp) => {
    return `Silahkan Jawab Pertanyaan Berikut\n\n${soal}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbBendera = (time, exp) => {
    return `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbKabupaten = (time, exp) => {
    return `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbKimia = (soal, time, exp) => {
    return `Apa Arti Dari Simbol : *${soal}*?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbLirik = (soal, time, exp) => {
    return `Ini Adalah Lirik Dari Lagu? : *${soal}*?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbSusun = (soal, tipe, time, exp) => {
    return `*Jawablah Pertanyaan Berikut :*\nSoal : ${soal}\nTipe : ${tipe}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nContoh penggunaan: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*Berapa hasil dari: ${soal}*?\n\nWaktu: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Kirim/Reply Foto/Sticker Dengan Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Masukkan username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply stiker gif dengan caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Kirim/Reply Media Dengan Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Mengirim Broadcast Ke ${anu} ${chat}\nWaktu Selesai ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker dengan caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Kirim/reply ${video} dengan caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	• Contoh : ${prefix + command} id
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key tidak boleh sama dengan fitur / command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key|response*\n\n_Contoh_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List respon dengan key : *${arg}* sudah ada di group ini.`
}
exports.AddlistDone = (arg) => {
    return `Sukses set list message dengan key : *${arg}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Dellist = () => {
    return `Belum ada list message di database`
}
exports.Dellist_  = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List respon dengan key *${key}* tidak ada di database!`
}
exports.DellistDone = (key) => {
    return `Sukses delete list message dengan key *${key}*`
}
exports.ListUp = (key) => {
    return `Maaf, untuk key *${key}* belum terdaftar di group ini`
}
exports.UpList = (key) => {
    return `Sukses update list message dengan key : *${key}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hai ${pushname} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}start untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
}
exports.Anon = () => {
    return `Cari Teman Chat`
}
exports.StopAnon = (prefix) => {
    return `Kamu Sedang Tidak Berada Di Sesi Anonymous\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonNew = () => {
    return `Cari Teman Baru`
}
exports.AnonDahStop = (prefix) => {
    return `✅ Berhasil memberhentikan chat\n${prefix}start -- _cari pasangan baru_`
}
exports.StopAnonByFren = (prefix) => {
    return `⚠️ Sesi chat ini telah diberhentikan oleh teman chat kamu_\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonOn = (prefix) => {
    return `⚠️ Kamu masih dalam sesi chat dengan partner!\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonFind = (prefix) => {
    return `_Pasangan Ditemukan 🐼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonSearch = (prefix) => {
    return `🔎 Mohon tunggu sedang mencari teman chat\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan percarian ini_`
}
exports.NoAnon = (prefix) => {
    return `⚠️ Kamu belum pernah memulai chat!\n${prefix}start -- _cari pasangan baru_`
}
exports.NoAudRep = (prefix, command) => {
    return `Balas audio yang ingin diubah dengan caption *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `Contoh penggunaan :\n${prefix + command} 62938828728992 \natau\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `⚠️ Mohon maaf nomor kamu telah di banned oleh owner\n\nOwner 👇\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} dengan caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}
exports.AllFitur = () => {
    return `\n_Semua fitur bot_`
}
exports.InfoMenu = () => {
    return `\n_Mencari informasi terkini melalui bot_`
}
exports.KhususOwn = () => {
    return `\n_Fitur khusus owner bot_`
}
exports.DataBor = () => {
    return `\n_Menyimpan sesuatu di database bot_`
}
exports.MenuGc = () => {
    return `\n_Menampilkan fitur khusus group_`
}
exports.MenuAni = () => {
    return `\n_Mencari random gambar anime_`
}
exports.TagMem = () => {
    return `\n_Menandai member group_`
}
exports.StalkOrk = () => {
    return `\n_Kepoin sosmed orang_`
}
exports.Hoja = () => {
    return `\n_Mencari sesuatu yang gk penting_`
}
exports.CovertWi = () => {
    return `\n_Mengkorversi sesuatu dengan bot_`
}
exports.AnuFoto = () => {
    return `\n_Mengubah gambar jadi lebih menarik_`
}
exports.HajuStik = () => {
    return `\n_Membuat stiker yang unik_`
}
exports.EloDown= () => {
    return `\n_Menampilkan fitur download_`
}
exports.StikerWibu = () => {
    return `\n_Random stiker anime_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_Untuk membuat logo menggunakan bot_`
}
exports.oterMenu = () => {
    return `\n_Menu lainnya_`
}
exports.GameBot = () => {
    return `\n_Fitur untuk bermain dengan bot_`
}
exports.RandRik = () => {
    return `\n_Random video tiktok_`
}
exports.RandCew = () => {
    return `\n_Random gambar cewe cantik_`
}
exports.RamalOi = () => {
    return `\n_Ramalan masa kini_`
}
exports.TeleStik= () => {
    return `\n_Random stiker dari telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Membuat logo keren dengan bot_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Membuat logo menarik_`
}
exports.TobatBro = () => {
    return `\n_Fitur islami_`
}
exports.MauJualan = () => {
    return `\n_Fitur untuk berjualan_`
}
exports.Maustorage = () => {
    return `\n_Fitur untuk menyimpan stiker, audio, foto dan video_`
}
exports.MauChanger = () => {
    return `\n_Fitur untuk mengubah suara audio / vn_`
}
exports.GadaChat = () => {
    return `\n_Fitur untuk melakukan chat random_`
}
exports.SumberBot = () => {
    return `\n_Sumber script bot ini_`
}
exports.Tqnya = () => {
    return `\n_Siapa aja yang berkontribusi di dalam bot ini_`
}
exports.SetAh = () => {
    return `Mau set menu ya ?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${gc}`
    }
    exports.GjdKick = () => {
    return `Sepertinya kamu mengirimkan link group ini, kamu tidak akan di keluarkan`
    }
/////////

/////////
exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⏳ Mohon tunggu sebentar`
}
exports.ok = () => {
    return `✅ Done.`
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp.
`
}
exports.listMenu = (prefix) => {
    return `╭─❒ 「 List Menu 」 
│○ !allmenu
│○ !infomenu
│○ !storemenu
│○ !rpgmenu
│○ !photooxymenu
│○ !storagemenu
│○ !voicemenu
│○ !anonymouscmd
│○ !ownermenu
│○ !databasemenu
│○ !groupmenu
│○ !animemenu
│○ !tagmenu
│○ !stalkmenu
│○ !searchmenu
│○ !convertmenu
│○ !imageeffect
│○ !stickereffect
│○ !downloadmenu
│○ !randomanime
│○ !nsfwmenu
│○ !textpromenu
│○ !othermenu
│○ !gamemenu
│○ !soundmenu
│○ !logomenu
│○ !islammenu
│○ !asupanmenu
│○ !cecanmenu
│○ !primboncmd
│○ !telestiker
│○ !ephotocmd
╰❒ !tqto
`
}
exports.listMenu2 = (prefix) => {
    return `╭─❒ 「 Bot Info 」 
│○ !owner
│○ !rules
│○ !sc
│○ !ping
│○ !runtime
│○ !botstatus
╰❒ !donate


╭─❒ 「 Owner 」 
│○ !setmenu
│○ !setwm
│○ !sendsesi
│○ !listpc
│○ !listgc
│○ !broadcast 
│○ !bc 
│○ !bcgc 
│○ !pushkontak  
│○ !bcimage
│○ !bcaudio
│○ !bcstiker
│○ !bcvn
│○ !bcvideo
│○ !banuser
│○ !unban
│○ !banned
│○ !listbanned
│○ !block
│○ !ublock
│○ !listblock
│○ !addpremium
│○ !delpremium
│○ !listpremium
│○ !nsfw 
│○ !mute 
│○ !autoblok212 
│○ !banchat
│○ !unbanchat
│○ !autorespond 
│○ !antiviewonce 
│○ !antidelete 
│○ !autobio 
│○ !anticall 
│○ !join
│○ !self
│○ !public [only bot]
│○ !del [reply pesan bot]
│○ !pppanjang
│○ !setpppanjang
╰❒ !setppbot 

╭─❒ 「 Store Menu 」
│○ !list
│○ !addlist [key|respond]
│○ !dellist [key]
│○ !update [key|respond]
│○ !store
│○ !kali
│○ !bagi
│○ !tambah
│○ !kurang
│○ !kalkulator
│○ !setproses
│○ !updateproses
│○ !cekproses
│○ !delproses
│○ !setdone
│○ !updatedone
│○ !cekdone
│○ !deldone
│○ !pay
│○ !setcaptionpay
│○ !setpaysewa
│○ proses
╰❒ done

╭─❒ 「 Anonymous 」
│○ !menfess
│○ !confess
│○ !balasmenfess
│○ !tolakmenfess
│○ !stopmenfess
│○ !anonymous 
│○ !start
│○ !skip
╰❒ !stop


╭─❒ 「 Database 」 
│○ !setcmd 
│○ !delcmd 
│○ !listcmd
│○ !absen
│○ !cekabsen
│○ !deleteabsen
│○ !absenstart
│○ !addmsg
│○ !getmsg
│○ !listmsg
╰❒ !delmsg

╭─❒ 「 Rpg Games 」
│○ !adventure
│○ !weekly
│○ !use
│○ !transfer
│○ !slot
│○ !shop
│○ !pasar
│○ !profile
│○ !ojek
│○ !open
│○ !nguli
│○ !narik
│○ !nabung
│○ !monthly
│○ !mining
│○ !merampok
│○ !mancing
│○ !kolam
│○ !koboy
│○ !kerja
│○ !kandang
│○ !levelup
│○ !judi
│○ !inventory
│○ !hourly
│○ !fishop
│○ !feed
│○ !duel
│○ !daily
│○ !craft
│○ !cooldown
│○ !cook
│○ !collect
│○ !chop
│○ !casino
│○ !buy
│○ !bank 
│○ !bansos
│○ !berdagang
│○ !berkebon
╰❒ !build

╭─❒ 「 Group 」 
│○ !addsewa
│○ !delsewa
│○ !listsewa
│○ !ceksewa
│○ !register
│○ !unregister
│○ !ceksn
│○ !listonline
│○ !sider
│○ !wm packname|author
│○ !infochat
│○ !setdesk 
│○ !setppgrup 
│○ !pppanjanggc
│○ !setpppanjanggc
│○ !revoke
│○ !leave
│○ !add
│○ !kick
│○ !leave
│○ !linkgc
│○ !welcome 
│○ !goodbye 
│○ !demotedetect 
│○ !promotedetect  
│○ !setwelcome
│○ !updatewelcome
│○ !delwelcome
│○ !cekwelcome
│○ !setgoodbye
│○ !updategoodbye
│○ !delgoodbye
│○ !cekgoodbye
│○ !setpromote
│○ !updatepromote
│○ !setdemote
│○ !updatedemote
│○ !cekpromote
│○ !cekdemote
│○ !delpromote
│○ !deldemote
│○ !nsfw 
│○ !antilink 
│○ !antilink2
│○ !antiwame 
│○ !antiwame2
│○ !antibadword
│○ !antibadword2
│○ !take
│○ !group 
│○ !tagall 
╰❒ !hidetag 

╭─❒ 「 Anime 」 
│○ !quotesanime
│○ !anime
│○ !animeinfo
│○ !manga
╰❒ !character

╭─❒ 「 Tag 」 
│○ !stickertag
│○ !videotag
│○ !vntag
╰❒ !imagetag

╭─❒ 「 Stalking 」 
│○ !mlstalk [id|zona id]
│○ !ffstalk [id]
│○ !igstalk 
│○ !ghstalk 
╰❒ !ytstalk [channel]


╭─❒ 「 Search 」 
│○ !ytsearch
│○ !openai
│○ !openaiimg
│○ !aidraw
│○ !chatgpt
│○ !githubsearch
│○ !kbbi
│○ !lirik
│○ !wallpaper
│○ !google
│○ !wikimedia
│○ !apksearch
│○ !findapk
│○ !hentai
│○ !wattpad
│○ !webtoons
│○ !brainly
╰❒ !pinterest


╭─❒ 「 Converter 」
│○ !emoji [😭]
│○ !emojimix [😭+💩]
│○ !toaudio
│○ !tomp3
│○ !tovn
│○ !stiker 
│○ !tourl
│○ !ssweb [url]
│○ !togif
│○ !tomp4
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
│○ !wanted 
│○ !utatoo 
│○ !unsharpen 
│○ !thanos 
│○ !sniper 
│○ !sharpen 
│○ !sepia 
│○ !scary 
│○ !rip 
│○ !redple 
│○ !rejected 
│○ !posterize 
│○ !ps4 
│○ !pixelize 
│○ !missionpassed 
│○ !moustache 
│○ !lookwhatkarenhave 
│○ !jail 
│○ !invert 
│○ !instagram 
│○ !greyscale 
│○ !glitch2 
│○ !gay 
│○ !frame 
│○ !fire 
│○ !distort 
│○ !dictator 
│○ !deepfry 
│○ !ddungeon 
│○ !circle 
│○ !challenger 
│○ !burn 
│○ !brazzers 
╰❒ !beautiful 


╭─❒ 「 Sticker Effect 」 
│○ !jail 
│○ !red 
│○ !gay 
│○ !bloo 
│○ !blue 
│○ !sepia 
│○ !green 
│○ !glass 
│○ !invert 
│○ !blurple 
│○ !blurple2 
│○ !wasted 
│○ !passed 
│○ !triggered 
│○ !comrade 
│○ !greyscale 
│○ !threshold 
│○ !brightness 
╰❒ !invertgreyscale 


╭─❒ 「 Download 」 
│○ !tiktok
│○ !tiktoknowm
│○ !tiktokwm
│○ !tiktokaudio
│○ !ytdl
│○ !play
│○ !ytmp3
│○ !ytshortmp3
│○ !ytmp4
│○ !ytshorts
│○ !facebook
│○ !facebooksd
│○ !facebookhd
│○ !fbaudio
│○ !igstory 
│○ !igdl
│○ !igphoto
│○ !igvideo
│○ !igreels
│○ !igtv
│○ !soundcloud
│○ !gitclone [link repo]
│○ !gitrepo [username repo branch]
│○ !mediafire
│○ !nhentaipdf [id]
╰❒ !twitter link

╭─❒ 「 Primbon 」
│○ !nomorhoki 887435047326
│○ !artimimpi
│○ !artinama
│○ !ramaljodoh
│○ !ramaljodohbali
│○ !suamiistri
│○ !ramalcinta
│○ !cocoknama
│○ !pasangan
│○ !jadiannikah
│○ !sifatusaha
│○ !rezeki
│○ !pekerjaan
│○ !nasib
│○ !penyakit
│○ !tarot
│○ !fengshui
│○ !haribaik
│○ !harisangar
│○ !harisial
│○ !nagahari
│○ !arahrezeki
│○ !peruntungan
│○ !weton
│○ !karakter
│○ !keberuntungan
│○ !memancing
│○ !masasubur
│○ !zodiak 
╰❒ !shio

╭─❒ 「 Random Anime 」
│○ !loli
│○ !neko
│○ !waifu
│○ !shinobu
│○ !megumin
│○ !bully
│○ !cuddle
│○ !cry
│○ !hug
│○ !awoo
│○ !kiss
│○ !lick
│○ !pat
│○ !smug
│○ !bonk
│○ !yeet
│○ !blush
│○ !smile
│○ !wave
│○ !highfive
│○ !handhold
│○ !nom
│○ !bite
│○ !glomp
│○ !slap
│○ !kill
│○ !happy
│○ !wink
│○ !poke
│○ !dance
╰❒ !cringe

╭─❒ 「 Voice Change Menu 」
│○ !bass
│○ !blown
│○ !deep
│○ !earrape
│○ !fast
│○ !fat
│○ !nightcore
│○ !reverse
│○ !robot
│○ !slow
│○ !smooth
╰❒ !tupai

╭─❒ 「 Storage Menu 」
│○ !addvn
│○ !listvn
│○ !delvn
│○ !addbadword
│○ !listbadword
│○ !delbadword
│○ !adddocument
│○ !listdocument
│○ !deldocument
│○ !addtext
│○ !listtext
│○ !deltext
│○ !addaudio
│○ !listaudio
│○ !delaudio
│○ !addimage
│○ !listimage
│○ !delimage
│○ !addvideo
│○ !listvideo
│○ !delvideo
│○ !addstik
│○ !delstik
╰❒ !liststik

╭─❒ 「 Nsfw & Sfw 」
│○ !ahegao
│○ !anal
│○ !avatar2
│○ !baka
│○ !bdsm
│○ !bj
│○ !blowjob
│○ !boobs
│○ !classic
│○ !cuckold
│○ !cuddle
│○ !cum
│○ !cumarts
│○ !cumsluts
│○ !ero
│○ !erofeet
│○ !erokemonomimi
│○ !erokitsune
│○ !eroneko
│○ !eroyuri
│○ !feed
│○ !feet
│○ !feetgif
│○ !femdom
│○ !foot
│○ !foxgirl
│○ !futanari
│○ !gangbang
│○ !girl-solo
│○ !girl-solo-gif
│○ !glasses
│○ !hentai
│○ !hentai
│○ !hentai-gif
│○ !holo
│○ !holo2
│○ !holoero
│○ !hug
│○ !jahy
│○ !kemonomimi
│○ !kemonomimi2
│○ !keta
│○ !kiss
│○ !kitsune
│○ !kuni
│○ !lesbian
│○ !lizard
│○ !masturbation
│○ !meowi
│○ !neko
│○ !neko-gif
│○ !neko-sfw
│○ !neko2
│○ !nsfw-neko
│○ !orgy
│○ !panties
│○ !pat
│○ !poke
│○ !pussyart
│○ !pussywankgif
│○ !slap
│○ !smug
│○ !spank
│○ !tentacles
│○ !thighs
│○ !tickle
│○ !tits
│○ !trap
│○ !woof
│○ !yuri
╰❒ !zettai

╭─❒ 「 Ephoto360 Menu 」
│○ !1917text
│○ !angelwing
│○ !announofwin
│○ !birthdaycake
│○ !capercut
│○ !cardhalloween
│○ !cartoonstyle
│○ !christmascard 
│○ !christmasseason
│○ !covergamepubg
│○ !covergraffiti
│○ !dragonfire
│○ !embroider
│○ !fabrictext
│○ !facebookgold
│○ !facebooksilver
│○ !funnyanimations
│○ !funnyhalloween
│○ !galaxybat
│○ !galaxywallpaper
│○ !generalexam 
│○ !glowingtext
│○ !graffiti3d
│○ !graffititext
│○ !graffititext2
│○ !graffititext3
│○ !greetingcardvideo 
│○ !halloweenbats
│○ !heartcup
│○ !heartflashlight
│○ !horrorletter
│○ !icetext
│○ !instagramgold
│○ !instagramsilver
│○ !lightningpubg
│○ !lovecard
│○ !lovelycute
│○ !masteryavatar
│○ !merrycard
│○ !messagecoffee
│○ !metalstar
│○ !milkcake
│○ !moderngold
│○ !moderngold2
│○ !moderngold3
│○ !moderngoldsilver
│○ !multicolor
│○ !nameonheart
│○ !noeltext
│○ !projectyasuo
│○ !pubgbirthday
│○ !pubgglicthvideo 
│○ !pubgmascotlogo
│○ !puppycute
│○ !realembroidery
│○ !retrotext
│○ !rosebirthday
│○ !shirtclub
│○ !snowontext
│○ !starsnight
│○ !summerbeach
│○ !sunglightshadow
│○ !textcakes
│○ !texthalloween
│○ !textonglass
│○ !textsky
│○ !thundertext
│○ !twittergold
│○ !twittersilver
│○ !viettel
│○ !vintagetelevision
│○ !watercolor2
│○ !womansday
│○ !writeblood
│○ !writegalaxy
│○ !writehorror
│○ !youtubegold
│○ !youtubesilver
╰❒ !zombie3d


╭─❒ 「 Textpro Menu 」
│○ !halloween2 
│○ !horror 
│○ !game8bit 
│○ !layered 
│○ !glitch2 
│○ !cool-graffiti 
│○ !cool-wall-graffiti 
│○ !realistic 
│○ !space3d 
│○ !glitch-tiktok 
│○ !stone 
│○ !marvel 
│○ !marvel2 
│○ !pornhub 
│○ !avengers 
│○ !metal-rainbow 
│○ !metal-gold 
│○ !metal-galaxy 
│○ !halloween2 
│○ !lion 
│○ !wolf-black-white 
│○ !wolf-galaxy 
│○ !ninja 
│○ !3dsteel 
│○ !horror2 
│○ !lava 
│○ !bagel 
│○ !blackpink 
│○ !rainbow2 
│○ !water-pipe 
│○ !halloween 
│○ !sketch 
│○ !sircuit 
│○ !discovery 
│○ !metallic2 
│○ !fiction 
│○ !demon 
│○ !transformer 
│○ !berry 
│○ !thunder 
│○ !magma 
│○ !3dstone 
│○ !neon 
│○ !glitch 
│○ !harry-potter 
│○ !embossed 
│○ !broken 
│○ !papercut 
│○ !gradient 
│○ !glossy 
│○ !watercolor 
│○ !multicolor 
│○ !neon-devil 
│○ !underwater 
│○ !bear 
│○ !wonderful-graffiti 
│○ !christmas 
│○ !neon-light 
│○ !snow 
│○ !cloudsky 
│○ !luxury2 
│○ !gradient2 
│○ !summer 
│○ !writing 
│○ !engraved 
│○ !summery 
│○ !3dglue 
│○ !metaldark 
│○ !neonlight 
│○ !oscar 
│○ !minion 
│○ !holographic 
│○ !purple 
│○ !glossy-blue 
│○ !deluxe-gold 
│○ !glossy-carbon 
│○ !fabric 
│○ !neonc 
│○ !newyear 
│○ !newyear2 
│○ !metal-silver 
│○ !xmas 
│○ !blood 
│○ !dark-gold 
│○ !joker 
│○ !wicker 
│○ !natural 
│○ !firework 
│○ !skeleton 
│○ !red-balloon 
│○ !purple-balloon 
│○ !pink-balloon 
│○ !green-balloon 
│○ !cyan-balloon 
│○ !blue-balloon 
│○ !gold-balloon 
│○ !steel 
│○ !gloss 
│○ !denim 
│○ !decorate 
│○ !decorate-purple 
│○ !peridot 
│○ !rock 
│○ !yellow-glass 
│○ !purple-glass 
│○ !orange-glass 
│○ !green-glass 
│○ !cyan-glass 
│○ !blue-glass 
│○ !red-glass 
│○ !purple-shiny-glass 
│○ !captain-as2 
│○ !robot 
│○ !equalizer 
│○ !toxic 
│○ !pink-sparkling 
│○ !blue-sparkling 
│○ !green-sparkling 
│○ !purple-sparkling 
│○ !gold-sparkling 
│○ !red-sparkling 
│○ !cyan-sparkling 
│○ !decorative 
│○ !chocolate 
│○ !strawberry 
│○ !koifish 
│○ !bread 
│○ !matrix 
│○ !blood2 
│○ !neonligth2 
│○ !thunder2 
│○ !3dbox 
│○ !neon2 
│○ !road-warning 
│○ !bokeh 
│○ !green-neon 
│○ !advanced 
│○ !dropwater 
│○ !wall 
│○ !chrismast 
│○ !honey2 
│○ !drug 
│○ !marble 
│○ !marble2 
│○ !ice 
│○ !juice 
│○ !rusty 
│○ !abstra 
│○ !biscuit 
│○ !wood 
│○ !scifi 
│○ !metal-rainbow 
│○ !metal-rose-gold 
│○ !purple-gem 
│○ !shiny  
│○ !yellow-jewelry 
│○ !silver-jewelry 
│○ !red-jewelry 
│○ !purple-jewelry 
│○ !orange-jewelry 
│○ !green-jewelry 
│○ !cyan-jewelry 
│○ !blue-jewelry 
│○ !hot-metal 
│○ !golden 
│○ !blue-glitter 
│○ !purple-glitter 
│○ !pink-glitter 
│○ !green-glitter 
│○ !silver-glitter 
│○ !gold-glitter 
│○ !bronze-glitter 
│○ !eroded-metal 
│○ !carbon 
│○ !candy 
│○ !blue-metal 
│○ !blue-gem 
│○ !3dchrome 
│○ !black-metal 
╰❒ !metal-gold 
 

╭─❒ 「 Others 」
│○ !afk
│○ !translate
│○ !tts
│○ !kalkulator
│○ !smeme 
│○ !smeme2 
│○ !memegen 
╰❒

╭─❒ 「 Game Menu 」
│○ !tembak
│○ !tolak
│○ !terima
│○ !putusin
│○ !ikhlasin
│○ !cekpacar
│○ !kuismath
│○ !tebakgambar
│○ !tebakkata
│○ !tebakbendera
│○ !tebakkalimat
│○ !tebaksiapa
│○ !tebakkabupaten
│○ !tebakkimia
│○ !tebaklirik
│○ !tebaktebakan
│○ !tekateki
│○ !susunkata
╰❒ !caklontong


╭─❒ 「 Asupan Menu 」
│○ !chika
│○ !delvira
│○ !ayu
│○ !bunga
│○ !aura
│○ !nisa
│○ !ziva
│○ !yana
│○ !viona
│○ !syania
│○ !riri
│○ !syifa
│○ !mama_gina
│○ !alcakenya
│○ !mangayutri
│○ !rikagusriani
│○ !asupan
│○ !bocil
│○ !geayubi
│○ !santuy
│○ !ukhty
╰❒ !syifa

╭─❒ 「 Telegram Sticker 」
│○ !awoawo
│○ !benedict
│○ !chat
│○ !dbfly
│○ !dino_kuning
│○ !doge
│○ !gojosatoru
│○ !hope_boy
│○ !jisoo
│○ !kr_robot
│○ !kucing
│○ !lonte
│○ !manusia_lidi
│○ !menjamet
│○ !meow
│○ !nicholas
│○ !patrick
│○ !popoci
│○ !sponsbob
│○ !kawan_sponsbob
╰❒ !tyni

╭─❒ 「 Random Cewe 」
│○ !china 
│○ !indonesia 
│○ !malaysia 
│○ !thailand 
│○ !korea 
│○ !japan 
│○ !vietnam 
│○ !jenni 
│○ !jiso 
│○ !lisa  
╰❒ !rose

╭─❒ 「 Logo Menu 」
│○ !anonymous2
│○ !astronotspace
│○ !avatar3q360
│○ !avatarff
│○ !avatarleagueofking
│○ !avatarlolbyname
│○ !avataroverwatch
│○ !bannerofaov
│○ !bannerofaov2
│○ !bannerofapex
│○ !banneroffreefire
│○ !banneroflol
│○ !bannerofoverwatch
│○ !bannerofpubg
│○ !bannerytcsgo
│○ !beautifulgalaxylol
│○ !beautifulshimmering
│○ !blueneon
│○ !circlemarcotteam
│○ !colorfulpubg
│○ !companylogo
│○ !companylogo2
│○ !coverbannerlol
│○ !coverdota2
│○ !coverfblol
│○ !coverfreefirefb
│○ !coverleagueofking
│○ !coverloknew
│○ !coverofwarface
│○ !coveronepiecefb
│○ !crossfirecover
│○ !crossfirestyle
│○ !csgocover
│○ !cutegirlgamer
│○ !cyberhunterfb
│○ !dragonballfb
│○ !effect3donbeach
│○ !elegantrotation
│○ !fbgamepubgcover
│○ !footballteam
│○ !gaminglogo4fvs
│○ !gamingmascot
│○ !gradientlogo
│○ !gunlogogaming
│○ !introvideomaker
│○ !letterlogos 
│○ !logoaccording 
│○ !logogamingassasin 
│○ !lolcoverbyname 
│○ !lolpentakill 
│○ !lolwallpaper 
│○ !maketeamlogo 
│○ !mascotstyle 
│○ !metalmascot 
│○ !newlolavatar 
│○ !overwatchcover 
│○ !overwatchwallpaper 
│○ !pencilsketch 
│○ !pubgcutelogo 
│○ !pubglogomaker 
│○ !rovwallpaper 
│○ !rovwallpaperhd 
│○ !teamlogo 
│○ !wallpaperaov 
╰❒ !wallpaperml 


╭─❒ 「 Islamic Menu 」
│○ !asmaulhusna
│○ !kisahnabi
│○ !jadwalshalat
│○ !randomquran
│○ !randomquran2
│○ !listsurah
│○ !tafsirsurah
╰❒ !alquranaudio

╭─❒ 「 Sound Menu 」
│○ !sound1
│○ !sound2
│○ !sound3
│○ !sound4
│○ !sound5
│○ !sound6
│○ !sound7
│○ !sound8
│○ !sound9
│○ !sound10
│○ !sound11
│○ !sound12
│○ !sound13
│○ !sound14
│○ !sound15
│○ !sound16
│○ !sound17
│○ !sound18 
│○ !sound19
│○ !sound20
│○ !sound21
│○ !sound22
│○ !sound23
│○ !sound24
│○ !sound25
│○ !sound26
│○ !sound27
│○ !sound28
│○ !sound29
│○ !sound30
│○ !sound31
│○ !sound32
│○ !sound33
│○ !sound34
│○ !sound35
│○ !sound36
│○ !sound37
│○ !sound38
│○ !sound39
│○ !sound40
│○ !sound41
│○ !sound42
│○ !sound43
│○ !sound44
│○ !sound45
│○ !sound46
│○ !sound47
│○ !sound48
│○ !sound49
│○ !sound50
│○ !sound51
│○ !sound52
│○ !sound53
│○ !sound54
│○ !sound55
│○ !sound56
│○ !sound57
│○ !sound58
│○ !sound59
│○ !sound60
│○ !sound61
│○ !sound62
│○ !sound63
│○ !sound64
│○ !sound65
│○ !sound66
│○ !sound67
│○ !sound68
│○ !sound69
╰❒ !sound70

╭─❒ 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdiz
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ ZeeoneOfc
│○ Penyedia Module
╰❒ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
2. Jangan telepon bot. ☎️
3. Jangan membandingkan bot 👍

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini bisa kalian dapatkan di YouTube ZEEONE OFC

🗯️ Boleh saya menambah ke grup?
➡️ Untuk itu tergantung dari owner bot sendiri

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix & bisa kamu gunakan tanpa prefix

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! 
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
╭ 𝖭𝖺𝗆𝖺 :
│○ 𝖴𝗆𝗎𝗋 :
│○ 𝖦𝖾𝗇𝖽𝖾𝗋 :
│○ 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*
https://s.id/YouTube-Zeeoneofc
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍
Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
│○ !owner
│○ !rules
│○ !sc
│○ !ping
│○ !runtime
│○ !botstatus
╰❒ !donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
│○ !setmenu
│○ !setwm
│○ !sendsesi
│○ !listpc
│○ !listgc
│○ !broadcast 
│○ !bc 
│○ !bcgc 
│○ !pushkontak 
│○ !bcimage
│○ !bcaudio
│○ !bcstiker
│○ !bcvn
│○ !bcvideo
│○ !banuser
│○ !unban
│○ !banned
│○ !listbanned
│○ !block
│○ !ublock
│○ !listblock
│○ !addpremium
│○ !delpremium
│○ !listpremium
│○ !nsfw 
│○ !mute 
│○ !autoblok212 
│○ !banchat
│○ !unbanchat
│○ !autorespond 
│○ !antiviewonce 
│○ !antidelete 
│○ !autobio 
│○ !anticall 
│○ !join
│○ !self
│○ !public
│○ !del
│○ !pppanjang
│○ !setpppanjang
╰❒ !setppbot
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
│○ !setcmd 
│○ !delcmd 
│○ !listcmd
│○ !absen
│○ !cekabsen
│○ !deleteabsen
│○ !absenstart
│○ !addmsg
│○ !getmsg
│○ !listmsg
╰❒ !delmsg
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
│○ !addsewa
│○ !delsewa
│○ !listsewa
│○ !ceksewa
│○ !delsewa
│○ !register
│○ !unregister
│○ !ceksn
│○ !listonline
│○ !sider
│○ !wm
│○ !infochat
│○ !setdesk 
│○ !setppgrup 
│○ !pppanjanggc
│○ !setpppanjanggc
│○ !revoke
│○ !leave
│○ !add
│○ !kick
│○ !leave
│○ !linkgc
│○ !welcome 
│○ !goodbye 
│○ !demotedetect 
│○ !promotedetect  
│○ !setwelcome
│○ !updatewelcome
│○ !delwelcome
│○ !cekwelcome
│○ !setgoodbye
│○ !updategoodbye
│○ !delgoodbye
│○ !cekgoodbye
│○ !setpromote
│○ !updatepromote
│○ !setdemote
│○ !updatedemote
│○ !cekpromote
│○ !cekdemote
│○ !delpromote
│○ !deldemote
│○ !nsfw 
│○ !antilink 
│○ !antilink2
│○ !antiwame 
│○ !antiwame2
│○ !antibadword
│○ !antibadword2
│○ !take
│○ !group
│○ !tagall 
╰❒ !hidetag 
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
│○ !quotesanime
│○ !anime
│○ !animeinfo
│○ !manga
╰❒ !character
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
│○ !stickertag
│○ !videotag
│○ !vntag
╰❒ !imagetag
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
│○ !mlstalk 
│○ !ffstalk
│○ !igstalk 
│○ !ghstalk 
╰❒ !ytstalk
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
│○ !ytsearch
│○ !openai
│○ !openaiimg
│○ !aidraw
│○ !chatgpt
│○ !githubsearch
│○ !kbbi
│○ !lirik
│○ !wallpaper
│○ !google
│○ !wikimedia
│○ !apksearch
│○ !findapk
│○ !hentai
│○ !wattpad
│○ !webtoons
│○ !brainly
╰❒ !pinterest
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
│○ !emoji
│○ !emojimix
│○ !toaudio
│○ !tomp3
│○ !tovn
│○ !stiker 
│○ !tourl
│○ !ssweb
│○ !togif
│○ !tomp4
╰❒${prefix}toimg 
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
│○ !wanted 
│○ !utatoo 
│○ !unsharpen 
│○ !thanos 
│○ !sniper 
│○ !sharpen 
│○ !sepia 
│○ !scary 
│○ !rip 
│○ !redple 
│○ !rejected 
│○ !posterize 
│○ !ps4 
│○ !pixelize 
│○ !missionpassed 
│○ !moustache 
│○ !lookwhatkarenhave 
│○ !jail 
│○ !invert 
│○ !instagram 
│○ !greyscale 
│○ !glitch 
│○ !gay 
│○ !frame 
│○ !fire 
│○ !distort 
│○ !dictator 
│○ !deepfry 
│○ !ddungeon 
│○ !circle 
│○ !challenger 
│○ !burn 
│○ !brazzers 
╰❒ !beautiful 
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
│○ !jail 
│○ !red 
│○ !gay 
│○ !bloo 
│○ !blue 
│○ !sepia 
│○ !green 
│○ !glass 
│○ !invert 
│○ !blurple 
│○ !blurple2 
│○ !wasted 
│○ !passed 
│○ !triggered 
│○ !comrade 
│○ !greyscale 
│○ !threshold 
│○ !brightness 
╰❒ !invertgreyscale 
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
│○ !tiktok
│○ !tiktoknowm
│○ !tiktokwm
│○ !tiktokaudio
│○ !ytdl
│○ !play
│○ !ytmp3
│○ !ytshortmp3
│○ !ytmp4
│○ !ytshorts
│○ !facebook
│○ !facebooksd
│○ !facebookhd
│○ !fbaudio
│○ !igstory 
│○ !igdl
│○ !igphoto
│○ !igvideo
│○ !igreels
│○ !igtv
│○ !soundcloud
│○ !gitclone
│○ !gitrepo
│○ !mediafire
│○ !nhentaipdf
╰❒ !twitter
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
│○ !loli
│○ !neko
│○ !waifu
│○ !shinobu
│○ !megumin
│○ !bully
│○ !cuddle
│○ !cry
│○ !hug
│○ !awoo
│○ !kiss
│○ !lick
│○ !pat
│○ !smug
│○ !bonk
│○ !yeet
│○ !blush
│○ !smile
│○ !wave
│○ !highfive
│○ !handhold
│○ !nom
│○ !bite
│○ !glomp
│○ !slap
│○ !kill
│○ !happy
│○ !wink
│○ !poke
│○ !dance
╰❒ !cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
│○ !ahegao
│○ !anal
│○ !avatar2
│○ !baka
│○ !bdsm
│○ !bj
│○ !blowjob
│○ !boobs
│○ !classic
│○ !cuckold
│○ !cuddle
│○ !cum
│○ !cumarts
│○ !cumsluts
│○ !ero
│○ !erofeet
│○ !erokemonomimi
│○ !erokitsune
│○ !eroneko
│○ !eroyuri
│○ !feed
│○ !feet
│○ !feetgif
│○ !femdom
│○ !foot
│○ !foxgirl
│○ !futanari
│○ !gangbang
│○ !girl-solo
│○ !girl-solo-gif
│○ !glasses
│○ !hentai
│○ !hentai
│○ !hentai-gif
│○ !holo
│○ !holo2
│○ !holoero
│○ !hug
│○ !jahy
│○ !kemonomimi
│○ !kemonomimi2
│○ !keta
│○ !kiss
│○ !kitsune
│○ !kuni
│○ !lesbian
│○ !lizard
│○ !masturbation
│○ !meowi
│○ !neko
│○ !neko-gif
│○ !neko-sfw
│○ !neko2
│○ !nsfw-neko
│○ !orgy
│○ !panties
│○ !pat
│○ !poke
│○ !pussyart
│○ !pussywankgif
│○ !slap
│○ !smug
│○ !spank
│○ !tentacles
│○ !thighs
│○ !tickle
│○ !tits
│○ !trap
│○ !woof
│○ !yuri
╰❒ !zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
│○ !halloween2 
│○ !horror 
│○ !game8bit 
│○ !layered 
│○ !glitch2 
│○ !cool-graffiti 
│○ !cool-wall-graffiti 
│○ !realistic 
│○ !space3d 
│○ !glitch-tiktok 
│○ !stone 
│○ !marvel 
│○ !marvel2 
│○ !pornhub 
│○ !avengers 
│○ !metal-rainbow 
│○ !metal-gold 
│○ !metal-galaxy 
│○ !halloween2 
│○ !lion 
│○ !wolf-black-white 
│○ !wolf-galaxy 
│○ !ninja 
│○ !3dsteel 
│○ !horror2 
│○ !lava 
│○ !bagel 
│○ !blackpink 
│○ !rainbow2 
│○ !water-pipe 
│○ !halloween 
│○ !sketch 
│○ !sircuit 
│○ !discovery 
│○ !metallic2 
│○ !fiction 
│○ !demon 
│○ !transformer 
│○ !berry 
│○ !thunder 
│○ !magma 
│○ !3dstone 
│○ !neon 
│○ !glitch 
│○ !harry-potter 
│○ !embossed 
│○ !broken 
│○ !papercut 
│○ !gradient 
│○ !glossy 
│○ !watercolor 
│○ !multicolor 
│○ !neon-devil 
│○ !underwater 
│○ !bear 
│○ !wonderful-graffiti 
│○ !christmas 
│○ !neon-light 
│○ !snow 
│○ !cloudsky 
│○ !luxury2 
│○ !gradient2 
│○ !summer 
│○ !writing 
│○ !engraved 
│○ !summery 
│○ !3dglue 
│○ !metaldark 
│○ !neonlight 
│○ !oscar 
│○ !minion 
│○ !holographic 
│○ !purple 
│○ !glossy-blue 
│○ !deluxe-gold 
│○ !glossy-carbon 
│○ !fabric 
│○ !neonc 
│○ !newyear 
│○ !newyear2 
│○ !metal-silver 
│○ !xmas 
│○ !blood 
│○ !dark-gold 
│○ !joker 
│○ !wicker 
│○ !natural 
│○ !firework 
│○ !skeleton 
│○ !red-balloon 
│○ !purple-balloon 
│○ !pink-balloon 
│○ !green-balloon 
│○ !cyan-balloon 
│○ !blue-balloon 
│○ !gold-balloon 
│○ !steel 
│○ !gloss 
│○ !denim 
│○ !decorate 
│○ !decorate-purple 
│○ !peridot 
│○ !rock 
│○ !yellow-glass 
│○ !purple-glass 
│○ !orange-glass 
│○ !green-glass 
│○ !cyan-glass 
│○ !blue-glass 
│○ !red-glass 
│○ !purple-shiny-glass 
│○ !captain-as2 
│○ !robot 
│○ !equalizer 
│○ !toxic 
│○ !pink-sparkling 
│○ !blue-sparkling 
│○ !green-sparkling 
│○ !purple-sparkling 
│○ !gold-sparkling 
│○ !red-sparkling 
│○ !cyan-sparkling 
│○ !decorative 
│○ !chocolate 
│○ !strawberry 
│○ !koifish 
│○ !bread 
│○ !matrix 
│○ !blood2 
│○ !neonligth2 
│○ !thunder2 
│○ !3dbox 
│○ !neon2 
│○ !road-warning 
│○ !bokeh 
│○ !green-neon 
│○ !advanced 
│○ !dropwater 
│○ !wall 
│○ !chrismast 
│○ !honey2 
│○ !drug 
│○ !marble 
│○ !marble2 
│○ !ice 
│○ !juice 
│○ !rusty 
│○ !abstra 
│○ !biscuit 
│○ !wood 
│○ !scifi 
│○ !metal-rainbow 
│○ !metal-rose-gold 
│○ !purple-gem 
│○ !shiny  
│○ !yellow-jewelry 
│○ !silver-jewelry 
│○ !red-jewelry 
│○ !purple-jewelry 
│○ !orange-jewelry 
│○ !green-jewelry 
│○ !cyan-jewelry 
│○ !blue-jewelry 
│○ !hot-metal 
│○ !golden 
│○ !blue-glitter 
│○ !purple-glitter 
│○ !pink-glitter 
│○ !green-glitter 
│○ !silver-glitter 
│○ !gold-glitter 
│○ !bronze-glitter 
│○ !eroded-metal 
│○ !carbon 
│○ !candy 
│○ !blue-metal 
│○ !blue-gem 
│○ !3dchrome 
│○ !black-metal 
╰❒ !metal-gold 
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
│○ !ttp 
│○ !attp 
│○ !afk
│○ !translate
│○ !tts
│○ !kalkulator
│○ !smeme 
│○ !smeme2 
╰❒ !memegen 
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
│○ !tembak
│○ !tolak
│○ !terima
│○ !putusin
│○ !ikhlasin
│○ !cekpacar
│○ !kuismath
│○ !tebakgambar
│○ !tebakkata
│○ !tebakbendera
│○ !tebakkalimat
│○ !tebaksiapa
│○ !tebakkabupaten
│○ !tebakkimia
│○ !tebaklirik
│○ !tebaktebakan
│○ !tekateki
│○ !susunkata
╰❒ !caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
│○ !chika
│○ !delvira
│○ !ayu
│○ !bunga
│○ !aura
│○ !nisa
│○ !ziva
│○ !yana
│○ !viona
│○ !syania
│○ !riri
│○ !syifa
│○ !mama_gina
│○ !alcakenya
│○ !mangayutri
│○ !rikagusriani
│○ !asupan
│○ !bocil
│○ !geayubi
│○ !santuy
│○ !ukhty
╰❒ !syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
│○ !china 
│○ !indonesia 
│○ !malaysia 
│○ !thailand 
│○ !korea 
│○ !japan 
│○ !vietnam 
│○ !jenni 
│○ !jiso 
│○ !lisa  
╰❒ !rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdiz
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ ZeeoneOfc
│○ Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
│○ !nomorhoki
│○ !artimimpi
│○ !artinama
│○ !ramaljodoh
│○ !ramaljodohbali
│○ !suamiistri
│○ !ramalcinta
│○ !cocoknama
│○ !pasangan
│○ !jadiannikah
│○ !sifatusaha
│○ !rezeki
│○ !pekerjaan
│○ !nasib
│○ !penyakit
│○ !tarot
│○ !fengshui
│○ !haribaik
│○ !harisangar
│○ !harisial
│○ !nagahari
│○ !arahrezeki
│○ !peruntungan
│○ !weton
│○ !karakter
│○ !keberuntungan
│○ !memancing
│○ !masasubur
│○ !zodiak 
╰❒ !shio
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
│○ !awoawo
│○ !benedict
│○ !chat
│○ !dbfly
│○ !dino_kuning
│○ !doge
│○ !gojosatoru
│○ !hope_boy
│○ !jisoo
│○ !kr_robot
│○ !kucing
│○ !lonte
│○ !manusia_lidi
│○ !menjamet
│○ !meow
│○ !nicholas
│○ !patrick
│○ !popoci
│○ !sponsbob
│○ !kawan_sponsbob
╰❒ !tyni
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
│○ !1917text
│○ !angelwing
│○ !announofwin
│○ !birthdaycake
│○ !capercut
│○ !cardhalloween
│○ !cartoonstyle
│○ !christmascard 
│○ !christmasseason
│○ !covergamepubg
│○ !covergraffiti
│○ !dragonfire
│○ !embroider
│○ !fabrictext
│○ !facebookgold
│○ !facebooksilver
│○ !funnyanimations
│○ !funnyhalloween
│○ !galaxybat
│○ !galaxywallpaper
│○ !generalexam 
│○ !glowingtext
│○ !graffiti3d
│○ !graffititext
│○ !graffititext2
│○ !graffititext3
│○ !greetingcardvideo 
│○ !halloweenbats
│○ !heartcup
│○ !heartflashlight
│○ !horrorletter
│○ !icetext
│○ !instagramgold
│○ !instagramsilver
│○ !lightningpubg
│○ !lovecard
│○ !lovelycute
│○ !masteryavatar
│○ !merrycard
│○ !messagecoffee
│○ !metalstar
│○ !milkcake
│○ !moderngold
│○ !moderngold2
│○ !moderngold3
│○ !moderngoldsilver
│○ !multicolor
│○ !nameonheart
│○ !noeltext
│○ !projectyasuo
│○ !pubgbirthday
│○ !pubgglicthvideo 
│○ !pubgmascotlogo
│○ !puppycute
│○ !realembroidery
│○ !retrotext
│○ !rosebirthday
│○ !shirtclub
│○ !snowontext
│○ !starsnight
│○ !summerbeach
│○ !sunglightshadow
│○ !textcakes
│○ !texthalloween
│○ !textonglass
│○ !textsky
│○ !thundertext
│○ !twittergold
│○ !twittersilver
│○ !viettel
│○ !vintagetelevision
│○ !watercolor2
│○ !womansday
│○ !writeblood
│○ !writegalaxy
│○ !writehorror
│○ !youtubegold
│○ !youtubesilver
╰❒ !zombie3d`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
│○ !anonymous2
│○ !astronotspace
│○ !avatar3q360
│○ !avatarff
│○ !avatarleagueofking
│○ !avatarlolbyname
│○ !avataroverwatch
│○ !bannerofaov
│○ !bannerofaov2
│○ !bannerofapex
│○ !banneroffreefire
│○ !banneroflol
│○ !bannerofoverwatch
│○ !bannerofpubg
│○ !bannerytcsgo
│○ !beautifulgalaxylol
│○ !beautifulshimmering
│○ !blueneon
│○ !circlemarcotteam
│○ !colorfulpubg
│○ !companylogo
│○ !companylogo2
│○ !coverbannerlol
│○ !coverdota2
│○ !coverfblol
│○ !coverfreefirefb
│○ !coverleagueofking
│○ !coverloknew
│○ !coverofwarface
│○ !coveronepiecefb
│○ !crossfirecover
│○ !crossfirestyle
│○ !csgocover
│○ !cutegirlgamer
│○ !cyberhunterfb
│○ !dragonballfb
│○ !effect3donbeach
│○ !elegantrotation
│○ !fbgamepubgcover
│○ !footballteam
│○ !gaminglogo4fvs
│○ !gamingmascot
│○ !gradientlogo
│○ !gunlogogaming
│○ !introvideomaker
│○ !letterlogos 
│○ !logoaccording 
│○ !logogamingassasin 
│○ !lolcoverbyname 
│○ !lolpentakill 
│○ !lolwallpaper 
│○ !maketeamlogo 
│○ !mascotstyle 
│○ !metalmascot 
│○ !newlolavatar 
│○ !overwatchcover 
│○ !overwatchwallpaper 
│○ !pencilsketch 
│○ !pubgcutelogo 
│○ !pubglogomaker 
│○ !rovwallpaper 
│○ !rovwallpaperhd 
│○ !teamlogo 
│○ !wallpaperaov 
╰❒ !wallpaperml 
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Islamic Menu 」
│○ !asmaulhusna
│○ !kisahnabi
│○ !jadwalshalat
│○ !randomquran
│○ !randomquran2
│○ !listsurah
│○ !tafsirsurah
╰❒ !alquranaudio 
`
}
exports.anonchat = (prefix) =>{
	return`╭─❒ 「 Anonymous 」
│○ !menfess
│○ !confess
│○ !balasmenfess
│○ !tolakmenfess
│○ !stopmenfess
│○ !anonymous 
│○ !start
│○ !skip 
╰❒ !stop
`
}

exports.storemenu = (prefix) =>{
	return`╭─❒ 「 Store Menu 」
│○ !list
│○ !addlist
│○ !dellist 
│○ !update 
│○ !store
│○ !kali
│○ !bagi
│○ !tambah
│○ !kurang
│○ !kalkulator
│○ !setproses
│○ !updateproses
│○ !cekproses
│○ !delproses
│○ !setdone
│○ !updatedone
│○ !cekdone
│○ !deldone
│○ !pay
│○ !setcaptionpay
│○ !setpaysewa
│○ proses
╰❒ done
`
}

exports.voiceChange = (prefix) =>{
	return`╭─❒ 「 Voice Change Menu 」
│○ !bass
│○ !blown
│○ !deep
│○ !earrape
│○ !fast
│○ !fat
│○ !nightcore
│○ !reverse
│○ !robot
│○ !slow
│○ !smooth
╰❒ !tupai
`
}
exports.storagemenu = (prefix) =>{
	return`╭─❒ 「 Storage Menu 」
│○ !addvn
│○ !listvn
│○ !delvn
│○ !addbadword
│○ !listbadword
│○ !delbadword
│○ !adddocument
│○ !listdocument
│○ !deldocument
│○ !addtext
│○ !listtext
│○ !deltext
│○ !addaudio
│○ !listaudio
│○ !delaudio
│○ !addimage
│○ !listimage
│○ !delimage
│○ !addvideo
│○ !listvideo
│○ !delvideo
│○ !addstik
│○ !delstik
╰❒ !liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`╭─❒ 「 Rpg Games 」
│○ !adventure
│○ !weekly
│○ !use
│○ !transfer
│○ !slot
│○ !shop
│○ !profile
│○ !pasar
│○ !ojek
│○ !open
│○ !nguli
│○ !narik
│○ !nabung
│○ !monthly
│○ !mining
│○ !merampok
│○ !mancing
│○ !kolam
│○ !koboy
│○ !kerja
│○ !kandang
│○ !levelup
│○ !judi
│○ !inventory
│○ !hourly
│○ !fishop
│○ !feed
│○ !duel
│○ !daily
│○ !craft
│○ !cooldown
│○ !cook
│○ !collect
│○ !chop
│○ !casino
│○ !buy
│○ !bank 
│○ !bansos
│○ !berdagang
│○ !berkebon
╰❒ !build
`
}

exports.photooxy = (prefix)=>{
	return`╭─❒ 「 Photooxy Menu 」
│○ !battlegrounds-logo
│○ !battlefield4
│○ !text-8bit
│○ !typography-flower 
│○ !under-flower 
│○ !bevel-text 
│○ !silk-text 
│○ !sweet-andy 
│○ !smoke-typography 
│○ !carvedwood 
│○ !scary-cemetery 
│○ !royallook 
│○ !coffeecup2 
│○ !illuminated 
│○ !harry-potter2
│○ !birthday-cake 
│○ !embroidery
│○ !flaming 
│○ !furtext 
│○ !nightsky 
│○ !glow-rainbow 
│○ !gradient-avatar 
│○ !white-cube
│○ !graffiti-cover 
│○ !rainbow-shine 
│○ !smoky-neon 
│○ !quotes-underfall
│○ !vector-nature 
│○ !yellow-rose 
│○ !love-text 
│○ !underwater-ocean 
│○ !nature-text 
│○ !wolf-metal 
│○ !summer-text 
│○ !wooden-board
│○ !quote-wood 
│○ !love-text 
│○ !quotes-undergrass 
│○ !naruto-banner 
│○ !love-message 
│○ !textoncup2 
│○ !burn-paper 
│○ !smoke 
│○ !romantic-messages 
│○ !shadow-sky 
│○ !text-cup 
╰❒ !coffecup
`
}
exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
│○ !sound1
│○ !sound2
│○ !sound3
│○ !sound4
│○ !sound5
│○ !sound6
│○ !sound7
│○ !sound8
│○ !sound9
│○ !sound10
│○ !sound11
│○ !sound12
│○ !sound13
│○ !sound14
│○ !sound15
│○ !sound16
│○ !sound17
│○ !sound18 
│○ !sound19
│○ !sound20
│○ !sound21
│○ !sound22
│○ !sound23
│○ !sound24
│○ !sound25
│○ !sound26
│○ !sound27
│○ !sound28
│○ !sound29
│○ !sound30
│○ !sound31
│○ !sound32
│○ !sound33
│○ !sound34
│○ !sound35
│○ !sound36
│○ !sound37
│○ !sound38
│○ !sound39
│○ !sound40
│○ !sound41
│○ !sound42
│○ !sound43
│○ !sound44
│○ !sound45
│○ !sound46
│○ !sound47
│○ !sound48
│○ !sound49
│○ !sound50
│○ !sound51
│○ !sound52
│○ !sound53
│○ !sound54
│○ !sound55
│○ !sound56
│○ !sound57
│○ !sound58
│○ !sound59
│○ !sound60
│○ !sound61
│○ !sound62
│○ !sound63
│○ !sound64
│○ !sound65
│○ !sound66
│○ !sound67
│○ !sound68
│○ !sound69
╰❒ !sound70
`
}


