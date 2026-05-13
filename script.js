
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

botaoFiltro.addEventListener("click", function(){

    let filtroAtual = foto.style.filter;

    if(filtroAtual === "grayscale(100%)"){
        foto.style.filter = "none";
        mensagem.innerText = "Filtro removido";
    }
    else{
        foto.style.filter = "grayscale(100%)";
        mensagem.innerText = "Filtro preto e branco ativado";
    }

});



let nome = prompt("Digite seu nome:");

if(nome){
    mensagem.innerText = `Bem-vindo(a), ${nome}!`;
}