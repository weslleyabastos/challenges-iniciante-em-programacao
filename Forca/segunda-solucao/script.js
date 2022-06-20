//Seletores
let tela = document.querySelector("canvas");
let botaoNovoJogo = document.getElementById("btn-novo-jogo").style.display = "none"
let btnSairDesaparecer = document.getElementById("btn-sair").style.display = "none"
let divAdicionarPalavra = document.getElementById("adicionar-palavra").style.display = 'none';
let btnNovoJogo = document.getElementById("btn-novo-jogo");
let btnSair = document.getElementById("btn-sair");
let btnCancelar = document.getElementById("btn-cancelar");


//capturando contexto para desenhar
let pincel = tela.getContext("2d");
let numeroDeErros = 7


//array de palavras
palavraSecreta = ["HTML", "CSS", "JAVA", "ORACLE", "ALURA"];

//lógica de captura do tamanho da array com menos 1, para que o valor capturado seja real ao numero que precisaremos capturar
tamanhoDoArray = palavraSecreta.length - 1;
console.log(tamanhoDoArray)

//lançando numero aleatório
numeroAleatorio = Math.round(Math.random() * tamanhoDoArray);

//iteração do contador de tentativas
let contador = 0;
//condição para vitória
let pontos = 0;
//array de validação
let letraEscolhida = [];
let letrasErradas = [];
let erros = 0;
let letrasCorretas = []

//PalavraEscolhida
let palavraEscolhida = palavraSecreta[numeroAleatorio];
console.log(palavraEscolhida)

//eventos

// captura o id "iniciar jogo", inicia o jogo ao clique no botão e escuta o evento de keydown
 document.getElementById("iniciar-jogo").onclick = () => {
    iniciarJogo();
    document.addEventListener("keydown", capturarLetra);
}

// captura o id "btn-guardar", direciona para o método de salvar palavra e depois inicia o jogo
document.getElementById("btn-guardar").onclick = () => {
    salvarPalavra();
    iniciarJogo();
}

//recarrega a tela para um novo jogo
btnNovoJogo.addEventListener("click", function () {
    location.reload();
});

//recarrega a tela para sair do jogo
btnSair.addEventListener("click", function () {
    location.reload();
});

//recarrega a tela para cancelar o jogo
btnCancelar.addEventListener("click", function () {
    location.reload();
});




//Desenhando os campos onde o a letra digitada será inserida
function tracinhos() {
    //escolha da palavra porém capturando seu tamanho para desenhar os tracinhos
    let numeroDeLetras = palavraSecreta[numeroAleatorio].length + 1;
    console.log(numeroDeLetras)
    //a cada iteração possivel no looping um desenho sera criado
    for (let i = 1; i < numeroDeLetras; i++) {

        // tamanho do traço em relação a tela
        let x = 60 * i;

        //desenhando os traços
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 6;
        pincel.beginPath();
        pincel.moveTo(400 + x, 600);
        pincel.lineTo((x + 450), 600);
        pincel.stroke();
    }
}




//Validando se a letra esta correta
function palavraCerta(letra) {

    //variável de iteração booleana
    let ehUmaLetra = false;

    //looping para validara as letras inseridas
    for (let i = 0; i < palavraEscolhida.length; i++) {
        //dentro do comprimento da palavra escolhida será validado a sua existencia

        //se a letra inserida existir no contexto acima vai entrar nesse if
        if (letra === palavraEscolhida[i]) {

            //a variavel de iteração booleana(estado) altera para true. para aguardar nova tentativa (como o prevent.default()) e seguir validando
            ehUmaLetra = true;

            //possibilidade de validação 1
            if (i === 0) {
                escreverLetra(palavraEscolhida[i], 60);
                verificarVitoria(letra)
                pontos += 1;
            }
            //possibilidade de validação 2
            else if (i === 1) {
                escreverLetra(palavraEscolhida[i], 125);
                verificarVitoria(letra)
                pontos += 1;
            }
            //possibilidade de validação 3
            else if (i === 2) {
                escreverLetra(palavraEscolhida[i], 185);
                verificarVitoria(letra)
                pontos += 1;
            }
            //possibilidade de validação 4
            else if (i === 3) {
                escreverLetra(palavraEscolhida[i], 245);
                verificarVitoria(letra)
                pontos += 1;
            }
            //possibilidade de validação 5
            else if (i === 4) {
                escreverLetra(palavraEscolhida[i], 305);
                verificarVitoria(letra)
                pontos += 1;
            }
            else {
                escreverLetra(palavraEscolhida[i], 365);
                verificarVitoria(letra)
                pontos += 1;
            }
        }
    }
    //se a letra inserida não existir neste contexto, será escrita como letra errada
    if (ehUmaLetra == false) {

        verificarDerrota(letra);
    }

}


