const animales = [
    'Null', // -1
    'Buey 牛', // 2
    'Tigre 虎 ', // 3
    'Liebre 兔', // 4
    'Dragón 龍', // 5
    'Serpiente 蛇', // 6
    'Caballo 馬', // 7
    'Cabra 羊', // 8
    'Mono 猴', // 9
    'Gallo 雞', // 10
    'Perro 狗 ', // 11
    'Cerdo 豬 ', // 12
    'Rata 鼠' // 1
]

const anoChino = {1924: '1924/2/5', 1925: '1925/1/24/', 1926: '1926/2/13', 1927: '1927/2/2', 1928: '1928/1/23', 1929: '1929/2/10', 1930: '1930/1/30', 1931: '1931/2/17', 1932: '1932/2/6', 1933: '1933/1/26', 1934: '1934/2/14', 1935: '1935/2/14', 1936: '1936/1/24', 1937: '1937/2/11', 1938: '1938/1/31', 1939: '1939/2/19', 1940: '1940/2/8', 1941: '1941/1/27', 1942: '1942/2/15', 1943: '1943/2/5', 1944: '1944/1/25', 1945: '1945/2/13', 1946: '1946/2/2', 1947: '1947/1/22', 1948: '1948/2/10', 1949: '1949/1/29', 1950: '1950/2/17', 1951: '1951/2/6', 1952: '1952/1/27', 1953: '1953/2/14', 1954: '1954/2/3', 1955: '1955/1/24', 1956: '1956/2/12', 1957: '1957/1/30', 1958: '1958/2/18', 1959: '1959/2/8', 1960: '1960/1/28', 1961: '1961/2/15', 1962: '1962/2/5', 1963: '1963/1/25', 1964: '1964/2/13', 1965: '1965/2/2', 1966: '1966/1/21', 1967: '1967/2/9', 1968: '1968/1/30', 1969: '1969/2/17', 1970: '1970/2/6', 1971: '1971/1/27', 1972: '1972/2/15', 1973: '1973/2/3', 1974: '1974/1/23', 1975: '1975/2/11', 1976: '1976/1/31', 1977: '1977/2/18', 1978: '1978/2/7', 1979: '1979/1/28', 1980: '1980/2/16', 1981: '1981/2/5', 1982: '1982/1/25', 1983: '1983/2/13', 1984: '1984/2/2', 1985: '1985/2/20', 1986: '1986/2/9', 1987: '1987/1/29', 1988: '1988/2/17', 1989: '1989/2/6', 1990: '1990/1/27', 1991: '1991/2/14', 1992: '1992/2/4', 1993: '1993/1/23', 1994: '1994/2/10', 1995: '1995/1/31', 1996: '1996/2/19', 1997: '1997/2/7', 1998: '1998/1/28', 1999: '1999/2/16', 2000: '2000/2/5', 2001: '2001/1/24', 2002: '2002/2/12', 2003: '2003/2/1', 2004: '2004/1/22', 2005: '2005/2/9', 2006: '2006/1/29', 2007: '2007/2/18', 2008: '2008/2/7', 2009: '2009/1/26', 2010: '2010/2/14', 2011: '2011/2/3', 2012: '2012/1/23', 2013: '2013/2/10', 2014: '2014/1/31', 2015: '2015/2/19', 2016: '2016/2/8', 2017: '2017/1/28', 2018: '2018/2/16', 2019: '2019/2/5', 2020: '2019/2/25', 2021: '2021/2/12', 2022: '2022/2/1', 2023: '2023/1/22', 2024: '2024/2/10', 2025: '2025/1/29', 2026: '2026/2/17', 2027: '2027/2/6', 2028: '2028/1/26', 2029: '2029/2/13', 2030: '2030/2/3', 2031: '2031/1/23', 2032: '2032/2/11', 2033: '2033/1/31', 2034: '2034/2/19', 2035: '2035/2/8', 2036: '2036/1/28', 2037: '2037/2/15', 2038: '2038/2/4', 2039: '2039/1/24', 2040: '2040/2/12'}

