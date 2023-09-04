var kiatSe_metal = 0
var kiatSe_agua = 0
var kiatSe_madera = 0
var kiatSe_fuego = 0
var kiatSe_tierra = 0
var kiatSe_yin = 0
var kiatSe_yang = 0



function page(page) {
    //? Turn all pages off
    document.getElementById('KiaTse-form').classList.remove("active");
    document.getElementById('KiaTse-data').classList.remove("active");
    document.getElementById('Hexagram-form').classList.remove("active");
    document.getElementById('Hexagram-dataN').classList.remove("active");
    document.getElementById('Hexagram-dataV').classList.remove("active");
    
    //? Data Colection pages
    if (page == 'KiaTse-form') {
        updateNavBTN('nav-btn-Hexagrams', false);
        updateNavBTN('nav-btn-KiaTse', true);

        show('KiaTse-form','Hexagram-form');
    }
    else if (page == 'Hexagrams-form') {
        updateNavBTN('nav-btn-KiaTse', false);
        updateNavBTN('nav-btn-Hexagrams', true);

        show('Hexagram-form','KiaTse-form');
    }
    //? Data Display pages
    else if (page == 'KiaTse-data'){
        show('KiaTse-data','KiaTse-form');
    }
    else if (page == 'Hexagram-dataN'){
        show('Hexagram-dataN','Hexagram-form');
    }
    else if (page == 'Hexagram-dataV'){
        show('Hexagram-dataV','Hexagram-form');
    }
    //! ERR
    else {
        console.error('Page not indexed')
    }
    
    console.log('Page changed to: ' + page)
    return false;
    
}

function updateNavBTN(element, status) {
    
    if (status) {
        document.getElementById(element).classList.add("active");
    }
    else {
        document.getElementById(element).classList.remove("active");
    }
    
    return false;
}

function show(shown, hidden) {
    document.getElementById(shown).classList.add("active");
    document.getElementById(hidden).classList.remove("active");

    return false;
}

//! TEMPORAL
function handleKiaTse() {
    console.warn('Development mode Enabled')
    try {
        _handleKiaTse()
    }
    catch (ex) {
        console.error(ex)
    }
}

