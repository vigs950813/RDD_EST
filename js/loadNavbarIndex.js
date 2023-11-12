document.addEventListener('DOMContentLoaded', function () {
    fetch('dynamic/navbarIndex.html')
       .then(response => response.text())
       .then(html => {
          document.getElementById('navbar-container').innerHTML = html;
       })
       .catch(error => console.error('Error loading navbar', error));
 });
 