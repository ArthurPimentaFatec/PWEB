const campo1 = document.getElementById('input1');
const campo2 = document.getElementById('input2');
const campo3 = document.getElementById('input3');

const botao = document.getElementById('botao1');
const display = document.getElementById('result1');

function encontrarMaior(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    }
    if (n2 > n1 && n2 > n3) {
        return n2;
    }
    return n3;
}

botao.addEventListener('click', () => {
    const v1 = Number(campo1.value);
    const v2 = Number(campo2.value);
    const v3 = Number(campo3.value);

    const maior = encontrarMaior(v1, v2, v3);
    display.innerText = "O maior número é: " + maior;
});