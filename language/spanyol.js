exports.onlyPrem = `Características especiales para miembros premiumCaracterísticas especiales para miembros premium`
exports.aikey = `La clave openai api es incorrecta, cámbiela en settings.js`
exports.DelSetWel = `Éxito en la eliminación del conjunto bienvenido en este grupo`
exports.NoSetWel = `Todavía no hay set de bienvenida en este grupo`
exports.DelSetLeft = `Éxito eliminar establecer adiós en este grupo`
exports.NoSetLeft = `Todavía no hay un adiós establecido en este grupo.`
exports.doneSet = `ha sido cambiado antes`
exports.serverErr = `El servidor está caído`
exports.kodeErr = `Código de idioma incorrecto, verifíquelo con el comando .codelanguage`
exports.qc = (prefix, command) => {
  return`Ejemplo :

1. Enviar comando ${prefijo + comando} *texto*
	• Ejemplo : ${prefix + command} Hola
2. Responder chats con subtítulos ${prefix + command}
	• Ejemplo : ${prefix + command}
	
Máximo 25 caracteres`
}
exports.Tts = (prefix, command) => {
    return `Ejemplo :

1. Enviar comando ${prefix + comando} *código de idioma* *texto*
	• Ejemplo: ${prefix + comando} id hola
2. Responder al chat con el título ${prefix + comando} *código de idioma*
	• Ejemplo: ${prefix + comando} id
Lista de idiomas admitidos ${prefix}languagecode`
}
exports.langkode = `*「 CÓDIGO DE LENGUAJE 」*
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
	return`Su límite restante : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`Lista ${a} con clave ${b} yes en la base de datos`
	}
exports.delstik = (a, b) =>{
	return`Lista ${a} con clave ${b} no existe en la base de datos`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal__, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`📛 Nombre: ${username} (@${m.sender.split`@`[0]})${about ? '\n💌 Bio: ' + about : ''}
👨‍❤️‍👨 Estado: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#️⃣ Número: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 Enlace: https://wa.me/${m.sender.split`@`[0]}
🤷‍♂️ XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
🎚️ Nivel: ${level}
🎢 Role: ${role}
📊 Límite: ${limit}
®️ Registered: ${registered ? '✅ (' + tanggal__(regTime) + ')': '❌'}
⛽ De primera calidad: ${premium ? `✅\n⏰ Prima vencida : msToDate(premiumDate - now)` : '❌'}
🛄 Last claim: ${lastclaim > 0 ? tanggal__(lastclaim) : ''}`
	}


exports.needReg = (a, b, c) =>{
	return`🇲🇨 Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game

🇺🇲 Please register first

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Tu límite de hoy se ha agotado ⚠️\n\nPor favor compre un límite escribiendo ${prefix}buy o ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`El número de serie (sn) es incorrecto\n.ceksn -- _check serial number_`
	}
exports.NoseriOk = () =>{
	return`Cancelar correctamente el registro!`
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
	return`Ya estás registrado en la base de datos`
	}
exports.UmurReg = () =>{
	return`La edad debe ser un número.`
	}
exports.NamaReg = () =>{
	return`Tu nombre es muy largo, solo usa tu primer nombre`
	}
exports.HobiReg = () =>{
	return`Tienes muchas aficiones, solo 1 o 2 aficiones`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`╭─「 *VERIFICACIÓN EXITOSA* 」
│\`\`\`Verificación exitosa con\`\`\` 
│
│\`\`\`SN: ${a}\`\`\`
│\`\`\`En : ${b}\`\`\`
│\`\`\`Nombre : ${c}\`\`\`
│\`\`\`Años : ${d}\`\`\`
│\`\`\`Género : ${e}\`\`\`
│\`\`\`Número : @${f}\`\`\`
│\`\`\`Para usar bots por favor \`\`\`
│\`\`\`Enviar pedidos .menu\`\`\`
│\`\`\`o .allmenu\`\`\`
│
│\`\`\`\Total : ${i} Users\`\`\`
╰─────────────────────`
	}
exports.genderReg = (a) =>{
	return`Seleccione uno ( male / female)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`Eres muy viejo`
	}
exports.firstChat = (a, b, c) =>{
	return`Hola ${a} ${b} 🤗, soy ${c} bots de whatsapp. Puedo ayudarte?`
	}
exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Se agregó correctamente ${q} a la base de datos ${a}\n\nCorregido por ${prefix}${b}`
	}
	
