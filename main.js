

function mudarTodasCores() {
  mudarCores3()
  mudarCores4()
}
function mudarCores3() {
  var elementos3 = document.getElementsByClassName("botao")

  for (var i3 = 0; i3 < elementos3.length; i3++) {
    elementos3[i3].style.backgroundColor = "yellow"
  }
}
function mudarCores4() {
  var elementos4 = document.getElementsByClassName("botao2");

  for (var i4 = 0; i4 < elementos4.length; i4++) {
    elementos4[i4].style.backgroundColor = "green"
  }
}
var vitoria = document.getElementById("andamento")
var iniciar = document.getElementById("iniciar")
iniciar.addEventListener("click", iniciaJogo)
function iniciaJogo() {
  andamento.innerHTML = "Começou!!!"
  var errou2 = this.getElementsByClassName("resultado")
  var botoes = document.querySelectorAll("input")
  var terminar = true;
   iniciar.disabled = true

  for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("mouseover", function (event) {
      if (terminar == true) {
        var errou = event.target.id
        var gameOver = document.getElementById(errou)
        gameOver.style.backgroundColor = "red"
        terminar = false
        finalizar.disabled = true
        andamento.innerHTML = "Voce Perdeu!!!"

      }
    }
    )
  }
  var finalizar = document.getElementById("finalizar")
  finalizar.addEventListener("click", finalizarJogo)
  function finalizarJogo() {
      var elementos = document.getElementsByClassName("botao2")
      var elementos2 = document.getElementsByClassName("botao")
      for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = "blue";
      for (var j = 0; j < elementos2.length; j++) {
        elementos2[j].style.backgroundColor = "blue";
        iniciar.disabled = true
        finalizar.disabled = true
        terminar = false
      }
    }
    
    andamento.innerHTML = "Voce ganhou!!!"

  }
}

 
