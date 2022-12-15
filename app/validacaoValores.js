function validarValores(chute){
    let numero = parseInt(chute.replace(/\s/g, ""));//remove espaços em branco
    
    if(Number.isNaN(numero)){
        elementoChute.innerHTML +=`
        <div> Valor inválido. O valor deve ser numérico. </div>
        `
        return 
    }else if(!estaDentroDoLimite(numero)){
        elementoChute.innerHTML +=`
        <div> Valor inválido. O valor deve estar entre ${minValor} e ${maxValor} </div>
        `
        return
    }
    if(numero === numeroAleatorio){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto é ${numeroAleatorio}</h3>
        <button id='jogar-novamente' class='but'>Jogar novamente</button>
        `
        return;
    }else if(numero>numeroAleatorio){
        elementoChute.innerHTML+=`
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }else{
        elementoChute.innerHTML+=`
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}
function estaDentroDoLimite(numero){
    return numero>=minValor && numero<=maxValor;
}
document.body.addEventListener('click',evento=>{
    if(evento.target.id==='jogar-novamente'){
        window.location.reload();
    }
})