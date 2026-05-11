{
    const campo1 = document.getElementById('num1');
    const campo2 = document.getElementById('num2');
    const campo3 = document.getElementById('num3');
    const botaoOrdenar = document.getElementById('btnOrdenar');
    const displayResultado = document.getElementById('resultado');

    function funcao2(n1, n2, n3) {
        const numeros = [n1, n2, n3];

        return numeros.sort((a, b) => a - b);
    }

    if (botaoOrdenar) {
        botaoOrdenar.addEventListener('click', () => {
            const v1 = Number(campo1.value);
            const v2 = Number(campo2.value);
            const v3 = Number(campo3.value);

            const listaOrdenada = funcao2(v1, v2, v3);

            displayResultado.innerText = "Ordem crescente: " + listaOrdenada.join(', ');
        });
    }
}