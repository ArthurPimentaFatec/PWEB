{
    const inputPalavra = document.getElementById('palavraInput');
const botao = document.getElementById('btnVerificar');
const display = document.getElementById('res_palindromo');

function funcao3(palavra) {
    const limpa = palavra.toLowerCase().trim();
    
    const invertida = limpa.split('').reverse().join('');

    if (limpa === invertida) {
        return "É palíndromo";
    }
    
    return "Não é palíndromo";
}

botao.addEventListener('click', () => {
    const texto = inputPalavra.value;
    
    if (texto === "") {
        display.innerText = "Por favor, digite algo.";
        return;
    }

    const resultado = funcao3(texto);
    display.innerText = resultado;
});
}