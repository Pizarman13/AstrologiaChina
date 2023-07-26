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

    //document.getElementById("otp").innerHTML = birthdate;
    var animal = getAnimal(birthdate)
    var anoKiaTse = numConAno(birthdate)
    var mesKiatse = numConMes(birthdate)
    var diaKiaTse = numConDia(birthdate)
    var horaKiaTse = numConHora(birthdate, birthtime, timeZone)

}

function handleHexagrams() {
    var birthdate = document.getElementById('hex_birthdate').value
    var genre = document.getElementById('hexagram_genre').value

    //data in scripts/functions.js
    var triagramaVital = getTrigramaVital(birthdate, genre)
    var triagramaNacimiento = getTrigramaNacimiento(birthdate)
    var hexgramaVital = infoHexVi(birthdate, genre)
    var hexViIchin = infoHexViIchin(birthdate, genre)
    var hexagramaNacimiento = infoHexNa(birthdate)
    var hexNa

}
