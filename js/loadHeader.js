document.addEventListener("DOMContentLoaded", function () {
    // Usa AJAX para cargar el encabezado
    $.ajax({
      url: "dynamic/header.html", // Cambia la ruta si es necesario
      method: "GET",
      success: function (data) {
        // Agrega el encabezado al contenedor en el cuerpo del documento
        document.getElementById("header-container").innerHTML = data;
      },
      error: function (error) {
        console.error("Error al cargar el encabezado:", error);
      },
    });
  });
  