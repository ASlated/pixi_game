import PIXI from 'pixi.js';
import { Sprite, Texture, BaseTexture, Rectangle } from 'pixi.js';
import Animation from './animation.js';

class AnimationManager {
  constructor(sprite, source, frameWidth, frameHeight) {
    this.sprite = sprite;
    this.frames = [];
    let image = BaseTexture.fromImage(source)
    for (var i = 0; i < 384 / frameWidth; i++) {
      let rect = new Rectangle(i * frameWidth, 0, frameWidth, frameHeight);
      let frame = new Texture(image, rect);
      this.frames.push(frame);
    }
    this.add = this.add.bind(this);
    this.play = this.play.bind(this);
    this.counter = 0;
  }

  add(name, frames) {
    this[name] = new Animation(frames);
  }

  play(animation) {
    this.counter++;
    if (this.counter >= this[animation].delay) {
      this[animation].next_frame();
      this.sprite.texture = this.frames[this[animation].current_frame];
      this.counter = 0;
    }
  }
}

export default AnimationManager;
