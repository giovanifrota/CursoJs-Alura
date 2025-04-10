const inputItem = document.getElementById("input-item")

const listaDeCompras = document.getElementById("lista-de-compras")

const botaoAdicionar = document.getElementById("adicionar-item")

let contador = 0;

botaoAdicionar.addEventListener("click", (evento)=> {
    evento.preventDefault();
    if(inputItem === ""){
        alert("Por Favor, insira um item");
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    const inputCheckbox = document.createElement("input");
    const nomeItem = document.createElement("p");
    containerItemDaLista.classList.add("lista-item-container");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    nomeItem.innerText = inputItem.value;

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    listaDeCompras.appendChild(itemDaLista);
})