import PIXI from 'pixi.js';
import { Sprite, Texture, BaseTexture, Rectangle } from 'pixi.js';
import Animation from './animation.js';

class AnimationManager {
  constructor(source, frameWidth, frameHeight, object) {
    this.object = object;
    this.frames = [];
    let image = BaseTexture.fromImage(source)
    for (var i = 0; i < image.width / frameWidth; i++) {
      let rect = new Rectangle(i * frameWidth, 0, frameWidth, frameHeight);
      let frame = new Texture(image, rect);
      this.frames.push(frame);
    }
    this.add = this.add.bind(this);
    this.play = this.play.bind(this);
  }

  add(name, frames) {
    this[name] = new Animation(frames);
  }

  play(animation) {
    // this[animation].next_frame();
    this.object.texture = this.frames[animation.active];
  }
}

export default AnimationManager;
