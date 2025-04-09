const inputItem = document.getElementById("input-item")

const botaoAdicionar = document.getElementById("adicionar-item")

botaoAdicionar.addEventListener("click", (evento)=> {
    evento.preventDefault();
    if(inputItem === ""){
        alert("Por Favor, insira um item");
        return
    }


    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
})