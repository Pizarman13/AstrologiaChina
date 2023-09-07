async function getKiaTse_anyo (birthdatetime) {
    
    var anyo = await changeToChineseYear(birthdatetime)

    var otp = ((anyo - 3) - (Math.floor((anyo - 3) / 60) * 60) === 0) ? 60 : (anyo - 3) - (Math.floor((anyo - 3) / 60) * 60);
    return otp
}

async function getKiaTse_mes(birthdatetime) {

    var anyoNaC = await changeToChineseYear(birthdatetime)
    var mes = 0

    //? Ajuste de mes
    if (anyoNaC < birthdatetime.getFullYear()) {
        mes = 12
    }

    num = unidadAno[anyoNaC % 10] + mes + birthdatetime.getMonth()

    var otp = (num > 60) ? (num - 60) : num;

    return otp
}

async function getKiaTse_dia(birthdatetime) {

    const fechaBase = new Date(1900, 0, 1);
        
    var diferenciaDias = Math.floor((new Date(birthdatetime.getFullYear(), birthdatetime.getMonth(), birthdatetime.getDate(), 0, 0, 0, 0) - new Date(fechaBase.getFullYear(), fechaBase.getMonth(), fechaBase.getDate(), 0, 0, 0, 0)) / (1000 * 60 * 60 * 24));

    var num = ((diferenciaDias + 11) - Math.floor((diferenciaDias + 11) / 60) * 60)

    if (birthdatetime.getHours() >= 23) {
        return num += 1
    }

    return (num === 0) ? 60 : num
}

async function getKiaTse_hora(birthdatetime) {

    var numDia = await getKiaTse_dia(birthdatetime)
    var unidades = [49, 1, 13, 25, 37, 49, 1, 13, 25, 37];
    var horas = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 1,  1 ];

    var unidad = unidades[Number(numDia.toString().slice(-1))]
    var hora = horas[birthdatetime.getHours()]
    
    return unidad + hora - 1
}

function getTrigramaNacimiento(dateTime) {
    
    
    var fechasplit = [dateTime.getFullYear(), dateTime.getMonth()+1, dateTime.getDate()]

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
     
    var anoNa = fechaNa.getFullYear()
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

function getHexagramaNacimiento(dateTime) { 
    
    var fechasplit = [dateTime.getFullYear(), dateTime.getMonth()+1, dateTime.getDate()]
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

function getHexagramaVital(fechaNa, genero) {

    return getTrigramaNacimiento(fechaNa) + '.' + getTrigramaVital(fechaNa, genero)
}

//? Estrellas
function esencia(dateTime) {

    var tmp = 0
    var tmp2 = 0

    var digitos = dateTime.getFullYear().toString().split('')
    for (let i = 0; i < digitos.length; i++) {
        console.log('digitos:' +digitos)
        tmp += parseInt(digitos[i])
        console.log('tmp: '+tmp)
    }

    var digitos2 = tmp.toString().split('')
    for(let i = 0; i < digitos2.length; i++) {
        tmp2 += parseInt(digitos2[i]) 
        console.log('tmp2: '+tmp2)
    }

    var resta = 11 - tmp2
    console.log('res: ' + resta)
    return resta
}

function ascendente(dateTime) {
    const diaMes = [6,4,6,6,6,6,8,8,8,9,8,8]

    var mes = dateTime.getMonth()

    if (dateTime.getDate() < diaMes[mes]-1){mes--}

    if (mes < 0) {mes += 12}

    dateTime.setMonth

    if(esencia(dateTime) == 1 || esencia(dateTime) == 4 ||esencia(dateTime) == 7 ) {
        const tabla = [6,8,7,6,5,4,3,2,1,9,8,7]
        return tabla[mes]
    }
    else if (esencia(dateTime) == 3 || esencia(dateTime) == 6 ||esencia(dateTime) == 9 ){
        const tabla = [3,5,4,3,2,1,9,8,7,6,5,4]
        return tabla[mes]
    }
    else if (esencia(dateTime) == 2 || esencia(dateTime) == 5 ||esencia(dateTime) == 8 ){
        const tabla = [9,2,1,9,8,7,6,5,4,3,2,1]
        return tabla[mes]
    }
}

function tendencia(dateTime) {
    var num = 5 - ascendente(dateTime)

    var res = esencia(dateTime) + num

    if(res <= 0) {
        res += 9
    }

    return res
}