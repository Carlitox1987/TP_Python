function defaultValues(){
    var provincias = document.getElementsByClassName('Provincia_iframe');
    document.getElementById("provincia").value = "Chubut";
    provincias[0].style.display="flex";
    document.getElementById("descripcion").innerHTML  = "El Sombrero es una localidad argentina ubicada en el departamento Paso de Indios, provincia del Chubut. La localidad se ubica en el cruce de la Ruta Provincial 53 y la Ruta Provincial 27";
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
    }
    else if(provincia_item.options[provincia_item.selectedIndex].text==="Rio Negro"){
        document.getElementById("descripcion").innerHTML  = "La Buitrera es una localidad fosilífera argentina dentro del Área Paleontológica La Buitrera, donde afloran la Formación Candeleros (99,6-97 millones de años) y la Formación Huincul (97-93,5 millones de años).        Se halla sobre la ladera noroccidental de la Planicie de Rentería, hacia el valle del Limay, es decir, hacia el embalse Ezequiel Ramos Mexía, y a unos 30 kilómetros al noroeste del pueblo de Cerro Policía. Tanto el pueblo como La Buitrera están en el territorio del departamento de El Cuy, que forma parte de la provincia de Río Negro (Argentina).";
    }
    else if(provincia_item.options[provincia_item.selectedIndex].text==="San Juan"){
        document.getElementById("descripcion").innerHTML  = "El Parque Provincial de Ischigualasto​ o Valle de la Luna, está situado en Argentina, en el noreste de la provincia de San Juan y limita con la provincia de La Rioja al norte. Se encuentra a 324 km de la ciudad de San Juan​ por carretera y a 124 km del departamento Valle Fértil​ (también conocido como Villa San Agustín del Valle Fértil). Su altitud respecto al nivel del mar varía entre los 1200 hasta los 1800 metros en las cumbres de mayor altura. Es un área protegida de 275 369 ha y célebre a nivel científico, ya que resguarda una importante reserva paleontológica. Es el único lugar del mundo donde puede verse totalmente al descubierto y perfectamente diferenciado todo el período triásico en forma completa y ordenada. Se calcula que las formaciones geológicas de este sitio tienen una antigüedad de entre 200 y 250 millones de años, característica que comparte con el parque nacional Talampaya, con el que limita al oeste por estar situado en la provincia de La Rioja. ";
    }

}
