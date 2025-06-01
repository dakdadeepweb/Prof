const db = firebase.database();

function buscarAvatar(nome) {
  if (!nome.trim()) {
    document.getElementById("avatar").src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    return;
  }

  db.ref("Professores/" + nome).once("value").then(snapshot => {
    const dados = snapshot.val();
    if (dados && dados.Avatar) {
      document.getElementById("avatar").src = dados.Avatar;
    } else {
      document.getElementById("avatar").src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    }
  });
}

function fazerLogin() {
  const nome = document.getElementById("nome").value.trim();
  const senha = document.getElementById("senha").value;

  db.ref("Professores/" + nome).once("value").then(snapshot => {
    const dados = snapshot.val();
    if (dados && dados.Senha === senha) {
      alert(`Bem-vindo, ${dados.Nome}!`);
      // Redireciona para a dashboard ou página principal
    } else {
      document.getElementById("mensagem-erro").textContent = "Nome ou senha incorretos!";
    }
  });
}
