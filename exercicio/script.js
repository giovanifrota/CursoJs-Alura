const digitar = document.getElementById("txt");
const button = document.querySelector("#button")




function dados(evento){
    evento.preventDefault();
    console.log(digitar.value)
}

function botao (){
    if(digitar.value === ""){
        alert("Digite alguma coisa!")
    }
}

button.addEventListener("click",botao)
digitar.addEventListener("input", dados)
