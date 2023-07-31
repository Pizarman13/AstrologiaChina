function KiatSe() {
    alert('KiatSe')
}

function getAnoNuevo(fechaNa) {

    var fechaAno = fechaNa.split('-')[0]
    var fechaMes = fechaNa.split('-')[1]
    var fechaDia = fechaNa.split('-')[2]

    var nuevoAno = anoChino[fechaAno]
    var fechanuevoAno = new Date(nuevoAno)

    
    var mesNuevoAno = fechanuevoAno.getMonth() + 1
    var diaNuevoAno = fechanuevoAno.getDate() 

    if (mesNuevoAno  <= fechaMes) {
        
        if (diaNuevoAno <= fechaDia) {
            return fechaAno;
        } else {
            return fechaAno - 1;
        }
        
    } else {
       return fechaAno - 1;
    }

}

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

    if (numero > periodo) {
        numero -= periodo
    }

    var info = infoTrigramasVital[numero] 

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
    var numHex = combersion[hexagrama]
    var info = infoHexagramasNacimiento[numHex]
    
    return info
}

function infoHexViIchin(fechaNa, genero) {

    var hexagrama = getHexagramaVital(fechaNa, genero)
    var numHex = combersion[hexagrama]
    var infoIchin = infoHexagramasIChing[numHex]
    
    return infoIchin

}

function segundoNum (fechaNa) {
    
    var anoNa = fechaNa.split('-')[0]
    var numUnidad = anoNa % 10
    var mesNa = fechaNa.split('-')[1]

    var primerNum = unidadAno[numUnidad]
    var mes = 0
    var resultado = 0

    if (getAnoNuevo(fechaNa) < anoNa) {
        mes = 12
    } else {
        mes = mesNa
    }

    resultado = primerNum + mes

    return resultado
}

function tercerNum (fechaNa, horaNa, pais) {
    var fechaAno = fechaNa.split('-')[0]
    var fechaMes = fechaNa.split('-')[1]
    var fechaDia = fechaNa.split('-')[2]
    var hora = horaSegunPais(fechaNa, horaNa, pais)

    var otp = (new Date(fechaAno, fechaMes, fechaDia) - new Date(1900, 0, 1) + 10) - (Math.floor((new Date(fechaAno, fechaMes, fechaDia) - new Date(1900, 0, 1) + 10) / 60000) * 60000) + (hora >= 23 ? 1 : 0)


    return otp
}

function numConAno (fechaNa) {
    
    var ano = getAnoNuevo(fechaNa)

    var otp = ((ano - 3) - (Math.floor((ano - 3) / 60) * 60) === 0) ? 60 : (ano - 3) - (Math.floor((ano - 3) / 60) * 60);

    return otp
}

function numConMes(fechaNa) {

    var num = segundoNum(fechaNa)

    var otp = (num > 60) ? (num - 60) : num;

    return otp
}

function numConDia(fechaNa, horaNa, pais) {

    var num = tercerNum(fechaNa, horaNa, pais)

    var otp = (num === 0) ? 60 : num;

    return otp
}

function numConHora(fechaNa, horaNa, pais) {

    var numDia = numConDia(fechaNa, horaNa)
    var hora = horaSegunPais(fechaNa, horaNa, pais)
    var KT_A39_B48 = [49, 1, 13, 25, 37, 49, 1, 13, 25, 37];
    var KT_A13_B37 = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 1,  1 ];

    var findValue1 = Number(numDia.toString().slice(-1));
    var lookup1 = KT_A39_B48.find(item => item[0] === findValue1);
    var result1 = (lookup1 !== undefined) ? lookup1[1] : 0;

    var findValue2 = hora;
    var lookup2 = KT_A13_B37.find(item => item[0] === findValue2);
    var result2 = (lookup2 !== undefined) ? lookup2[1] : 0;

    var otp = result1 + result2 - 1;
    return otp
}

function horaSegunPais (horaNa, franjaHoraria) {
    date = Date()
    td = horaNa.split(':')
    date.hora = td[0]
    date.minute = td[1]
    date = moment(date).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    
    const url = 'https://timeapi.io/api/Conversion/ConvertTimeZone';
    const dataToSend = {
        fromTimeZone: franjasHorarias[franjaHoraria],
        dateTime: date,
        toTimeZone: 'Europe/London',
        dstAmbiguity: ''
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    };
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Response from the server:', data);
        
        var dt = response.json()['conversionResult']
        var hora = dt['hour'] 
        var min = dt['minute']

        alert("hello")
        alert(hora)
        alert(min)
        return hora;

      })
      .catch(error => {
        console.error('Error making the request:', error);
      });

}

function datosTabla(num) {

    return [tabla[num][0], tabla[num][1], tabla[num][2]]
}