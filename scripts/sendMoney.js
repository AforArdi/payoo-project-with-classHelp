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
    }else{
        alert('Invalid Pin');
        return;
    }
})