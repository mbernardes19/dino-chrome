import Sprite from "./Sprite.js";

export default class Spritesheet {

    constructor(largura, altura, imagem) {
        this.altura = altura;
        this.largura = largura;
        this.imagem = imagem;
    }

    criarSprites(inicioX, inicioY, larguraSprite, alturaSprite, qtdSprites) {
        let sprites = [];

        for(let i=0; i < qtdSprites; i++) {
            let sprite = new Sprite(this,larguraSprite,alturaSprite,(inicioX+(larguraSprite*i)),inicioY);
            sprites.push(sprite);
        }

        return sprites;
    }
}