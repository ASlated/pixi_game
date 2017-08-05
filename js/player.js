import PIXI from 'pixi.js'
import { Sprite, Texture, BaseTexture } from 'pixi.js';
import AnimationManager from './animation_manager.js';

class Player extends Sprite {
  constructor() {
    super(new Texture.fromImage('/assets/img/player.png'));
    this.animations = new AnimationManager('/assets/img/player.png', 16, 15, this);
    // this.animations.add('walk', [0, 1, 0, 2]);
  }
}

export default Player;
