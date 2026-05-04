let respostas = [];

function registrar() {
  const idadeVal = Number(document.getElementById("campo-idade").value);

  if (idadeVal < 0) {
    alert("Idade inválida: número negativo");
    return;
  }

  const genero = document.getElementById("campo-genero").value;
  const avaliacao = Number(document.getElementById("campo-avaliacao").value);

  respostas.push({ idade: idadeVal, genero: genero, avaliacao: avaliacao });
}

function exibirEstatisticas() {
  const total = respostas.length;

  const somaIdades = respostas.reduce(function (acc, r) {
    return acc + r.idade;
  }, 0);

  const mediaIdade = somaIdades / total;

  const idadeMaisVelha = respostas.reduce(function (max, r) {
    return r.idade > max ? r.idade : max;
  }, 0);

  const idadeMaisNova = respostas.reduce(function (min, r) {
    return r.idade < min ? r.idade : min;
  }, 1000);

  const qtdPessimo = respostas.filter(function (r) {
    return r.avaliacao === 1;
  }).length;

  const qtdBomOtimo = respostas.filter(function (r) {
    return r.avaliacao === 3 || r.avaliacao === 4;
  }).length;

  const pctBomOtimo = qtdBomOtimo / total;

  const contadorGenero = respostas.reduce(function (acc, r) {
    acc[r.genero] = (acc[r.genero] || 0) + 1;
    return acc;
  }, {});

  alert(
    "Média da idade das pessoas que responderam: " + mediaIdade +
    "\nIdade da pessoa mais velha: " + idadeMaisVelha +
    "\nIdade da pessoa mais nova: " + idadeMaisNova +
    "\nQuantidade de pessoas que responderam 'péssimo': " + qtdPessimo +
    "\nPorcentagem de pessoas que responderam 'ótimo' ou 'bom': " + (pctBomOtimo * 100) + "%" +
    "\nHomens: " + (contadorGenero["m"] || 0) +
    "\nMulheres: " + (contadorGenero["f"] || 0) +
    "\nOutros: " + (contadorGenero["o"] || 0)
  );
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-registrar").addEventListener("click", registrar);
  document.getElementById("btn-consultar").addEventListener("click", exibirEstatisticas);
});
