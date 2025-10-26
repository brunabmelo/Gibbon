let senhaUsuario = '123456'

function sair() {
    window.location.href = '../index.html'
}

function atualizarPerfil() {
    let iptSenhaAtual = document.getElementById('senha-atual')
    let iptNovaSenha = document.getElementById('nova-senha')
    let iptConfirmacaoSenha = document.getElementById('confirmacao-senha')

    if(
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

function cadastrar() {
    let iptNome = document.getElementById('nome')
    let iptSobrenome = document.getElementById('sobrenome')
    let iptEmail = document.getElementById('email')
    let selNivelAcesso = document.getElementById('sel_NivelAcesso')
    let iptSenha = document.getElementById('senha')
    let iptConfirmacaoSenha = document.getElementById('confirmacao-senha')

    if (
        iptNome.value == '' ||
        iptSobrenome.value == '' ||
        iptEmail.value == '' ||
        selNivelAcesso.value == '' ||
        iptSenha.value == '' ||
        iptConfirmacaoSenha.value == ''
    ) {
        alert('Preencha todos os campos')
    } else {
        let isEmail = false
        let i = 0
        while (i < iptEmail.value.length) {
            let temArroba = iptEmail.value[i] == '@'
            i++

            if(temArroba) {
                isEmail = true
                break
            }
        }

        if(isEmail) {
            alert('Usuário cadastrado com sucesso')
            iptNome.value = ''
            iptSobrenome.value = ''
            iptEmail.value = ''
            selNivelAcesso.value = ''
            iptSenha.value = ''
            iptConfirmacaoSenha.value = ''
        } else {
            alert('Insira um e-mail')
        }
    }
}