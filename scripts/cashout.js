document.getElementById('btn-withdraw')
.addEventListener('click', function(){
    const agentInput = document.getElementById('input-cashout-number');
    const agentNumber = agentInput.value;

    if (agentInput.length != 11){
        alert('Invalid Agent Number');
        return;
    }

    const amountInput = document.getElementById('input-cashout-amount');
    const amount = amountInput.value;

    const balanceElement = document.getElementById('balance');
    const currentBalance = balanceElement.innerText;

    const newBalance = Number(currentBalance) - Number(amount);
    console.log(newBalance);

    if (newBalance < 0){
        alert('Invalid Amount');
        return;
    }

    const passInput = document.getElementById('input-pass');
    const pass = passInput.value;

    if (pass === '1234'){
        alert('Cashout Successful');
        balanceElement.innerText = newBalance;
    }else{
        alert('Invalid Pin');
        return;
    }
})