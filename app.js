// Criar um array para armazenar os nomes
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Capturar valor do campo de entrada
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validar entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar ao array
    amigos.push(nome);

    // Limpar campo
    input.value = "";
    input.focus();

    // Atualizar lista
    atualizarLista();
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');

    // Limpar lista existente
    lista.innerHTML = "";

    // Percorrer array e adicionar elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validar se há amigos
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gerar índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}

// Tornar funções acessíveis ao HTML
window.adicionarAmigo = adicionarAmigo;
window.sortearAmigo = sortearAmigo;

