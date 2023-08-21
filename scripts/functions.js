function countOccurrences(inputString, wordToCount) {
    
    const regex = new RegExp(`\\b${wordToCount}\\b`, 'gi');
    const matches = String(inputString).match(regex);
  
    if (!matches) {
      return 0;
    }
  
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

function changeToChineseYear(datetime) {

    var nuevoAno = anoChino[datetime.getFullYear()]
    var fechanuevoAno = new Date(nuevoAno)
    
    var mesNuevoAno = fechanuevoAno.getMonth() + 1
    var mesActual = datetime.getMonth() + 1
    var diaNuevoAno = fechanuevoAno.getDate() 
    
    if (mesNuevoAno <= mesActual) {
        
        if (mesNuevoAno == mesActual) {
            if (diaNuevoAno <= datetime.getDate()) {
                return datetime.getFullYear();
            } else {
                return datetime.getFullYear() - 1;
            }
        }

        return datetime.getFullYear();
        
    } else {
       return datetime.getFullYear() - 1;
    }
}

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: "Europe/London"}));    
}

function datosTabla (num) {

    return [
        tronco[tabla[num][1]],
        rama[tabla[num][0]],
        animalEnblematico[tabla[num][2]],
    ]
}

function getAnimal(fechaNa) {

    var anoNa = changeToChineseYear(fechaNa)

    const inicio = 1900; // Año inicial
    const periodo = 12; // Número de años en un ciclo

    const añosTranscurridos = anoNa - inicio;

    // Calcular el número de meses dentro del periodo actual
    const mesesPeriodo = añosTranscurridos % periodo;

    // Calcular el número de meses dentro del ciclo actual
    const mesesCiclo = mesesPeriodo % 12;

    // Ajustar el número de meses para comenzar en 1 en lugar de 0
    const numeroMes = mesesCiclo === 0 ? 12 : mesesCiclo;

    var animal = animales[numeroMes]

    return animal
}

function getInfoTrigramaNacimiento(fechaNa) {
    return infoTrigramasNacimiento[getTrigramaNacimiento(fechaNa)]
}
function getInfoHexagramaNacimiento(fechaNa) {
    return infoHexagramasNacimiento[getHexagramaNacimiento(fechaNa)]
}
function getInfoHexagramaNacimientoIchin(fechaNa) {
    return infoHexagramasIChing[getHexagramaNacimiento(fechaNa)]
}

function getInfoTrigramaVital(fechaNa, genero) {
    return infoTrigramasVital[getTrigramaVital(fechaNa, genero)]
}
function getInfoHexagramaVital(fechaNa, genero) {
    return infoHexagramasNacimiento[conversion[getHexagramaVital(fechaNa, genero)]]
}
function getInfoHexagramaVitalIchin(fechaNa, genero) {

    return infoHexagramasIChing[conversion[getHexagramaVital(fechaNa, genero)]]
}
