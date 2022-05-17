
function sortear() {

    let numero_de_sorteio = 100;

    let sorteio = Math.round(Math.random() * numero_de_sorteio);

    document.getElementById("display").innerHTML = sorteio;
}