const infoHexagramasNacimiento = {
    1: '乾 Qián Lo Creativo El verbo creador',
    2: '夬 Guài El desenlace La decisión firme',
    3: '大有 Dà Yŏu La grandeza de lo noble La entrega indefensa',
    4: '大壯 Dà Zhuàng La abundancia de lo grande El servicio de lo Superior',
    5: '小畜 Xiǎo Chù La fuerza transformadora de lo pequeño La gracia del detalle',
    6: '需 Xū La espera imprevisible Lo imprescindible',
    7: '大畜 Dà Chù La fuerza cortejante de lo grande La obediencia de-vida',
    8: '泰 Tài La armonía La sintonía de los opuestos',
    9: '履 Lü La huella La inutilidad del tiempo',
    10: '兑 Duì La serena espera de los Supremo La acogida complaciente del que busca',
    11: '睽 Kuí La conjunción El hombre estela',
    12: '歸妹 Guī Mèi La alianza La oración',
    13: '中孚 Zhōng Fú La verdad La fidelidad de lo revelado',
    14: '節 Jié La moderación Lo justo y lo necesario',
    15: '損 Sŭn La merma La adaptación alegre',
    16: '臨 Lín El acercamiento La fusión progresiva',
    17: '同人 Tóng Ren La comunidad entre los hombres El compromiso',
    18: '革 Gé La revolución La revolución espiritual',
    19: '離 Lí El vuelo del fuego El sonido del color',
    20: '豐Fēng El apogeo El valor de lo culminante',
    21: '家人 Jiā Ren El clan La conjunción entre lo individual y el clan-destino',
    22: '旣濟 Jí Jì La permanencia en la cumbre El orgasmo mantenido',
    23: '賁 Bì La gracia La fe viva',
    24: '明夷 Míng Yí Persiguiendo la luz',
    25: '無妄 Wú Wàng La inocencia Hacer sin querer, debiendo',
    26: '隨 Suí El seguimiento La dócil continuidad',
    27: '噬嗑 Shì Kè La mordedura parlante El verbo de la carne',
    28: '震 Zhèn El primer sonido La permanencia del principio',
    29: '益 Yì El aumento adecuado Lo imprescindible en el tiempo adecuado',
    30: '屯 Tūn La dificultad inicial La redención inevitable',
    31: '頣 Yí El alimento de la forma La trascendencia de lo formado',
    32: '復 Fù El retorno La resurrección',
    33: '姤 Gòu La seducción La alienación de la posesión',
    34: '太過 Tài Guò La custodia de lo grande La fidelidad de la Providencia',
    35: '鼎 Dĭng El caldero La alquimia del agua',
    36: '恒 Héng Lo perenne La transmutación del espíritu',
    37: '巽 Xùn La condescendencia La complicidad de lo femenino',
    38: '井 Jĭng El pozo El rescate de lo auténtico',
    39: '蠱 Gŭ El trabajo inútil El hacer irremediable',
    40: '升 Shēng El hombre ascendido El camino de purificación',
    41: '訟 Sòng El conflicto La imprescindible resolución',
    42: '困 Kùn La opresión La liberación a través de lo prohibido',
    43: '未濟 Wĕi Jĭ La comunión de los amantes El orgasmo sostenido',
    44: '解 Xiè La liberación La transfiguración',
    45: '渙 Huàn La disolución El valor de lo fundido',
    46: '坎 Kǎn Lo abismal El abandono al no-hacer',
    47: '蒙 Méng El asombro juvenil La inocencia reveladora',
    48: '師 Shī El poder de la fuerza La fuerza de lo evidente',
    49: '遯 Dùn La retirada La estrategia del no-combate',
    50: '咸 Xián El cortejo La llamada de la virtud',
    51: '旅 Lü El peregrino El mendigo',
    52: '小過 Xiǎo Guò La grandeza de lo pequeño La belleza está en lo sencillo',
    53: '漸 Jiān La evolución La escucha obediente',
    54: '蹇 Jiǎn El impedimento El camino hacia la dignidad con la pobreza suficiente',
    55: '艮 Gèn El aquietamiento La meditación',
    56: '謙 Qiān La humildad La aceptación complaciente',
    57: '否 Pĭ La sumisión La grandeza de lo inexplicable',
    58: '萃 Cuì La recolección La agresión de la avaricia',
    59: '晉 Jìn El progreso cotidiano La trascendencia del instante',
    60: '豫 Yù El entusiasmo La esperanza perseverante',
    61: '觀 Guàn La contemplación La aceptación de la totalidad',
    62: '比 Bĭ La solidaridad La comunión',
    63: '剝 Bō La desintegración, el deterioro La duda',
    64: '坤 Kūn Lo receptivo La obediencia',
} 

const infoHexagramasVital = {
    '111.2': '乾 Qián Lo Creativo El verbo creador',
    '011.2': '夬 Guài El desenlace La decisión firme',
    '101.2': '大有 Dà Yŏu La grandeza de lo noble La entrega indefensa',
    '001.2': '大壯 Dà Zhuàng La abundancia de lo grande El servicio de lo Superior',
    '110.2': '小畜 Xiǎo Chù La fuerza transformadora de lo pequeño La gracia del detalle',
    '010.2': '需 Xū La espera imprevisible Lo imprescindible',
    '100.2': '大畜 Dà Chù La fuerza cortejante de lo grande La obediencia de-vida',
    '000.2': '泰 Tài La armonía La sintonía de los opuestos',
    '111.3': '履 Lü La huella La inutilidad del tiempo',
    '011.3': '兑 Duì La serena espera de los Supremo La acogida complaciente del que busca',
    '101.3': '睽 Kuí La conjunción El hombre estela',
    '001.3': '歸妹 Guī Mèi La alianza La oración',
    '110.3': '中孚 Zhōng Fú La verdad La fidelidad de lo revelado',
    '010.3': '節 Jié La moderación Lo justo y lo necesario',
    '100.3': '損 Sŭn La merma La adaptación alegre',
    '000.3': '臨 Lín El acercamiento La fusión progresiva',
    '111.4': '同人 Tóng Ren La comunidad entre los hombres El compromiso',
    '011.4': '革 Gé La revolución La revolución espiritual',
    '101.4': '離 Lí El vuelo del fuego El sonido del color',
    '001.4': '豐Fēng El apogeo El valor de lo culminante',
    '110.4': '家人 Jiā Ren El clan La conjunción entre lo individual y el clan-destino',
    '010.4': '旣濟 Jí Jì La permanencia en la cumbre El orgasmo mantenido',
    '100.4': '賁 Bì La gracia La fe viva',
    '000.4': '明夷 Míng Yí Persiguiendo la luz',
    '111.5': '無妄 Wú Wàng La inocencia Hacer sin querer, debiendo',
    '011.5': '隨 Suí El seguimiento La dócil continuidad',
    '101.5': '噬嗑 Shì Kè La mordedura parlante El verbo de la carne',
    '001.5': '震 Zhèn El primer sonido La permanencia del principio',
    '110.5': '益 Yì El aumento adecuado Lo imprescindible en el tiempo adecuado',
    '010.5': '屯 Tūn La dificultad inicial La redención inevitable',
    '100.5': '頣 Yí El alimento de la forma La trascendencia de lo formado',
    '000.5': '復 Fù El retorno La resurrección',
    '111.6': '姤 Gòu La seducción La alienación de la posesión',
    '011.6': '太過 Tài Guò La custodia de lo grande La fidelidad de la Providencia',
    '101.6': '鼎 Dĭng El caldero La alquimia del agua',
    '001.6': '恒 Héng Lo perenne La transmutación del espíritu',
    '110.6': '巽 Xùn La condescendencia La complicidad de lo femenino',
    '010.6': '井 Jĭng El pozo El rescate de lo auténtico',
    '100.6': '蠱 Gŭ El trabajo inútil El hacer irremediable',
    '000.6': '升 Shēng El hombre ascendido El camino de purificación',
    '111.7': '訟 Sòng El conflicto La imprescindible resolución',
    '011.7': '困 Kùn La opresión La liberación a través de lo prohibido',
    '101.7': '未濟 Wĕi Jĭ La comunión de los amantes El orgasmo sostenido',
    '001.7': '解 Xiè La liberación La transfiguración',
    '110.7': '渙 Huàn La disolución El valor de lo fundido',
    '010.7': '坎 Kǎn Lo abismal El abandono al no-hacer',
    '100.7': '蒙 Méng El asombro juvenil La inocencia reveladora',
    '000.7': '師 Shī El poder de la fuerza La fuerza de lo evidente',
    '111.0': '遯 Dùn La retirada La estrategia del no-combate',
    '011.0': '咸 Xián El cortejo La llamada de la virtud',
    '101.0': '旅 Lü El peregrino El mendigo',
    '001.0': '小過 Xiǎo Guò La grandeza de lo pequeño La belleza está en lo sencillo',
    '110.0': '漸 Jiān La evolución La escucha obediente',
    '010.0': '蹇 Jiǎn El impedimento El camino hacia la dignidad con la pobreza suficiente',
    '100.0': '艮 Gèn El aquietamiento La meditación',
    '000.0': '謙 Qiān La humildad La aceptación complaciente',
    '111.1': '否 Pĭ La sumisión La grandeza de lo inexplicable',
    '011.1': '萃 Cuì La recolección La agresión de la avaricia',
    '101.1': '晉 Jìn El progreso cotidiano La trascendencia del instante',
    '001.1': '豫 Yù El entusiasmo La esperanza perseverante',
    '110.1': '觀 Guàn La contemplación La aceptación de la totalidad',
    '010.1': '比 Bĭ La solidaridad La comunión',
    '100.1': '剝 Bō La desintegración, el deterioro La duda',
    '000.1': '坤 Kūn Lo receptivo La obediencia',
} 

