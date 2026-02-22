// machine id to input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const inputToValue = input.value;
    return inputToValue;
}

// machine balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

// machine set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}