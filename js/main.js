

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => { 
    elemento.addEventListener("click" , (evento) => {
        manipulaDados(evento.target.textContent , evento.target.parentNode);
    })
})

function manipulaDados(operacao , controle){
    peca = controle.querySelector(".controle-contador")

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