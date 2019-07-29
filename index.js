import Sprite from "./teste/Sprite.js";

// CONFIGURAÇÕES DO CANVAS
const CANVAS_HEIGHT = window.innerHeight-10;
const CANVAS_WIDTH = window.innerWidth;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.setAttribute('height', CANVAS_HEIGHT);
canvas.setAttribute('width', CANVAS_WIDTH);

//CRIAÇÃO DO DO DINO
const dino = {};
const spritesheet = new Image();
spritesheet.src = "./spritesheet/spritesheet.png";

const dinoSprite = new Sprite(spritesheet,0,0,1200,55,40,40,10, ctx);
console.log(dinoSprite.sprites);

criarDino();
criarSpritesDino();
console.log(dino.sprites);
let tick = 0;


//GAMELOOP
function loop(){
    limparTela();
    andar();
    // limparTela();
    console.log('no loop')
}
setInterval(loop, 800);

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
function criarDino() {
    dino.altura = 43;
    dino.largura = 48;
    dino.imagem = spritesheet;
}

function criarSpritesDino() {
    dino.sprites = [];
    const sprite1 = {sx:938,sy:0,sw:43,sh:48,dx:0,dy:0,dw:43,dh:48};
    const sprite2 = {sx:981,sy:0,sw:43,sh:48,dx:0,dy:0,dw:43,dh:48};

    dino.sprites.push(sprite1);
    dino.sprites.push(sprite2);

}

function andar() {
    tick++;
    if (tick % 2 === 0) {
        ctx.drawImage(spritesheet, dino.sprites[0].sx,dino.sprites[0].sy,
            dino.sprites[0].sw, dino.sprites[0].sh, dino.sprites[0].dx, dino.sprites[0].dy,
            dino.sprites[0].dw, dino.sprites[0].dh);
            
    } else {
        ctx.drawImage(spritesheet, dino.sprites[1].sx,dino.sprites[1].sy,
            dino.sprites[1].sw, dino.sprites[1].sh, dino.sprites[1].dx, dino.sprites[1].dy,
            dino.sprites[1].dw, dino.sprites[1].dh);
    }
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