async function _handleKiaTse() {
    //? Reset Counters
    kiatSe_metal = 0
    kiatSe_agua = 0
    kiatSe_madera = 0
    kiatSe_fuego = 0
    kiatSe_tierra = 0
    kiatSe_yin = 0
    kiatSe_yang = 0

    //? Load dataFiles
    ciclo = await readFile(`/data/KiaTse/ciclo.json`)
    leyenda = await readFile(`/data/KiaTse/leyenda.json`)
    
    //? Extract data from HTML
    var birthdate = document.getElementById('KiaTse_birthdate').value;
    var birthtime = document.getElementById('KiaTse_birthtime').value;
    
    var timeZone = document.getElementById('KiaTse_country').value;
    var GMT = franjasHorarias[timeZone]

    var birthdatetime = new Date(birthdate + ' ' + birthtime + ' GMT' + GMT);
    var timeZoneStr = franjasHorarias[timeZone]
    birthdatetime = convertTZ(birthdatetime, timeZoneStr)

    //? Process data

    var KiaTse_anyo = await getKiaTse_anyo(birthdatetime)
    var KiaTse_mes = await getKiaTse_mes(birthdatetime)
    var KiaTse_dia = await getKiaTse_dia(birthdatetime, timeZone)
    var KiaTse_hora = await getKiaTse_hora(birthdatetime)

    var datosKiaTse_anyo = await datosTabla(KiaTse_anyo)
    var datosKiaTse_mes = await datosTabla(KiaTse_mes)
    var datosKiaTse_dia = await datosTabla(KiaTse_dia)
    var datosKiaTse_hora = await datosTabla(KiaTse_hora)

    //? Update data in HTML
    document.getElementById('kiatse-results-anyo_ciclo').innerHTML = countRealms(KiaTse_anyo + ' ' + ciclo[KiaTse_anyo-1])
    document.getElementById('kiatse-results-anyo_leyenda').innerHTML = countRealms(leyenda[KiaTse_anyo-1])
    document.getElementById('kiatse-results-anyo_tronco_t').innerHTML = "Tronco: " + countRealms(datosKiaTse_anyo[0]['Tronco'])
    document.getElementById('kiatse-results-anyo_tronco_y').innerHTML = "Yin/Yang: " + countRealms(datosKiaTse_anyo[0]['Yin/Yang'])
    document.getElementById('kiatse-results-anyo_tronco_rm').innerHTML = "RM: " + countRealms(datosKiaTse_anyo[0]['Ciclo Normativo']['RM'])
    document.getElementById('kiatse-results-anyo_tronco_o').innerHTML = "Organo: " + countRealms(datosKiaTse_anyo[0]['Ciclo Normativo']['Organo'])
    document.getElementById('kiatse-results-anyo_tronco_e').innerHTML = "Energía: " + countRealms(datosKiaTse_anyo[0]['Ciclo Normativo']['Energía'])
    document.getElementById('kiatse-results-anyo_tronco_r').innerHTML = "RM: " + countRealms(datosKiaTse_anyo[0]['Ciclo Cósmico']['RM'])
    document.getElementById('kiatse-results-anyo_tronco_en').innerHTML = "Energía: " + countRealms(datosKiaTse_anyo[0]['Ciclo Cósmico']['Energía'])
    document.getElementById('kiatse-results-anyo_rama').innerHTML = "Rama: " + countRealms(datosKiaTse_anyo[1]['Rama'])
    document.getElementById('kiatse-results-anyo_rama_r').innerHTML = "RM: " + countRealms(datosKiaTse_anyo[1]['Nivel Terrestre']['RM'])
    document.getElementById('kiatse-results-anyo_rama_y').innerHTML = "Yin/Yang: " + countRealms(datosKiaTse_anyo[1]['Nivel Terrestre']['Yin/Yang'])
    document.getElementById('kiatse-results-anyo_rama_o').innerHTML = "Organo: " + countRealms(datosKiaTse_anyo[1]['Nivel Terrestre']['Organo'])
    document.getElementById('kiatse-results-anyo_rama_e').innerHTML = "Energía: " + countRealms(datosKiaTse_anyo[1]['Nivel Terrestre']['Energía'])
    document.getElementById('kiatse-results-anyo_rama_h').innerHTML = "Hora: " + countRealms(datosKiaTse_anyo[1]['Nivel Humano']['Hora'])
    document.getElementById('kiatse-results-anyo_rama_pe').innerHTML = "Pto. Estatico: " + countRealms(datosKiaTse_anyo[1]['Nivel Humano']['Pto. Estatico'])
    document.getElementById('kiatse-results-anyo_rama_or').innerHTML = "Organo: " + countRealms(datosKiaTse_anyo[1]['Nivel Humano']['Organo'])
    document.getElementById('kiatse-results-anyo_rama_en').innerHTML = "Energía: " + countRealms(datosKiaTse_anyo[1]['Nivel Humano']['Energía'])
    document.getElementById('kiatse-results-anyo_tronco_cu').innerHTML = "C. Unitario: " + countRealms(datosKiaTse_anyo[1]['Ciclo Cósmico']['C. Unitario'])
    document.getElementById('kiatse-results-anyo_tronco_org').innerHTML = "Organo: " + countRealms(datosKiaTse_anyo[1]['Ciclo Cósmico']['Organo'])
    document.getElementById('kiatse-results-anyo_tronco_ene').innerHTML = "Energía: " + countRealms(datosKiaTse_anyo[1]['Ciclo Cósmico']['Energía'])
    document.getElementById('kiatse-results-anyo_animal').innerHTML = countRealms(datosKiaTse_anyo[2])

    document.getElementById('kiatse-results-mes_ciclo').innerHTML = countRealms(KiaTse_mes + ' ' + ciclo[KiaTse_mes-1])
    document.getElementById('kiatse-results-mes_leyenda').innerHTML = countRealms(leyenda[KiaTse_mes-1])
    document.getElementById('kiatse-results-mes_tronco_t').innerHTML = "Tronco: " + countRealms(datosKiaTse_mes[0]['Tronco'])
    document.getElementById('kiatse-results-mes_tronco_y').innerHTML = "Yin/Yang: " + countRealms(datosKiaTse_mes[0]['Yin/Yang'])
    document.getElementById('kiatse-results-mes_tronco_rm').innerHTML = "RM: " + countRealms(datosKiaTse_mes[0]['Ciclo Normativo']['RM'])
    document.getElementById('kiatse-results-mes_tronco_o').innerHTML = "Organo: " + countRealms(datosKiaTse_mes[0]['Ciclo Normativo']['Organo'])
    document.getElementById('kiatse-results-mes_tronco_e').innerHTML = "Energía: " + countRealms(datosKiaTse_mes[0]['Ciclo Normativo']['Energía'])
    document.getElementById('kiatse-results-mes_tronco_r').innerHTML = "RM: " + countRealms(datosKiaTse_mes[0]['Ciclo Cósmico']['RM'])
    document.getElementById('kiatse-results-mes_tronco_en').innerHTML = "Energía: " + countRealms(datosKiaTse_mes[0]['Ciclo Cósmico']['Energía'])
    document.getElementById('kiatse-results-mes_rama').innerHTML = "Rama: " + countRealms(datosKiaTse_mes[1]['Rama'])
    document.getElementById('kiatse-results-mes_rama_r').innerHTML = "RM: " + countRealms(datosKiaTse_mes[1]['Nivel Terrestre']['RM'])
    document.getElementById('kiatse-results-mes_rama_y').innerHTML = "Yin/Yang: " + countRealms(datosKiaTse_mes[1]['Nivel Terrestre']['Yin/Yang'])
    document.getElementById('kiatse-results-mes_rama_o').innerHTML = "Organo: " + countRealms(datosKiaTse_mes[1]['Nivel Terrestre']['Organo'])
    document.getElementById('kiatse-results-mes_rama_e').innerHTML = "Energía: " + countRealms(datosKiaTse_mes[1]['Nivel Terrestre']['Energía'])
    document.getElementById('kiatse-results-mes_rama_h').innerHTML = "Hora: " + countRealms(datosKiaTse_mes[1]['Nivel Humano']['Hora'])
    document.getElementById('kiatse-results-mes_rama_pe').innerHTML = "Pto. Estatico: " + countRealms(datosKiaTse_mes[1]['Nivel Humano']['Pto. Estatico'])
    document.getElementById('kiatse-results-mes_rama_or').innerHTML = "Organo: " + countRealms(datosKiaTse_mes[1]['Nivel Humano']['Organo'])
    document.getElementById('kiatse-results-mes_rama_en').innerHTML = "Energía: " + countRealms(datosKiaTse_mes[1]['Nivel Humano']['Energía'])
    document.getElementById('kiatse-results-mes_tronco_cu').innerHTML = "C. Unitario: " + countRealms(datosKiaTse_mes[1]['Ciclo Cósmico']['C. Unitario'])
    document.getElementById('kiatse-results-mes_tronco_org').innerHTML = "Organo: " + countRealms(datosKiaTse_mes[1]['Ciclo Cósmico']['Organo'])
    document.getElementById('kiatse-results-mes_tronco_ene').innerHTML = "Energía: " + countRealms(datosKiaTse_mes[1]['Ciclo Cósmico']['Energía'])
    document.getElementById('kiatse-results-mes_animal').innerHTML = countRealms(datosKiaTse_mes[2])

    document.getElementById('kiatse-results-dia_ciclo').innerHTML = countRealms(KiaTse_dia + ' ' + ciclo[KiaTse_dia-1])
    document.getElementById('kiatse-results-dia_leyenda').innerHTML = countRealms(leyenda[KiaTse_dia-1])
    document.getElementById('kiatse-results-dia_tronco_t').innerHTML = "Tronco: " + countRealms(datosKiaTse_dia[0]['Tronco'])
    document.getElementById('kiatse-results-dia_tronco_y').innerHTML = "Yin/Yang: " + countRealms(datosKiaTse_dia[0]['Yin/Yang'])
    document.getElementById('kiatse-results-dia_tronco_rm').innerHTML = "RM: " + countRealms(datosKiaTse_dia[0]['Ciclo Normativo']['RM'])
    document.getElementById('kiatse-results-dia_tronco_o').innerHTML = "Organo: " + countRealms(datosKiaTse_dia[0]['Ciclo Normativo']['Organo'])
    document.getElementById('kiatse-results-dia_tronco_e').innerHTML = "Energía: " + countRealms(datosKiaTse_dia[0]['Ciclo Normativo']['Energía'])
    document.getElementById('kiatse-results-dia_tronco_r').innerHTML = "RM: " + countRealms(datosKiaTse_dia[0]['Ciclo Cósmico']['RM'])
    document.getElementById('kiatse-results-dia_tronco_en').innerHTML = "Energía: " + countRealms(datosKiaTse_dia[0]['Ciclo Cósmico']['Energía'])
    document.getElementById('kiatse-results-dia_rama').innerHTML = "Rama: " + countRealms(datosKiaTse_dia[1]['Rama'])
    document.getElementById('kiatse-results-dia_rama_r').innerHTML = "RM: " + countRealms(datosKiaTse_dia[1]['Nivel Terrestre']['RM'])
    document.getElementById('kiatse-results-dia_rama_y').innerHTML = "Yin/Yang: " + countRealms(datosKiaTse_dia[1]['Nivel Terrestre']['Yin/Yang'])
    document.getElementById('kiatse-results-dia_rama_o').innerHTML = "Organo: " + countRealms(datosKiaTse_dia[1]['Nivel Terrestre']['Organo'])
    document.getElementById('kiatse-results-dia_rama_e').innerHTML = "Energía: " + countRealms(datosKiaTse_dia[1]['Nivel Terrestre']['Energía'])
    document.getElementById('kiatse-results-dia_rama_h').innerHTML = "Hora: " + countRealms(datosKiaTse_dia[1]['Nivel Humano']['Hora'])
    document.getElementById('kiatse-results-dia_rama_pe').innerHTML = "Pto. Estatico: " + countRealms(datosKiaTse_dia[1]['Nivel Humano']['Pto. Estatico'])
    document.getElementById('kiatse-results-dia_rama_or').innerHTML = "Organo: " + countRealms(datosKiaTse_dia[1]['Nivel Humano']['Organo'])
    document.getElementById('kiatse-results-dia_rama_en').innerHTML = "Energía: " + countRealms(datosKiaTse_dia[1]['Nivel Humano']['Energía'])
    document.getElementById('kiatse-results-dia_tronco_cu').innerHTML = "C. Unitario: " + countRealms(datosKiaTse_dia[1]['Ciclo Cósmico']['C. Unitario'])
    document.getElementById('kiatse-results-dia_tronco_org').innerHTML = "Organo: " + countRealms(datosKiaTse_dia[1]['Ciclo Cósmico']['Organo'])
    document.getElementById('kiatse-results-dia_tronco_ene').innerHTML = "Energía: " + countRealms(datosKiaTse_dia[1]['Ciclo Cósmico']['Energía'])
    document.getElementById('kiatse-results-dia_animal').innerHTML = countRealms(datosKiaTse_dia[2])

    document.getElementById('kiatse-results-hora_ciclo').innerHTML = countRealms(KiaTse_hora + ' ' + ciclo[KiaTse_hora-1])
    document.getElementById('kiatse-results-hora_leyenda').innerHTML = countRealms(leyenda[KiaTse_hora-1])
    document.getElementById('kiatse-results-hora_tronco_t').innerHTML = "Tronco: " + countRealms(datosKiaTse_hora[0]['Tronco'])
    document.getElementById('kiatse-results-hora_tronco_y').innerHTML = "Yin/Yang: " + countRealms(datosKiaTse_hora[0]['Yin/Yang'])
    document.getElementById('kiatse-results-hora_tronco_rm').innerHTML = "RM: " + countRealms(datosKiaTse_hora[0]['Ciclo Normativo']['RM'])
    document.getElementById('kiatse-results-hora_tronco_o').innerHTML = "Organo: " + countRealms(datosKiaTse_hora[0]['Ciclo Normativo']['Organo'])
    document.getElementById('kiatse-results-hora_tronco_e').innerHTML = "Energía: " + countRealms(datosKiaTse_hora[0]['Ciclo Normativo']['Energía'])
    document.getElementById('kiatse-results-hora_tronco_r').innerHTML = "RM: " + countRealms(datosKiaTse_hora[0]['Ciclo Cósmico']['RM'])
    document.getElementById('kiatse-results-hora_tronco_en').innerHTML = "Energía: " + countRealms(datosKiaTse_hora[0]['Ciclo Cósmico']['Energía'])
    document.getElementById('kiatse-results-hora_rama').innerHTML = "Rama: " + countRealms(datosKiaTse_hora[1]['Rama'])
    document.getElementById('kiatse-results-hora_rama_r').innerHTML = "RM: " + countRealms(datosKiaTse_hora[1]['Nivel Terrestre']['RM'])
    document.getElementById('kiatse-results-hora_rama_y').innerHTML = "Yin/Yang: " + countRealms(datosKiaTse_hora[1]['Nivel Terrestre']['Yin/Yang'])
    document.getElementById('kiatse-results-hora_rama_o').innerHTML = "Organo: " + countRealms(datosKiaTse_hora[1]['Nivel Terrestre']['Organo'])
    document.getElementById('kiatse-results-hora_rama_e').innerHTML = "Energía: " + countRealms(datosKiaTse_hora[1]['Nivel Terrestre']['Energía'])
    document.getElementById('kiatse-results-hora_rama_h').innerHTML = "Hora: " + countRealms(datosKiaTse_hora[1]['Nivel Humano']['Hora'])
    document.getElementById('kiatse-results-hora_rama_pe').innerHTML = "Pto. Estatico: " + countRealms(datosKiaTse_hora[1]['Nivel Humano']['Pto. Estatico'])
    document.getElementById('kiatse-results-hora_rama_or').innerHTML = "Organo: " + countRealms(datosKiaTse_hora[1]['Nivel Humano']['Organo'])
    document.getElementById('kiatse-results-hora_rama_en').innerHTML = "Energía: " + countRealms(datosKiaTse_hora[1]['Nivel Humano']['Energía'])
    document.getElementById('kiatse-results-hora_tronco_cu').innerHTML = "C. Unitario: " + countRealms(datosKiaTse_hora[1]['Ciclo Cósmico']['C. Unitario'])
    document.getElementById('kiatse-results-hora_tronco_org').innerHTML = "Organo: " + countRealms(datosKiaTse_hora[1]['Ciclo Cósmico']['Organo'])
    document.getElementById('kiatse-results-hora_tronco_ene').innerHTML = "Energía: " + countRealms(datosKiaTse_hora[1]['Ciclo Cósmico']['Energía'])
    document.getElementById('kiatse-results-hora_animal').innerHTML = countRealms(datosKiaTse_hora[2])

    var path_animal = 'img/animales/' + await getAnimal(birthdatetime) + '.png'
    document.getElementById('kiatse-animal-img').setAttribute('src', path_animal)
    console.log('path_animal-img: '+ path_animal)

    console.log('Metal: ' + kiatSe_metal)
    document.getElementById('kiatse-metal').innerHTML = 'Metal: ' + kiatSe_metal
    console.log('Agua: ' + kiatSe_agua)
    document.getElementById('kiatse-agua').innerHTML = 'Agua: ' + kiatSe_agua
    console.log('Madera: ' + kiatSe_madera)
    document.getElementById('kiatse-madera').innerHTML = 'Madera: ' + kiatSe_madera
    console.log('Fuego: ' + kiatSe_fuego)
    document.getElementById('kiatse-fuego').innerHTML = 'Fuego: ' + kiatSe_fuego
    console.log('Tierra: ' + kiatSe_tierra)
    document.getElementById('kiatse-tierra').innerHTML = 'Tierra: ' + kiatSe_tierra
    console.log('Yin: ' + kiatSe_yin)
    document.getElementById('kiatse-yin').innerHTML = 'Yin: ' + kiatSe_yin
    console.log('Yang: ' + kiatSe_yang)
    document.getElementById('kiatse-yang').innerHTML = 'Yang: ' + kiatSe_yang
    
    page('KiaTse-data')

}

