class Spiller_kart {
  constructor(x, y, objekt_bokstav) {
    this.x = x;
    this.y = y;
    this.fart = 5;
    this.width = 50;
    this.height = 50;

    this.canvas = objekt_bokstav;
  }
  vis(){
    this.canvas.fill("#0a81ab");
    this.canvas.stroke(0);
    this.canvas.strokeWeight(1);
    this.canvas.rect(this.x, this.y, this.width, this.height, 10);
  }
  bevegelse(){
    if (this.canvas.keyIsDown(this.canvas.UP_ARROW)){
      this.y -= this.fart;
    }
    if (this.canvas.keyIsDown(this.canvas.DOWN_ARROW)){
      this.y += this.fart;
    }
    if (this.canvas.keyIsDown(this.canvas.RIGHT_ARROW)){
      this.x += this.fart;
    }
    if (this.canvas.keyIsDown(this.canvas.LEFT_ARROW)){
      this.x -= this.fart;
    }
  }
}
