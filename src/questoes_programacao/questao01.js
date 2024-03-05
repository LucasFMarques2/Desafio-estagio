export function soma() {
    const indice = 13
    let soma = 0

    for (let k = 0; k < indice; k++) {
        soma += k;
    }

    document.querySelector('.questao1 span').innerText = `A soma da questão um é: ${soma}`
}
