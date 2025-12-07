function sair() {
    sessionStorage.clear();
    window.location.href = '../index.html'
}

function validarSessao() {
    var email = sessionStorage.EMAIL
    var nome = sessionStorage.NOME
    var sobrenome = sessionStorage.SOBRENOME
    var nome_usuario_sidebar = document.getElementById("nome_usuario_sidebar")

    if (email != null && nome != null) {
        nome_usuario_sidebar.innerHTML = `${nome} ${sobrenome}`
    } else {
        window.location = "../login.html";
    }
}