const infoHexagramasNacimientoIChing = {
    '1': 'Ch’ien Lo Creador EL DICTAMEN Lo Creativo obra elevado logro, Propiciando por la perseverancia. LA IMAGEN Pleno de fuerza es el movimiento del Cielo. Así el noble se hace fuerte e infatigable.',
    '43': 'Kuai / El Desbordamiento  (La Resolución), EL DICTAMEN El Desbordamiento. Resueltamente el asunto ha de darse a conocer en la corte del rey. Ha de proclamarse conforme a la verdad. ¡Peligro! Hay que dar aviso a la propia ciudad. No es propicio tomar las armas. Es propicio emprender algo. LA IMAGEN El lago ha subido al cielo: la imagen del Desbordamiento. Así el noble dispensas riquezas hacia abajo y recela cobijarse en su virtud.',
    '14': 'Ta Yu / La Posesión de lo Grande EL DICTAMEN La Posesión de lo Grande: Elevado logro. LA IMAGEN El Fuego en lo alto del Cielo: La imagen de la Posesión de lo Grande. Así el noble frena el mal y fomenta el bien, obedeciendo con ello la buena voluntad del Cielo.',
    '34': 'Ta Chuang / El Poder de lo Grande EL DICTAMEN El Poder de lo Grande. Es propicia la perseverancia. LA IMAGEN El trueno se halla en lo alto del cielo: la imagen del Poder de lo Grande. Así el noble no pisa los caminos que no correspondan al orden.',
    '9': 'Hsiao Ch’u / La Fuerza Domesticadora de lo Pequeño EL DICTAMEN La Fuerza Domesticadora de lo Pequeño tiene éxito. Densas nubes, ninguna lluvia de nuestra región del Oeste. LA IMAGEN El viento recorre el cielo: la imagen de la Fuerza Domesticadora de lo Pequeño. Así el noble va refinando la forma exterior de su naturaleza.',
    '5': 'Hsü / La Espera (La Alimentación) EL DICTAMEN La Espera. Si eres veraz, tendrás luz y éxito. La perseverancia trae ventura. Es propicio atravesar las grandes aguas. LA IMAGEN En el cielo se elevan nubes: La imagen de la Espera. Así como y bebe el noble y permanece sereno y de buen humor.',
    '26': 'Ta Ch’u / La Fuerza Domesticadora de lo Grande EL DICTAMEN La Fuerza Domesticadora de lo Grande. Es propicia la perseverancia. Trae ventura no comer en casa. Es propicio atravesar las grandes aguas. LA IMAGEN El cielo en medio de la montaña: La imagen de la Fuerza Domesticadora de lo Grande. Así el noble se familiariza con multitud de dichos de tiempos remotos y de hechos del pasado, a fin de afirmar de esta suerte su carácter.',
    '11': 'T’ai / La Paz EL DICTAMEN La paz. Lo pequeño se va, llega lo grande. ¡Ventura! ¡Éxito! LA IMAGEN Cielo y Tierra se unen: la imagen de la Paz. Así reparte y completa el soberano el curso de cielo y tierra, fomenta y ordena los dones de cielo y tierra, con lo cual asiste al pueblo.',
    '10': 'Lü / El Porte (La pisada) EL DICTAMEN Pisar la cola del tigre. Éste no muerde al hombre. Éxito. LA IMAGEN Arriba el cielo, abajo el lago: la imagen del Porte. Así distingue el noble entre alto y bajo y afirma con ello el sentido del pueblo.',
    '58': 'Tui / Lo Sereno, El Lago EL DICTAMEN Lo Sereno. Éxito. Es propicia la perseverancia. LA IMAGEN Lagos que reposan uno sobre el otro: la imagen de lo sereno. Así el noble se reúne con sus amigos para la discusión y la ejercitación.',
    '38': 'K’uei / El Antagonismo  (La Oposición) EL DICTAMEN El Antagonismo. En cosas pequeñas, ventura. LA IMAGEN Arriba el fuego, abajo el lago: la imagen del Antagonismo. Así el noble, sea como fuese la vida en comunidad, conserva su índole singular.',
    '54': 'Kuei Mei / La Muchacha que se casa (La desposanda) EL DICTAMEN La desposanda. Las empresas traen desventura. Nada que fuese propicio. LA IMAGEN Por encima del lago se halla el trueno: La imagen de la muchacha que se casa. Así el noble, por la eternidad del fin reconoce lo perecedero.',
    '61': 'Chung fu / La Verdad Interior EL DICTAMEN Verdad interior. Cerdos y peces. ¡Ventura! Es propicio cruzar las grandes aguas. Es propicia la perseverancia. LA IMAGEN Por sobre el lago está el viento: la imagen de la verdad interior. Así el noble discute los asuntos penales, Con el fin de detener las ejecuciones.',
    '60': 'Chieh / La Restricción EL DICTAMEN La Restricción. Éxito. No se debe ejercer con persistencia una restricción amarga. LA IMAGEN Por encima del lago hay agua: la imagen de la restricción. Así el noble crea el número y la medida e investiga qué es la virtud y la recta conducta.',
    '41': 'Sun EL DICTAMEN La merma unida a la veracidad obra elevada ventura sin tacha. Puede perseverarse en ello. Es propicio emprender algo. ¿Cómo se pone esto en práctica? Dos escudillas pequeñas pueden usarse para el sacrificio. LA IMAGEN Abajo, junto a la montaña está el lago: la imagen de la Merma. Así el noble reprime su cólera y refrena sus impulsos.',
    '19': 'Lin EL DICTAMEN El Acercamiento tiene elevado éxito. Es propicia la perseverancia. Al llegar el octavo mes habrá desventura. LA IMAGEN Por encima del lago está la tierra: la imagen del Acercamiento. Así el noble es inagotable en su intención de enseñar, Y en soportar y proteger al pueblo no conoce límites.',
    '13': 'T’ung Jen / Comunidad con los Hombres EL DICTAMEN Comunidad con los hombres en lo libre: éxito. Es propicio atravesar las grandes aguas. Propicia es la perseverancia del noble. LA IMAGEN Cielo junto con fuego: la imagen de la Comunidad con los hombres. Así estructura el noble las tribus y discrimina las cosas.',
    '49': 'Ko EL DICTAMEN La Revolución. En tu propio día encontrarás fe. Elevado éxito, propicio por la perseverancia. Se desvanece el arrepentimiento. LA IMAGEN En el lago hay fuego: La imagen de la revolución. Así ordena el noble la cronología y clarifica las épocas.',
    '30': 'Li / Lo Adherente, El Fuego EL DICTAMEN Lo Adherente. Es propicia la perseverancia, pues aporta el éxito. Dedicarse al cuidado de la vaca trae ventura. LA IMAGEN La claridad se eleva dos veces: la imagen del Fuego. Así el gran hombre alumbra, perpetuando esta claridad, las cuatro regiones cardinales del mundo.',
    '55': 'Feng / La Plenitud EL DICTAMEN La plenitud tiene éxito. El rey la alcanza. No estés triste; debes ser como el sol al mediodía. LA IMAGEN Trueno y rayo llegan ambos: La imagen de la plenitud. Así el noble decide los procesos judiciales y ejecuta los castigos.',
    '37': 'Chia Jen EL DICTAMEN El clan. Es propicia la perseverancia de la mujer. LA IMAGEN El viento surge del fuego: la imagen del clan. Así el noble tiene en sus palabras lo real, y en su conducta la duración,',
    '63': 'La Permanencia en la Cumbre. El orgasmo mantenido. EL DICTAMEN Éxito en lo pequeño. Es propicia la perseverancia. Al principio ventura, al cabo confusiones. LA IMAGEN El agua está por encima del fuego: La imagen del estado Después de la Consumación. Así el noble reflexiona sobre la desgracia y por anticipado se arma contra ella. ',
    '22': 'Pi EL DICTAMEN La Gracia tiene éxito. En lo pequeño es propicio emprender algo. LA IMAGEN Abajo, al pie de la montaña, está el fuego: la imagen de La Gracia. Así procede el noble al aclarar asuntos corrientes, mas no osa decidir de este modo los asuntos conflictuales.',
    '36': 'Ming I / El Oscurecimiento de la Luz EL DICTAMEN El Oscurecimiento de la luz. Es propicio ser perseverante en la emergencia. LA IMAGEN La luz se ha sumergido en la tierra: la imagen del Oscurecimiento de la luz. Así el noble convive con la gran muchedumbre; oculta su resplandor y permanece lúcido sin embargo.',
    '25': 'Wu Wang EL DICTAMEN La Inocencia. Elevado éxito. Es propicia la perseverancia. Si alguien no es recto tendrá desdicha, y no será propicio emprender algo. LA IMAGEN Bajo el cielo va el trueno: Todas las cosas alcanzan el estado natural de la inocencia. Así, ricos en virtud y en correspondencia con el tiempo, cultivaban y alimentaban los antiguos reyes a todos los seres.',
    '17': 'Sui EL DICTAMEN El Seguimiento tiene elevado éxito. Es propicia la perseverancia. No hay defecto. LA IMAGEN En medio del lago está el trueno: la imagen del seguimiento. Así el noble a la hora del atardecer se recoge para su recreo y descanso.',
    '21': 'Shih Ho / La Mordedura Tajante EL DICTAMEN La Mordedura Tajante tiene éxito. Es propicio administrar justicia. LA IMAGEN Trueno y rayo: la imagen de la Mordedura Tajante. Así los reyes de antaño afirmaban las leyes mediante penalidades claramente establecidas.',
    '51': 'Chen /  Lo Suscitativo  (La conmoción, el Trueno) EL DICTAMEN La Conmoción trae éxito. Llega la conmoción: ¡Ju, ju! Palabras rientes: ¡Ja, ja! La conmoción aterra a cien millas y él no deja caer el cucharón sacrificial, ni el cáliz. LA IMAGEN Trueno continuado: la imagen de la conmoción. Así el noble, bajo temor y temblor, rectifica su vida y se explora a sí mismo.',
    '42': 'I / El Aumento EL DICTAMEN El Aumento. Es propicio emprender algo. Es propicio atravesar las grandes aguas. LA IMAGEN Viento y trueno: la imagen del Aumento. Así el noble: cuando ve el bien lo imita, si tiene defectos, se deshace de ellos.',
    '3': 'Chun EL DICTAMEN La Dificultad Inicial obra elevado éxito. Propicio en virtud de la perseverancia. No debe emprenderse nada. Es propicio designar ayudantes. LA IMAGEN Nubes y trueno: La imagen de la Dificultad Inicial. Así el noble actúa desenmarañando y ordenando.',
    '27': 'I / Las Comisuras de la Boca (La Nutrición) EL DICTAMEN Las comisuras de la boca. Perseverancia trae ventura. Presta atención a la nutrición, y a aquello con que trata de llenar su boca uno mismo. LA IMAGEN Abajo, junto a la montaña está el trueno: la imagen de La Nutrición. Así el noble presta atención a sus palabras y es moderado en el comer y el beber.',
    '24': 'Fu EL DICTAMEN El Retorno. Éxito. Salida y entrada sin falla. Llegan amigos sin tacha. Va y viene el camino. Al séptimo día lleva el retorno. Es propicio tener adonde ir. LA IMAGEN El trueno en medio de la tierra: la imagen del Tiempo del Solsticio. Así, durante el tiempo del retorno solar, los antiguos reyes clausuraban los pasos. Mercaderes y forasteros no se trasladaban, y el soberano no viajaba visitando las comarcas.',
    '44': 'Kou / Ir al Encuentro  (La Complacencia) EL DICTAMEN Ir al Encuentro. La muchacha es poderosa. No debe uno casarse con semejante muchacha. LA IMAGEN Bajo el cielo se encuentra el viento: la imagen de Ir al Encuentro. Así procede el príncipe al difundir sus órdenes proclamándolas hacia los cuatro puntos cardinales.',
    '28': 'Ta Kuo / La Preponderancia de lo Grande EL DICTAMEN La Preponderancia de lo Grande. La viga maestra se dobla por el medio. Es propicio tener a dónde ir. Logro. LA IMAGEN El lago pasa por encima de los árboles: La imagen de La Preponderancia de lo Grande. Así el noble, cuando permanece solo, no se aflige, y si debe renunciar al mundo, no desespera.',
    '50': 'Ting EL DICTAMEN El Caldero. Elevada ventura. Éxito. LA IMAGEN Sobre la madera hay fuego: la imagen del caldero. Así el noble, rectificando su posición, afirma el destino.',
    '32': 'Heng / La Duración EL DICTAMEN Éxito. No hay falla. Es propicia la perseverancia. Es propicio que uno tenga a dónde ir. LA IMAGEN Trueno y viento: la imagen de la duración. Así el noble permanece firme y no modifica su rumbo.',
    '57': 'Sun / Lo Suave (Lo Penetrante, el Viento) EL DICTAMEN Lo suave. Éxito por lo pequeño. Es propicio tener a dónde ir. Es propicio ver al gran hombre. LA IMAGEN Vientos que se siguen uno a otro: la imagen de lo suavemente penetrante. Así el noble difunde sus mandamientos y da cumplimiento a sus asuntos.',
    '48': 'Ching / El Pozo de Agua EL DICTAMEN El Pozo. Puede cambiarse de ciudad, mas no puede cambiarse de pozo. Éste no disminuye y no aumenta. Ellos vienen y van y recogen del pozo. Cuando casi se ha alcanzado el agua del pozo pero todavía no se llegó abajo con la cuerda o se rompe el cántaro, eso trae desventura. LA IMAGEN Sobre la madera está el agua: la imagen del pozo. Así el noble alienta al pueblo durante el trabajo y lo exhorta a ayudarse mutuamente.',
    '18': 'Ku /El Trabajo en lo Echado a Perder EL DICTAMEN El Trabajo en lo Echado a Perder tiene elevado éxito. Es propicio atravesar las grandes aguas. Antes del punto inicial tres días, después del punto inicial tres días. LA IMAGEN Al borde de la montaña sopla el viento: la imagen del echarse a perder. Así el noble sacude a las gentes y fortalece su espíritu.',
    '46': 'Sheng / La Subida  (El empuje hacia arriba) EL DICTAMEN La subida tiene elevado éxito. Hay que ver al gran hombre. ¡No temas! La partida hacia el Sur trae ventura. LA IMAGEN En medio de la tierra crece la madera: la imagen de la subida. Así el noble, con gran dedicación, acumula lo pequeño para lograr lo elevado y lo grande.',
    '64': 'Sung EL DICTAMEN El conflicto: eres veraz y te frenan. Detenerse con cautela a mitad de camino trae ventura. Ir hasta el fin trae desventura. Es propicio ver al gran hombre. No es propicio atravesar las grandes aguas. LA IMAGEN Cielo y agua se mueven en sentido contrario: La imagen del conflicto. Así el noble, en todos los negocios que realiza, reflexiona debidamente sobre su comienzo. ',
    '47': 'K’un / La Desazón  (La Opresión. El Agotamiento) EL DICTAMEN La desazón. Logro. Perseverancia. El gran hombre obra ventura. Ningún defecto. Si uno tiene algo que decir, no se le cree. LA IMAGEN En el lago no hay agua: la imagen del agotamiento. Así el noble empeña su vida con el fin de seguir su voluntad.',
    '64': 'La comunión de los amantes El orgasmo sostenido EL DICTAMEN Antes de la Consumación. Logro. Pero si al pequeño zorro, cuando casi ha consumado la travesía, se le hunde la cola en el agua, no hay nada que sea propicio. LA IMAGEN El fuego está por encima del agua: La imagen del estado anterior a la transición. Así el noble es cauteloso en la discriminación de las cosas, a fin de que cada una llegue a ocupar su lugar.',
    '40': 'Hsieh EL DICTAMEN La Liberación. Es propicio el Sudoeste. Si ya no queda nada a donde uno debiera ir, es venturoso el regreso. Si todavía hay algo a donde uno debiera ir, entonces es venturosa la prontitud. LA IMAGEN Trueno y lluvia se levantan: la imagen de la Liberación. Así el noble perdona las faltas y exime de culpa.',
    '59': 'Huan EL DICTAMEN La Disolución. Éxito. El rey se acerca a su templo. Es propicio cruzar las grandes aguas. Es propicia la perseverancia. LA IMAGEN El viento planea sobre el agua: la imagen de la disolución. Así los antiguos reyes ofrecían sacrificios al Señor y erigían templos.',
    '29': 'K’an EL DICTAMEN Lo Abismal repetido. Si eres veraz, tendrás logro en tu corazón, y lo que hicieres tendrá éxito. LA IMAGEN El agua fluye ininterrumpidamente y llega a la meta: la imagen de Lo Abismal reiterado. Así el noble observa una conducta de constante virtud y ejerce el negocio de la enseñanza.',
    '4': 'Meng / La Necedad Juvenil EL DICTAMEN La Necedad juvenil tiene éxito. No soy yo quien busca al joven necio, el joven necio me busca a mí. Al primer oráculo doy razón. Si pregunta dos, tres veces, es molestia. Cuando molesta no doy información. Es propicia la perseverancia. LA IMAGEN En lo bajo, el pie de la montaña, surge un manantial: la imagen de la juventud. Así el noble, mediante su actuación escrupulosa, sustenta su carácter.',
    '7': 'Shih / El Ejército EL DICTAMEN El Ejército requiere perseverancia y un hombre fuerte. Ventura sin falla. LA IMAGEN En medio de la tierra hay agua: la imagen del ejército. Así el noble, en virtud de su magnanimidad para con el pueblo, acrecienta sus multitudes.',
    '33': 'Tun EL DICTAMEN La Retirada. Éxito. En lo pequeño es propicia la perseverancia. LA IMAGEN Bajo el cielo está la montaña: la imagen de La Retirada. Así el noble mantiene a distancia al vulgar, no con ira, sino con mesura.',
    '31': 'Hsien / El Influjo EL DICTAMEN El Influjo. Logro. Es propicia la perseverancia. Tomar una muchacha trae ventura. LA IMAGEN Sobre la montaña hay un lago: la imagen del influjo. Así el noble, en virtud de su disposición receptiva deja que los hombres se acerquen a él.',
    '56': 'Lü / El Andariego EL DICTAMEN El Andariego. Éxito por lo pequeño. Al andariego la perseverancia le trae ventura. LA IMAGEN Sobre la montaña hay fuego: la imagen del andariego. Así el noble aplica con claridad y cautela las penalidades y no arrastra pendencias.',
    '62': 'Hsiao Kuo / La Preponderancia de lo Pequeño EL DICTAMEN La Preponderancia de lo pequeño. Éxito. Es propicia la perseverancia. Pueden hacerse cosas pequeñas, no deben hacerse cosas grandes. El pájaro volador trae el mensaje: no es bueno aspirar hacia lo alto, es bueno permanecer abajo. ¡Gran ventura! LA IMAGEN Sobre la montaña está el trueno: La imagen de la Preponderancia de lo Pequeño. Así el noble, en su conducta da preponderancia a la veneración. En casos de duelo da preponderancia al duelo. En sus gastos da preponderancia a la economía.',
    '53': 'Chien / La Evolución  (El progreso paulatino) EL DICTAMEN La Evolución. Casan a la muchacha. ¡Ventura! Es propicia la perseverancia. LA IMAGEN Sobre la montaña hay un árbol: la imagen de la evolución. Así permanece el noble en digna virtud a fin de mejorar las costumbres.',
    '39': 'Chien EL DICTAMEN El Impedimento. Es propicio el Sudoeste. No es propicio el Nordeste. Es propicio ver al gran hombre. La perseverancia trae ventura. LA IMAGEN Sobre la montaña se encuentra el agua: la imagen del Impedimento. Así el noble se orienta hacia su propia persona y va formando su carácter.',
    '52': 'Ken EL DICTAMEN Aquietamiento de su espalda, de modo que él ya no siente su cuerpo. Va al patio y no ve a su gente. Ningún defecto. LA IMAGEN Montañas, una junto a otra: la imagen del aquietamiento. Así el noble no va en sus pensamientos más allá de su situación.',
    '15': 'Ch’ien / La Modestia EL DICTAMEN La Modestia va creando el éxito. El noble lleva a buen término. LA IMAGEN En medio de la tierra hay una montaña: La imagen de la Modestia. Así disminuye el noble lo que está de más y aumenta lo que está de menos. Sopesa las cosas y las iguala.',
    '12': 'P’i / El Estancamiento EL DICTAMEN El Estancamiento. Hombres malignos no favorecen  la perseverancia del noble. Lo grande se va, llega lo pequeño. LA IMAGEN Cielo y Tierra no se unen: la imagen del Estancamiento. Así el noble se retira, refugiándose en su valer interior, con el fin de eludir dificultades. No permite que le honren con ingresos.',
    '45': 'Ts’ui / La Reunión  (La Recolección) EL DICTAMEN La Reunión. Éxito. El rey se acerca a su templo. Es propicio ver al gran hombre. Esto trae éxito. Es propicia la perseverancia. Ofrendar grandes sacrificios engendra ventura. Es propicio emprender algo. LA IMAGEN El lago está por sobre la montaña: la imagen de la reunión. Así el noble renueva sus armas para afrontar lo imprevisto.',
    '35': 'Chin / El Progreso EL DICTAMEN El Progreso: El fuerte príncipe es honrado con caballos en gran número. En un solo día se lo recibe tres veces LA IMAGEN El sol se eleva por sobre la tierra: la imagen del Progreso. Así el noble ilumina por sí solo sus claros talentos.',
    '16': 'Yü EL DICTAMEN El Entusiasmo. Es propicio designar ayudantes y hacer marchar ejércitos. LA IMAGEN El trueno surge estruendoso de la tierra: la imagen del Entusiasmo. Así los antiguos reyes hacían música para honrar los méritos,  y la ofrendaban con magnificencia al Dios Supremo, invitando a sus antepasados a presenciarlo.',
    '20': 'Kuan EL DICTAMENLa Contemplación. Se ha cumplido la ablución, pero aún no la ofrenda. Pleno de confianza levantan la mirada hacia él. LA IMAGEN El viento planea sobre la tierra: la imagen de la Contemplación. Así los antiguos reyes visitaban las regiones del mundo, contemplaban al pueblo y brindaban enseñanza.',
    '8': 'Pi EL DICTAMEN La solidaridad trae ventura. Indaga el oráculo una vez más, ve si tienes elevación, duración y perseverancia;  si es así no habrá defecto. Los inseguros se allegan poco a poco. El que llega tarde tiene desventura. LA IMAGEN Sobre la tierra hay agua: la imagen de la solidaridad. Así los reyes de tiempos antiguos otorgaban en feudo los diferentes estados y mantenían trato amistoso con los príncipes vasallos.',
    '23': 'Po EL DICTAMEN La Desintegración. No es propicio ir a parte alguna. LA IMAGEN La montaña descansa sobre la tierra: la imagen de la desintegración. Así únicamente mediante ricas dádivas a los inferiores pueden los superiores asegurar su posición.',
    '2': 'K’un EL DICTAMEN Lo receptivo obra elevado éxito, propiciante por la perseverancia de una yegua. Cuando el noble ha de emprender algo y quiere avanzar, se extravía; mas si va en seguimiento encuentra conducción. Es propicio encontrar amigos al Oeste y al Sur,  evitar los amigos al Este y al Norte. Una tranquila perseverancia trae ventura. LA IMAGEN El estado de la Tierra es la receptiva entrega. Así el noble, de naturaleza amplia, sostiene al mundo externo.',
} 

