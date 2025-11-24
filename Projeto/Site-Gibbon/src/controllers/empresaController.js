var empresaModel = require("../models/empresaModel");

function login(req, res) {
    var { email, senha } = req.body;

    empresaModel.login(email, senha)
        .then(resultado => {
            if (resultado.length > 0) {
                req.session.idEmpresa = resultado[0].idEmpresa;

                res.status(200).json({
                    message: "Login realizado com sucesso!",
                    empresa: resultado[0].nome
                });
            } else {
                res.status(401).json({ message: "Email ou senha inválidos" });
            }
        })
        .catch(erro => {
            console.error("Erro no login:", erro);
            res.status(500).json(erro);
        });
}

module.exports = { login };