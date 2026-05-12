function q(seletor) {
  return document.querySelector(seletor);
}

function mostrarErro(id, mensagem) {
  let elemento = q("#" + id);
  elemento.classList.remove("oculto");
  elemento.innerText = mensagem;

  elemento.classList.add("msg-erro");

  setTimeout(() => {
    elemento.classList.add("oculto");
  }, 3000);
}

// questão 1
q("#botaoErro").addEventListener("click", () => {
  let id = q("#id").value;
  let mensagem = q("#mensagem").value;

  if (id == "" || mensagem === "") {
    mostrarErro("saida-q1", "Preencha os campos de texto");
  } else {
    mostrarErro(id, mensagem);
  }
});

// questão 2
q("#botaoExibir").addEventListener("click", () => {
  let conteudo = q("#caixaDeTexto").value.trim();
  let saida = q("#conteudo");
  saida.classList.remove("oculto");

  if (conteudo === "") {
    saida.classList.add("msg-erro");
    saida.innerText = "Preencha o campo de texto.";

    setTimeout(() => {
      saida.classList.add("oculto");
      saida.classList.remove("msg-erro");
    }, 3000);
  } else {
    saida.innerText = conteudo;
  }
});

// questão 3
q("#botao-calcular").addEventListener("click", () => {
  let inputs = document.querySelectorAll("input[name=input]");
  let interacoes = inputs[0].value;
  let visualizacoes = inputs[1].value;
  if (interacoes === "" || visualizacoes === "") {
    mostrarErro("saida-q3", "Preencha os dois campos de texto.");
  } else if (Number(visualizacoes) === 0) {
    mostrarErro("saida-q3", "Erro: não é possível fazer divisão por zero");
  } else {
    let taxaEngajamento = (Number(interacoes) / Number(visualizacoes)) * 100;
    q("#saida-q3").innerText =
      "Taxa de engajamento = " + taxaEngajamento.toFixed(1) + "%";
    q("#saida-q3").classList.remove("msg-erro");
    q("#saida-q3").classList.remove("oculto");
  }
});

// questão 4
q("#botao-q4").addEventListener("click", () => {
  let arquivoSelecionado = q("#uploadImagem").files[0];
  if (arquivoSelecionado) {
    let img = document.createElement("img");
    img.src = URL.createObjectURL(arquivoSelecionado);
    img.style.height = "200px";
    q("#imagem-q4").appendChild(img);
  } else {
    mostrarErro("saida-q4", "Selecione o arquivo.");
  }
});

// questão 5
q("#select-q5").addEventListener("change", () => {
  let select = q("#select-q5");
  let selecionado = select.options[select.selectedIndex];
  let nomeArquivo = selecionado.value;
  let img = q("#img-resultado");
  img.src = nomeArquivo;
  img.style.height = "200px";
  img.classList.remove("oculto");
});

// questão 6
q("#botaoEnviar-q6").addEventListener("click", () => {
  let checkboxes = document.getElementsByName("redesSociais");

  let selecionados = [];
  for (let c of checkboxes) {
    if (c.checked) {
      selecionados.push(c);
    }
  }
  let saida = q("#saida-q6");
  if (selecionados.length === 0) {
    saida.innerText = "Você não tem nenhuma rede social preferida.";
  } else {
    saida.innerText = "Suas redes sociais preferidas são: ";
    selecionados.forEach((s) => (saida.innerText += ` ${s.value}`));
  }
});

// questão 7 e 8
q("#botao-q7").addEventListener("click", () => {
  let entrada = q("#texto-q7").value;
  let select = q("#select-q7");
  if (select.options.length >= 5) {
    mostrarErro("saida-q7", "O máximo de hashtags possível é 5.");
  } else if (entrada === "" || entrada === "#") {
    mostrarErro("saida-q7", "Digite a hashtag na caixa de texto.");
  } else if (ehRepetida(entrada, select) || entrada.length - 1 < 2) {
    mostrarErro(
      "saida-q7",
      "Hashtag inválida. Não pode repetir nem hashtags com nomes menores que 2 caracteres",
    );
  } else {
    let option = document.createElement("option");
    option.innerText = entrada;
    q("#select-q7").appendChild(option);
  }
});

// questão 9
q("#botaoRemover").addEventListener("click", () => {
  let select = q("#select-q7");
  let selecionado = select.options[select.selectedIndex];

  if (selecionado) {
    select.removeChild(selecionado);
  } else {
    mostrarErro("saida-q7", "Selecione uma hashtag para remover.");
  }
});

// questão 10 e 11
q("#botaoAdicionarCarteira").addEventListener("click", () => {
  let ativosDisponiveis = q("#ativosDisponiveis");
  let opcoes = ativosDisponiveis.options;
  let selecionado = false;

  for (let i = opcoes.length - 1; i >= 0; i--) {
    if (opcoes[i].selected) {
      selecionado = true;
      let opcao = opcoes[i];
      opcao.selected = false;
      ativosDisponiveis.removeChild(opcao);
      q("#carteiraInvestimentos").appendChild(opcao);
      q("#botaoRemoverCarteira").disabled = false;

      if (opcoes.length === 0) {
        q("#botaoAdicionarCarteira").disabled = true;
      }
    }
  }
  if (!selecionado) {
    mostrarErro("saida-q10", "Selecione algum ativo para mover");
  }
});

q("#botaoRemoverCarteira").addEventListener("click", () => {
  let ativosCarteira = q("#carteiraInvestimentos");
  let opcoes = ativosCarteira.options;
  let selecionado = false;

  for (let i = opcoes.length - 1; i >= 0; i--) {
    if (opcoes[i].selected) {
      selecionado = true;
      let opcao = opcoes[i];
      opcao.selected = false;
      ativosCarteira.removeChild(opcao);
      q("#ativosDisponiveis").appendChild(opcao);
      q("#botaoAdicionarCarteira").disabled = false;
      if (opcoes.length === 0) {
        q("#botaoRemoverCarteira").disabled = true;
      }
    }
  }
  if (!selecionado) {
    mostrarErro("saida-q10", "Selecione algum ativo para mover");
  }
});

function ehRepetida(hashtag, select) {
  for (let o of select.options) {
    if (hashtag === o.innerText) return true;
  }
  return false;
}