var infoTrigramasVital = {
    2: 'CHIEN – TAE MO 乾 Qian (Chien) LA CREATIVIDAD DEL CIELO 41VB',
    3: 'TUI – YANG OE 兌 Dui (Tui) LA CALMA DEL LAGO 5SJ',
    4: 'LI – YANG KEO LI, LUMINOSIDAD DEL FUEGO 62V',
    5: 'CHEN – TOU MAE 震 Zhen (Chen) ZHEN, CHEN, MOVILIDAD DEL TRUENO 3ID',
    6: 'SUN – REN MAE 巽 Xun (Suen) SUN, SUEN, LA PENETRACIÓN DEL VIENTO 7P',
    7: 'KAN – YIN KEO 坎 Kan (K’an) KAN, K ́AN, EL ABISMO DEL AGUA 6R',
    0: 'KEN – YIN OE 艮 Gen (Ken) GEN, KEN, LA INMOVILIDAD DE LA MONTAÑA 6MC',
    1: 'KUN – CHONG MAI 坤 Kun (K’uen) KUN, K ́UEN, RECEPTIVIDAD DE LA TIERRA 4B'
}

var infoTrigramasNacimiento ={
    '111': 'CHIEN – TAE MO 乾 Qian (Chien) LA CREATIVIDAD DEL CIELO 41VB',
    '011': 'TUI – YANG OE 兌 Dui (Tui) LA CALMA DEL LAGO 5SJ',
    '101': 'LI – YANG KEO LI, LUMINOSIDAD DEL FUEGO 62V',
    '001': 'CHEN – TOU MAE 震 Zhen (Chen) ZHEN, CHEN, MOVILIDAD DEL TRUENO 3ID',
    '110': 'SUN – REN MAE 巽 Xun (Suen) SUN, SUEN, LA PENETRACIÓN DEL VIENTO 7P',
    '010': 'KAN – YIN KEO 坎 Kan (K’an) KAN, K ́AN, EL ABISMO DEL AGUA 6R',
    '100': 'KEN – YIN OE 艮 Gen (Ken) GEN, KEN, LA INMOVILIDAD DE LA MONTAÑA 6MC',
    '000': 'KUN – CHONG MAI 坤 Kun (K’uen) KUN, K ́UEN, RECEPTIVIDAD DE LA TIERRA 4B'
}

