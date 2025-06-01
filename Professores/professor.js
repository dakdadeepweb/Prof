// Exibir nome do professor logado
const professorLogado = localStorage.getItem("professorLogado") || "Jho";
document.getElementById("nomeProfessor").textContent = professorLogado;

// Popups
function abrirPopup() {
  document.getElementById("popup").classList.remove("hidden");
}
function fecharPopup() {
  document.getElementById("popup").classList.add("hidden");
}

function abrirNovoPopup() {
  document.getElementById("novoPopup").classList.remove("hidden");
}
function fecharNovoPopup() {
  document.getElementById("novoPopup").classList.add("hidden");
}

// Exemplo simples de "salvar" professor (aqui só console.log mesmo)
function salvarNovoProfessor() {
  const nome = document.getElementById("addNome").value;
  const senha = document.getElementById("addSenha").value;
  const icone = document.getElementById("addIcone").value;

  if (!nome || !senha || !icone) {
    alert("Preencha todos os campos.");
    return;
  }

  console.log("Novo Professor Criado:", { nome, senha, icone });

  // Aqui você pode adicionar o Firebase depois
  fecharNovoPopup();
  fecharPopup();
}
