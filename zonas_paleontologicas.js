function defaultValues(){
    var provincias = document.getElementsByClassName('Provincia_iframe');
    document.getElementById("provincia").value = "Chubut";
    provincias[0].style.display="flex";
    document.getElementById("descripcion").innerHTML  = "El Sombrero es una localidad argentina ubicada en el departamento Paso de Indios, provincia del Chubut. La localidad se ubica en el cruce de la Ruta Provincial 53 y la Ruta Provincial 27";
    getWeather('-44.120858931238004','-68.65563351425645');
}

function getProv(){
    var provincia_item   = document.getElementById("provincia");
    var className = document.getElementsByClassName('Provincia_iframe');
    for (var index = 0; index < className.length; index++) {
        if(className[index].getAttribute("name")!=provincia_item.options[provincia_item.selectedIndex].text){
            className[index].style.display="none";
        } 
        else
        {
            className[index].style.display="flex";
        }
    }
    if(provincia_item.options[provincia_item.selectedIndex].text==="Chubut"){
        document.getElementById("descripcion").innerHTML  = "El Sombrero es una localidad argentina ubicada en el departamento Paso de Indios, provincia del Chubut. La localidad se ubica en el cruce de la Ruta Provincial 53 y la Ruta Provincial 27";
        getWeather('-44.120858931238004','-68.65563351425645');
        
    }
    else if(provincia_item.options[provincia_item.selectedIndex].text==="Rio Negro"){
        document.getElementById("descripcion").innerHTML  = "La Buitrera es una localidad fosilífera argentina dentro del Área Paleontológica La Buitrera, donde afloran la Formación Candeleros (99,6-97 millones de años) y la Formación Huincul (97-93,5 millones de años).        Se halla sobre la ladera noroccidental de la Planicie de Rentería, hacia el valle del Limay, es decir, hacia el embalse Ezequiel Ramos Mexía, y a unos 30 kilómetros al noroeste del pueblo de Cerro Policía. Tanto el pueblo como La Buitrera están en el territorio del departamento de El Cuy, que forma parte de la provincia de Río Negro (Argentina).";
        getWeather('-39.0140566970869','-67.94362911796264');
    }
    else if(provincia_item.options[provincia_item.selectedIndex].text==="San Juan"){
        document.getElementById("descripcion").innerHTML  = "El Parque Provincial de Ischigualasto​ o Valle de la Luna, está situado en Argentina, en el noreste de la provincia de San Juan y limita con la provincia de La Rioja al norte. Se encuentra a 324 km de la ciudad de San Juan​ por carretera y a 124 km del departamento Valle Fértil​ (también conocido como Villa San Agustín del Valle Fértil). Su altitud respecto al nivel del mar varía entre los 1200 hasta los 1800 metros en las cumbres de mayor altura. Es un área protegida de 275 369 ha y célebre a nivel científico, ya que resguarda una importante reserva paleontológica. Es el único lugar del mundo donde puede verse totalmente al descubierto y perfectamente diferenciado todo el período triásico en forma completa y ordenada. Se calcula que las formaciones geológicas de este sitio tienen una antigüedad de entre 200 y 250 millones de años, característica que comparte con el parque nacional Talampaya, con el que limita al oeste por estar situado en la provincia de La Rioja. ";
        getWeather('-30.635766951676885','-69.03454558360303');
    }

}

function getWeather(lat,long)
{
    fetch(
       'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=metric&appid=5f203f965c01ef8771ea3aa754787325'
       )
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var climaId = data['weather'][0]['id'];
     var clima="";
      switch(climaId) {
        case 200: clima='tormenta con lluvia ligera'; break;
        case 201: clima='tormenta con lluvia'; break;
        case 202: clima='tormenta con fuertes lluvias'; break;
        case 210: clima='tormenta ligera'; break;
        case 211: clima='tormenta'; break;
        case 212: clima='fuerte tormenta'; break;
        case 221: clima='tormenta irregular'; break;
        case 230: clima='tormenta con llovizna ligera'; break;
        case 231: clima='tormenta con llovizna'; break;
        case 232: clima='tormenta con fuerte llovizna'; break;
        case 300: clima='llovizna de intensidad ligera'; break;
        case 301: clima='llovizna'; break;
        case 302: clima='llovizna de fuerte intensidad'; break;
        case 310: clima='lluvia de llovizna de intensidad ligera'; break;
        case 311: clima='lluvia llovizna'; break;
        case 312: clima='llovizna de fuerte intensidad'; break;
        case 313: clima='llovizna y llovizna'; break;
        case 314: clima='fuertes chubascos y lloviznas'; break;
        case 321: clima='llovizna de ducha'; break;
        case 500: clima='lluvia ligera'; break;
        case 501: clima='lluvia moderada'; break;
        case 502: clima='lluvia de gran intensidad'; break;
        case 503: clima='lluvias muy intensas '; break;
        case 504: clima='lluvia extrema'; break;
        case 511: clima='lluvia helada '; break;
        case 520: clima='lluvia de lluvia de intensidad ligera'; break;
        case 521: clima='aguacero '; break;
        case 522: clima='chubasco de lluvia de fuerte intensidad'; break;
        case 531: clima='lluvia torrencial'; break;
        case 600: clima='nieve ligera '; break;
        case 601: clima='Nieve'; break;
        case 602: clima='Fuertes nevadas '; break;
        case 611: clima='aguanieve'; break;
        case 612: clima='Lluvia de aguanieve'; break;
        case 613: clima='Ducha de aguanieve'; break;
        case 615: clima='Lluvia ligera y nieve'; break;
        case 616: clima='Lluvia y nieve '; break;
        case 620: clima='Lluvia de nieve'; break;
        case 621: clima='lluvia de nieve'; break;
        case 622: clima='Fuerte chubasco de nieve'; break;
        case 701: clima='neblina'; break;
        case 711: clima='Fumar'; break;
        case 721: clima='Bruma'; break;
        case 731: clima='remolinos de arena/polvo'; break;
        case 741: clima='niebla'; break;
        case 751: clima='arena'; break;
        case 761: clima='polvo'; break;
        case 762: clima='ceniza volcánica '; break;
        case 771: clima='chubascos'; break;
        case 781: clima='tornado'; break;
        case 800: clima='cielo limpio '; break;
        case 801: clima='pocas nubes: 11-25% '; break;
        case 802: clima='nubes dispersas: 25-50%'; break;
        case 803: clima='nubes rotas: 51-84%'; break;
        case 804: clima='nubes cubiertas: 85-100%'; break;
              
        default:
          clima='un clima sin precedentes';
      } 



    document.getElementById("clima").innerHTML="(Hoy se encuentra con "+clima+" y con una temperatura de "+tempValue+"°)";
    
    })
    
    .catch(err => alert("Wrong city name!"));
    }