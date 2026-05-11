{const inputData = document.getElementById('dataInput');
const btnData = document.getElementById('btnData');
const displayData = document.getElementById('res_data');

function funcao5(dataString) {
  const data = new Date(dataString.replace(/-/g, '\/'));

  const diasDaSemana = [
    "Domingo", 
    "Segunda-feira", 
    "Terça-feira", 
    "Quarta-feira", 
    "Quinta-feira", 
    "Sexta-feira", 
    "Sábado"
  ];

  const indiceDia = data.getDay();

  if (isNaN(indiceDia)) return "Data inválida.";

  return diasDaSemana[indiceDia];
}

btnData.addEventListener('click', () => {
    const valorData = inputData.value;
    
    if (!valorData) {
        displayData.innerText = "Por favor, selecione uma data.";
        return;
    }

    const resultado = funcao5(valorData);
    displayData.innerText = "Essa data cai em um(a): " + resultado;
});}