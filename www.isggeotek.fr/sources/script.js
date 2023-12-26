"use strict";

document.addEventListener('DOMContentLoaded',function() // DomContentLoader attent le chargement de la page avant de lancer le js
{ 
    // Obtient les références de l'icône du menu burger et du menu de navigation 
    const burgerIcon= document.getElementById('burger-icon');
    const menu= document.getElementById('menu');
    // Ajoute un écouteur d'évènement au clic sur l'icône du menu burger
    burgerIcon.addEventListener('click',function()
    {
        // Bascule la classe 'active' pour afficher/masquer le menu de navigation
        menu.classList.toggle('active');
    });
    
    let ldbutton = document.getElementById('ldbt');
    function DarkMode() {
        let body= document.body;
        let header = document.querySelector('header');
        let burger = document.querySelector('.burger')
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            header.classList.replace('light-mode', 'dark-mode');
            burger.classList.replace('light-mode', 'dark-mode');
            ldbutton.textContent = '🌙';
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            header.classList.replace('dark-mode', 'light-mode');
            burger.classList.replace('dark-mode', 'light-mode');
            ldbutton.textContent = '☀️';
        }
    }
    ldbutton.addEventListener('click',DarkMode);

});