export default class Sprite {
  constructor(
    spritesheet,
    inicioX,
    inicioY,
    larguraSpritesheet,
    alturaSpritesheet,
    larguraSprite,
    alturaSprite,
    qtdSprites,
    canvasContext
  ) {
    this.spritesheet = spritesheet;
    this.larguraSpritesheet = larguraSpritesheet;
    this.alturaSpritesheet = alturaSpritesheet;
    this.alturaSprite = alturaSprite;
    this.larguraSprite = larguraSprite;
    this.qtdSprites = qtdSprites;
    this.inicioX = inicioX;
    this.inicioY = inicioY;
    this.animacoes = [];
    this.sprites = [];
    this.canvasCtx = canvasContext

    this.criarSprites();
  }

  criarSprites() {
    this.sprites.push({
        sx: this.inicioX,
        sy: this.inicioY,
        sw: this.larguraSprite,
        sy: this.alturaSprite,
        dx: 0,
        dy: 0,
        dw: this.larguraSprite,
        dy: this.alturaSprite
      });

    for (let i = 1; i < this.qtdSprites; i++) {
      this.sprites.push({
        sx: this.inicioX === 0 ? this.larguraSprite * i : this.inicioX * i,
        sy: this.inicioY,
        sw: this.larguraSprite,
        sy: this.alturaSprite,
        dx: 0,
        dy: 0,
        dw: this.larguraSprite,
        dy: this.alturaSprite
      });
    }
  }

  registrarAnimacao(nome, inicio, fim) {}

  render() {
    const ctx = new CanvasRenderingContext2D();
    ctx.drawImage();
  }
}