//! TEMPORAL
function handleHexagrams(type) {
    console.warn('Development mode Enabled')

    try {
        _handleHexagrams(type)
    }
    catch (ex) {
        console.error(ex)
    }
}

async function _handleHexagrams(type) {
    
    //? Extract data from HTML
    var birthdate = document.getElementById('Hexagrams_birthdate').value
    var genre = document.getElementById('Hexagrams_genre').value

    var birthdatetime = new Date(birthdate + ' 00:00');

    //? Get data
    
    //? Process data
    if (type == 'birth') {

        var trigramaNacimiento = await getInfoTrigramaNacimiento(birthdatetime)
        console.log('trigramaNacimiento: ' + trigramaNacimiento)
        var hexagramaNacimiento = await getInfoHexagramaNacimiento(birthdatetime)
        console.log('hexagramaNacimiento: ' + hexagramaNacimiento)
        var hexagramaNacimientoIchin = await getInfoHexagramaNacimientoIchin(birthdatetime)
        console.log('hexagramaNacimiento: ' + hexagramaNacimientoIchin)

        page('Hexagram-dataN')
    }
    else if (type == 'vital') {

        var trigramaVital = await getInfoTrigramaVital(birthdatetime, genre)
        console.log('trigramaVital: ' + trigramaVital)
        
        var hexgramaVital = await getInfoHexagramaVital(birthdatetime, genre)
        console.log('hexgramaVital: ' + hexgramaVital)

        var hexViIchin = await getInfoHexagramaVitalIchin(birthdatetime, genre)
        console.log('hexViIchin: ' + hexViIchin)
        
        

        page('Hexagram-dataV')
    }
    else {
        console.error('Cant load page')
    }

    //? Update data in HTML

    document.getElementById('Hexagram-results-trigrama_nacimiento').innerHTML = trigramaNacimiento
    document.getElementById('Hexagram-results-hexagrama_nacimiento_oracular').innerHTML = hexagramaNacimiento
    document.getElementById('Hexagram-results-hexagrama_nacimiento_ichin').innerHTML = hexagramaNacimientoIchin
    document.getElementById('Hexagram-results-trigrama_vital').innerHTML = trigramaVital
    document.getElementById('Hexagram-results-hexagrama_vital_oracular').innerHTML = hexgramaVital
    document.getElementById('Hexagram-results-hexagrama_vital_ichin').innerHTML = hexViIchin

    var path_trigrama_nacimiento = 'img/trigramasNacimiento/' + getTrigramaNacimiento(birthdatetime     ) + '.png'
    document.getElementById('Hexagram-results-img-trigrama_nacimiento').setAttribute('src', path_trigrama_nacimiento)
    console.log('path_trigrama_nacimiento: '+ path_trigrama_nacimiento)
    
    var path_hexagrama_nacimiento = 'img/hexagramaNacimiento/' + getHexagramaNacimiento(birthdatetime) + '.png'
    document.getElementById('Hexagram-results-img-hexagrama_nacimiento').setAttribute('src', path_hexagrama_nacimiento)
    console.log('path_hexagrama_nacimiento: path_hexagrama_nacimiento' + path_hexagrama_nacimiento)

    var path_hexagrama_nacimiento_ichin = 'img/Hexagrama/hex_' + getHexagramaNacimiento(birthdatetime) + '.png'
    document.getElementById('Hexagram-results-img-hexagrama_nacimiento_ichin').setAttribute('src', path_hexagrama_nacimiento_ichin)
    console.log('path_hexagrama_nacimiento_ichin: ' + path_hexagrama_nacimiento_ichin)
    
    var path_trigrama_vital = 'img/trigramasVital/' + getTrigramaVital(birthdatetime, genre) + '.png'
    document.getElementById('Hexagram-results-img-trigrama_vital').setAttribute('src', path_trigrama_vital)
    console.log('path_trigrama_vital: ' + path_trigrama_vital)
    
    var path_hexagrama_vital = 'img/hexagramaNacimiento/' + conversion[getHexagramaVital(birthdatetime, genre)] + '.png'
    document.getElementById('Hexagram-results-img-hexagrama_vital').setAttribute('src', path_hexagrama_vital)
    console.log('path_hexagrama_vital: '+ path_hexagrama_vital)

    var path_hexagrama_vital_ichin = 'img/Hexagrama/hex_' + conversion[getHexagramaVital(birthdatetime, genre)] + '.png'
    document.getElementById('Hexagram-results-img-hexagrama_vital_ichin').setAttribute('src', path_hexagrama_vital_ichin)
    console.log('path_hexagrama_vital_ichin: '+ path_hexagrama_vital_ichin)
    
}
