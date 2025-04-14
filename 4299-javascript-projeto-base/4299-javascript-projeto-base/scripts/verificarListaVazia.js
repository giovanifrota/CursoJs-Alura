const mensgameListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras){
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if(itensDaLista.length === 0){
        mensgameListaVazia.style.display = "block"
    }else{
        mensgameListaVazia.style.display = "none"
    }
}

export default verificarListaVazia;