// Sélectionnez le bouton de menu burger
const menuButton = document.querySelector('#menu-button');

// Sélectionnez le menu
const menu = document.querySelector('#menu');

// Écoutez l'événement de clic sur le bouton de menu
menuButton.addEventListener('click', () => {
    // Basculez la classe "open" du menu pour afficher ou masquer le menu
    menu.classList.toggle('open');
});

// Sélectionnez tous les liens du menu
const menuLinks = document.querySelectorAll('#menu a');

// Écoutez l'événement de clic sur chaque lien
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Changez la couleur du lien en orange
        link.style.backgroundColor = 'orange';
        // Réinitialisez la couleur après 3 secondes
        setTimeout(() => {
            link.style.backgroundColor = '';
        }, 3000);
    });
});
