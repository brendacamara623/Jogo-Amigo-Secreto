const listaAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();
    
    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }
    
    if (listaAmigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    
    listaAmigos.push(nomeAmigo);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "remover";
        botaoRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(botaoRemover);
        listaElement.appendChild(li);
    });
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }
    
    const sorteadoIndex = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[sorteadoIndex];
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li> O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}
