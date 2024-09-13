function updateValue(value, priceId, volumeId, pricePerUnit) {
    const totalPrice = value * pricePerUnit;
    document.getElementById(volumeId).textContent = value;
    document.getElementById(priceId).textContent = `R$${totalPrice.toFixed(2).replace('.', ',')}`;
}

function getValue(id) {
    const element = document.getElementById(id);
    const text = element.textContent.replace('R$', '').replace(',', '.');
    return parseFloat(text);
}

// Função para calcular e atualizar a soma dos valores
function calculateTotalSum() {
    // Obter valores dos IDs
    const price1 = getValue('price1');
    const price2 = getValue('price2');
    const price3 = getValue('price3');

    // Calcular a soma para cada mês com desconto
    const totalSumTrimestral = (price1 + price2 + price3)*0.95;
    const totalSumSemestral = (price1 + price2 + price3)*0.80;

    // Calcular a soma para cada mês sem desconto
    const totalSumMensal = price1 + price2 + price3;
    // const totalSumTrimestralSemDesconto = (price1 + price2 + price3)*3;
    // const totalSumSemestralSemDesconto = (price1 + price2 + price3)*6;

    // Calcular a soma total dos meses do plano
    const totalPlanoTrimestral = totalSumTrimestral*3
    const totalPlanoSemestral = totalSumSemestral*6

    // Exibir a soma no console para verificação
    document.getElementById('precomensal').textContent = `R$${totalSumMensal.toFixed(2).replace('.', ',')}`;
    document.getElementById('precotrimestral').textContent = `R$${totalSumTrimestral.toFixed(2).replace('.', ',')}`;
    document.getElementById('precosemestral').textContent = `R$${totalSumSemestral.toFixed(2).replace('.', ',')}`;

    // Exibir a soma para ver o valor total
    document.getElementById('totalmensal').textContent = `R$${totalSumMensal.toFixed(2).replace('.', ',')}`;
    document.getElementById('totaltrimestral').textContent = `R$${totalPlanoTrimestral.toFixed(2).replace('.', ',')}`;
    document.getElementById('totalsemestral').textContent = `R$${totalPlanoSemestral.toFixed(2).replace('.', ',')}`;

    // // Exibir a soma para ver o valor total sem desconto
    // document.getElementById('totaltrimestraldesconto').textContent = `R$${totalSumTrimestralSemDesconto.toFixed(2).replace('.', ',')}`;
    // document.getElementById('totalsemestraldesconto').textContent = `R$${totalSumSemestralSemDesconto.toFixed(2).replace('.', ',')}`;
}

// Função para atualizar o valor dos preços e recalcular a soma
function updatePrices() {
    // Atualiza os valores dos preços com base no range
    const volume1 = parseInt(document.getElementById('volume1').value, 10);
    const volume2 = parseInt(document.getElementById('volume2').value, 10);
    const volume3 = parseInt(document.getElementById('volume3').value, 10);

    const price1PerUnit = 80;
    const price2PerUnit = 120;
    const price3PerUnit = 150;

    document.getElementById('price1').textContent = `R$${(volume1 * price1PerUnit).toFixed(2).replace('.', ',')}`;
    document.getElementById('price2').textContent = `R$${(volume2 * price2PerUnit).toFixed(2).replace('.', ',')}`;
    document.getElementById('price3').textContent = `R$${(volume3 * price3PerUnit).toFixed(2).replace('.', ',')}`;

    // Recalcular e atualizar a soma
    calculateTotalSum();
}

// Adiciona event listeners aos inputs range
document.getElementById('volume1').addEventListener('input', updatePrices);
document.getElementById('volume2').addEventListener('input', updatePrices);
document.getElementById('volume3').addEventListener('input', updatePrices);

// Chama a função inicial para definir os preços
updatePrices();