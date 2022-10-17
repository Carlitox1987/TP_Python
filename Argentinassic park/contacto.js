function enviar()   
{   
    let status=validar();
    if(status===0){
        confirm("¿Son Correctos los datos a enviar?");
    }
    else{
        alert(status);
    }

}
function validar(){
    let nombre=document.getElementById("Nombre").value;
    let apellido=document.getElementById("Apellido").value;
    let fecha=document.getElementById("Fecha").value;
    let email=document.getElementById("Email").value;
    let consulta=document.getElementById("Consulta").value;
    let today = new Date();
 
    
    if (nombre.length === 0)
  {
    return "Por favor ingrese su Nombre";
  }
  if (apellido.length === 0)
  {
    return "Por favor ingrese su Apellido";
  }
  if (email.length === 0)
  {
    return "Por favor ingrese su Email";
  }
  return 0;
}
function borrar(){
    if(confirm("Desea borrar todo el formulario?")==true){
    document.getElementById("Nombre").value="";
    document.getElementById("Apellido").value="";
    document.getElementById("Fecha").value="";
    document.getElementById("Email").value="";
    document.getElementById("Consulta").value="";
    }
}