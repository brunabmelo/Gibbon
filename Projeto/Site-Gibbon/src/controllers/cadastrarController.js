const funcionarioModel = require("../models/funcionarioModel");

function cadastrar(req, res) {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var email = req.body.email;
    var nivelAcesso = parseInt(req.body.nivelAcesso);
    var senha = req.body.senha;
    var fkEmpresa = parseInt(req.body.fkEmpresa);

   
    if (!nome || !sobrenome || !email || !senha || !nivelAcesso || !fkEmpresa) {
        return res.status(400).json({ erro: "Todos os campos obrigatórios devem ser preenchidos" });
    }

    
    console.log("Cadastrando funcionário:", { nome, sobrenome, email, nivelAcesso, fkEmpresa });

    
    funcionarioModel.cadastrar(nome, sobrenome, email, nivelAcesso, senha, fkEmpresa)
        .then(function(resultado) {
            res.status(201).json({ mensagem: "Funcionário cadastrado com sucesso", resultado });
        })
        .catch(function(erro) {
            console.error("Erro ao cadastrar funcionário:", erro);
            res.status(500).json({ erro: "Erro interno ao cadastrar funcionário" });
        });
}

module.exports = {
    cadastrar
};
