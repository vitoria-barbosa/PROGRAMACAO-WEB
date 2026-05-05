const getById = (id) => document.getElementById(id);

// questão 2.a
getById("div1").innerText = "Questão 2 - usando getElementById()";

// questão 2.b
let links = document.getElementsByTagName("a");
let count = 0;
for (let a of links) {
  a.innerText = count += 1;
}

// questão 3
let qtdParagrafos = getById("div-p").getElementsByTagName("p").length;
getById("div-resultado").innerText =
  "Quantidade de paragrafos na div: " + qtdParagrafos;

// questão 4
getById("botao").addEventListener("click", () => {
  getById("paragrafo").innerText = "O texto desse parágrafo foi alterado!";
});

getById("botao-limpar").addEventListener("click", () => {
  getById("paragrafo").innerText = " ";
});

// questão 6
getById("texto").style.color = "#00f";

// questão 7
getById("input-texto").addEventListener("change", () => {
  let textoEntrada = getById("input-texto").value;
  getById("resultado6").innerText = textoEntrada.toUpperCase();
});

// questão 8
getById("botao-cor").addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});

getById("botao-voltar").addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
});

// questão 9
getById("botao-fonte").addEventListener("click", () => {
  document.body.style.fontSize = "2rem";
});

getById("botao-voltar2").addEventListener("click", () => {
  document.body.style.fontSize = "1rem";
});

// questão 10
getById("botao-calc").addEventListener("click", () => {
  const divResultado = getById("resultado-calc");
  const inputs = document.querySelectorAll("input[type=number]");
  const inputsPreenchidos = Array.from(inputs).every((i) => i.value !== "");
  if (!inputsPreenchidos) {
    alert("Preencha os campos dos números");
    return;
  }
  const marcado = document.querySelector("input[name=operacao]:checked");
  if (marcado) {
    const n1 = Number(inputs[0].value);
    const n2 = Number(inputs[1].value);
    let op = marcado.value;
    let resultado = document.createElement("p");
    if (op === "soma") {
      divResultado.innerText = n1 + n2;
    } else if (op === "subtracao") {
      divResultado.innerText = n1 - n2;
    } else if (op === "multiplicacao") {
      divResultado.innerText = n1 * n2;
    } else {
      divResultado.innerText = n1 / n2;
    }
  } else {
    alert("Marque alguma das operações");
  }
});

// questão 11
getById("botao-lista").addEventListener("click", () => {
  const input = getById("input-q11");
  if (input.value !== "") {
    const lista = getById("ul");
    const li = document.createElement("li");
    li.innerText = input.value;
    lista.appendChild(li);
  }
});

getById("botao-q12").addEventListener("click", () => {
  const input = getById("input-q12");
  if (input.value !== "") {
    const select = getById("select");
    const opcao = document.createElement("option");
    opcao.innerText = input.value;
    select.appendChild(opcao);
  }
});
