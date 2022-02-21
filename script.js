let percentButton = document.getElementsByClassName('tip-button');
let buttonLength = percentButton.length;
let i;

function calcTip(e){
    let billAmount = parseFloat(document.getElementById('bill-amount').value || 0);
    let tipPercentage = e.target.value;
    let numberPeople = document.getElementById('numpeople').value || 1;
    let tipAmount = Math.round(((billAmount * tipPercentage) / 100) / numberPeople);
    let totalAmount = Math.round((billAmount / numberPeople) + tipAmount);
    document.getElementById('tip-amount').value = '$' + tipAmount;
    document.getElementById('bill-total').value = '$' + totalAmount;
}

for (i = 0; i < buttonLength; i++){
    percentButton[i].addEventListener('click', calcTip);
}