var unidadAno = {
    0: 15,
    1: 27,
    2: 39,
    3: 51,
    4: 3,
    5: 15,
    6: 27,
    7: 39,
    8: 51,
    9: 3
}

var rama = [ 
    {'Ciclo Cosmico': 'ShaoYin', 'Ciclo Normal': 'A(+)', 'RI':'RI 子Zǐ'},
    {'Ciclo Cosmico': 'TaeYin', 'Ciclo Normal': 'T(-)', 'RII':'RII 丑Chǒu'},
    {'Ciclo Cosmico': 'ShaoYang', 'Ciclo Normal': 'Md(+)', 'RIII':'RIII  寅 Yín'},
    {'Ciclo Cosmico': 'YangMing', 'Ciclo Normal': 'Md(-)', 'RIV':'RIV 卯Mǎo'},
    {'Ciclo Cosmico': 'TaeYang', 'Ciclo Normal': 'T(+)', 'RV':'RV  辰Chén'},
    {'Ciclo Cosmico': 'JueYin', 'Ciclo Normal': 'F(-)', 'RVI':'RVI 巳Sì'},
    {'Ciclo Cosmico': 'ShaoYin', 'Ciclo Normal': 'F(+)', 'RVII':'RVII 午Ǔ'},
    {'Ciclo Cosmico': 'TaeYin', 'Ciclo Normal': 'T(-)', 'RVIII':'RVIII 未Wèi'},
    {'Ciclo Cosmico': 'ShaoYang', 'Ciclo Normal': 'Me(+)', 'RIX':'RIX 申Shēn'},
    {'Ciclo Cosmico': 'YangMing', 'Ciclo Normal': 'Me(-)', 'RX':'RX  酉Yǒu'},
    {'Ciclo Cosmico': 'TaeYang', 'Ciclo Normal': 'T(+)', 'RXI':'RXI 戌Xū'},
    {'Ciclo Cosmico': 'JueYin', 'Ciclo Normal': 'A(-)', 'RXII':'RXII 亥Hài'}
]

