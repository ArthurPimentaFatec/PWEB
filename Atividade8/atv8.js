let pessoas = [];

function enviar(){
    let idade = Number(document.getElementById("idade").value);
    if (idade < 0){
        alert("idade inválida: número negativo");
    }
    else{
    let sexo = document.getElementById("sexo").value;
    let opiniao = Number(document.getElementById("opiniao").value);

    pessoas.push({idade, sexo, opiniao});
    }
}

function consultar(){
    let media = 0;
    let maisvelho = 0;
    let maisnovo = 1000;
    let qtdPessimo = 0;
    let otimoBom = 0;
    let m = 0;
    let f = 0;
    let o = 0;

                    /*quantos elementos possui*/
    for (let x = 0; x < pessoas.length; x++){
        media = media + pessoas[x].idade;

        if (pessoas[x].idade > maisvelho){
            maisvelho = pessoas[x].idade;
        }
        if (pessoas[x].idade < maisnovo){
            maisnovo = pessoas[x].idade;
        }

        if (pessoas[x].opiniao == 1){
            qtdPessimo++;
        }

        if (pessoas[x].opiniao == 4 || pessoas[x].opiniao == 3){
            otimoBom++;
        }

        if(pessoas[x].sexo == "m"){
            m++;
        }
        else{
            if (pessoas[x].sexo == "f"){
                f++;
            }
            else{
                if(pessoas[x].sexo == "o"){
                    o++;
                }
            }
        }
    }

    media = media / pessoas.length;
    otimoBom = (otimoBom / pessoas.length);

    alert("Média da idade das pessoas que responderam: " + media +
        "\nIdade da pessoa mais velha: " + maisvelho +
        "\nIdade da pessoa mais nova: " + maisnovo +
        "\nQuantidade de pessoas que responderam 'péssimo': " + qtdPessimo +
        "\nPorcentagem de pessoas que responderam 'ótimo' ou 'bom': " + (otimoBom * 100) + "%" +
        "\nHomens: " + m +
        "\nMulheres: " + f +
        "\nOutros: " + o
    )
}

