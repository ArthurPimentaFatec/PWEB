// Opções possíveis do jogo
const opcoes = ["pedra", "papel", "tesoura"];

// Mapa de vitória: chave vence o valor
const tabela = {
  pedra: "tesoura",
  papel: "pedra",
  tesoura: "papel",
};

// Tradução para exibição
const rotulos = {
  pedra: "Pedra",
  papel: "Papel",
  tesoura: "Tesoura",
};

function sortearJogadaMaquina() {
  const indice = Math.floor(Math.random() * opcoes.length);
  return opcoes[indice];
}

function calcularResultado(jogador, maquina) {
  if (jogador === maquina) return "EMPATE";
  return tabela[jogador] === maquina ? "VOCÊ GANHOU" : "VOCÊ PERDEU";
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".choice-card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      const jogador = card.dataset.choice;
      const maquina = sortearJogadaMaquina();
      const resultado = calcularResultado(jogador, maquina);

      alert(
        "Você escolheu: " + rotulos[jogador] +
        "\nMáquina escolheu: " + rotulos[maquina] +
        "\n\n" + resultado
      );
    });
  });
});