var tronco = [
    {'Ciclo Cosmico': 'Tierra Humedad', 'Ciclo Normal': 'Madera Vesicula Biliar', 'TI':'TI 甲Jiǎ'},
    {'Ciclo Cosmico': 'Metal Sequedad', 'Ciclo Normal': 'Madera Higado', 'TII':'TII 乙Yǐ'},
    {'Ciclo Cosmico': 'Agua Frio', 'Ciclo Normal': 'Fuego I.Delgado', 'TIII':'TIII 丙Bǐng'},
    {'Ciclo Cosmico': 'Madera Viento', 'Ciclo Normal': 'Fuego Corazon', 'TIV':'TIV 丁Dīng'},
    {'Ciclo Cosmico': 'Fuego Calor', 'Ciclo Normal': 'Tierra Estomago', 'TV':'TV 戊Wù'},
    {'Ciclo Cosmico': 'Tierra Humedad', 'Ciclo Normal': 'Tierra Brazo', 'TVI':'TVI 己Jǐ'},
    {'Ciclo Cosmico': 'Metal Sequedad', 'Ciclo Normal': 'Metal I.Grueso', 'TVII':'TVII 庚Gēng'},
    {'Ciclo Cosmico': 'Agua Frio', 'Ciclo Normal': 'Metal Pulmon', 'TVIII':'TVIII 辛Xīn'},
    {'Ciclo Cosmico': 'Madera Viento', 'Ciclo Normal': 'Agua Vejiga', 'TIX':'TIX 壬Rén'},
    {'Ciclo Cosmico': 'Fuego Calor', 'Ciclo Normal': 'Agua Riñon', 'TX':'TX  癸Guǐ'}
]

