class Animation {
  constructor(frames) {
    this.frames = frames;
    this.active = 0;
    this.next_frame = this.next_frame.bind(this);
  }

  next_frame() {
    if (this.active == this.frames.length - 1) {
      this.active = 0;
    } else {
      this.active++;
    }
  }
}

export default Animation;
