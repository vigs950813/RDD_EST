// Obtener todos los elementos con la clase miDiv
var navItemList = document.querySelectorAll('.nav-item');

// Agregar un listener de clic a cada div
navItemList.forEach(function (navtItem) {
    navtItem.addEventListener('click', function () {
        // Quitar la clase 'clicked' de todos los divs
        navItemList.forEach(function (innerItem) {
            innerDiv.classList.remove('clicked');
        });

        // Agregar la clase 'clicked' solo al div clicado
        navtItem.classList.add('clicked');
    });
});
