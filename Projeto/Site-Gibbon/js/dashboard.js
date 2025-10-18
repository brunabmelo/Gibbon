let senhaUsuario = '123456'

function sair() {
    window.location.href = '../index.html'
}

function atualizarPerfil() {
    let iptSenhaAtual = document.getElementById('senha-atual')
    let iptNovaSenha = document.getElementById('nova-senha')
    let iptConfirmacaoSenha = document.getElementById('confirmacao-senha')

    if (iptSenhaAtual.value != senhaUsuario) {
        alert('Senha errada')
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