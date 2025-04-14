import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item")
let contador = 0;

export function criarItemDaLista(){
   
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

    inputCheckbox.addEventListener("click", function(){
        if(inputCheckbox.checked){
            nomeItem.style.textDecoration = "line-through";
        }else{
            nomeItem.style.textDecoration = "none"
        }
    })

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.innerHTML = (dataCompleta)
    itemData.classList.add("texto-data")
    itemDaLista.appendChild(itemData)

    return itemDaLista;

}