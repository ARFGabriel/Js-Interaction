"use strict";

document.addEventListener('DOMContentLoaded',function() // DomContentLoader attent le chargement de la page avant de lancer le js
{
    let ldbutton = document.getElementById('ldbt');
    function DarkMode() {
        let body= document.body;
        let debut = document.querySelector('#debut');
        if (body.classList.contains('light-mode')) {
            debut.classList.replace('dark-mode', 'light-mode');
            ldbutton.textContent = '☀️';
        } else {
            debut.classList.replace('light-mode', 'dark-mode');
            ldbutton.textContent = '🌙';
        }
    }
    ldbutton.addEventListener('click',DarkMode);
});