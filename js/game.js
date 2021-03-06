import PIXI from 'pixi.js';
import { Sprite, Texture, Application, Spritesheet, BaseTexture, SCALE_MODES } from 'pixi.js';
import Player from './player.js'

SCALE_MODES.DEFAULT = SCALE_MODES.NEAREST;

class Game extends Application {

  constructor(){
    super(256, 240, {view: document.getElementById('canvas'), backgroundColor: 0x1099bb, resolution: 4, roundPixels: false, antialias: false});
    document.body.appendChild(this.view)
    this.player = new Player();
    this.player.x = 0;
    this.player.y = 0;
    this.stage.addChild(this.player);
    this.update = this.update.bind(this);
    this.ticker.add(this.update);
  }

  update() {
    this.player.animations.play('walk');
  }

}

export default Game;
