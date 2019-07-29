import Sprite from './teste/js/Sprite.js/index.js';

export default class Dino extends Sprite {
    constructor(largura, altura, velocidade, imagem){
        super(largura, altura, velocidade, imagem);
    }

    criarSprites(imagem) {
        
        
        this.sprites.push({sx: 2, sy:3, sw:1, sh:5,dx:1,dy:8,dw:7,dh:9});
    }

    render() {
        ctx.drawImage(this.imagem, this.sprites[0].sx, this.sprites[0].sy)
    }

}