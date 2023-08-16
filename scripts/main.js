var kiatSe_metal = 0
var kiatSe_agua = 0
var kiatSe_madera = 0
var kiatSe_fuego = 0
var kiatSe_tierra = 0
var kiatSe_yin = 0
var kiatSe_yang = 0

function countOccurrences(inputString, wordToCount) {
    // Create a regular expression to match the wordToCount with word boundaries (\b)
    const regex = new RegExp(`\\b${wordToCount}\\b`, 'gi');
  
    // Use the match() function with the regex to find all occurrences of the word in the input string
    const matches = String(inputString).match(regex);
  
    // If no matches are found, return 0
    if (!matches) {
      return 0;
    }
  
    // Return the number of matches found
    return matches.length;
  }

function countRealms(text) {

    kiatSe_metal += countOccurrences(text, 'Metal');
    kiatSe_agua += countOccurrences(text, 'Agua')
    kiatSe_madera += countOccurrences(text, 'Madera')
    kiatSe_fuego += countOccurrences(text, 'Fuego')
    kiatSe_tierra += countOccurrences(text, 'Tierra')
    kiatSe_yin += countOccurrences(text, 'Yīn')
    kiatSe_yang += countOccurrences(text, 'Yáng')

    return text
}


function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function handleKiaTse() {
    console.warn('Development mode Enabled')
    try {
        _handleKiaTse()
    }
    catch (ex) {
        console.error(ex)
    }
}

function _handleKiaTse() {
    kiatSe_metal = 0
    kiatSe_agua = 0
    kiatSe_madera = 0
    kiatSe_fuego = 0
    kiatSe_tierra = 0
    kiatSe_yin = 0
    kiatSe_yang = 0


    show('kiatse-results', 'kiatse-form')

    //? Extract data from HTML
    var birthdate = document.getElementById('birthdate').value;
    var birthtime = document.getElementById('birthtime').value;
    
    var timeZone = document.getElementById('paises').value;
    var GMT = '+0' //!ADD IT IN data.js

    var birthdatetime = new Date(birthdate + ' ' + birthtime + ' GMT' + GMT);
    var timeZoneStr = franjasHorarias[timeZone]
    birthdatetime = convertTZ(birthdatetime, timeZoneStr)

    //? Process data

    var KiaTse_anyo = getRefAnyo(birthdatetime)
    var KiaTse_mes = getRefMes(birthdatetime) //! REQUIERE CORRECCION
    var KiaTse_dia = getRefDia(birthdatetime, timeZone) //!REQUIERE CORRECCION
    var KiaTse_hora = getRefHora(birthdatetime) //!Comprobar

    var datosKiaTse_anyo = datosTabla(KiaTse_anyo)
    var datosKiaTse_mes = datosTabla(KiaTse_mes)
    var datosKiaTse_dia = datosTabla(KiaTse_dia)
    var datosKiaTse_hora = datosTabla(KiaTse_hora)

    //? Update data in HTML
    document.getElementById('kiatse-results-anyo_ciclo').innerHTML = countRealms(KiaTse_anyo + '<br>' + ciclo[KiaTse_anyo])
    document.getElementById('kiatse-results-anyo_leyenda').innerHTML = countRealms(leyenda[KiaTse_anyo])
    document.getElementById('kiatse-results-anyo_tronco').innerHTML = countRealms(datosKiaTse_anyo[0])
    document.getElementById('kiatse-results-anyo_rama').innerHTML = countRealms(datosKiaTse_anyo[1])
    document.getElementById('kiatse-results-anyo_animal').innerHTML = countRealms(datosKiaTse_anyo[2])

    document.getElementById('kiatse-results-mes_ciclo').innerHTML = countRealms(KiaTse_mes + '<br>' + ciclo[KiaTse_mes])
    document.getElementById('kiatse-results-mes_leyenda').innerHTML = countRealms(leyenda[KiaTse_mes])
    document.getElementById('kiatse-results-mes_tronco').innerHTML = countRealms(datosKiaTse_mes[0])
    document.getElementById('kiatse-results-mes_rama').innerHTML = countRealms(datosKiaTse_mes[1])
    document.getElementById('kiatse-results-mes_animal').innerHTML = countRealms(datosKiaTse_mes[2])
    
    console.log('KiaTse_dia: ' + KiaTse_dia)
    document.getElementById('kiatse-results-dia_ciclo').innerHTML = countRealms(KiaTse_dia + '<br>' + ciclo[KiaTse_dia])
    document.getElementById('kiatse-results-dia_leyenda').innerHTML = countRealms(leyenda[KiaTse_dia])
    document.getElementById('kiatse-results-dia_tronco').innerHTML = countRealms(datosKiaTse_dia[0])
    document.getElementById('kiatse-results-dia_rama').innerHTML = countRealms(datosKiaTse_dia[1])
    document.getElementById('kiatse-results-dia_animal').innerHTML = countRealms(datosKiaTse_dia[2])

    document.getElementById('kiatse-results-hora_ciclo').innerHTML = countRealms(KiaTse_hora + '<br>' + ciclo[KiaTse_hora])
    document.getElementById('kiatse-results-hora_leyenda').innerHTML = countRealms(leyenda[KiaTse_hora])
    document.getElementById('kiatse-results-hora_tronco').innerHTML = countRealms(datosKiaTse_hora[0])
    document.getElementById('kiatse-results-hora_rama').innerHTML = countRealms(datosKiaTse_hora[1])
    document.getElementById('kiatse-results-hora_animal').innerHTML = countRealms(datosKiaTse_hora[2])

    console.log('Metal: ' + kiatSe_metal)
    console.log('Agua: ' + kiatSe_agua)
    console.log('Madera: ' + kiatSe_madera)
    console.log('Fuego: ' + kiatSe_fuego)
    console.log('Tierra: ' + kiatSe_tierra)
    console.log('Yin: ' + kiatSe_yin)
    console.log('Yang: ' + kiatSe_yang)

}

