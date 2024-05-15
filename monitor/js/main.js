let respuesta = document.getElementById("respuesta");
let respuestaServidor = "a";

function callApiRequest() {
  // Hacer una petición para un usuario con ID especifico
  // .get("https://18.132.200.102/iot-car-control/back-end/apis/getRegistro.php")
  axios
    .get("https://18.169.105.156/iot-car-control/back-end/apis/getRegistro.php");
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);
      switch (response.data){
        case "f":
          respuestaServidor = "ADELANTE"; break;
        case "b":
          respuestaServidor = "ATRÁS"; break;
        case "l":
          respuestaServidor = "IZQUIERDA"; break;
        case "r":
          respuestaServidor = "DERECHA"; break;
        default:
          respuestaServidor = "DETENER"; break;
      }
    
    respuesta.innerHTML="Respuesta: <strong>" + respuestaServidor + "</strong>";
    
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
}

setInterval(callApiRequest, 2000);
