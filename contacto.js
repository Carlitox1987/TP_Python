function enviar() {
  let status = validar();
  if (status === 0) {
    confirm("¿Son Correctos los datos a enviar?");
  }
  else {
    alert("Por favor complete todos los campos requeridos");
  }

}
function validar() {
  let nombre = document.getElementById("Nombre").value;
  let apellido = document.getElementById("Apellido").value;
  let email = document.getElementById("Email").value;
  let consulta = document.getElementById("Consulta").value;
  let error = 0;
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (validEmail.test(email)) {
    document.getElementById("emailStatus").innerHTML = null;
  } 
  else {
    document.getElementById("emailStatus").innerHTML = 'Introduzca un Email Valido';
    document.getElementById("emailStatus").style.color = "red";
  }
  if (nombre.length === 0) {
    document.getElementById("nombreStatus").innerHTML = 'Campo Requerido';
    document.getElementById("nombreStatus").style.color = "red";
    error = 1;
  }
  else {
    document.getElementById("nombreStatus").innerHTML = null;
  }
  if (apellido.length === 0) {
    document.getElementById("apellidoStatus").innerHTML = 'Campo Requerido';
    document.getElementById("apellidoStatus").style.color = "red";
    error = 1;
  }
  else {
    document.getElementById("apellidoStatus").innerHTML = null;
  }
  if (consulta.length === 0) {
    document.getElementById("consultaStatus").innerHTML = 'Campo Requerido';
    document.getElementById("consultaStatus").style.color = "red";
    error = 1;
  }
  else {
    document.getElementById("consultaStatus").innerHTML = null;
  }
  return error;
}
function borrar() {
  if (confirm("Desea borrar todo el formulario?") == true) {
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("Fecha").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Consulta").value = "";
  }
}