exports.AddstikOk_ = (a,b) =>{
	return`La duración de ${a} segundos, que es la duración máxima de ${b} que el bot puede guardar en la base de datos`
	}
exports.Addvn = () =>{
	return`Espera un minuto, intentaré subir este medio a la base de datos.`
	}
	
exports.ListStik = (a) =>{
	return`Para tomar ${a}, envíe un mensaje de acuerdo con la lista de ${a} anterior`
	}
exports.noAbsen = () =>{
return `❌ ¡No hay ausencias en este grupo!\n.absen -- mulai absen`
}
exports.StartAbsen = () =>{
	return`Empezar ausente`
	}
exports.DahAbsen = () =>{
	return`estas ausente`
	}
exports.DelAbsen = () =>{
	return`✅ Ausencias eliminadas con éxito en este grupo`
	}
exports.adaAbsen = () =>{
	return`Todavía hay sesiones ausentes en este grupo !`
	}
exports.SAbsen = () =>{
	return`Comienza la ausencia`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`¡Pegatinas de respuesta!\nEjemplo : ${prefix + command} .menu\n\n\n*Nota: Debe ir acompañado de prefix!!*`
	}
exports.CmdApa = () =>{
	return`¿Para qué comandos?`
	}
exports.UCmd = () =>{
	return`No tienes permiso para modificar este pedido de pegatinas.`
	}
exports.HashCmd = () =>{
	return`sin hashes`
	}
exports.DelCmd = () =>{
	return`✅ Se eliminó la etiqueta cmd`
	}
exports.LockCmd = () =>{
	return`Mensaje de respuesta`
	}
exports.NoCmd = () =>{
	return`Hash no encontrado en la base de datos`
	}
exports.ReplyMsg = () =>{
	return`Mensaje de respuesta que desea guardar en la base de datos`
	}
exports.NoMsg = (prefix, command) =>{
	return`Ejemplo : ${prefix + command} Nombre del archivo`
	}
exports.AdMsg = (text) => {
    return `'${text}' registrado en la lista de mensajes`
}
exports.DoneMsg = (prefix, text) => {
    return `Mensaje agregado con éxito en la lista de mensajes como '${text}'
    
Acceso con ${prefix}getmsg ${text}
Ver lista de mensajes con ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Ejemplo : ${prefix + command} file name\n\nVer lista de mensajes con ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' no aparece en la lista de mensajes`
}
exports.DelMsg = (text) => {
    return `Se eliminó con éxito '${text}' de la lista de mensajes`
}

exports.OnBef = () => {
    return `Ha sido activado antes`
}
exports.OffYaBef = () => {
    return `Ha sido desactivado antes`
}
exports.OkOn = (command) => {
    return `${command} ¡Activado con éxito!`
}
exports.OffBef = (command) => {
    return `${command} ¡Deshabilitado con éxito!`
}
exports.OkMute = () => {
    return `El bot ha sido silenciado en este grupo`
}
exports.OkUnMute = () => {
    return `Bot tuvo éxito en UnMute`
}
exports.OkUnBanC = () => {
    return `El bot desbaneó con éxito el chat`
}
exports.NoMute = () => {
    return `El bot no ha sido baneado en este grupo`
}

