function login() {
    let email = document.getElementById('e-mail').value
    let senha = document.getElementById('senha').value

    if (email == 'admin' && senha == '123456') {
        window.location.href = './dashboard/dashboard.html'
    }
}