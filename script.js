window.onload = function() {
    popularAnos();
    selecionarDataAtual();
};

function popularAnos() {
    const selectAno = document.getElementById('ano');
    const anoFinal = 2026;
    const anoInicial = 1960;
    for (let i = anoFinal; i >= anoInicial; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        selectAno.appendChild(option);
    }
}

function selecionarDataAtual() {
    const data = new Date();
    const mesAtual = data.getMonth() + 1;
    const selectMes = document.getElementById('mes');
    const selectAno = document.getElementById('ano');
    if (selectMes) selectMes.value = mesAtual;
    if (selectAno) selectAno.value = data.getFullYear();
}

function calcPercentual(salario, imposto) {
    return (salario > 0) ? (imposto / salario) * 100 : 0;
}

function f1(s) { return 0; }
function f2(s) { return (s * 0.075) - 169.44; }
function f3(s) { return (s * 0.15) - 381.44; }
function f4(s) { return (s * 0.225) - 662.77; }
function f5(s) { return (s * 0.275) - 896.00; }

function calcular() {
    const sal = parseFloat(document.getElementById('salario').value) || 0;
    const ded = parseFloat(document.getElementById('deducoes').value) || 0;
    const base = sal - ded;
    let imp = 0;

    if (base <= 2259.20) imp = f1(base);
    else if (base <= 2826.65) imp = f2(base);
    else if (base <= 3751.05) imp = f3(base);
    else if (base <= 4664.68) imp = f4(base);
    else imp = f5(base);

    if (imp < 0) imp = 0;
    const aliq = calcPercentual(sal, imp);

    document.getElementById('res-aliquota').innerText = aliq.toFixed(2).replace('.', ',');
    document.getElementById('res-valor').innerText = "R$ " + imp.toLocaleString('pt-BR', {minimumFractionDigits: 2});
}

function limpar() {
    document.getElementById('salario').value = "";
    document.getElementById('deducoes').value = "";
    document.getElementById('res-aliquota').innerText = "0,00";
    document.getElementById('res-valor').innerText = "R$ 0,00";
    selecionarDataAtual();
}