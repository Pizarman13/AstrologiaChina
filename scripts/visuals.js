function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function handleKiaTse() {
    show('kiatse-results', 'kiatse-form')

    var birthdate = document.getElementById('birthdate').value
    var birthtime = document.getElementById('birthtime').value

    //document.getElementById("otp").innerHTML = birthdate;

}