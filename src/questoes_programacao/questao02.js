const inputNumber = document.querySelector('#inputNumber')
const sendButton = document.querySelector('#enviar')


function isFibonacci(num) {
    var a = 0;
    var b = 1;
    
    while (b < num) {
        var temp = b;
        b = a + b;
        a = temp;
    }
    
    return b === num;
}


sendButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    
    var numberOfInput = parseInt(inputNumber.value);
    
    if (isNaN(numberOfInput) || numberOfInput === '') {
        document.querySelector('.questao2 span').innerText = 'Informe um valor válido'
        return;
    }
    
    if (isFibonacci(numberOfInput)) {
        document.querySelector('.questao2 span').innerText = `${numberOfInput} está na sequencia de Fibonacci`
    } else {
        document.querySelector('.questao2 span').innerText = `${numberOfInput} não está na sequencia de Fibonacci`
    }
});