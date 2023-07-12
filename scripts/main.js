
const animales = [
    'Null', // -1
    'Bufalo', // 2
    'Tigre', // 3
    'Liebre', // 4
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

const anoChino = {1924: '1924/2/5', 1925: '1925/1/24/', 1926: '1926/2/13', 1927: '1927/2/2', 1928: '1928/1/23', 1929: '1929/2/10', 1930: '1930/1/30', 1931: '1931/2/17', 1932: '1932/2/6', 1933: '1933/1/26', 1934: '1934/2/14', 1935: '1935/2/14', 1936: '1936/1/24', 1937: '1937/2/11', 1938: '1938/1/31', 1939: '1939/2/19', 1940: '1940/2/8', 1941: '1941/1/27', 1942: '1942/2/15', 1943: '1943/2/5', 1944: '1944/1/25', 1945: '1945/2/13', 1946: '1946/2/2', 1947: '1947/1/22', 1948: '1948/2/10', 1949: '1949/1/29', 1950: '1950/2/17', 1951: '1951/2/6', 1952: '1952/1/27', 1953: '1953/2/14', 1954: '1954/2/3', 1955: '1955/1/24', 1956: '1956/2/12', 1957: '1957/1/30', 1958: '1958/2/18', 1959: '1959/2/8', 1960: '1960/1/28', 1961: '1961/2/15', 1962: '1962/2/5', 1963: '1963/1/25', 1964: '1964/2/13', 1965: '1965/2/2', 1966: '1966/1/21', 1967: '1967/2/9', 1968: '1968/1/30', 1969: '1969/2/17', 1970: '1970/2/6', 1971: '1971/1/27', 1972: '1972/2/15', 1973: '1973/2/3', 1974: '1974/1/23', 1975: '1975/2/11', 1976: '1976/1/31', 1977: '1977/2/18', 1978: '1978/2/7', 1979: '1979/1/28', 1980: '1980/2/16', 1981: '1981/2/5', 1982: '1982/1/25', 1983: '1983/2/13', 1984: '1984/2/2', 1985: '1985/2/20', 1986: '1986/2/9', 1987: '1987/1/29', 1988: '1988/2/17', 1989: '1989/2/6', 1990: '1990/1/27', 1991: '1991/2/14', 1992: '1992/2/4', 1993: '1993/1/23', 1994: '1994/2/10', 1995: '1995/1/31', 1996: '1996/2/19', 1997: '1997/2/7', 1998: '1998/1/28', 1999: '1999/2/16', 2000: '2000/2/5', 2001: '2001/1/24', 2002: '2002/2/12', 2003: '2003/2/1', 2004: '2004/1/22', 2005: '2005/2/9', 2006: '2006/1/29', 2007: '2007/2/18', 2008: '2008/2/7', 2009: '2009/1/26', 2010: '2010/2/14', 2011: '2011/2/3', 2012: '2012/1/23', 2013: '2013/2/10', 2014: '2014/1/31', 2015: '2015/2/19', 2016: '2016/2/8', 2017: '2017/1/28', 2018: '2018/2/16', 2019: '2019/2/5', 2020: '2019/2/25', 2021: '2021/2/12', 2022: '2022/2/1', 2023: '2023/1/22', 2024: '2024/2/10', 2025: '2025/1/29', 2026: '2026/2/17', 2027: '2027/2/6', 2028: '2028/1/26', 2029: '2029/2/13', 2030: '2030/2/3'}


function handleSubmit(event) {
    console.log('Handler Called')

    //Obtencion de datos
    var fechaNa = document.getElementById('date').value
    var horaNa = document.getElementById('hour').value
    var genero = document.getElementById('genre').value

    //Procesamiento de datos
    var animal = getAnimal(fechaNa)

    //var anoNuevo = getAnoNuevo(fechaNa)

    //var tronco = getTronco(fechaNa) //UN

    //var ciclos = getCiclo() //UN

    var trigramaNacimiento = getTrigramaNacimiento(fechaNa)

    var trigramaVital = getTrigramaVital(fechaNa, genero) 

   // var hexagramaVital = getHexagramaVital(fechaNa)

    //var hexagramaNacimiento = getHexagramaNacimiento(fechaNa) 
    


    //Representacion datos

    alert('Su animal de nacimiento es el ' + animal)
    alert('img/trigramasNacimiento/' + trigramaNacimiento + '.png')
    alert('img/trigramasVital/' + trigramaVital + '.png')

    alert('Handler Finished')

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
    
    var idHexa = getTrigramaNacimiento(fechaNa) + '.' + getTrigramaVital(fechaNa, genero)

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

