document.getElementById("contact-button").addEventListener("click", function() {
    // Trova la posizione verticale della sezione dei contatti
    const contactSection = document.getElementById("container-5");
    const contactSectionOffset = contactSection.offsetTop;

    // Scorri la pagina fino alla posizione della sezione dei contatti
    window.scrollTo({
        top: contactSectionOffset,
        behavior: "smooth" 
    });
});


document.getElementById("project-button").addEventListener("click", function() {

    const contactSection = document.getElementById("container-3");
    const contactSectionOffset = contactSection.offsetTop;

    window.scrollTo({
        top: contactSectionOffset,
        behavior: "smooth" 
    });
});

// Seleziona l'icona per tornare in cima
var goTop = document.getElementById("go-top");

// Mostra l'icona quando si scorre verso il basso
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
};

// Aggiungi un gestore di eventi per lo scorrimento verso l'alto quando si clicca sull'icona
goTop.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
