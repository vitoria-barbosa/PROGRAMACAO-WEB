let p1 = document.getElementById("p1");
p1.innerText = "Olá";

let divPai = document.getElementById("pai");
let divResultadoFilhos = document.getElementById("resultadoFilhos");
divResultadoFilhos.innerText = divPai.children.length;

let pFilho1 = divPai.children[0];
let pFilho2 = divPai.children[1];

divResultadoFilhos.innerHTML +=
  "<br>" + pFilho1.innerText + " - " + pFilho2.innerText;
