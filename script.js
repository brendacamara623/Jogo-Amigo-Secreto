let nomes = [];

document.getElementById("btnAdicionar").addEventListener("click", adicionarNome);
document.getElementById("btnSortear").addEventListener("click", sortearAmigo);

function adicionarNome() {
    let input = document.getElementById("nome");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (nomes.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    nomes.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos dois participantes para o sorteio!");
        return;
    }

    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById("resultado").textContent = `🎉 O amigo secreto é: ${sorteado}!`;
}