function handleHexagrams(session, type) {
    console.warn('Development mode Enabled')
    try {
        _handleHexagrams(session, type)
    }
    catch (ex) {
        console.error(ex)
    }
}

function _handleHexagrams(session, type) {
    
    //? Extract data from HTML
    var birthdate = document.getElementById('hex_birthdate').value
    var genre = document.getElementById('hexagram_genre').value
    console.log('data colected from html')
    //? Process data
    try {

        if (type == 'birth') {
            console.log('birth')

            var trigramaNacimiento = infoTriNa(birthdate)
            //console.log('trigramaNacimiento: ' + trigramaNacimiento)
            var hexagramaNacimiento = infoHexNa(birthdate)
            //console.log('hexagramaNacimiento: ' + hexagramaNacimiento)
            var hexNaIchin = infoHexNaIchin(birthdate)
            //console.log('hexNaIchin: ' + hexNaIchin)

            show('hexagram-results-birth', 'hexagram-form')
        }
        else if (type == 'vital') {
            console.log('vital')

            var hexViIchin = infoHexViIchin(birthdate, genre)
            //console.log('hexViIchin: ' + hexViIchin)
            var trigramaVital = infoTriVi(birthdate, genre)
            //console.log('trigramaVital: ' + trigramaVital)
            
            var hexgramaVital = infoHexVi(birthdate, genre)
            //console.log('hexgramaVital: ' + hexgramaVital)

            show('hexagram-results-vital', 'hexagram-form')
        }
        else {
            console.error('Cant load page')
        }

        //? Update data in HTML
        //document.getElementById('kiatse-results-anyo_ciclo').innerHTML = KiaTse_anyo
    
        document.getElementById('hexagram-results-trigrama_nacimiento').innerHTML = trigramaNacimiento
        document.getElementById('hexagram-results-hexagrama_nacimiento_oracular').innerHTML = hexagramaNacimiento
        document.getElementById('hexagram-results-hexagrama_nacimiento_ichin').innerHTML = hexNaIchin
        document.getElementById('hexagram-results-trigrama_vital').innerHTML = trigramaVital
        document.getElementById('hexagram-results-hexagrama_vital_oracular').innerHTML = hexgramaVital
        document.getElementById('hexagram-results-hexagrama_vital_ichin').innerHTML = hexViIchin
    
        var path_trigrama_nacimiento = 'img/trigramasNacimiento/' + getTrigramaNacimiento(birthdate) + '.png'
        document.getElementById('hexagram-results-img-trigrama_nacimiento').setAttribute('src', path_trigrama_nacimiento)
        console.log('path_trigrama_nacimiento: '+ path_trigrama_nacimiento)
        
        var path_hexagrama_nacimiento = 'img/hexagramaNacimiento/' + getHexagramaNacimiento(birthdate) + '.png'
        document.getElementById('hexagram-results-img-hexagrama_nacimiento').setAttribute('src', path_hexagrama_nacimiento)
        console.log('path_hexagrama_nacimiento: path_hexagrama_nacimiento' + path_hexagrama_nacimiento)

        var path_hexagrama_nacimiento_ichin = 'imgHexagrama/hex_' + getHexagramaNacimiento(birthdate) + '.png'
        document.getElementById('hexagram-results-img-hexagrama_nacimiento_ichin').setAttribute('src', path_hexagrama_nacimiento_ichin)
        console.log('path_hexagrama_nacimiento_ichin: path_hexagrama_nacimiento_ichin' + path_hexagrama_nacimiento_ichin)
        
        var path_trigrama_vital = 'img/trigramasVital/' + getTrigramaVital(birthdate, genre) + '.png'
        document.getElementById('hexagram-results-img-trigrama_vital').setAttribute('src', path_trigrama_vital)
        console.log('path_trigrama_vital: ' + path_trigrama_vital)
        
        var path_hexagrama_vital = 'img/hexagramaNacimiento/' + conversion[getHexagramaVital(birthdate, genre)] + '.png'
        document.getElementById('hexagram-results-img-hexagrama_vital').setAttribute('src', path_hexagrama_vital)
        console.log('path_hexagrama_vital: '+ path_hexagrama_vital)

        var path_hexagrama_vital_ichin = 'img/Hexagramas/hex_' + conversion[getHexagramaVital(birthdate, genre)] + '.png'
        document.getElementById('hexagram-results-img-hexagrama_vital_ichin').setAttribute('src', path_hexagrama_vital_ichin)
        console.log('path_hexagrama_vital_ichin: '+ path_hexagrama_vital_ichin)
    
    } catch (error) {console.error(error)}
    
}
