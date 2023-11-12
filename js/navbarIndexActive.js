// Obtener el id que quieres buscar (puedes cambiarlo según tus necesidades)
const idBuscado = 'boton2';

// Utilizar querySelectorAll con un selector de atributo
const elementosConId = document.querySelectorAll('.miBoton[id="' + idBuscado + '"]');

// Ahora elementosConId contiene todos los elementos con la clase 'miBoton' y el id especificado

// Hacer algo con los elementos encontrados (por ejemplo, agregar la clase 'active')
elementosConId.forEach(elemento => {
    elemento.classList.add('active');
});
