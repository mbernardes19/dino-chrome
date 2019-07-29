import Spritesheet from './Spritesheet.js';
import Animacao from './Animacao.js';

// Cria Canvas
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// Importa imagem para spritesheet
let spritesheetImagem = new Image();
spritesheetImagem.src="./../spritesheet/spritesheet.png";

// Cria spritesheet
let spritesheet = new Spritesheet(1233, 68, spritesheetImagem);

// Define sprites de animação de andar
let spritesAndar = spritesheet.criarSprites(938,0,43,48,2);

// Cria animação de andar
let animacaoAndar = new Animacao(spritesAndar,spritesAndar.length,0,5,ctx);

// Renderiza animação
animacaoAndar.renderizar();
