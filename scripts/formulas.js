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
    
    dateTime.getFullYear()
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
    console.log('code: ' + code)

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