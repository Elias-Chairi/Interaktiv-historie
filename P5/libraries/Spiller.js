class Spiller {
  constructor(x, y, gravity, objekt_bokstav) {
    this.x = x;
    this.y = y;
    this.Yfart = 0;
    this.Xfart = 10;
    this.gravity = gravity;
    this.gravityStrength = gravity;
    this.width = 40;
    this.height = 80;

    this.canvas = objekt_bokstav;
  }

  vis() {
  this.canvas.fill("#0a81ab");
  this.canvas.stroke(0);
  this.canvas.strokeWeight(1);

  //venstre fot
  this.canvas.rect( this.x + 8, this.y + 60, 10, 20, 13);
  this.canvas.rect( this.x + 2, this.y + 74, 17, 7, 13);
  //høyre fot
  this.canvas.rect( this.x + 22, this.y + 60, 10, 20, 13);
  this.canvas.rect( this.x + 21, this.y + 74, 17, 7, 13);

  //armer
  this.canvas.rect( this.x - 1, this.y + 41, 42, 22, 7)
  //mage
  this.canvas.rect( this.x + 5, this.y + 38, 30, 26, 100, 100, 10, 10);
  //hjelm
  this.canvas.rect( this.x, this.y, 40, 40, 18, 18, 10, 10);
  //hjelm-vindu
  this.canvas.fill("#f9dfdc");
  this.canvas.rect( this.x + 4, this.y + 9, 32, 28, 13);
  //antenne
  this.canvas.fill("#0a81ab");
  this.canvas.line( this.x + 40, this.y + 15, this.x + 40, this.y - 2);
  this.canvas.ellipse( this.x + 40, this.y - 2, 6);

    // this.canvas.fill(0);
    // this.canvas.rect(this.x, this.y, this.width, this.height);

    // image(this.img, this.x, this.y, this.width, this.height);
  }

  bevegelse() {
    // hopp
    if (this.canvas.keyIsDown(this.canvas.UP_ARROW) && this.y === this.canvas.height - this.height - 25 ||
        this.canvas.keyIsDown(this.canvas.UP_ARROW) && this.canvas.på_en_blokk === true){
          if (this.canvas.på_en_blokk === false){
            this.y = this.canvas.height - this.height - 25 -1;
          }
          hoppelyd.currentTime = 0;
          hoppelyd.play();
          this.Yfart = 20;
          this.canvas.på_en_blokk = false;
    }

    if (this.y === this.canvas.height - this.height - 25 || this.canvas.på_en_blokk === true){
      this.gravity = 0;
      this.Yfart = 0;
    } else {
      this.gravity = this.gravityStrength;
    }

    //høyre
    if (this.canvas.keyIsDown(this.canvas.RIGHT_ARROW)){
      this.x += this.Xfart;
    }
    //venstre
    if (this.canvas.keyIsDown(this.canvas.LEFT_ARROW)){
      this.x -= this.Xfart;
    }

    //oppover fart med gravitasjon
    this.y = this.y - this.Yfart
    this.Yfart = this.Yfart - this.gravity;
  }

  stopp_vegger(){
    // går ikke under canvas
    if(this.y > this.canvas.height - this.height - 25){
      this.y = this.canvas.height - this.height - 25;
    }
    //høyre vegg
    if(this.x > this.canvas.width - this.width - 25){
      this.x = this.canvas.width - this.width - 25;
    }
    //venstre vegg
    if(this.x < 25){
      this.x = 25;
    }
  }
}
