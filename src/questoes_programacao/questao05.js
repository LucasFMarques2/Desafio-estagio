let inputString = document.querySelector('#revertText')
let sendButton = document.querySelector('#sandText')

function inverterString(string) {
    var stringInvertida = '';
    for (var i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}


sendButton.addEventListener('click', (event) => {
    event.preventDefault()

    let textOrigin = inputString.value

    inverterString(textOrigin);

    document.querySelector('.questao5 span').classList.remove('hide')
    document.querySelector('.questao5 span').innerText = `A frase invertida é: ${inverterString(textOrigin)}`

})