var funcionarioModel = require("../models/funcionarioModel");

function listar(req, res) {
    let id_empresa = req.params.id_empresa

    funcionarioModel.listar(id_empresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os funcionários: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarNiveisAcesso(req, res) {
    let id_empresa = req.body.id_empresa
    let id_funcionario = req.body.id_funcionario

    funcionarioModel.buscarNiveisAcesso(id_empresa, id_funcionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum nível de acesso encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os níveis de acesso: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var email = req.body.email;
    var senha = req.body.senha;
    var fkEmpresa = req.body.fkEmpresa;


    if (!nome || !sobrenome || !email || !senha || !fkEmpresa) {
        return res.status(400).json({ erro: "Todos os campos obrigatórios devem ser preenchidos" });
    }


    console.log("Cadastrando funcionário:", { nome, sobrenome, email, senha, fkEmpresa });


    funcionarioModel.cadastrar(nome, sobrenome, email, senha, fkEmpresa)
        .then(function (resultado) {
            res.status(201).json({ mensagem: "Funcionário cadastrado com sucesso", resultado });
        })
        .catch(function (erro) {
            console.error("Erro ao cadastrar funcionário:", erro);
            res.status(500).json({ erro: "Erro interno ao cadastrar funcionário" });
        });
}

function cadastrarAcessoFuncionario(req, res) {
    var fkFuncionario = req.body.id_funcionario;
    var fkEmpresa = req.body.id_empresa;
    var fkNivelAcesso = req.body.id_nivel_acesso;

    funcionarioModel.cadastrarAcessoFuncionario(fkFuncionario, fkEmpresa, fkNivelAcesso)
        .then(function (resultado) {
            res.status(201).json({ mensagem: "Nível de acesso do funcionário cadastrado com sucesso", resultado });
        })
        .catch(function (erro) {
            console.error("Erro ao cadastrar nível de acesso do funcionário:", erro);
            res.status(500).json({ erro: "Erro interno ao cadastrar nível de acesso do funcionário" });
        });
}

function atualizar(req, res) {
    var id_funcionario = req.body.idFuncionarioServer
    var id_empresa = req.body.idEmpresaServer
    var senha = req.body.senhaServer    

    funcionarioModel.atualizar(id_funcionario, id_empresa, senha)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao atualizar o perfil: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    buscarNiveisAcesso,
    cadastrar,
    cadastrarAcessoFuncionario,
    atualizar
}