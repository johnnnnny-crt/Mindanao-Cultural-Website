const galleryCards = document.querySelectorAll(".gallery-card");

galleryCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const image = card.querySelector("img");
        const title = card.querySelector("h3");
        const description = card.dataset.description;

        document.getElementById("galleryModalImage").src = image.src;
        document.getElementById("galleryModalImage").alt = image.alt;
        document.getElementById("galleryModalTitle").textContent = title.textContent;
        document.getElementById("galleryModalDescription").textContent = description || "";

        const modal = new bootstrap.Modal(document.getElementById("galleryModal"));
        modal.show();
    });
});