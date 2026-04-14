const mudarCorFundo = () => {
  let inputCorFundo = document.getElementById("cor-fundo");

  inputCorFundo.addEventListener("input", () => {
    let cor = inputCorFundo.value;
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = cor;
  });
};

function mudarCorTexto() {
  let inputCorTexto = document.getElementById("cor-texto");

  inputCorTexto.addEventListener("input", () => {
    let cor = inputCorTexto.value;
    document.body.style.color = cor;
  });
}
