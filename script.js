function openPhoto(src) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('photoInModal');
    modal.style.display = "flex";
    modalImg.src = src;
}

function closePhoto() {
    const modal = document.getElementById('photoModal');
    modal.style.display = "none";
}
