document.getElementById('btn-get-bonus')
.addEventListener('click', function(){
    const coupon = getValueFromInput('coupon-code');
    if(coupon == 'ardi2026' || coupon == 'phero-star'){
        const couponAmount = 5000;
        alert(`Coupon Code Activated, ${couponAmount} added with to your Account`);
        const newBalance = getBalance() + couponAmount;
        setBalance(newBalance);
    }else{
        alert('Invalid Coupon Code');
        return;
    }
});