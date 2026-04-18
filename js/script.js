// Menu toggle existente
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// EFEITO SIMPLES NOS CARDS
const cards = document.querySelectorAll(".card");

// Quando clicar em qualquer card
cards.forEach(card => {
    card.addEventListener("click", function() {
        // Mostra um alerta simples com o nome do card
        const titulo = this.querySelector("h3").textContent;
        alert(`Você clicou no card: ${titulo}`);
    });
});