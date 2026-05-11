{const inputP1 = document.getElementById('p1');
const inputP2 = document.getElementById('p2');
const btn = document.getElementById('btnVerificarSub');
const display = document.getElementById('res_subconjunto');

function funcao4(p1, p2) {
    const isUndefined = (p1 === undefined || p2 === undefined);
    const isEmpty = (p1 === '' || p2 === '');

    if (isUndefined || isEmpty) {
        return "Erro! Uma das palavras está vazia ou indefinida. Tente novamente.";
    }

    const palavra1 = p1.toLowerCase();
    const palavra2 = p2.toLowerCase();

    if (palavra1.includes(palavra2) || palavra2.includes(palavra1)) {
        return "É subconjunto.";
    }

    return "Não é subconjunto.";
}

btn.addEventListener('click', () => {
    const resultado = funcao4(inputP1.value, inputP2.value);
    display.innerText = resultado;
});}