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
    alert('año: ' + anoNa)

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

    return code
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

    return numero
  
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