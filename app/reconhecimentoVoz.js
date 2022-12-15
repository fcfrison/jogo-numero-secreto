window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; /*Essa linha permite que o serviço de reconhecimento de voz seja inicializado.*/
const elementoChute = document.getElementById("chute");
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak); /**Adiciona um event listener */
function onSpeak(evento){
    let chute = evento.results[0][0].transcript; /**Captura o valor transcrito. */
    insereChute(chute);
    validarValores(chute);
    console.log(evento);
}
function insereChute(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end',()=>recognition.start());
