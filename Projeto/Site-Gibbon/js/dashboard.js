function sair() {
    window.location.href = '../index.html'
}

function atualizarPerfil() {
    document.getElementById('senha-atual').value = ''
    document.getElementById('nova-senha').value = ''
    document.getElementById('confirmacao-senha').value = ''
}