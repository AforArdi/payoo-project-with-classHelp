document.getElementById('btn-pay-bill')
.addEventListener('click', function(){
    // get provider
    const provider = getValueFromInput('pay-bill-selection');
    if (provider == 'Select Provider'){
        alert('Please Select A Provider');
        return;
    }
    // get biller account number
    const billerAccount = getValueFromInput('pay-bill-account-number');
    if(billerAccount.length != 11){
        alert('Invalid Biller Account Number');
        return;
    }
    // get amount to pay bill
    const billAmount = getValueFromInput('pay-bill-amount');
    const newBalance = getBalance() - billAmount;
    if (newBalance < 0){
        alert('Invalid Amount');
        return;
    }
    // pin check
    const billpass = getValueFromInput('pay-bill-pass');
    if (billpass == '1234'){
        alert('Pay Bill Successful');
        setBalance(newBalance);

        // keeping transaction history
        const historyParent = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="bg-base-100 p-4 rounded-md">
            ${billAmount} tk Pay Bill Successful to ${provider} at ${new Date()}
        </div>
        `;
        historyParent.append(newHistory);
    }else{
        alert('Invalid Pin Number');
        return;
    }

});