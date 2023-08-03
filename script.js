document.getElementById("valor-calculado").style.display = "none";
document.getElementById("each").style.display = "none";

function calculateDinner() {
    var totalConta = document.getElementById("total-conta").value;
    var taxaServico = document.getElementById("taxa-servico").value;
    var numeroPessoas = document.getElementById("numero-pessoas").value;

    if (totalConta === "" || taxaServico == 0 || isNaN(totalConta) || isNaN(numeroPessoas)) {
        alert("Por favor, coloque um valor válido!");
        return;
    }

    if (numeroPessoas === "" || numeroPessoas <= 1) {
        numeroPessoas = 1;
        document.getElementById("each").style.display = "none"
    } else {
        document.getElementById("each").style.display = "block"
    }

    var totalTaxaServico = (totalConta * taxaServico) / numeroPessoas;
    var total = totalTaxaServico + (totalConta / numeroPessoas);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("valor-calculado").style.display = "block";
    document.getElementById("valor-por-cabeca").innerHTML = total;
}
function limparCampos() {
    document.getElementById("total-conta").value = "";
    document.getElementById("taxa-servico").selectedIndex = 0;
    document.getElementById("numero-pessoas").value = "";
    document.getElementById("valor-calculado").style.display = "none";
    document.getElementById("each").style.display = "none";
}

document.getElementById("calcular").onclick = function () {
    calculateDinner();
}

document.getElementById("limpar").onclick = function () {
    limparCampos();
}

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

const openPopupButton = document.getElementById('openPopup');
const closePopupButton = document.getElementById('closePopup');
const popupContainer = document.getElementById('popupContainer');

openPopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
});

closePopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

var stars = document.querySelectorAll('.star-icon');
                  
document.addEventListener('click', function(e){
  var classStar = e.target.classList;
  if(!classStar.contains('ativo')){
    stars.forEach(function(star){
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});