// CONFIGURAÇÕES DO CANVAS
const CANVAS_HEIGHT = window.innerHeight-10;
const CANVAS_WIDTH = window.innerWidth;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.setAttribute('height', CANVAS_HEIGHT);
canvas.setAttribute('width', CANVAS_WIDTH);

//CRIAÇÃO DO RETÂNGULO
const spriteDino = {x: 0, y: 5, width: 50, height: 50};

//GAMELOOP
function loop(){
    desenharDino();
    animarDino();
    // limparTela();

    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);


// INPUT DE TECLAS
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


// FUNÇÕES
function importarSprite(){
    const spritesheet = document.querySelector('div');
    spritesheet.style.backgroundPos
}

function animarDino() {

}

function desenharDino() {
    const img = new Image();
    img.src="./spritesheet.png";
    ctx.drawImage(img, 850,0,44,50,0,0,44,50);
}

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