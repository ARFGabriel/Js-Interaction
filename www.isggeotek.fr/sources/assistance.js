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
    function requete(e){ // e représente l'évènement
        e.preventDefault();
        let données=[]
        let prenom= document.querySelector('#p');
        let prenomValue=prenom.value;
        données.push(prenomValue);
        let nom = document.querySelector('#n');
        let nomValue=nom.value;
        données.push(nomValue);
        let mail = document.querySelector('#m');
        let mailValue=mail.value;
        données.push(mailValue);
        let pays=document.querySelector('#countries');
        let paysValue=pays.value;
        données.push(paysValue);
        let requête=document.querySelector('#requete');
        let reqValue=requête.value;
        données.push(reqValue);
        console.log(données);
        /*let data = {
            'Prénom': prenomValue,
            'Nom': nomValue,
            'mail': mailValue,
            'pays': paysValue,
            'requete': reqValue
        };*/
    };
    bt.addEventListener('click',requete);

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
        let aide = document.querySelector('#aide');
        let form = document.querySelector('#formulaire');
        if (body.classList.contains('light-mode')) {
            aide.classList.replace('dark-mode', 'light-mode');
            form.classList.replace('dark-mode', 'light-mode');
            ldbutton.textContent = '☀️';
        } else {
            aide.classList.replace('light-mode', 'dark-mode');
            form.classList.replace('light-mode', 'dark-mode');
            ldbutton.textContent = '🌙';
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