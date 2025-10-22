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
            <br><b>Resultados da Simulação:</b><br><br>
            <b>Eficiência Energética</b><br>
            - Consumo atual: ${consumoEnergetico.toFixed(2)} kWh - R$${custoSemGibbon.toFixed(2)}<br>
            - Consumo com Gibbon: ${energiaComGibbon.toFixed(2)} kWh - R$${custoComGibbon.toFixed(2)}<br>
            - Economia em torno de: <b>${(reducaoEnergia * 100).toFixed(0)}%</b> - <b>R$${economia.toFixed(2)}</b>
            <br><br>

            <b>Produtividade</b><br>
            - Produção atual: ${producao.toFixed(2)} toneladas<br>
            - Produção com Gibbon: ${producaoComGibbon.toFixed(2)} toneladas<br>
            - Aumento em torno de <b>${(aumentoProducao * 100).toFixed(0)}%</b> (${aumento.toFixed(2)} toneladas)<br><br><br>

            <p style="font-size: 12px;"><i> Simulação baseada em dados publicados pela ESALQ-USP</i></p>
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
        iptNome.value = ''
        iptSobrenome.value = ''
        iptEmail.value = ''
        iptMensagem.value = ''
    }
}