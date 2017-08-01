import { Sprite, Texture } from 'pixi.js';

class Player extends Sprite {
  constructor() {
    super(new PIXI.Texture.from('/assets/img/player.png'));
  }
}

export default Player;
