function getRefAnyo (birthdatetime) {
    
    var anyo = changeToChineseYear(birthdatetime)

    var otp = ((anyo - 3) - (Math.floor((anyo - 3) / 60) * 60) === 0) ? 60 : (anyo - 3) - (Math.floor((anyo - 3) / 60) * 60);

    return otp + 1 //! CHECK
}

function changeToChineseYear(datetime) {

    var nuevoAno = anoChino[datetime.getFullYear()]
    var fechanuevoAno = new Date(nuevoAno)

    
    var mesNuevoAno = fechanuevoAno.getMonth() + 1
    var diaNuevoAno = fechanuevoAno.getDate() 

    if (mesNuevoAno <= datetime.getMonth()) {
        
        if (diaNuevoAno <= datetime.getDate()) {
            return datetime.getFullYear();
        } else {
            return datetime.getFullYear() - 1;
        }
        
    } else {
       return datetime.getFullYear() - 1;
    }
}

function getRefMes(birthdatetime) {

    var num = getRefMesNum(birthdatetime)

    var otp = (num > 60) ? (num - 60) : num;

    return otp
}

function getRefMesNum(datetime){

    var anyoNa = datetime.getFullYear()
    var numUnidad = anyoNa % 10
    var mesNa = datetime.getMonth() + 1


    var primerNum = unidadAno[numUnidad]
    var mes = 0
    var resultado = 0

    //? Ajuste de mes
    if (changeToChineseYear(datetime) < anyoNa) {
        mes = 12
    } else {
        mes = mesNa
    }

    resultado = primerNum + mes
    alert('resultado: ' + resultado)

    return resultado
}

function getRefDia(birthdatetime) {
    var num = getRefDiaNum(birthdatetime)
    
    var otp = (num === 0) ? 60 : num;
    
    return otp
}

function getRefDiaNum (datetime) {

    var otp = (new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate()) - new Date(1900, 0, 1) + 10) - (Math.floor((new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate()) - new Date(1900, 0, 1) + 10) / 60000) * 60000) + (datetime.getHours() >= 23 ? 1 : 0)
    return otp
}

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: "Europe/London"}));    
}

function getRefHora(birthdatetime) {

    var numDia = getRefDia(birthdatetime)
    var KT_A39_B48 = [49, 1, 13, 25, 37, 49, 1, 13, 25, 37];
    var KT_A13_B37 = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 1,  1 ];

    var findValue1 = Number(numDia.toString().slice(-1));
    var lookup1 = KT_A39_B48.find(item => item[0] === findValue1);
    var result1 = (lookup1 !== undefined) ? lookup1[1] : 0;

    var findValue2 = birthdatetime;
    var lookup2 = KT_A13_B37.find(item => item[0] === findValue2);
    var result2 = (lookup2 !== undefined) ? lookup2[1] : 0;

    var otp = result1 + result2 - 1;
    return otp
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function getAnimal(fechaNa) {

    var anoNa = getAnoNuevo(fechaNa)

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

function calculateHexagram(birthdate, genre) {
    alert('birthdate: ' + birthdate)
    alert('genre: ' + genre)

    return null
}

function getTrigramaNacimiento(fechaNa) {
    var fechasplit = fechaNa.split('-')

    var res = []

    for (let x = 0; x < fechasplit.length; x++) {
        if (fechasplit[x] == 11 || fechasplit[x] == 10) {
            var tmp = fechasplit[x]
        } 
        else {
            var tmp = 0

            var digitos = fechasplit[x].toString().split('')
            for (let i = 0; i < digitos.length; i++) {
                tmp += parseInt(digitos[i])
            }

        }
        if (tmp % 2 === 0) { res.push(0) }
        else { res.push(1) }

    }

    res.reverse()

    let code = res.join('')

    var info = infoTrigramasNacimiento[code]; 

    return code
}

function infoTriNa(fechaNa) {

    var trig = getTrigramaNacimiento(fechaNa)
    var info = infoTrigramasNacimiento[trig]

    return info
}

function getTrigramaVital(fechaNa, genero) {
     
    var anoNa = fechaNa.split('-')[0]
    var fechaActual = new Date()
    var anoActual = fechaActual.getFullYear()

    var edad = anoActual - anoNa

    var periodo = 0

    //calcular periodo
    if (genero === 'hombre') {
        periodo = 8
    } 
    else if (genero === 'mujer'){
        periodo = 7
    }


    var numPeriodo = edad / periodo
    var numero = parseInt(numPeriodo)
    
    if (numero%periodo == 0) {
        numero += 1
    }

    if (numero > periodo) {
        numero -= periodo
    }

    return numero
  
}

function infoTriVi(fechaNa, genero) {

    var trig = getTrigramaVital(fechaNa, genero)
    var info = infoTrigramasVital[trig]

    return info
}

function getHexagramaNacimiento(fechaNa) { 
    
    var fechasplit = fechaNa.split('-')
    var sum = 0
    var dia = parseInt(fechasplit[2])
    var mes = parseInt(fechasplit[1])   
    var ano = 0

    var digitos = fechasplit[0].toString().split('')

    for (let i = 0; i < digitos.length; i++) {
        ano += parseInt(digitos[i])     
    }
    
    sum = dia + mes + ano

    if (sum>64) {
        return sum - 64
    }

    return sum
}

function infoHexNa(fechaNa) {
    
    var hexagrama = getHexagramaNacimiento(fechaNa)
    var info = infoHexagramasNacimiento[hexagrama]

    return info
}

function infoHexNaIchin(fechaNa) {
    
    var hexagrama = getHexagramaNacimiento(fechaNa)
    var infoIchin = infoHexagramasIChing[hexagrama]

    return infoIchin
}

function getHexagramaVital(fechaNa, genero) {

    var hexgrama = getTrigramaNacimiento(fechaNa) + '.' + getTrigramaVital(fechaNa, genero)

    return hexgrama
}

function infoHexVi(fechaNa, genero) {

    var hexagrama = getHexagramaVital(fechaNa, genero)
    var numHex = conversion[hexagrama]
    var info = infoHexagramasNacimiento[numHex]
    
    return info
}

function infoHexViIchin(fechaNa, genero) {

    var hexagrama = getHexagramaVital(fechaNa, genero)
    var numHex = conversion[hexagrama]
    var infoIchin = infoHexagramasIChing[numHex]
    return infoIchin

}

function datosTabla (num) {

    return [
        rama[tabla[num][0]],
        tronco[tabla[num][1]],
        animalEnblematico[tabla[num][2]],
    ]
}