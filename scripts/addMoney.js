document.getElementById('btn-add-money')
.addEventListener('click', function(){
    // get bank
    const bankName = getValueFromInput('add-money-bank');
    if (bankName == 'Select Bank'){
        alert('Please Select A Bank');
        return;
    }
    // get bank account number
    const accNo = getValueFromInput('add-money-number');
    if(accNo.length != 11){
        alert('Invalid Account Number');
        return;
    }
    // get amount
    const amount = getValueFromInput('add-money-amount');
    const newBalance = getBalance() + Number(amount);
    
    const pin = getValueFromInput('add-money-pass');
    if (pin == '1234'){
        alert(`Add Money Success from ${bankName}`);
        setBalance(newBalance);

        // keeping transaction history
        const historyParent = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="bg-base-100 p-4 rounded-md">
            ${amount} tk Add Money Success from ${bankName} at ${new Date()}
        </div>
        `;
        historyParent.append(newHistory);

    }else{
        alert('Invalid Pin');
        return;
    }
})