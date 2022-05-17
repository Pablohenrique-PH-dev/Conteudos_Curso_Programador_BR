let pessoas = ["Pablo", "Pablo", "Pablo", "Pablo", "Pedro", "Jessica", "Alice", "Melissa"]

function sortear() {

    let numero_de_sorteio = pessoas.length;

    let sorteio = Math.floor(Math.random() * numero_de_sorteio);

    document.getElementById("display").innerHTML = pessoas[sorteio];
}