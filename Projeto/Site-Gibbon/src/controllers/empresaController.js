var empresaModel = require("../models/empresaModel");

function login(req, res) {
    var { email, senha } = req.body;

    empresaModel.login(email, senha)
        .then(resultado => {
            if (resultado.length > 0) {
                
                res.status(200).json({
                    message: "Login realizado com sucesso!",
                    fkNivelAcesso: resultado[0].fkNivelAcesso 
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
