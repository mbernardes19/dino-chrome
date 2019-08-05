import FabricaAnimacoes from './classes/FabricaAnimacoes.js';
import Cenario from './classes/Cenario.js';
import Input from './classes/Input.js';
import Obstaculo from './classes/Obstaculo.js';
import Jogador from './classes/Jogador.js';

// CONFIGURAÇÕES DO CANVAS
const CANVAS_HEIGHT = window.innerHeight-10;
const CANVAS_WIDTH = window.innerWidth;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.setAttribute('height', CANVAS_HEIGHT);
canvas.setAttribute('width', CANVAS_WIDTH);

//CRIAÇÃO DO DO DINO
const jogador = new Jogador();

//GAMELOOP
function loop(){
    limparTela();
    jogador.atualizarPontuacao();
    console.log(jogador.pontuacao);
    ctx.fillStyle="black";
    ctx.font = "12pt Arial";
    ctx.fillText(jogador.pontuacao,50,50);
    requestAnimationFrame(loop)
}

loop();

// INPUT DE TECLAS


// FUNÇÕES
window.addEventListener('keydown', (e) => {
    if(e.code === 'ArrowUp') {
        rect1.y -= 5;
    }
    if(e.code === 'ArrowDown') {
        rect1.y += 5;
    }
    if(e.code === 'ArrowRight') {
        rect1.x += 5;
    }
    if(e.code === 'ArrowLeft') {
        rect1.x -= 5;
    }
})

function detectarColisao(rect1, rect2) {
    if(rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
        ) {
            rect1.color = 'yellow';
        } else {
            rect1.color = 'red';
        }
}

function limparTela() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function desenhar(rect) {
    ctx.fillStyle= rect.color;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}