"use strict";

document.addEventListener('DOMContentLoaded',function() // DomContentLoader attent le chargement de la page avant de lancer le js
{ 
    
    let ldbutton = document.getElementById('ldbt');
    function DarkMode() {
        let body= document.body;
        let liste = document.querySelector('.liste');
        let show = document.querySelector('.show');
        if (body.classList.contains('light-mode')) {
            liste.classList.replace('dark-mode', 'light-mode');
            show.classList.replace('light-mode', 'dark-mode');
        } else {
            
            liste.classList.replace('light-mode', 'dark-mode');
            show.classList.replace('light-mode', 'dark-mode');
        }
    }
    ldbutton.addEventListener('click',DarkMode);

});