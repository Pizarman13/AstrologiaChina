function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function handleKiaTse() {
    show('kiatse-results', 'kiatse-form')

    var birthdate = document.getElementById('birthdate').value
    var birthtime = document.getElementById('birthtime').value
    var timeZone = document.getElementById('paises').value

    var animal = getAnimal(birthdate)
    var anyoKiaTse = numConAno(birthdate)
    var mesKiaTse = numConMes(birthdate)
    var diaKiaTse = numConDia(birthdate, birthtime)
    var horaKiaTse = numConHora(birthdate, birthtime, timeZone)

    alert(diaKiaTse)

    var datosKiaTse_anyo = datosTabla(anyoKiaTse)
    var datosKiaTse_mes = datosTabla(mesKiaTse)
    var datosKiaTse_dia = datosTabla(diaKiaTse)
    //var datosKiaTse_hora = datosTabla(horaKiaTse)

    //document.getElementById('kiatse-results-anyo_ciclo').innerHTML = anyoKiaTse
    //document.getElementById('kiatse-results-anyo_tronco').innerHTML = datosKiaTse_anyo[0]
    //document.getElementById('kiatse-results-anyo_rama').innerHTML = datosKiaTse_anyo[1]
    //document.getElementById('kiatse-results-anyo_animal').innerHTML = datosKiaTse_anyo[2]

    //document.getElementById('kiatse-results-mes_ciclo').innerHTML = mesKiaTse
    //document.getElementById('kiatse-results-mes_tronco').innerHTML = datosKiaTse_mes[0]
    //document.getElementById('kiatse-results-mes_rama').innerHTML = datosKiaTse_mes[1]
    //document.getElementById('kiatse-results-mes_animal').innerHTML = datosKiaTse_mes[2]

    //document.getElementById('kiatse-results-dia_ciclo').innerHTML = diaKiaTse
    //document.getElementById('kiatse-results-dia_tronco').innerHTML = datosKiaTse_dia[0]
    //document.getElementById('kiatse-results-dia_rama').innerHTML = datosKiaTse_dia[1]
    //document.getElementById('kiatse-results-dia_animal').innerHTML = datosKiaTse_dia[2]

    //document.getElementById('kiatse-results-hora_ciclo').innerHTML = horaKiaTse
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
