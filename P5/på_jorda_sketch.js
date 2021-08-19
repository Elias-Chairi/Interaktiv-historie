const på_jorda_spill = p => {

  p.spiller;
  p.blokker = [];
  p.på_en_blokk = false;
  p.sky1 = 150;
  p.sky2 = 400;
  p.sky3 = 1000;
  p.sky4 = 200;

  // function preload(){
  //   img = loadImage("Bilder/astronaut.png");
  // }

  p.setup = function() {
    p.createCanvas(p.windowWidth, 650);
    p.blokker.push(new blokk(395, 380, 50, p));
    p.blokker.push(new blokk(550, 200, 150, p));
    p.blokker.push(new blokk(800, 550, 100, p));
    p.blokker.push(new blokk(1000, 450, 100, p));
    p.blokker.push(new blokk(1200, 350, 150, p));
    p.spiller = new Spiller(100, p.height - 100, 1, p);
  }


  p.draw = function() {

    //ting for bakgrunn
    p.background(200);
    p.noStroke();
    p.fill("#6b88fe");
    p.rect(25, 25, p.width - 50, p.height - 50);
    ///////

    ///////SKYER
    p.fill(255);
    p.ellipse(p.sky1,100,100,40);
    p.ellipse(p.sky1 + 50,90,100,40);
    p.ellipse(p.sky1 + 40,110,100,40);
    p.sky1+=1;
    if (p.sky1 > p.width + 200){
      p.sky1 = -200;
    }

    p.ellipse(p.sky2,80,100,40);
    p.ellipse(p.sky2 + 50,70,100,40);
    p.ellipse(p.sky2 + 40,90,100,40);
    p.sky2+=2;
    if (p.sky2 > p.width + 200){
      p.sky2 = -200;
    }

    p.ellipse(p.sky3,150,100,40);
    p.ellipse(p.sky3 + 50,140,100,40);
    p.ellipse(p.sky3 + 40,160,100,40);
    p.sky3+=0.5;
    if (p.sky3 > p.width + 200){
      p.sky3 = -200;
    }

    p.ellipse(p.sky4,140,100,40);
    p.ellipse(p.sky4 + 50,130,100,40);
    p.ellipse(p.sky4 + 40,150,100,40);
    p.sky4+=0.5;
    if (p.sky4 > p.width + 200){
      p.sky4 = -200;
    }
    //


    //////////////////////////ROMSKIP
    p.stroke(0);
    p.fill(150);
    p.ellipse(1275, 350, 149, 250);
    p.ellipse(1275, 160, 120, 230);
    p.fill("#6b88fe");
    p.ellipse(1275, 400, 145, 230);
    p.fill(255);
    p.ellipse(1275, 140, 60);
    p.fill(150);

    ///////////////////////////Test stasjon
    p.fill(200,200,0);
    p.rect(565, 70, 120, 130);
    p.fill(255);
    p.rect(572, 80, 106, 80);
    p.fill(0);
    p.textSize(30);
    p.text("Test -", 592, 110);
    p.text("stasjon", 578, 142);
    p.fill(255);
    p.line( 565, 70, 565, 50);
    p.ellipse( 565, 50, 6);
    p.line( 685, 70, 685, 50);
    p.ellipse( 685, 50, 6);
    p.line( 600, 70, 600, 60);
    p.ellipse( 600, 60, 6);
    p.line( 630, 70, 630, 40);
    p.ellipse( 630, 40, 6);
    p.noStroke();

    ////////


    /////////////////// inn i teststasjonen
    // p.fill(0);
    // p.rect(565, 50, 120, 150);
    if (565 + 120 >= p.spiller.x &&
        565 <= p.spiller.x + p.spiller.width &&
        50 + 150 >= p.spiller.y &&
        50 <= p.spiller.y + p.spiller.height &&
        p.keyIsDown(p.ENTER)) {
          if (vennligjøreren_er_tatt_med === true){
            tekst_animasjon(2);
          } else {
            p.spiller.x = 0; // slik at den ikke spilles av når canvasen er borte
            inn_i_teststasjonen();
          }
    }
    ////////////////// inn i rommskipet
    // p.fill(0);
    // p.rect(1200, 100, 150, 300);
    if (1200 + 150 >= p.spiller.x &&
      1200 <= p.spiller.x + p.spiller.width &&
      100 + 300 >= p.spiller.y &&
      100 <= p.spiller.y + p.spiller.height &&
      p.keyIsDown(p.ENTER)) {
        p.spiller.x = 0;
        inn_i_rommskipet();
    }


    ////////blokk plattformer
    let teller = 0;
    for (i = 0; i < p.blokker.length; i++){
      p.blokker[i].vis();

      if (p.spiller.x + p.spiller.width >= p.blokker[i].x &&
          p.spiller.x <= p.blokker[i].x + p.blokker[i].width &&
          p.spiller.y + p.spiller.height -27 < p.blokker[i].y){ //27 er en margin greie
            if (p.spiller.y + p.spiller.height > p.blokker[i].y && p.spiller.Yfart < 0){
              p.spiller.y = p.blokker[i].y - p.spiller.height;
              p.på_en_blokk = true;
              p.spiller.Yfart = 0;
            }
      }
      if (p.spiller.x + p.spiller.width >= p.blokker[i].x &&
          p.spiller.x <= p.blokker[i].x + p.blokker[i].width){
            teller++;
      }
    }
    if (teller === 0){
      p.på_en_blokk = false;
    }

    //p.spiller
    p.spiller.vis();
    p.spiller.bevegelse();
    p.spiller.stopp_vegger();
    ///////
  }
}

let på_jorda = new p5(på_jorda_spill);
