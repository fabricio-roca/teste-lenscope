let front = {
  // -- Entrada de Dados --//
  inputs: {
    esEsquerdo: document.getElementById("esfericoEsquerdo"),
    ciEsquerdo: document.getElementById("cilindricoEsquerdo"),
    esDireito: document.getElementById("esfericoDireito"),
    ciDireito: document.getElementById("cilindricoDireito")
  },
  // --Saida de Dados --//
  outputs:{
    resultadoHtml: document.getElementById("resultado"),
    }
}
btnLentes = function () {
// -- Fazendo o Calculo a Lentes prime --//
if (front.inputs.esEsquerdo.value <= -3 && front.inputs.esEsquerdo.value >= -12 || front.inputs.esDireito.value <= -3 && front.inputs.esDireito.value >= -12){
  if (front.inputs.ciEsquerdo.value <= -2 && front.inputs.ciDireito.value <= -2){
  front.outputs.resultadoHtml.innerHTML = "A melhor opção para você é Lentes Prime!";
  console.log("lente prime");
  }
}
// -- Fazendo o Calculo a Lentes Vision --//
if (front.inputs.esEsquerdo.value <= 0 && front.inputs.esEsquerdo.value >= -15 || front.inputs.esDireito.value <= 0 && front.inputs.esDireito.value >= -15){
  if (front.inputs.ciEsquerdo.value <= -5 && front.inputs.ciDireito.value <= -5){
  front.outputs.resultadoHtml.innerHTML = "A melhor opção para você é Lentes Vision!";
  console.log("lente vision");
  }
}
}


