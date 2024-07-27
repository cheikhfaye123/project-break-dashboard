document.addEventListener("DOMContentLoaded", function() {
    let heuresDiv = document.querySelector(".heures");
    let dateDiv = document.querySelector(".date");
    let messageDiv = document.querySelector(".message");

    let affichageHeure = function() {
        let today, annee, mois, jourNumero, jourNom, heures, minutes, secondes, deuxChiffres, message;

    
        today = new Date();

    
        annee = today.getFullYear();

        
        deuxChiffres = function(element) {
            return element < 10 ? "0" + element : element;
        };
        mois = deuxChiffres(today.getMonth() + 1);

    
        jourNumero = deuxChiffres(today.getDate());

        
        let listeJours = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        jourNom = listeJours[today.getDay()];

       
        heures = deuxChiffres(today.getHours());
        minutes = deuxChiffres(today.getMinutes());
        secondes = deuxChiffres(today.getSeconds());

        
        if (heures >= 0 && heures < 7) {
            message = "Es hora de descansar. Apaga y sigue mañana";
        } else if (heures >= 7 && heures < 12) {
            message = "Buenos días, desayuna fuerte y a darle al código";
        } else if (heures >= 12 && heures < 14) {
            message = "Echa un rato más pero no olvides comer";
        } else if (heures >= 14 && heures < 16) {
            message = "Espero que hayas comido";
        } else if (heures >= 16 && heures < 18) {
            message = "Buenas tardes, el último empujón";
        } else if (heures >= 18 && heures < 22) {
            message = "Esto ya son horas extras, ... piensa en parar pronto";
        } else if (heures >= 22 && heures < 24) {
            message = "Buenas noches, es hora de pensar en parar y descansar";
        }

        
        heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
        dateDiv.textContent = jourNumero + "/" + mois + "/" + annee;
        messageDiv.textContent = message;

        
        setTimeout(affichageHeure, 1000);
    };

    affichageHeure();
});