//Verifica se o usuário perdeu
function verificarDerrota(letra) {
    //checa se a letra já foi incluída no array de letras certas ou erradas
    if (letrasErradas.includes(letra) || letraEscolhida.includes(letra)) {
        alert('Essa letra já foi digitada')
    }
    else {
        //incluindo as letras já digitadas no array
        letrasErradas.push(letra);
        console.log(letrasErradas, "erro");
        //chamando a função de escrever errado passando como parametro a letra para atualizar o contador
        contador = contador + 20;

        //direciona para o método que escreve a letras
        escreverLetraErrada(letra, contador);

        //direciona ao método que desenha a forca
        desenharForca();

        //valida se o usuário cometeu o número máximo de erros, para poder exibir a mesagem de fim de jogo
        if (letrasErradas.length > numeroDeErros) {
            mostrarMensagemDeDerrota()
        }
    }
}

//Verifica se o usuário ganhou
function verificarVitoria(letra) {
    letraEscolhida.push(letra.toUpperCase());
    console.log(letraEscolhida, "acerto");
    if (letraEscolhida.length == palavraEscolhida.length) {
        console.log("venceu")
        mostrarMensagemDeVitoria()

    }
}

//Inicia o jogo
function iniciarJogo() {
    document.getElementById("div-desaparece").style.display = 'none';
    tracinhos();
    document.getElementById("btn-novo-jogo").style.display = "block"
    document.getElementById("btn-sair").style.display = "block"
};

//Faz com que os botões da tela de home desapareçam e os da tela de adicionar palavra se tornem visíveis
function aparecerTelaAdicionarPalavra() {
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("adicionar-palavra").style.display = "block";

}

// salva a palavra que o usuário quer adicionar
function salvarPalavra() {
    console.log(palavraSecreta)
    //captura o que o usuário digitou
    let novaPalavra = document.getElementById('input-nova-palavra').value;

    //inclui a palavra que o usuário digitou no array de palavras a serem sorteadas
    palavraSecreta.push(novaPalavra.toUpperCase());
    alert('A palavra digitada foi salva')
    console.log(palavraSecreta)

    // faz com que os componentes da tela de adicionar palavra desaparecem
    document.getElementById("adicionar-palavra").style.display = "none";

}


function capturarLetra(evento) {

    //iniciando a captura
    let letraEscrita = evento.key;
    console.log(letraEscolhida, 'testeAntesDoIf')
    //determinando segundo a tabela ASCI quais teclas podem ser capturaveis
    if (evento.keyCode >= 65 && evento.keyCode <= 90) {
        if (letraEscolhida.includes(letraEscrita.toUpperCase()) || palavraEscolhida.includes(letraEscrita)) {
            console.log(letraEscolhida, 'testeIfDasLetrasErradas')
            verificarDerrota(letraEscrita.toUpperCase())
        } else {
            console.log(letraEscrita, 'testeElseLetrasCertas')
            palavraCerta(letraEscrita.toUpperCase());

        }

    } else {
        alert("Insira somente letras");
    }

}




