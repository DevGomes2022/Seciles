function validarPalavraChave() {
    var palavraChave = document.getElementById("palavra-chave").value;
    var nomeChave = document.getElementById("nome-chave").value;
    if (palavraChave === "3405455833561352" && nomeChave === "kevin") {
      window.location.href = "secileskevin.html";
    } else {
      document.getElementById("mensagem").innerHTML = "Palavra-chave incorreta.";
    }
}