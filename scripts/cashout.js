document.getElementById('btn-withdraw')
.addEventListener('click', function(){
    const agentNumber = getValueFromInput(input-cashout-number);

    if (agentNumber.length != 11){
        alert('Invalid Agent Number');
        return;
    }

    const amount = getValueFromInput(input-cashout-amount);

    const balanceElement = document.getElementById('balance');
    const currentBalance = balanceElement.innerText;

    const newBalance = Number(currentBalance) - Number(amount);
    console.log(newBalance);

    if (newBalance < 0){
        alert('Invalid Amount');
        return;
    }

    const pass = getValueFromInput('input-pass');

    if (pass === '1234'){
        alert('Cashout Successful');
        balanceElement.innerText = newBalance;
    }else{
        alert('Invalid Pin');
        return;
    }
})