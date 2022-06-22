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
// -- Convertendo os valors HTML para Js --//
/*front.inputs.esEsquerdo = parseFloat(front.inputs.esEsquerdo);
front.inputs.ciEsquerdo = parseFloat(front.inputs.ciEsquerdo);
front.inputs.esDireito = parseFloat(front.inputs.esDireito);
front.inputs.ciDireito = parseFloat(front.inputs.ciDireito);*/

btnLentes = function () {
// -- Fazendo o Calculo a Lentes prime --//
if (front.inputs.esEsquerdo.value <= -3 && front.inputs.esEsquerdo.value >= -12 || front.inputs.direito.value <= -3 && front.inputs.direito.value >= -12){
  if (front.inputs.ciEsquerdo.value <= -2){
  front.outputs.resultadoHtml.innerHTML = "A melhor opção para você é Lentes Prime!";
  console.log("lente prime");
  }
}

}


