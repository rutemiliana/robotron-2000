const controle = document.querySelectorAll("[data-controle]")
//console.log(controle)

controle.forEach( (elemento) => {   
    elemento.addEventListener("click" , (evento) => {
        manipulaDados(evento.target.dataset.controle , evento.target.parentNode);
        //console.log(evento.target.parentNode)
    })
})

function manipulaDados(operacao , controle){
    peca = controle.querySelector("[data-contador]")

    if(operacao == "+"){
        peca.value = parseInt(peca.value) + 1 ;

    } else {
        peca.value = parseInt(peca.value) - 1 ;
    }
}

function dizOi(nome){
    console.log(`Olá, ${nome}`)
}

dizOi("Jabulani")

/*
pegar valores de:
input = value
button = textContent*/