let resultado = document.getElementById('resultado')

function calcular() {
  // Variaveis de entrada
  let n1 = parseFloat(document.getElementById("numero1").value);
  let n2 = parseFloat(document.getElementById("numero2").value);

  // Processamento
  let soma = n1 + n2;

  // Saída
  resultado.textContent = `O resultado é ${soma}`
}
