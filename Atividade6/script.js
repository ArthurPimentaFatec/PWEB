function calcularMedia() {
    var nome = document.getElementById("nome").value;

    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);

    var media = (n1 + n2 + n3 + n4) / 4;

    document.getElementById("resultado").innerHTML =
        "Aluno: " + nome + "<br>Média: " + media;
}

function calcularOperacoes() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var soma = num1 + num2;
    var sub = num1 - num2;
    var mult = num1 * num2;
    var div = num1 / num2;
    var resto = num1 % num2;

    document.getElementById("resultadoOp").innerHTML =
        "Soma: " + soma + "<br>" +
        "Subtração: " + sub + "<br>" +
        "Multiplicação: " + mult + "<br>" +
        "Divisão: " + div + "<br>" +
        "Resto: " + resto;
}