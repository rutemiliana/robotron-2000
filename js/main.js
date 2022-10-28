
subtrair = document.querySelector("#subtrair")
somar = document.querySelector("#somar")
braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => { 
    elemento.addEventListener("click" , (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

function manipulaDados(operacao){
    if(operacao == "+"){
        braco.value = parseInt(braco.value) + 1 ;

    } else {
        braco.value = parseInt(braco.value) - 1 ;
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