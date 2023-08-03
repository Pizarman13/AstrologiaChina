function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function handleKiaTse() {
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

    //? Update data in HTML
    document.getElementById('kiatse-results-anyo_ciclo').innerHTML = KiaTse_anyo
    document.getElementById('kiatse-results-anyo_tronco').innerHTML = datosKiaTse_anyo[0]
    document.getElementById('kiatse-results-anyo_rama').innerHTML = datosKiaTse_anyo[1]
    document.getElementById('kiatse-results-anyo_animal').innerHTML = datosKiaTse_anyo[2]

    document.getElementById('kiatse-results-mes_ciclo').innerHTML = KiaTse_mes
    document.getElementById('kiatse-results-mes_tronco').innerHTML = datosKiaTse_mes[0]
    document.getElementById('kiatse-results-mes_rama').innerHTML = datosKiaTse_mes[1]
    document.getElementById('kiatse-results-mes_animal').innerHTML = datosKiaTse_mes[2]

    document.getElementById('kiatse-results-dia_ciclo').innerHTML = KiaTse_dia
    //document.getElementById('kiatse-results-dia_tronco').innerHTML = datosKiaTse_dia[0]
    //document.getElementById('kiatse-results-dia_rama').innerHTML = datosKiaTse_dia[1]
    //document.getElementById('kiatse-results-dia_animal').innerHTML = datosKiaTse_dia[2]

    document.getElementById('kiatse-results-hora_ciclo').innerHTML = KiaTse_hora
    //document.getElementById('kiatse-results-hora_tronco').innerHTML = datosKiaTse_hora[0]
    //document.getElementById('kiatse-results-hora_rama').innerHTML = datosKiaTse_hora[1]
    //document.getElementById('kiatse-results-hora_animal').innerHTML = datosKiaTse_hora[2]

}

function handleHexagrams(session, type) {
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
        
        var path_trigrama_vital = 'img/trigramasVital/' + getTrigramaVital(birthdate, genre) + '.png'
        document.getElementById('hexagram-results-img-trigrama_vital').setAttribute('src', path_trigrama_vital)
        console.log('path_trigrama_vital: ' + path_trigrama_vital)
        
        var path_hexagrama_vital = 'img/hexagramaNacimiento/' + conversion[getHexagramaVital(birthdate, genre)] + '.png'
        document.getElementById('hexagram-results-img-hexagrama_vital').setAttribute('src', path_hexagrama_vital)
        console.log('path_hexagrama_vital: '+ path_hexagrama_vital)
    
    } catch (error) {console.error(error)}
    
}
