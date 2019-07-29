export default class Animacao {

    constructor(sprites, qtdSprites, duracao, fps, loop, canvasCtx) {
        this.sprites = sprites;
        this.qtdSprites = qtdSprites;
        this.duracao = duracao;
        this.fps = 1/fps;
        this.loop = loop;
        this.canvasCtx = canvasCtx;        
    }

    renderizar() {
        let i = 0;
        setInterval(() => {
            this.canvasCtx.clearRect(0,0, window.innerWidth, window.innerHeight);     
            this.canvasCtx.drawImage(
                this.sprites[i].spritesheet.imagem,
                this.sprites[i].inicioX,
                this.sprites[i].inicioY,
                this.sprites[i].largura,
                this.sprites[i].altura,
                0,
                0,
                this.sprites[i].largura,
                this.sprites[i].altura,
                ); 

                i++;

            this.loop && !this.sprites[i] ? i = 0 : null;

        } , (this.fps*1000));
    }


}