var animalEnblematico = [
    {'Animal':'Rata 鼠', 'Horas':'23-01', 'Canal Unitario':'C-R',  'Energia Celeste':'Calor', 'Punto Estatico':'VB13', 'Mes Lunar': '11'},
    {'Animal':'Buey 牛', 'Horas':'01-03', 'Canal Unitario':'P-B',  'Energia Celeste':'Humedad', 'Punto Estatico':'H14', 'Mes Lunar': '12'},
    {'Animal':'Tigre 虎', 'Horas':'03-05', 'Canal Unitario':'TR-VB', 'Energia Celeste':'Fuego', 'Punto Estatico':'P7', 'Mes Lunar': '1'},
    {'Animal':'Liebre 兔', 'Horas':'05-07', 'Canal Unitario':'IG-E', 'Energia Celeste':'Sequedad', 'Punto Estatico':'IG6', 'Mes Lunar': '2'},
    {'Animal':'Dragón 龍', 'Horas':'07-09', 'Canal Unitario':'ID-V', 'Energia Celeste':'Frio', 'Punto Estatico':'E40', 'Mes Lunar': '3'},
    {'Animal':'Serpiente 蛇', 'Horas':'09-11', 'Canal Unitario':'MC-H', 'Energia Celeste':'Viento', 'Punto Estatico':'B4', 'Mes Lunar': '4'},
    {'Animal':'Caballo 馬', 'Horas':'11-13', 'Canal Unitario':'C-R', 'Energia Celeste':'Calor', 'Punto Estatico':'C4', 'Mes Lunar': '5'},
    {'Animal':'Cabra 羊', 'Horas':'13-15', 'Canal Unitario':'P-B', 'Energia Celeste':'Humedad', 'Punto Estatico':'ID12', 'Mes Lunar': '6'},
    {'Animal':'Mono 猴', 'Horas':'15-17', 'Canal Unitario':'TR-VB', 'Energia Celeste':'Fuego', 'Punto Estatico':'V60', 'Mes Lunar': '7'},
    {'Animal':'Gallo 雞', 'Horas':'17-19', 'Canal Unitario':'IG-E', 'Energia Celeste':'Sequedad', 'Punto Estatico':'R23', 'Mes Lunar': '8'},
    {'Animal':'Perro 狗', 'Horas':'19-21', 'Canal Unitario':'ID-V', 'Energia Celeste':'Frio', 'Punto Estatico':'MC8', 'Mes Lunar': '9'},
    {'Animal':'Cerdo 豬', 'Horas':'21-23', 'Canal Unitario':'MC-H', 'Energia Celeste':'Viento', 'Punto Estatico':'TR10', 'Mes Lunar': '10'}
]

