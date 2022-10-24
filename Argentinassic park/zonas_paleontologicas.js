function defaultValues(){
    var provincias = document.getElementsByClassName('Provincia_iframe');
    document.getElementById("provincia").value = "Chubut";
    provincias[0].style.display="flex";
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

}
