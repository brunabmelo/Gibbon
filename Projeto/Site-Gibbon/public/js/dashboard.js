let senhaUsuario = '123456'

function sair() {
    sessionStorage.clear();
    window.location.href = '../index.html'
}

function atualizarPerfil() {
    let iptSenhaAtual = document.getElementById('senha-atual')
    let iptNovaSenha = document.getElementById('nova-senha')
    let iptConfirmacaoSenha = document.getElementById('confirmacao-senha')

    if (
        iptSenhaAtual.value == '' ||
        iptNovaSenha.value == '' ||
        iptConfirmacaoSenha.value == ''
    ) {
        alert('Preencha todos os campos')
    }
    else if (iptSenhaAtual.value != senhaUsuario) {
        alert('Senha incorreta')
    }
    else if (iptNovaSenha.value != iptConfirmacaoSenha.value) {
        alert('Senhas não correspondem')
    }
    else {
        iptSenhaAtual.value = ''
        iptNovaSenha.value = ''
        iptConfirmacaoSenha.value = ''

        alert('Senha atualizada com sucesso')
    }
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