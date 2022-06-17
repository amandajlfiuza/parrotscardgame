const baralho = [
    "./imagens/bobrossparrot.gif"
    ,
    "./imagens/explodyparrot.gif"
    ,
    "./imagens/fiestaparrot.gif"
    ,
    "./imagens/metalparrot.gif"
    ,
    "./imagens/revertitparrot.gif"
    ,
    "./imagens/tripletsparrot.gif"
    ,
    "./imagens/unicornparrot.gif"
]

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(elemento) {
    elemento.classList.toggle("virado");
}

function criarCartas() {
    const noDeCartas = Number(prompt("Com quartas cartas você quer jogar? Insira um número par, de 4 a 14."));
    const numeroValido = (noDeCartas>=4 && noDeCartas<=14 && noDeCartas%2 == 0);

    if (numeroValido) {
        const cards = document.querySelector(".cards");
        cards.innerHTML = '';
        
        for (let o=baralho.length; o>noDeCartas/2; o--) {
            baralho.pop();
        }

        for (let i=0; i<2; i++) {
            baralho.sort(comparador);
            for (let j=0; j<baralho.length; j++) {
                cards.innerHTML +=
                `<div class='card' onclick='virarCarta(this),jogada(this)' data-identifier='card'>
                    <img class='frente' src='./imagens/front 1.png' data-identifier='back-face'/>
                    <img class='verso' src=${baralho[j]} data-identifier='front-face'/>
                </div>`;
            }
        }

    } else {
        prompt("Com quartas cartas você quer jogar? Insira um número par, de 4 a 14.")
    }
}
criarCartas();

function jogada(elemento) {
    if (document.querySelectorAll('.virado').length%2==1) {
        
    } else {
        srcImg = document.querySelector('.verso').getAttribute('src');
        if (document.querySelectorAll(`.virado [src="${srcImg}"]`).length==1) {
            
        }
    }
}