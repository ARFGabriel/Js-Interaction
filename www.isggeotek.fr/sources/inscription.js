"use strict";

$('.nav-toggle').click(function(e){
    e.preventDefault();
    $('nav').toggleClass('is-open');
});

document.addEventListener('DOMContentLoaded', (event) => {
    let bt = document.querySelector("#bt");

let emailInput = document.getElementById('m');
let emailError = document.getElementById('mailError');
let submitButton = document.querySelector('#bt');

function validateEmail(e){
    // Expression régulière pour vérifier le format de l'e-mail
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(emailInput.value)){
        emailError.textContent = ''; // L'e-mail est valide
        submitButton.disabled = false; // Active le bouton de soumission
    } else {
        emailError.textContent = "Veuillez entrer une adresse e-mail valide.";
        submitButton.disabled = true; // Désactive le bouton de soumission
    }
};

// Récupération d'informations
function login(e){
    e.preventDefault();
    let données=[];
    let Pnom=[];
    let infos=[];
    let localisation=[];
    /*let genre = document.getElementById('input[name="genre"]:checked');*/
    let genre = document.querySelector('input[name="genre"]:checked').id;
    Pnom.push(genre);
    let prenom= document.querySelector('#p');
    let prenomValue=prenom.value;
    Pnom.push(prenomValue);
    let nom = document.querySelector('#n');
    let nomValue=nom.value;
    Pnom.push(nomValue);
    données.push(Pnom);
    let mail = document.querySelector('#m');
    let mailValue=mail.value;
    infos.push(mailValue);
    let tel = document.querySelector('#t');
    let telValue=tel.value;
    infos.push(telValue);
    données.push(infos);
    let pays=document.querySelector('#countries');
    let paysValue=pays.value;
    localisation.push(paysValue);
    let nrue=document.querySelector('#r');
    let nrueValue=nrue.value;
    localisation.push(nrueValue);
    let rue=document.querySelector('#nr');
    let rueValue=rue.value;
    localisation.push(rueValue);
    let postal=document.querySelector('#cp');
    let postalValue=postal.value;
    localisation.push(postalValue);
    let ville=document.querySelector('#v');
    let villeValue=ville.value;
    localisation.push(villeValue);
    données.push(localisation);
    console.log(données);
};
bt.addEventListener('click',login);

// Désactive le bouton de soumission par défaut
submitButton.disabled = true;
// Ajoute un gestionnaire d'événements pour appeler validateEmail lorsque le formulaire est soumis
emailInput.addEventListener('input', validateEmail);
});
document.addEventListener('DOMContentLoaded',function() // DomContentLoader attent le chargement de la page avant de lancer le js
{
    let ldbutton = document.getElementById('ldbt');
    function DarkMode() {
        let body= document.body;
        let form = document.querySelector('#formulaire');
        if (body.classList.contains('light-mode')) {
            
            form.classList.replace('light-mode', 'dark-mode');
            ldbutton.textContent = '🌙';
        } else {
            form.classList.replace('dark-mode', 'light-mode');
            ldbutton.textContent = '☀️';
        }
    }
    ldbutton.addEventListener('click',DarkMode);

});

/*fetch('/données', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});*/