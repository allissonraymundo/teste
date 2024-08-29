const input = document. querySelector('.login__input');
const button = document. querySelector('.login__button');
const buttom = document. querySelector('.login__buttom');
const form = document.querySelector('login-form')


const validateinput = ( {target} ) => {
    if (target.value.length > 2) {
    button.removeAttribute('disabled');
    buttom.removeAttribute('disabled');
  return;
    }
        button.setAttribute('disabled', '');
        buttom.setAttribute('disabled', '');
    }

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = ('index.html');
}

input.addEventListener('input', validateinput);
form.addEventListener('submit', handleSubmit);