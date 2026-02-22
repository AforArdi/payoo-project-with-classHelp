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

    }else{
        alert('Invalid Pin');
        return;
    }
})