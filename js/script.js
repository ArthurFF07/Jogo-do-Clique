
var imagem = document.getElementById("cliqueImagem");
var contadorCliques = document.getElementById("quantCliques");
var cronometro = document.getElementById("timer");

var cliques = 0;
var tempo = 25;
var intervalo;

function moverImagem() {
  var larguraJanela = window.innerWidth - imagem.offsetWidth;
  var alturaJanela = window.innerHeight - imagem.offsetHeight;

  var posicaoX = Math.random() * larguraJanela;
  var posicaoY = Math.random() * alturaJanela;

  imagem.style.left = posicaoX + "px";
  imagem.style.top = posicaoY + "px";
}

function atualizarTempo() {
  cronometro.textContent = tempo;
  if (tempo <= 0) {
    clearInterval(intervalo);
    alert("Tempo esgotado! Total de cliques: " + cliques);
    location.reload(); 
  }
}

function iniciarContagem() {
  atualizarTempo();
  intervalo = setInterval(function() {
    tempo--;
    atualizarTempo();
  }, 1000);
}

imagem.onclick = function() {
  cliques++;
  contadorCliques.textContent = cliques;
  moverImagem();
  atualizarTempo();
}


moverImagem();
iniciarContagem();
