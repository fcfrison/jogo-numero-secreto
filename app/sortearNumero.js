const minValor = setValores(10, "menor-valor");
const maxValor = setValores(100, "maior-valor");
const numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);

function gerarNumeroAleatorio(){
    let randomValue = parseInt(Math.random()*maxValor) + 1;
    if(randomValue<minValor){
        randomValue = minValor;
    }
    return randomValue; 
}
function setValores(valor, id){
    document.getElementById(id).innerHTML = valor;
    return valor;
}
