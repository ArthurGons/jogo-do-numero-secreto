    let listasDeNumerosSorteados = [];
    let numeroLimite = 10;
    let numeroSecreto = numeroAleatorio();
    let tentativas = 1;

    function exibirTextoNaTela(tag ,texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});

    }
    function exibirMensageminicial(){
        exibirTextoNaTela('h1','Jogo do número secreto');
        exibirTextoNaTela('p','Escolha um número entre 1 e 10');
    }
    exibirMensageminicial()

     function verificarChute(){
        let chute = document.querySelector('input').value;
     
        console.log (chute == numeroSecreto);
  
    
        if(chute==numeroSecreto){

            let palavraTentativa = tentativas > 1 ?'tentativas': 'tentativa';
            let mensagemTentativa =(`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);

            exibirTextoNaTela('h1','Você acertou');
            exibirTextoNaTela('p',mensagemTentativa);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else {
            if(chute>numeroSecreto){
            exibirTextoNaTela('h1','Você errou');
            exibirTextoNaTela('p','o número secreto é menor');
        }
        
        else{
            exibirTextoNaTela('h1','Você errou');
            exibirTextoNaTela('p','o número secreto é maior');}
            tentativas++;
            limparNome();
            
        }
        
    }
     
    function numeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
        let quantidadeDeElemntodNaLista = listasDeNumerosSorteados.length;
        if (quantidadeDeElemntodNaLista == numeroLimite) {
           listasDeNumerosSorteados = [];
        }

        if(listasDeNumerosSorteados.includes(numeroEscolhido)) {
            return numeroAleatorio();
         }
         else{
             listasDeNumerosSorteados.push(numeroEscolhido);
             console.log(listasDeNumerosSorteados);
             return numeroEscolhido;
         }
    }
    
        function limparNome(){
           chute = document.querySelector('input');
           chute.value =('') ;
        }
 function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparNome();
    tentativas = 1;
    exibirMensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);


 }