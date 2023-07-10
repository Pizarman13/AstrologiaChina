
const animales = [
    'Null', // -1
    'Bufalo', // 2
    'Tigre', // 3
    'Conejo', // 4
    'Dragón', // 5
    'Serpiente', // 6
    'Caballo', // 7
    'Cabra', // 8
    'Mono', // 9
    'Gallo', // 10
    'Perro', // 11
    'Cerdo', // 12
    'Rata' // 1
]

function handleSubmit(event) {
    console.log('Handler Called')

    //Obtencion de datos
    var fechaNa = document.getElementById('fecha').value
    var horaNa = document.getElementById('hora').value
    var genero = document.getElementById('genero').value

    //Procesamiento de datos
    var animal = getAnimal(fechaNa)

    //var tronco = getTronco(fechaNa) //UN

    //var ciclos = getCiclo() //UN

    var trigramaNacimiento = getTrigramaNacimiento(fechaNa)

    var trigramaVital = getTrigramaVital(fechaNa, genero) 

   // var hexagramaVital = getHexagramaVital(fechaNa)

    var hexagramaNacimiento = getHexagramaNacimiento(fechaNa) 
    


    //Representacion datos

    alert('Su animal de nacimiento es el ' + animal)
    alert('img/trigramasNacimiento/' + trigramaNacimiento + '.png')
    alert('img/trigramasVital/' + trigramaVital + '.png')

    alert('Handler Finished')

}

function getAnimal(fechaNa) {

    var anoNa = fechaNa.split('-')[0]

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

function getTronco(fechaNa) { return null }
function getCiclo() { return null }

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

function getHexagramaVital() { 
    
    var idHexa = getTrigramaNacimiento(fechaNa) + '/' + getTrigramaVital(fechaNa, genero)

    return idHexa

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
  
    return sum
    
}