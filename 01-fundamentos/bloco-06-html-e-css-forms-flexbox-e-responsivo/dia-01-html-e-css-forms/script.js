function handleSubmit(event) {
    event.preventDefault();
}
window.onload = function () {
    const submitBtn = document.querySelector('#btn-submit');
    submitBtn.addEventListener('click', handleSubmit)
}


function clear() {
    
    let inputClear = document.querySelectorAll('input');
    let textareaClear = document.querySelector('textarea');
    for (let i = 0; i < inputClear.length; i += 1) {
        inputClear[i].value = ''; 
        inputClear[i].checked = false;
    }
    textareaClear.value = '';
}

window.onload = function () {
    let buttonClear = document.getElementById('clear');
    buttonClear.addEventListener('click', clear)
}