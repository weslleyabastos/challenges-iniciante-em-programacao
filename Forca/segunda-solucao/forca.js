//desenhando a Forca

function desenharForca() {
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 5;
    pincel.beginPath();
    //trave horizontal inferior
    pincel.moveTo(440, 500);
    pincel.lineTo(800, 500);
    erros += 1;
    //Forca
    if (erros === 1) {
        //trave vertical 
        pincel.moveTo(460, 500);
        pincel.lineTo(460, 100);
        //trave horizontal superior
        pincel.moveTo(650, 100);
        pincel.lineTo(460, 100);
        //corda
        pincel.moveTo(650, 100)
        pincel.lineTo(651, 171);
        pincel.fillStyle = "#000000"
        pincel.stroke();
    }
    //Cabeça
    else if (erros === 2) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.arc(650, 230, 50, 0, Math.PI * 2);
        pincel.stroke();
    }
    /* Tronco */
    else if (erros === 3) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.moveTo(650, 389);
        pincel.lineTo(650, 289);
        pincel.stroke();
    }
    //Perna direira
    else if (erros === 4) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.moveTo(650, 389);
        pincel.lineTo(690, 450);
        pincel.stroke();
    }

    // Perna Esquerda
    else if (erros === 5) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.moveTo(650, 389);
        pincel.lineTo(600, 450);
        pincel.stroke();
    }

    //braço direito
    else if (erros === 6) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.moveTo(650, 330);
        pincel.lineTo(690, 389);
        pincel.stroke();

        console.log("Você perdeu");
    }
    //Braço esquerdo
    else if (erros === 7) {
        pincel.strokeStyle = "#0A3871";
        pincel.lineWidth = 3;
        pincel.beginPath();
        pincel.moveTo(650, 330);
        pincel.lineTo(600, 389);
        pincel.stroke();
    }
}


function mostrarMensagemDeVitoria() {
    pincel.font = ' bold 50px Inter';
    pincel.lineWidth = 6
    pincel.lineCap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "green"
    pincel.fillText("Parabéns!", 790, 420)
}



function mostrarMensagemDeDerrota() {
    pincel.font = ' bold 50px Inter';
    pincel.lineWidth = 6
    pincel.lineCap = "round"
    pincel.lineJoin = "round"
    pincel.fillStyle = "red"
    pincel.fillText("Fim de jogo!", 790, 420)
}

//Escrever Letra em cima dos traços
function escreverLetra(letra, x) {
    //escrevendo com canvas
    pincel.lineWidth = 2;
    pincel.font = "50px sans-serif";
    pincel.fillStyle = "#0A3871";
    pincel.fillText(letra, x + 400, 590);
}

//Escrever Erros
function escreverLetraErrada(letra, x) {
    //escrevendo com canvas
    pincel.font = "30px sans-serif";
    pincel.fillStyle = "#0A3871";
    pincel.fillText(letra, x + 790, 320);
}