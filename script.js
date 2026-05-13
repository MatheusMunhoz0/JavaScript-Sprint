
let contador = 0;

const botaoFoto = document.getElementById("tirarFoto");
const botaoFiltro = document.getElementById("trocarFiltro");
const contadorFotos = document.getElementById("contadorFotos");
const mensagem = document.getElementById("mensagem");
const foto = document.getElementById("foto");


botaoFoto.addEventListener("click", function(){

    contador++;

    contadorFotos.innerText = contador;

    mensagem.innerText = "Foto tirada com sucesso ";

    alert("Você tirou uma foto!");

    
    foto.src = `https://picsum.photos/300/500?random=${contador}`;
});



