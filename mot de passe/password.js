const displaybox = document.getElementById("password");
const longueurMax = 50;
const longueurMin = 12;

const lettresMajuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettresMinuscules = "abcdefghijklmnopqrstuvwxyz";
const chiffres = "0123456789";
const caracteresSpeciaux = "!@#$%^&*()-_=+";

const tousLesCaracteres = lettresMajuscules + lettresMinuscules + chiffres + caracteresSpeciaux;

const genererMotDePasse = () => {
    let password = "";

    const longueurMotDePasse = Math.floor(Math.random() * (longueurMax - longueurMin + 1)) + longueurMin;

    password += lettresMajuscules[Math.floor(Math.random() * lettresMajuscules.length)];
    password += lettresMinuscules[Math.floor(Math.random() * lettresMinuscules.length)];
    password += chiffres[Math.floor(Math.random() * chiffres.length)];
    password += caracteresSpeciaux[Math.floor(Math.random() * caracteresSpeciaux.length)];

    while (password.length < longueurMotDePasse) {
        password += tousLesCaracteres[Math.floor(Math.random() * tousLesCaracteres.length)];
    }

    displaybox.value = password;
};

