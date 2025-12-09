// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

// ROTAS DO SISTEMA
var indexRouter = require("./src/routes/index");
var funcionariosRouter = require("./src/routes/funcionarios");
var empresaRouter = require("./src/routes/empresa");
var sensoresRouter = require("./src/routes/sensores");
var estufasRouter = require("./src/routes/estufas");
var dashboardRouter = require("./src/routes/dashboard");
var avisosRouter = require("./src/routes/avisos");


// CONFIGURAÇÕES DO EXPRESS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// USO DAS ROTAS
app.use("/", indexRouter);
app.use("/funcionarios", funcionariosRouter);
app.use("/empresa", empresaRouter);
app.use("/sensores", sensoresRouter);
app.use("/estufas", estufasRouter);
app.use("/dashboard", dashboardRouter);
app.use("/avisos", avisosRouter);


const { GoogleGenAI } = require("@google/genai");

const chatIA = new GoogleGenAI({
    apiKey: process.env.MINHA_CHAVE
});

app.post("/perguntar", async (req, res) => {
    const pergunta = req.body.pergunta;

    try {
        const resposta = await gerarResposta(pergunta);
        return res.json({ resultado: resposta });
    } catch (error) {
        console.error("Erro no /perguntar:", error);
        return res.status(500).json({ erro: "Erro interno ao gerar resposta" });
    }
});

async function gerarResposta(mensagem) {
    try {
        const modeloIA = chatIA.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Responda de forma clara: ${mensagem}`
        });

        const resposta = (await modeloIA).text;
        return resposta;

    } catch (error) {
        console.error("Erro IA:", error);
        throw error;
    }
}


// INICIANDO SERVIDOR
app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    
    Servidor rodando em: http://${HOST_APP}:${PORTA_APP}
    Ambiente: ${process.env.AMBIENTE_PROCESSO}
    `);
});
