var empresaModel = require("../models/empresaModel");

function login(req, res) {
    var { email, senha } = req.body;

    empresaModel.login(email, senha)
        .then(resultado => {
            if (resultado.length > 0) {

                fetch("/funcionarios/niveisAcesso", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id_empresa: resultado[0].fkEmpresa,
                        id_funcionario: resultado[0].idFuncionario
                    })
                }).then(niveisAcesso => {
                    let vt_niveis_acesso = []

                    for (let i = 0; i < niveisAcesso.length; i++) {
                        let json = niveisAcesso[i]
                        vt_niveis_acesso.push(json)
                    }

                    res.status(200).json({
                        message: "Login realizado com sucesso!",
                        id_funcionario: resultado[0].idFuncionario,
                        nome: resultado[0].nome,
                        sobrenome: resultado[0].sobrenome,
                        email: resultado[0].email,
                        senha: resultado[0].senha,
                        id_empresa: resultado[0].fkEmpresa,
                        niveis_acesso: vt_niveis_acesso
                    });
                })
                .catch(erro => {
                    console.log('Erro ao buscar níveis de acesso do usuário:', erro)
                    res.status(500).json(erro)
                })
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
