document.getElementById('btn-login')
.addEventListener('click', function(){
    const emailInput = document.getElementById('input-email');
    const email = emailInput.value;

    const passInput = document.getElementById('input-pass');
    const pass = passInput.value;
    if (email == '01234567890' && pass == '1234'){
        alert('login successfull');
        window.location.assign('home.html');
    }
    else{
        alert('login failed');
        return;
    }
});