document.addEventListener('DOMContentLoaded', function () {
    fetch('dynamic/sidebar.html')
       .then(response => response.text())
       .then(html => {
          document.getElementById('sidebar-container').innerHTML = html;
       })
       .catch(error => console.error('Error loading sidebar', error));
 });
 