class Animation {
  constructor(frames, delay) {
    this.frames = frames;
    this.delay = delay;
    this.active = 0;
    this.next_frame = this.next_frame.bind(this);
  }

  next_frame() {
    if (this.active == this.frames.length - 1) {
      this.active = 0;
    } else {
      this.active++;
    }
    this.current_frame = this.frames[this.active]
  }
}

export default Animation;