var tabla = {
    1:  [0, 0, 0],
    2:  [1, 1, 1],
    3:  [2, 2, 2],
    4:  [3, 3, 3],
    5:  [4, 4, 4],
    6:  [5, 5, 5],
    7:  [6, 6, 6],
    8:  [7, 7, 7],
    9:  [8, 8, 8],
    10: [9, 9, 9],
    11: [10, 0, 10],
    12: [11, 1, 11],
    13: [0, 2, 0],
    14: [1, 3, 1],
    15: [2, 4, 2],
    16: [3, 5, 3],
    17: [4, 6, 4],
    18: [5, 7, 5],
    19: [6, 8, 6],
    20: [7, 9, 7],
    21: [8, 0, 8],
    22: [9, 1, 9],
    23: [10, 2, 10],
    24: [11, 3, 11],
    25: [0, 4, 0],
    26: [1, 5, 1],
    27: [2, 6, 2],
    28: [3, 7, 3],
    29: [4, 8, 4],
    30: [5, 9, 5],
    31: [6, 0, 6],
    32: [7, 1, 7],
    33: [8, 2, 8],
    34: [9, 3, 9],
    35: [10, 4, 10],
    36: [11, 5, 11],
    37: [0, 6, 0],
    38: [1, 7, 1],
    39: [2, 8, 2],
    40: [3, 9, 3],
    41: [4, 0, 4],
    42: [5, 1, 5],
    43: [6, 2, 6],
    44: [7, 3, 7],
    45: [8, 4, 8],
    46: [9, 5, 9],
    47: [10, 6, 10],
    48: [11, 7, 11],
    49: [0, 8, 0],
    50: [1, 9, 1],
    51: [2, 0, 2],
    52: [3, 1, 3],
    53: [4, 2, 4],
    54: [5, 3, 5],
    55: [6, 4, 6],
    56: [7, 5, 7],
    57: [8, 6, 8],
    58: [9, 7, 9],
    59: [10, 8, 10],
    60: [11, 9, 11]
} 

const franjasHorarias = {
    'EEUU(Los Angeles)':'America/Los_Angeles',
    'EEUU(Chicago)': 'America/Chicago',
    'EEUU(NY)': 'America/New_York',
    'Reino Unido':'Europe/London',
    'España':'Europe/Madrid',
    'Portugal':'Europe/Lisbon',
    'Alemania':'Europe/Berlin',
    'Francia':'Europe/Paris',
    'Italia':'Europe/Rome',
    'Belgica':'Europe/Brussels',
    'Dinamarca':'Europe/Berlin',
    'Polonia':'Europe/Warsaw',
    'Paises Bajos':'Europe/Amsterdam',
    'Lituania':'Europe/Vilna',
    'Noruega':'Europe/Oslo',
    'Suecia':'Europe/Stockholm',
    'Peru':'America/Lima',
    'Colombia':'America/Bogota',
    'Venezuela':'America/Caracas',
    'Brazil':'Ameriaca/Manaus',
    'Bolivia':'America/La_Paz',
    'Paraguay':'America/Asuncion',
    'Argentina':'America/Buenos_Aires',
    'Chile':'America/Santiago',
    'Ecuador':'America/Lima'
}
