  // Utilizando Fetch para obtener el contenido del encabezado.html
  fetch('dynamic/header.html')
  .then(response => response.text())
  .then(html => {
      // Inserta el contenido del encabezado en el contenedor
      document.getElementById('encabezado-container').innerHTML = html;
  })
  .catch(error => console.error('Error al cargar el encabezado', error));