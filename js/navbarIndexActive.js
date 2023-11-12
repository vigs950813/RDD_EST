// Obtener todos los elementos con la clase 'miBoton'
const botones = document.querySelectorAll('.container');

// Agregar un evento clic a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        // Eliminar la clase 'active' de todos los botones
        botones.forEach(b => b.classList.remove('active'));

        // Agregar la clase 'active' al botón actual
        this.classList.add('active');

        

        // Puedes agregar aquí más lógica o acciones después de hacer clic
        // ...
    });
});
