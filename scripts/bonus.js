document.getElementById('btn-get-bonus')
.addEventListener('click', function(){
    const coupon = getValueFromInput('coupon-code');
    if(coupon == 'ardi2026' || coupon == 'phero-star'){
        const couponAmount = 5000;
        alert(`Coupon Code Activated, ${couponAmount} added with to your Account`);
        const newBalance = getBalance() + couponAmount;
        setBalance(newBalance);

        // keeping transaction history
        const historyParent = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="bg-base-100 p-4 rounded-md">
            ${couponAmount} tk bonus added at ${new Date()}
        </div>
        `;
        historyParent.append(newHistory);
    }else{
        alert('Invalid Coupon Code');
        return;
    }
});