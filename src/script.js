// Imprime o resultado da operação na tela
let resultado = document.getElementById('resultado')

function soma() {
  // Números
  let n1 = parseFloat(document.getElementById("numero1").value);
  let n2 = parseFloat(document.getElementById("numero2").value);
  // Operação
  let soma = n1 + n2;
  // Resultado
  resultado.textContent = `${n1} + ${n2} = ${soma}`
}

function subtracao() {
    // Números
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    // Operação
    let subtracao = n1 - n2;
    // Resultado
    resultado.textContent = `${n1} - ${n2} = ${subtracao}`
  }

  function multiplicacao() {
    // Números
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    // Operação
    let multiplicacao = n1 * n2;
    // Resultado
    resultado.textContent = `${n1} x ${n2} = ${multiplicacao}`
  }

  function divisao() {
    // Números
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    // Operação
    let divisao = n1 / n2;
    // Resultado
    resultado.textContent = `${n1} ÷ ${n2} = ${divisao}`
  }
