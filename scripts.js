
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

    var trigramaVital = getTrigramaVital(fechaNa) //UN

    //var hexagramaVital = getHexagramaVital(fechaNa) //UN

    //var hexagramaNacimiento = getHexagramaNacimiento(fechaNa) //UN


    //Representacion datos

    //alert('img/triagramas/' + trigramaNacimiento + '.png')

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
function getTrigramaViatl(fechaNa, genero) {
     return null 
}
function getHexagramaVital() { return null }
function getHexagramaNacimiento() { return null }