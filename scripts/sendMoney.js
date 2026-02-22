document.getElementById('btn-send-money')
.addEventListener('click', function(){
    const sendNumber = getValueFromInput('send-money-number');
    if (sendNumber.length != 11){
        alert('Invalid User Account');
        return;
    }

    const sendMoneyAmount = getValueFromInput('send-money-amount');

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(sendMoneyAmount);

    if (newBalance < 0){
        alert('Invalid Amount');
        return;
    }

    const pass = getValueFromInput('send-money-pass');
    if (pass == '1234'){
        alert(`Send Money to ${sendNumber} Successful`);
        setBalance(newBalance);

        // keeping transaction history
        const historyParent = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="bg-base-100 p-4 rounded-md">
            ${sendMoneyAmount} tk Send Money Success to ${sendNumber} at ${new Date()}
        </div>
        `;
        historyParent.append(newHistory);
    }else{
        alert('Invalid Pin');
        return;
    }
})