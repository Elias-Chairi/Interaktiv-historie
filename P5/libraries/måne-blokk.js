class måne_blokk {
  constructor(x, y, width, objekt) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.canvas = objekt;
  }
  vis(){
    this.canvas.fill(150);
    this.canvas.rect(this.x, this.y, this.width, this.canvas.height - this.y - 25);

    this.canvas.fill(50);
    this.canvas.rect(this.x, this.y, this.width, 10);
  }
}
