function trocaProduto(imagem) {
    // Troca a imagem principal
    document.querySelector(".mouse-grande").src = imagem;
}

function trocaCor(cor) {
    // Troca a cor do círculo de fundo
    document.querySelector(".circulo").style.background = cor;
}
