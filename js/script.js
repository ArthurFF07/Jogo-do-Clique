
const cliqueImagem = document.getElementById("cliqueImagem");
const quantCliques = document.getElementById("quantCliques");
const timer = document.getElementById("timer");
const telaNick = document.getElementById("telaNick");
const nickInput = document.getElementById("nickInput");
const tabelaRecordes = document.getElementById("tabelaRecordes");

let cliques = 0;
let tempo = 25;
let intervalo;
let jogadorAtual = "";
let recordes = [];

function moverImagem() {
  const largura = window.innerWidth - cliqueImagem.offsetWidth;
  const altura = window.innerHeight - cliqueImagem.offsetHeight;
  const x = Math.random() * largura;
  const y = Math.random() * altura;

  cliqueImagem.style.left = x + "px";
  cliqueImagem.style.top = y + "px";
}


function atualizarTempo() {
  timer.textContent = tempo;
  if (tempo <= 0) {
    clearInterval(intervalo);
    alert(`Tempo esgotado!\nNick: ${jogadorAtual}\nCliques: ${cliques}`);
    registrarRecorde(jogadorAtual, cliques);
    reiniciarJogo();
  }
}

function iniciarContagem() {
  atualizarTempo();
  intervalo = setInterval(() => {
    tempo--;
    atualizarTempo();
  }, 1000);
}

cliqueImagem.onclick = () => {
  cliques++;
  quantCliques.textContent = cliques;
  moverImagem();
};
// Inicia o jogo após digitar o nick
function iniciarJogo() {
  const nick = nickInput.value.trim();
  if (nick === "") {
    alert("Digite um nick válido!");
    return;
  }
  jogadorAtual = nick;
  telaNick.style.display = "none";
  cliques = 0;
  tempo = 25;
  quantCliques.textContent = cliques;
  moverImagem();
  iniciarContagem();
}
// Salva e ordena o recorde
function registrarRecorde(nick, pontos) {
  recordes.push({ nick, cliques: pontos });
  recordes.sort((a, b) => b.cliques - a.cliques);
  atualizarTabela();
}
// Mostra a tabela atualizada
function atualizarTabela() {
  tabelaRecordes.innerHTML = "";
  for (const recorde of recordes) {
    const linha = document.createElement("tr");
    linha.innerHTML = `<td>${recorde.nick}</td><td>${recorde.cliques}</td>`;
    tabelaRecordes.appendChild(linha);
  }
}
// Reinicia o jogo mostrando a tela de nick
function reiniciarJogo() {
  telaNick.style.display = "flex";
  nickInput.value = "";
}
