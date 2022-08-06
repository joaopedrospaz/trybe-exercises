
function clear() {
    
    let inputClear = document.querySelectorAll('input');
    let textareaClear = document.querySelector('textarea');
    for (let i = 0; i < inputClear.length; i += 1) {
        inputClear[i].value = ''; 
        inputClear[i].checked = false;
    }
    textareaClear.value = '';
}



function enableSubmit() {
    const submitBtn = document.getElementById('btn-submit');
    const agreement = document.getElementById('agreement');
    submitBtn.disabled = !agreement.checked;
}

function validation() {
    let name = document.getElementById('nome-completo').value.length;
    let invalidName = name < 10 || name > 50;
    
    let email = document.getElementById('input-email').value.length;
    let invalidEmail = email < 10 || email > 40;

    let why = document.getElementById('porque').value.length;
    invalidWhy = why > 500;

    if (invalidName || invalidEmail || invalidWhy) {
        return alert('Dados inválidos');
    }
    else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');;
    }
}
function handleSubmit(event) {
    event.preventDefault();
    const validations = validation();
  if (validations === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}
window.onload = function () {
    const submitBtn = document.querySelector('#btn-submit');
    submitBtn.addEventListener('click', handleSubmit)
    let buttonClear = document.getElementById('clear');
    buttonClear.addEventListener('click', clear);
    const agreement = document.querySelector('#agreement');
    agreement.addEventListener('change', enableSubmit);
}