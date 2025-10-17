let emailUsuario = 'admin'
let senhaUsuario = '123456'

function login() {
    let email = document.getElementById('e-mail').value
    let senha = document.getElementById('senha').value

    if (email == emailUsuario && senha == senhaUsuario) {
        window.location.href = './dashboard/dashboard.html'
    } else {
        alert('E-mail ou senha errados')
    }
}