var divRespostaSimulador = document.getElementById('resposta-simulador');

function simular() {
    let consumoEnergetico = Number(ipt_consumo_energetico.value);
    let precoEnergia = Number(ipt_preco_energia.value);
    let producao = Number(ipt_producao.value);

    let resultado = '';

    if (
        ipt_consumo_energetico.value == '' ||
        ipt_preco_energia.value == '' ||
        ipt_producao.value == ''
    ) {
        alert('Por favor, preencha todos os campos');
        return;
    }

    if (consumoEnergetico <= 0 || precoEnergia <= 0 || producao <= 0) {
        alert("Por favor, preencha todos os campos com valores maiores que zero!");
        return;
    }

    let reducaoEnergia = 0.30;
    let aumentoProducao = 0.15;

    let energiaComGibbon = consumoEnergetico * (1 - reducaoEnergia);
    let custoSemGibbon = consumoEnergetico * precoEnergia;
    let custoComGibbon = energiaComGibbon * precoEnergia;
    let economia = custoSemGibbon - custoComGibbon;

    let producaoComGibbon = producao * (1 + aumentoProducao);
    let aumento = producaoComGibbon - producao;

    resultado = `
            <h3>Resultados da Simulação:</h3>
            <h4>Eficiência Energética</h4>
            <span> Consumo atual: ${consumoEnergetico.toFixed(2)} kWh - R$${custoSemGibbon.toFixed(2)}</span>
            <span>- Consumo com Gibbon: ${energiaComGibbon.toFixed(2)} kWh - R$${custoComGibbon.toFixed(2)}</span>
            <span>- Economia em até: <b>${(reducaoEnergia * 100).toFixed(0)}%</b> - <b>R$${economia.toFixed(2)}</span></b>

            <h3>Produtividade</h3>
            <span>- Produção atual: ${producao.toFixed(2)} toneladas</span>
            <span>- Produção com Gibbon: ${producaoComGibbon.toFixed(2)} toneladas</span>
            <span>- Aumento em até <b>${(aumentoProducao * 100).toFixed(0)}%</b> (${aumento.toFixed(2)} toneladas)</span>

            <p class="fonte">Simulação baseada em dados publicados pela ESALQ-USP</p>
        `;

    divRespostaSimulador.innerHTML = resultado;
}

function limpar() {
    ipt_consumo_energetico.value = '';
    ipt_preco_energia.value = '';
    ipt_producao.value = '';

    divRespostaSimulador.innerHTML = `
        <p>
            Veja quanto seu dinheiro pode ser economizado ao utilizar nossos equipamentos.
        </p>
    `;
}

function enviarMensagem() {
    var iptNome = document.getElementById('ipt_nome')
    var iptSobrenome = document.getElementById('ipt_sobrenome')
    var iptEmail = document.getElementById('ipt_email')
    var iptMensagem = document.getElementById('ipt_mensagem')

    if (
        iptNome.value == '' ||
        iptSobrenome.value == '' ||
        iptEmail.value == '' ||
        iptMensagem.value == ''
    ) {
        alert('Preencha todos os campos')
    } else {
        let isEmail = false
        for (let i = 0; i < iptEmail.value.length; i++) {
            let temArroba = iptEmail.value[i] == '@'
            if(temArroba) {
                isEmail = true
                break
            }
        }

        if (isEmail) {
            alert('Mensagem enviada com sucesso')
            iptNome.value = ''
            iptSobrenome.value = ''
            iptEmail.value = ''
            iptMensagem.value = ''
        } else {
            alert('Insira um e-mail')
        }
    }
}