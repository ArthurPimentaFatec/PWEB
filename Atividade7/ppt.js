function escolhaMaquina(){
    return Math.floor((Math.random() * 3)) + 1;
}

function transformaPalavra(escolha){
    if (escolha == 1){
        return "pedra";
    }
    if (escolha == 2){
        return "papel";
    }
    if (escolha == 3){
        return "tesoura";
    }
}

function jogar(escolha){
    let maquina = escolhaMaquina();

    let maquinaP = transformaPalavra(maquina);
    let escolhaP = transformaPalavra(escolha);
    let resultado;

    if(maquina == escolha){
        resultado = "EMPATE";
    }
    else{
        if((escolha == 1 && maquina == 2) || (escolha == 2 && maquina == 3) || (escolha == 3 && maquina == 1)){
            resultado = "VOCÊ PERDEU";
        }
        else{
            resultado = "VOCÊ GANHOU";
        }
    }

    alert("você escolheu " + escolhaP +
            "\nmaquina escolheu " + maquinaP +
            "\n\t\t" + resultado
    )
}