var jogador1 = true;
var valor = 0;

var pontuacaoX = 0;
var pontuacaoO = 0;
var comeco 

function duracaoPartida(comeco, final) {
  var duracao = (final - comeco) / 1000;
  alert(duracao + " SEGUNDOS");
  
}

function valorPontuacaoX() {
  if (valor <= 8)
    pontuacaoX += 2;
  else
    pontuacaoX += 1;
}
function valorPontuacaoO() {
  if (valor <= 8)
    pontuacaoO += 2;
  else
    pontuacaoO += 1;
}

function travandoTela() {
  for (let i = 0; i <= 8; i++) {
    comparacao[i].removeAttribute("onclick");
    console.log ("entrou")

  }
}


var variavelX = document.getElementById('pontosX');

var variavelO = document.getElementById('pontosO');

var comparacao = document.getElementsByClassName("celula");

function selecionarCasa(event, numCol) {
  if(valor == 0){
    comeco = new Date()
    
  }
  /*CRIANDO X*/
  if (jogador1) {
    event.target.style.backgroundImage = 'url("imgX.png")';
    jogador1 = false;
    valor += 1;

    var rodadaO = "É a vez do Jogador 0 \n\t Proximo a jogar: Jogador X ";
    var vezJogadorO = document.getElementById('sJogadorDaVez');
    vezJogadorO.innerText = rodadaO;



    /*NÃO PODE CLICAR DENOVO NO X*/
    if (comparacao[0].style.backgroundImage == 'url("imgX.png")')
      comparacao[0].removeAttribute("onclick");

    if (comparacao[1].style.backgroundImage == 'url("imgX.png")')
      comparacao[1].removeAttribute("onclick");

    if (comparacao[2].style.backgroundImage == 'url("imgX.png")')
      comparacao[2].removeAttribute("onclick");

    if (comparacao[3].style.backgroundImage == 'url("imgX.png")')
      comparacao[3].removeAttribute("onclick");

    if (comparacao[4].style.backgroundImage == 'url("imgX.png")')
      comparacao[4].removeAttribute("onclick");

    if (comparacao[5].style.backgroundImage == 'url("imgX.png")')
      comparacao[5].removeAttribute("onclick");

    if (comparacao[6].style.backgroundImage == 'url("imgX.png")')
      comparacao[6].removeAttribute("onclick");

    if (comparacao[7].style.backgroundImage == 'url("imgX.png")')
      comparacao[7].removeAttribute("onclick");

    if (comparacao[8].style.backgroundImage == 'url("imgX.png")')
      comparacao[8].removeAttribute("onclick");



    /*CRIANDO O*/
  } else {
    event.target.style.backgroundImage = 'url("imgCircle.png")';
    jogador1 = true;
    valor += 1;

    var rodadaX = "É a vez do Jogador X \n\t Proximo a jogar: Jogador O ";
    var vezJogadorX = document.getElementById('sJogadorDaVez');
    vezJogadorX.innerText = rodadaX;

    /*NÃO PODE CLICAR DENOVO NO O*/
    if (comparacao[0].style.backgroundImage == 'url("imgCircle.png")')
      comparacao[0].removeAttribute("onclick");

    if (comparacao[1].style.backgroundImage == 'url("imgCircle.png")')
      comparacao[1].removeAttribute("onclick");

    if (comparacao[2].style.backgroundImage == 'url("imgCircle.png")')
      comparacao[2].removeAttribute("onclick");

    if (comparacao[3].style.backgroundImage == 'url("imgCircle.png")')
      comparacao[3].removeAttribute("onclick");

    if (comparacao[4].style.backgroundImage == 'url("imgCircle.png")')
      comparacao[4].removeAttribute("onclick");

    if (comparacao[5].style.backgroundImage == 'url("imgCircle.png")')
      comparacao[5].removeAttribute("onclick");

    if (comparacao[6].style.backgroundImage == 'url("imgCircle.png")')
      comparacao[6].removeAttribute("onclick");

    if (comparacao[7].style.backgroundImage == 'url("imgCircle.png")')
      comparacao[7].removeAttribute("onclick");

    if (comparacao[8].style.backgroundImage == 'url("imgCircle.png")')
      comparacao[8].removeAttribute("onclick");
  }


  /*POSIBILIDADES DE O */



  if (comparacao[0].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[1].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[2].style.backgroundImage == 'url("imgCircle.png")') {
    alert("Ganhador: Jogador O");
    valorPontuacaoO();
    travandoTela();
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[3].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[4].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[5].style.backgroundImage == 'url("imgCircle.png")') {
    alert("Ganhador: Jogador O") 
    valorPontuacaoO()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[6].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[7].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[8].style.backgroundImage == 'url("imgCircle.png")') {
    alert("Ganhador: Jogador O")
    valorPontuacaoO()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[0].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[3].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[6].style.backgroundImage == 'url("imgCircle.png")') {
    alert("Ganhador: Jogador O") 
    valorPontuacaoO()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[1].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[4].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[7].style.backgroundImage == 'url("imgCircle.png")') {
    alert("Ganhador: Jogador O") 
    valorPontuacaoO()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[2].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[5].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[8].style.backgroundImage == 'url("imgCircle.png")') {
    alert("Ganhador: Jogador O") 
    valorPontuacaoO()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[0].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[4].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[8].style.backgroundImage == 'url("imgCircle.png")') {
    alert("Ganhador: Jogador O") 
    valorPontuacaoO()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[2].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[4].style.backgroundImage == 'url("imgCircle.png")' &&
    comparacao[6].style.backgroundImage == 'url("imgCircle.png")') {
    alert("Ganhador: Jogador O") 
    valorPontuacaoO()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }

  /*POSIBILIDADES DE X */

  else if (comparacao[0].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[1].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[2].style.backgroundImage == 'url("imgX.png")') {
    alert("Ganhador: Jogador X") 
    valorPontuacaoX()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[3].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[4].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[5].style.backgroundImage == 'url("imgX.png")') {
    alert("Ganhador: Jogador X") 
    valorPontuacaoX()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[6].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[7].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[8].style.backgroundImage == 'url("imgX.png")') {
    alert("Ganhador: Jogador X") 
    valorPontuacaoX()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[0].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[3].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[6].style.backgroundImage == 'url("imgX.png")') {
    alert("Ganhador: Jogador X") 
    valorPontuacaoX()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[1].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[4].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[7].style.backgroundImage == 'url("imgX.png")') {
    alert("Ganhador: Jogador X") 
    valorPontuacaoX()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[2].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[5].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[8].style.backgroundImage == 'url("imgX.png")') {
    alert("Ganhador: Jogador X") 
    valorPontuacaoX()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[0].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[4].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[8].style.backgroundImage == 'url("imgX.png")') {
    alert("Ganhador: Jogador X") 
    valorPontuacaoX()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (comparacao[2].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[4].style.backgroundImage == 'url("imgX.png")' &&
    comparacao[6].style.backgroundImage == 'url("imgX.png")') {
    alert("Ganhador: Jogador X") 
    valorPontuacaoX()
    travandoTela()
    var final = new Date();
    duracaoPartida(comeco.getTime(), final.getTime());
  }
  else if (valor == 9)
    alert("deu velha!");



  variavelX.innerText = "Jogador X = " + pontuacaoX + " Pontos";

  variavelO.innerText = "Jogador O = " + pontuacaoO + " Pontos ";

}

function resetarTudo() {

  for (let i = 0; i <= 8; i++) {
    comparacao[i].setAttribute('onclick', `selecionarCasa(event, ${i + 1})`);
    comparacao[i].style.backgroundImage = "";
  }

  valor = 0;
  jogador1 = true;
  var nova = document.getElementById('sJogadorDaVez')
  nova.innerText = "Começa com o Jogador X";

}



