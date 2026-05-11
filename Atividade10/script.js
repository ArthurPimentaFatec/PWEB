{
    const campoPeso = document.getElementById('peso');
    const campoAltura = document.getElementById('altura');
    const botaoIMC = document.getElementById('btnIMC');
    const displayResultado = document.getElementById('res_imc');
    const displayClassificacao = document.getElementById('classificacao_imc');

    function calcularIMC(peso, altura) {
        // Validação básica
        if (altura <= 0 || peso <= 0) {
            return { erro: "Valores inválidos!" };
        }
        
        const imc = peso / (altura * altura);
        let classificacao = "";

        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 25) classificacao = "Peso normal";
        else if (imc < 30) classificacao = "Sobrepeso";
        else if (imc < 35) classificacao = "Obesidade Grau I";
        else if (imc < 40) classificacao = "Obesidade Grau II";
        else classificacao = "Obesidade Grau III";

        return {
            valor: imc.toFixed(2),
            classe: classificacao
        };
    }

    botaoIMC.addEventListener('click', () => {
        const p = parseFloat(campoPeso.value);
        const a = parseFloat(campoAltura.value);

        if (isNaN(p) || isNaN(a)) {
            displayResultado.innerText = "Preencha os campos corretamente.";
            displayClassificacao.innerText = "";
            return;
        }

        const resultado = calcularIMC(p, a);

        if (resultado.erro) {
            displayResultado.innerText = resultado.erro;
            displayClassificacao.innerText = "";
        } else {
            displayResultado.innerText = `Seu IMC é ${resultado.valor}`;
            displayClassificacao.innerText = resultado.classe;
        }
    });
}