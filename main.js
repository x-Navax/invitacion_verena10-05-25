
// fecha límite
var fechaLimite = new Date("December 21, 2024 21:30:00").getTime();

// actualizar el contador cada un segundo
var intervalo = setInterval(function () {
  // obtener la fecha actual
  var fechaActual = new Date().getTime();

  // calcular la diferencia entre la fecha límite y la fecha actual
  var tiempoRestante = fechaLimite - fechaActual;

  // si se ha alcanzado la fecha límite, detener el intervalo y mostrar un mensaje
  if (tiempoRestante <= 0) {
    clearInterval(intervalo);
    document.getElementById("mensaje").innerHTML = "¡Llegó el día!";
    return;
  }

  // cálculos para obtener los días, horas, minutos y segundos restantes
  var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  var horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  // mostrar el contador en el HTML
  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;
}, 1000);

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var asistencia = document.getElementsByName("asistira");
    var seleccionado = false;

    for (var i = 0; i < asistencia.length; i++) {
      if (asistencia[i].checked) {
        seleccionado = true;
        break;
      }
    }

    if (nombre == "" || apellido == "" || !seleccionado) {
      alert("Por favor, complete todos los campos antes de enviar el formulario.");
      return false;
    }

    return true;
  }