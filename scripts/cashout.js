document.getElementById('btn-withdraw')
.addEventListener('click', function(){
    const agentNumber = getValueFromInput('input-cashout-number');

    if (agentNumber.length != 11){
        alert('Invalid Agent Number');
        return;
    }

    const amount = getValueFromInput('input-cashout-amount');

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(amount);

    if (newBalance < 0){
        alert('Invalid Amount');
        return;
    }

    const pass = getValueFromInput('input-pass');

    if (pass === '1234'){
        alert('Cashout Successful');
        setBalance(newBalance);

        // keeping transaction history
        const historyParent = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="bg-base-100 p-4 rounded-md">
            ${amount} tk Cashout Success to Agent ${agentNumber} at ${new Date()}
        </div>
        `;
        historyParent.append(newHistory);
    }else{
        alert('Invalid Pin');
        return;
    }
})