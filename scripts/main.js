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

    console.log('view updated')

}

function handleHexagrams() {
    show('hexagram-results', 'hexagram-form')


    var birthdate = document.getElementById('hex_birthdate').value
    var genre = document.getElementById('hexagram_genre').value

    //data in scripts/functions.js
    var triagramaVital = infoTriVi(birthdate, genre)
    var triagramaNacimiento = infoTriNa(birthdate)
    var hexgramaVital = infoHexVi(birthdate, genre)
    var hexViIchin = infoHexViIchin(birthdate, genre)
    var hexagramaNacimiento = infoHexNa(birthdate)
    var hexNaIchin = infoHexNaIchin(birthdate)

}
