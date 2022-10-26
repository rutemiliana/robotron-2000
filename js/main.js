
subtrair = document.querySelector("#subtrair")
somar = document.querySelector("#somar")
braco = document.querySelector("#braco")

somar.addEventListener("click", (evento) =>{
    braco.value = parseInt(braco.value) + 1 ;
}) //função anonima

subtrair.addEventListener("click", (evento) =>{
    braco.value = parseInt(braco.value) - 1 ;
}) 




function dizOi(nome){
    console.log(`Olá, ${nome}`)
}

dizOi("Jabulani")