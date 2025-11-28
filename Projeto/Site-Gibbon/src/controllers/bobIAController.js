const { gerarResposta } = require("../services/bobIA.service");

async function perguntar(req, res) {
    var { pergunta } = req.body;

    if (!pergunta) {
        return res.status(400).json({ error: "A pergunta é obrigatória." });
    }

    try {
        const resultado = await gerarResposta(pergunta);
        return res.json({ resultado });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao gerar resposta." });
    }
}

module.exports = { perguntar };
