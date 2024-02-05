const balance = document.getElementById('balance-counter');
// ** deposit values ---->
const deposit = document.getElementById('deposit-counter');
const depositInput = document.getElementById('deposit-input');
const anotherInput = document.getElementById('deposit-input');
const depositBtn = document.getElementById('deposit-btn');
// ** withdraw ---->
const withdrawCounter = document.getElementById('withdraw-counter');
const withdrawInput = document.getElementById('withdraw');
const withdrawBtn = document.getElementById('withdraw-btn');

// ** log in value-->
const loginContainer = document.getElementById('login-box');
const  email = document.getElementById('email');
const password = document.getElementById('password'); 
const btnLog = document.getElementById('btn-log');
const mainContent = document.getElementById('main-content');

document.getElementById('title').innerHTML='welcome to demo bank !'
// ** log in handler --->

btnLog.addEventListener('click' , (e) => {
    try {

        if (email.value==='mymail@mycomp.inc'&& password.value==='hello123') {
            loginContainer.classList.add(`d-none`);
            mainContent.classList.remove('active');
            alert('log in successful..... !')
        }
        else {
            alert('please enter correct credential !')
        }

    } catch (error) {
        console.log(error.message)
    }
})



// ** deposit handler--->
depositBtn.addEventListener('click', (e) => {
    e.preventDefault();
    calculationfanc(depositInput, deposit, true);
    calculationfanc(depositInput, balance, true);
    inputHandler(depositInput);
});
// ** withdraw handler--->
withdrawBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    calculationfanc(withdrawInput, withdrawCounter, true);
    calculationfanc(withdrawInput, balance);
    inputHandler(withdrawInput);
})
// ** calculation handler--->
const calculationfanc = (input, counter, isDeposit) => {
    if (input.value) {
        const depositAmount = parseFloat(counter.innerText);
        const newDeposit = parseFloat(input.value);
        const newAmount = isDeposit? depositAmount + newDeposit : depositAmount - newDeposit;
        counter.innerText = newAmount.toFixed(2);
    }
    return;
}

// ** input handler-->

const inputHandler = input =>{
    input.value = ''
}

// ** footer--
const footer =()=>{
    const date = new Date();
    const now = date.getFullYear()
    document.getElementById('footer-content').innerHTML = `
  
      <p class="lead text-center text-capitalize text font-weight mb-0">&copy; ${now} all the rights reserved.</p>
  
      `
}
footer()