exports.NoMsgBot = () => {
    return `¡El mensaje no fue enviado por un bot!`
}
exports.ToimgErr = () => {
    return `Lo siento, actualmente no es compatible con Gif Pegatina`
}
exports.NoToImg = (prefix, command) => {
    return `Pegatina de respuesta con subtítulo *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Cambio exitoso al modo público`
}
exports.BotSelf = () => {
    return `Cambio exitoso al modo propio\n\nPara cambiar al modo público, use el número de bot`
}
exports.NoToStik = (prefix, command) => {
    return `Enviar/Responder imagen/video con subtítulo ${prefix + command}\n\nDuración de la etiqueta de video 1-9 segundos`
}
exports.NoPpBot = (prefix, command) => {
    return `Enviar/Responder imagen con título ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Enviar/responder video/audio que desea usar como audio con subtítulos ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Enviar/responder video/audio que desea convertir a MP3 con subtítulos ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Responder video/audio que desea ser VN con subtítulos ${prefix + command}`
}
exports.NoQouted = () => {
    return `El mensaje al que respondió no contiene una respuesta`
}
exports.SetGcName = (prefix, command) => {
    return `Enviar comando ${prefix + command} *texto*`
}
exports.SetPpGc = (prefix, command) => {
    return `Enviar/Responder imagen con título ${prefix + command}`
}
exports.JoinGc = () => {
    return `Introduce el enlace del grupo!`
}
exports.MauKick = () => {
    return `Envía el número objetivo/etiqueta/respuesta que quieres patear !`
}
exports.MauAdd = () => {
    return `¡Envíe el número objetivo/etiqueta/respuesta que desea agregar!`
}
exports.NakPm= () => {
    return `¡Envíe el número objetivo/etiqueta/respuesta que desea promocionar!`
}
exports.NakDm = () => {
    return `¡Envíe el número objetivo/etiqueta/respuesta que desea degradar!`
}
exports.Family = () => {
    return `¡Esta pregunta no ha terminado!`
}
exports.NoWm = (prefix, command) => {
    return `Enviar comando ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif convertido con éxito a\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Enviar comando ${prefix + command} *texto*\n\nEjemplo : ${prefix + command} Robot de Whatsapp`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Enviar comando ${prefix + command} *texto 1|texto 2*\n\nEjemplo : ${prefix + command} WhatsApp|bot`
}
exports.OffNsfw = () => {
    return `Fitur nsfw belum di aktifkan`
}
exports.CoverBanLol = (prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|heroes\nEjemplo: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*Los héroes que ingresaste están equivocados*\n\n_Aquí hay una lista de los héroes correctos, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|style\n Ejemplo: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*El estilo que ingresaste es incorrecto*\n\n_Aquí hay una lista de los estilos correctos, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|color\nEjemplo: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*El color que ingresaste es incorrecto*\n\n_Aquí hay una lista de los colores correctos, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|style\nEjemplos de uso: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|heroes\nEjemplos de uso: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|${style}\nEjemplos de uso: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Ejemplo: ${g + h} ${a}|${b}|${c}\nEjemplos de uso: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} lo que ingresaste esta mal*\n\n_Aquí hay una lista ${style2} Así es, total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style, style2 = "query") => {
    return `Enviar pedidos: \n${prefix + command} ${style2}\n\nEjemplos de uso:\n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Ejemplo : ${prefix + command} ${juz}\nEjemplos de uso: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Ejemplo : ${prefix + command} ${surah}|${ayat}\nEjemplos de uso: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Respuesta incorrecta`
}

exports.JwbTrue = (tebak, exp) => {
return`🎮 ${tebak} 🎮\n\nRespuesta correcta 🎉\n+${exp} XP`
}
exports.TbGam = () => {
    return `Adivina la foto`
}
exports.TbKa = () => {
    return `Adivina la palabra`
}
exports.TbBe = () => {
    return `Adivina la bandera`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Organizar palabras`
}
exports.TbAt = () => {
    return `Adivina la frase`
}
exports.TbSi = () => {
    return `Adivina quién`
}
exports.Tbte = () => {
    return `Rompecabezas`
}
exports.TbEn = () => {
    return `Adivina el Distrito`
}
exports.TbKi = () => {
    return `Supongo que la química`
}
exports.TbLi = () => {
    return `Adivina la letra`
}
exports.TbKan = () => {
    return `Adivinanzas`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Responde las siguientes preguntas :*\n${soal}\n\nHay *${jawaban}* Responder ${find}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} tiene afk con razon ${afk ? ': ' + afk : 'Nada'}`
}

exports.TbGambar = (desk, time, exp) => {
    return `Por favor responda la pregunta anterior\n\nDescripción : ${desk}\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbGambar_ = (jawaban) => {
    return `Tiempo de espera\nRespuesta:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Tiempo de espera\nRespuesta:  ${jawaban}}\nDescripción : ${desk}`
}
exports.TbKata = (soal, time, exp) => {
    return `Por favor, conteste a las siguientes preguntas\n\n${soal}\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbBendera = (time, exp) => {
    return `Por favor responda la pregunta anterior\n\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbKabupaten = (time, exp) => {
    return `La imagen de arriba es una imagen del distrito.?\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbKimia = (soal, time, exp) => {
    return `que significa el simbolo : *${soal}*?\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbLirik = (soal, time, exp) => {
    return `esta es la letra de la cancion? : *${soal}*?\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbSusun = (soal, tipe, time, exp) => {
    return `*Responde las siguientes preguntas :*\nPregunta : ${soal}\nEscribe : ${tipe}\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbMath = (modes, prefix, command) => {
    return `Modo: ${modes}\nEjemplos de uso: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*¿Cuál es el resultado de: ${soal}*?\n\nTiempo: ${time} segundo`
}
exports.TbJail = (prefix, command) => {
    return `Enviar/responder foto/pegatina con leyenda ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Enviar comando ${prefix + command} *user* *repo* *branch*\n\nEjemplos de uso: ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Introduzca su nombre de usuario`
}
exports.Tomp4 = (prefix, command) => {
    return `Responder pegatina gif con subtítulo ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Enviar/Responder medios con subtítulos ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Enviar/Responder foto con leyenda ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Enviar/Responder foto con leyenda ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Enviar difusión a ${anu} ${chat}\nSe acabó el tiempo ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Pegatina de respuesta con subtítulo ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Enviar respuesta ${video} con subtítulo ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Ejemplo :

1. Enviar pedidos ${prefix + command} *Código de lenguaje* *texto*
	• Ejemplo : ${prefix + command} id Hola
2. Reply chat dengan caption ${prefix + command} *Código de lenguaje*
	• Ejemplo : ${prefix + command} id Hola
Lista de idiomas admitidos : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `La clave no puede ser la misma que el bot de función/comando`
}
exports.Addlist_ = (prefix, command) => {
    return `Úsalo de una manera ${prefix + command} *key|response*\n\n_Ejemplo_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `Lista de respuesta con clave : *${arg}* ya en este grupo.`
}
exports.AddlistDone = (arg) => {
    return `Establecer correctamente el mensaje de la lista con la clave : *${arg}*\n\nNota: Espere unos minutos si la lista no cambia`
}
exports.Dellist = () => {
    return `No hay lista de mensajes en la base de datos.`
}
exports.Dellist_  = (prefix, command) => {
    return `Úsalo de una manera ${prefix + command} *key*\n\n_Ejemplo_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `Lista de respuesta con clave *${key}* no está en la base de datos!`
}
exports.DellistDone = (key) => {
    return `Eliminar correctamente el mensaje de la lista con la clave *${key}*`
}
exports.ListUp = (key) => {
    return `perdon por la llave *${key}* no registrado en este grupo`
}
exports.UpList = (key) => {
    return `Actualizar correctamente el mensaje de la lista con la clave : *${key}*\n\nNota: Espere unos minutos si la lista no cambia`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hola ${pushname} Bienvenido al chat anónimo\n\nEscribe ${prefix}start para encontrar a sus amigos de chat, o puede presionar el botón Buscar a continuación`
}
exports.Anon = () => {
    return `Buscar chat de amigos`
}
exports.StopAnon = (prefix) => {
    return `No estás en una sesión anónima\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonNew = () => {
    return `Encontrar nuevos amigos`
}
exports.AnonDahStop = (prefix) => {
    return `✅ Chat detenido con éxito\n${prefix}start -- _cari pasangan baru_`
}
exports.StopAnonByFren = (prefix) => {
    return `⚠️ Esta sesión de chat ha sido cancelada por su amigo de chat\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonOn = (prefix) => {
    return `⚠️ ¡Aún estás en una sesión de chat con un compañero!\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonFind = (prefix) => {
    return `_pareja encontrada 🐼_\n${prefix}skip -- _buscando un nuevo socio_\n${prefix}stop -- _detener este diálogo_`
}
exports.AnonSearch = (prefix) => {
    return `🔎 Por favor espera buscando amigos de chat\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan percarian ini_`
}
exports.NoAnon = (prefix) => {
    return `⚠️ Nunca has iniciado un chat.!\n${prefix}start -- _cari pasangan baru_`
}
exports.NoAudRep = (prefix, command) => {
    return `Responda al audio que desea cambiar con un título *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `Ejemplo :\n${prefix + command} 62938828728992 \no\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `⚠️ Lo sentimos, su número ha sido prohibido por el propietario\n\ndueño del bot 👇\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `respuesta ${t} con subtítulo ${prefix + command} texto\n\nEjemplo : ${prefix + command} bot`
}
exports.AllFitur = () => {
    return `\n_Todas las características de los bots_`
}
exports.InfoMenu = () => {
    return `\n_Buscando la información más reciente a través de bot_`
}
exports.KhususOwn = () => {
    return `\n_Características especiales del bot propietario_`
}
exports.DataBor = () => {
    return `\n_Almacenar algo en la base de datos del bot_`
}
exports.MenuGc = () => {
    return `\n_Muestra características específicas del grupo_`
}
exports.MenuAni = () => {
    return `\n_Buscando fotos de anime al azar_`
}
exports.TagMem = () => {
    return `\n_Miembro del grupo de etiquetas_`
}
exports.StalkOrk = () => {
    return `\n_Puntos de las personas en las redes sociales_`
}
exports.Hoja = () => {
    return `\n_Buscando algo sin importancia_`
}
exports.CovertWi = () => {
    return `\n_Convertir algo con bot_`
}
exports.AnuFoto = () => {
    return `\n_Cambia la imagen para que sea más interesante._`
}
exports.HajuStik = () => {
    return `\n_Crea pegatinas únicas_`
}
exports.EloDown= () => {
    return `\n_Mostrar función de descarga_`
}
exports.StikerWibu = () => {
    return `\n_pegatinas de anime al azar_`
}
exports.ImageDewasa = () => {
    return `\n_Anime de imagen aleatoria 18+_`
}
exports.MakeLogo = () => {
    return `\n_Para crear un logo usando un bot_`
}
exports.oterMenu = () => {
    return `\n_Más menú_`
}
exports.GameBot = () => {
    return `\n_Funciones para jugar con bots_`
}
exports.RandRik = () => {
    return `\n_Videos aleatorios de tiktok_`
}
exports.RandCew = () => {
    return `\n_fotos al azar de chicas hermosas_`
}
exports.RamalOi = () => {
    return `\n_pronóstico de hoy_`
}
exports.TeleStik= () => {
    return `\n_Etiqueta aleatoria de Telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Crea logotipos geniales con bots_`
}
exports.SoundNih= () => {
    return `\n_Sonido aleatorio_`
}
exports.KanLogoLagi = () => {
    return `\n_Haz un logo atractivo_`
}
exports.TobatBro = () => {
    return `\n_características islámicas_`
}
exports.MauJualan = () => {
    return `\n_Funciones para vender_`
}
exports.Maustorage = () => {
    return `\n_Fcaracterísticas para almacenar pegatinas, audio, fotos y videos_`
}
exports.MauChanger = () => {
    return `\n_Función para cambiar el sonido de audio/vn_`
}
exports.GadaChat = () => {
    return `\n_Funciones para chat aleatorio_`
}
exports.SumberBot = () => {
    return `\n_Fuente de este script de bot_`
}
exports.Tqnya = () => {
    return `\n_Quién contribuyó a este bot_`
}
exports.SetAh = () => {
    return `¿Quieres un menú fijo? ?`
}
exports.KickAh = (gc) => {
    return `*Grupo antienlace detectado*\n\nSerás eliminado del grupo. ${gc}`
    }
    exports.GjdKick = () => {
    return `Parece que enviaste el enlace de este grupo, no serás expulsado`
    }
/////////

/////////
exports.private = () =>{
	return`La función solo se puede usar en el chat privado.`
	}
exports.wait = () => {
    return `⏳ Por favor, espere un momento`
}
exports.ok = () => {
    return `✅ hecho.`
}

exports.err = () => {
    return `⚠️ Características de error moderado`
}
exports.erorLink = () => {
    return `⚠️ el enlace es un error`
}
exports.media = () => {
    return `Seleccione los medios que desea descargar`
}
exports.replyImg = (prefix, command) => {
    return `Enviar/Responder foto con leyenda ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Formato incorrecto Por favor verifique cómo usar en *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Por favor ingrese el mensaje que desea transmitir!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Dominio *${cmd}* no registrado en *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Este comando es para el dueño`
}

exports.doneOwner = () => {
    return `✅  ️Está hecho, Propietario~`
}

exports.groupOnly = () => {
    return `👥  ¡Este comando solo se puede usar en grupos!`
}

exports.adminOnly = () => {
    return `🙅  ¡Este comando solo puede ser utilizado por administradores de grupo!`
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
    return `¡Haz que el bot sea administrador primero! 🙏`
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
	return`Hola hermano ${pushname} 👋 seguro ${salam} , 
yo ${botname}, este bot es Whatsapp Multi-Device Beta.
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
│○ !public
│○ !del
│○ !pppanjang
│○ !setpppanjang
╰❒ !setppbot

╭─❒ 「 Store Menu 」
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
│○ !mlstalk
│○ !ffstalk
│○ !igstalk 
│○ !ghstalk 
╰❒ !ytstalk


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
│○ !gitclone
│○ !gitrepo
│○ !mediafire 
│○ !nhentaipdf
╰❒ !twitter

╭─❒ 「 Primbon 」
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
│○ !translate código_idioma
│○ !tts código_idioma
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
*── 「 NORMAS AND FAQ 」 ──*

1. No envíe spam a los bots. 🙅
2. no llames al bot. ☎️
3. No compares bots 👍

🗯️ Bot no o lento para responder ?
➡️ Puede verse afectado por la red, la señal, prohibido por Whatsapp y algunas razones.

🗯️ ¿Dónde puedo obtener el script de este bot?
➡️ Puede obtener este script en YouTube ZEEONE OFC

🗯️ ¿Puedo agregar al grupo?
➡️ Para eso depende del propietario del bot.

🗯️ ¿Cuál es el prefix?
➡️ Este bot usa prefix múltiple y puedes usarlo sin prefix

Si entiende las reglas, por favor escriba *${prefix}menu* ¡para comenzar!

️ Todas las políticas y condiciones de los bots están sujetas a cambios en cualquier momento 

Gracias! 
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
Recode : https://s.id/YouTube-Zeeoneofc
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hola hermano ☺️ 
Puedes ayudarme a mantener este bot actualizado mediante una donación

Cualquier cantidad de su donación significará mucho 👍

Gracias!

Persona de contacto Titular:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Robots de información 」 
│○ !owner
│○ !rules
│○ !sc
│○ !ping
│○ !runtime
│○ !botstatus
╰❒ !donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 dueño 」 
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
	return`╭─❒ 「 bases de datos 」 
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
	return`╭─❒ 「 Grupo 」 
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
│○ !add [62***]
│○ !kick @tag
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
	return`╭─❒ 「 animado 」 
│○ !quotesanime
│○ !anime 
│○ !animeinfo
│○ !manga 
╰❒ !character 
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 etiquetas 」 
│○ !stickertag
│○ !videotag 
│○ !vntag 
╰❒ !imagetag 
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 acecho 」 
│○ !mlstalk
│○ !ffstalk
│○ !igstalk 
│○ !ghstalk 
╰❒ !ytstalk
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Buscar 」 
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
	return`╭─❒ 「 Convertidores 」 
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
	return`╭─❒ 「 Efectos de imagen 」 
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
	return`╭─❒ 「 Efectos de pegatinas 」 
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
return`╭─❒ 「 Descargas 」 
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
	return`╭─❒ 「 Animé aleatorio 」
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
│○ !cuddle
│○ !feed
│○ !foxgirl
│○ !kemonomimi2
│○ !woof
│○ !holo2
│○ !hug
│○ !kiss
│○ !lizard
│○ !meowi
│○ !neko2
│○ !pat
│○ !poke
│○ !slap
│○ !tickle
│○ !baka
│○ !smug
│○ !neko-sfw
│○ !hentai
│○ !hentai-gif
│○ !spank
│○ !blowjob
│○ !cumarts
│○ !eroyuri
│○ !eroneko
│○ !erokemonomimi
│○ !erokitsune
│○ !ero
│○ !feet
│○ !erofeet
│○ !feetgif
│○ !femdom
│○ !futanari
│○ !hentai
│○ !holoero
│○ !holo
│○ !keta
│○ !kitsune
│○ !kemonomimi
│○ !pussyart
│○ !pussywankgif
│○ !girl-solo
│○ !girl-solo-gif
│○ !tits
│○ !trap
│○ !yuri
│○ !avatar2
│○ !anal
│○ !bj
│○ !boobs
│○ !classic
│○ !cumsluts
│○ !kuni
│○ !lesbian
│○ !neko
│○ !neko-gif
│○ !ahegao
│○ !bdsm
│○ !cuckold
│○ !cum
│○ !foot
│○ !gangbang
│○ !glasses
│○ !jahy
│○ !masturbation
│○ !nsfw-neko
│○ !orgy
│○ !panties
│○ !tentacles
│○ !thighs
╰❒ !zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Menú Textpro 」
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
return`╭─❒ 「 Otros 」
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
return`╭─❒ 「 Menú Juegos 」
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
return`╭─❒ 「 Ingesta de Menú 」
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
return`╭─❒ 「 Chica al azar 」
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
	return`╭─❒ 「 Gracias 」 
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
	return`╭─❒ 「 Horóscopo 」
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
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Pegatinas de telegramas 」
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
	return`╭─❒ 「 Efoto360 menús 」
│○ !youtubegold 
│○ !youtubesilver 
│○ !facebookgold 
│○ !facebooksilver 
│○ !instagramgold 
│○ !instagramsilver 
│○ !twittergold 
│○ !twittersilver 
│○ !retrotext 
│○ !halloweenbats 
│○ !halloween 
│○ !cardhalloween 
│○ !birthdaycake 
│○ !thundertext 
│○ !icetext 
│○ !milkcake 
│○ !snowontext 
│○ !metalstar 
│○ !dragonfire 
│○ !zombie3d 
│○ !merrycard 
│○ !generalexam  
│○ !viettel 
│○ !embroider 
│○ !graffititext 
│○ !graffititext2 
│○ !graffititext3 
│○ !covergraffiti 
│○ !moderngold 
│○ !capercut 
│○ !lovecard 
│○ !heartflashlight 
│○ !heartcup 
│○ !sunglightshadow 
│○ !graffiti3d 
│○ !moderngoldsilver 
│○ !moderngold2 
│○ !moderngold3 
│○ !fabrictext 
│○ !masteryavatar 
│○ !messagecoffee 
│○ !announofwin 
│○ !writeblood 
│○ !horrorletter 
│○ !writehorror 
│○ !shirtclub 
│○ !angelwing 
│○ !christmasseason 
│○ !projectyasuo 
│○ !lovelycute 
│○ !womansday 
│○ !covergamepubg 
│○ !nameonheart 
│○ !funnyhalloween 
│○ !lightningpubg 
│○ !greetingcardvideo  
│○ !christmascard  
│○ !galaxybat 
│○ !writegalaxy 
│○ !starsnight 
│○ !noeltext 
│○ !textcakes 
│○ !pubgbirthday 
│○ !galaxywallpaper 
│○ !pubgglicthvideo  
│○ !pubgmascotlogo 
│○ !realembroidery 
│○ !vintagetelevision 
│○ !funnyanimations 
│○ !glowingtext 
│○ !textonglass 
│○ !cartoonstyle 
│○ !multicolor 
│○ !watercolor2 
│○ !textsky 
│○ !summerbeach 
│○ !1917text 
│○ !puppycute 
│○ !rosebirthday 
│○ !steellettering 
│○ !letterstext 
│○ !barcashirt 
│○ !premiercup 
│○ !stylepoligon 
│○ !lifebuoys 
╰❒ !juventusshirt `
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 logotipos de menú 」
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
	return`╭─❒ 「 Menú islámico 」
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
	return`╭─❒ 「 Anónimo 」
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
	return`╭─❒ 「 Menú Tienda 」
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
	return`╭─❒ 「 Menú de cambio de voz 」
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
	return`╭─❒ 「 Menú de almacenamiento 」
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
	return`╭─❒ 「 Juegos de rol 」
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
`
}

exports.photooxy = (prefix)=>{
	return`╭─❒ 「 Menú Fotooxi 」
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
return`╭─❒ 「 Menú de sonido 」
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
