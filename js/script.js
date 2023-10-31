function ToggleMode() {
    const htmlDocument = document.documentElement;
    htmlDocument.classList.toggle("light-mode");

    // Obtendo a imagem do avatar.
    const imgAvatar = document.querySelector("#profile img");

    // Substituindo a imagem.
    if (htmlDocument.classList.contains("light-mode")) {
        imgAvatar.setAttribute("src", "./assets/avatar-lightmode.png");
    }
    else {
        imgAvatar.setAttribute("src", "./assets/avatar-darkmode.jpg");
    }
}
