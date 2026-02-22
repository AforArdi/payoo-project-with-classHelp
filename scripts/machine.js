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

// machine: hide all, show only the selected id when specific btn is clicked
function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const sendMoney = document.getElementById('send-money');
    const history = document.getElementById('history');
    const bonus = document.getElementById('bonus');

    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    sendMoney.classList.add('hidden');
    history.classList.add('hidden');
    bonus.classList.add('hidden');

    const selectedId = document.getElementById(id);
    selectedId.classList.remove('hidden');
}