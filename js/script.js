function virarCarta(elemento) {
    elemento.classList.toggle("virado");
}

function numeroCartas() {
    const noDeCartas = Number(prompt("Com quartas cartas você quer jogar? Insira um número par, de 4 a 14."));
    const numeroValido = (noDeCartas>=4 && noDeCartas<=14 && noDeCartas%2 == 0);

    if (numeroValido) {
        alert("O número foi aceito");
        const primeiraFileira = document.querySelector(".cards1");
        const segundaFileira = document.querySelector(".cards2");
        primeiraFileira.innerHTML = '';
        segundaFileira.innerHTML = '';
        for (let i=0; i<noDeCartas/2; i++) {
            primeiraFileira.innerHTML += 
            `<div class='card' onclick='virarCarta(this)' data-identifier='card'>
                <img class='frente' src='./imagens/front 1.png' data-identifier='back-face'/>
                <img class='verso' src='./imagens/fiestaparrot.gif' data-identifier='front-face'/>
            </div>`
            segundaFileira.innerHTML += 
            `<div class='card' onclick='virarCarta(this)' data-identifier='card'>
                <img class='frente' src='./imagens/front 1.png' data-identifier='back-face'/>
                <img class='verso' src='./imagens/fiestaparrot.gif' data-identifier='front-face'/>
            </div>`
        }
    } else {
        prompt("Com quartas cartas você quer jogar? Insira um número par, de 4 a 14.")
    }
}
numeroCartas();