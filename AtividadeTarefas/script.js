function q(seletor) {
  return document.querySelector(seletor);
}

let id = 0;

q("#cadastrar").addEventListener("click", () => {
  let descricao = q("#descricao").value;
  let tarefas = q("#tarefas");

  //criando uma linha de tarefas
  let linha = document.createElement("tr");
  linha.id = id++;

  //criando as colunas
  let tdId = document.createElement("td");
  let tdDescricao = document.createElement("td");
  let tdStatus = document.createElement("td");
  let tdAcoes = document.createElement("td");
  let tdInicio = document.createElement("td");
  let tdFim = document.createElement("td");
  let botaoIniciar = document.createElement("button");
  let botaoConcluir = document.createElement("button");

  //preenchendo as colunas
  tdId.innerText = id;
  tdDescricao.innerText = descricao;
  tdStatus.innerText = "Aguardando";
  tdAcoes.appendChild(botaoIniciar);
  tdAcoes.appendChild(botaoConcluir);
  botaoConcluir.style.display = "none";
  botaoIniciar.innerText = "Iniciar";
  botaoConcluir.innerText = "Concluir";

  linha.appendChild(tdId);
  linha.appendChild(tdDescricao);
  linha.appendChild(tdStatus);
  linha.appendChild(tdInicio);
  linha.appendChild(tdFim);
  linha.appendChild(tdAcoes);

  tarefas.appendChild(linha);

  const formatador = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium",
  });

  botaoIniciar.addEventListener("click", () => {
    tdStatus.innerText = "Iniciada";
    let dataInicio = new Date();
    tdInicio.innerText = formatador.format(new Date());
    botaoIniciar.style.display = "none";
    botaoConcluir.style.display = "inline";
  });

  botaoConcluir.addEventListener("click", () => {
    botaoConcluir.style.display = "none";
    tdFim.innerText = formatador.format(new Date());
    tdStatus.innerText = "Concluída";
    formatador.format(new Date());
  });
});
