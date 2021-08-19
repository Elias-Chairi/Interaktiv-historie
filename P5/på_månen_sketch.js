const på_månen_spill = p => {

  p.spiller;
  p.blokker = [];
  p.monster_X_pos;
  p.monster_fart = 10;
  p.monsteret_er_på_mappet = false;
  p.måne_prøver_er_tatt_med = false;

  p.setup = function() {
    p.createCanvas(p.windowWidth, 650);
    p.spiller = new Spiller(100, p.height - 100, 0.5, p);
    p.blokker.push(new måne_blokk(25, 500, 150, p));
    p.blokker.push(new måne_blokk(600, 100, 20, p));
    p.blokker.push(new måne_blokk(1000, 250, 20, p));
    p.monster_X_pos = p.width;
  }

  p.draw = function() {
    //ting for bakgrunn
    p.background(200);
    p.noStroke();
    p.fill(10);
    p.rect(25, 25, p.width - 50, p.height - 50);
    ///////

    ///stjerner
    p.fill(255);
    for (i = 0; i < 14; i+=2){
      star(100*i, 100, 3, 6, 5);
      star(100*i, 300, 3, 6, 5);
      star(100*i, 500, 3, 6, 5);
    }
    for (i = 1; i < 14; i+=2){
      star(100*i, 200, 5, 10, 5);
      star(100*i, 400, 5, 10, 5);
      star(100*i, 600, 5, 10, 5);
    }
    //


    // romskipet
    p.stroke(0);
    p.fill(210);
    p.ellipse(100, 500, 149, 250);
    p.ellipse(100, 310, 120, 230);
    p.fill(10);
    p.ellipse(100, 550, 145, 230);
    p.fill(255);
    p.ellipse(100, 290, 60);

    p.noStroke();
    p.fill(200);
    p.rect(24, 600 , 151, 50);
    //


    // blokker
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
    //////


    // MONSTER
    p.stroke(0);
    p.strokeWeight(2);
    if (vennligjøreren_er_tatt_med === true){
      p.fill(0,150,0);
    } else {
      p.fill(255,0,0);
    }
    p.rect(100 + p.monster_X_pos,80 + 475,50,20,10);
    p.rect(100 + p.monster_X_pos,100 + 475,50,50,10);
    // for at det ikke blir strek
    p.noStroke();
    p.rect(108 + p.monster_X_pos,90 + 475,34,40);
    p.stroke(0);

    p.fill(0);
    p.ellipse(110 + p.monster_X_pos,90 + 475,5);
    p.ellipse(140 + p.monster_X_pos,90 + 475,5);

    p.strokeWeight(3);
    p.line(110 + p.monster_X_pos ,110 + 475,140 + p.monster_X_pos ,110 + 475);
    p.triangle(110 + p.monster_X_pos, 110 + 475, 120 + p.monster_X_pos, 110 + 475, 115 + p.monster_X_pos, 120 + 475);
    p.triangle(130 + p.monster_X_pos, 110 + 475, 140 + p.monster_X_pos, 110 + 475, 135 + p.monster_X_pos, 120 + 475);




    /// måne prøver
    if (p.måne_prøver_er_tatt_med === false){
      p.fill(0,0,240);
      p.noStroke();
      p.ellipse(600, 90, 10);
      p.ellipse(610, 90, 10);
      p.ellipse(605, 85, 10);
      p.ellipse(605, 96, 10);
      p.ellipse(605, 85, 10);
      p.ellipse(599, 99, 12);
      p.fill(255, 255, 0);
      p.ellipse(606, 94, 3);
      p.ellipse(602, 90, 3);
    }



    //// MONSTER bevegelse
    p.monster_X_pos -= p.monster_fart;

    if (p.monster_X_pos + 100 < 200){
      p.monster_fart = -15;
      p.monsteret_er_på_mappet = true;
    }
    if (p.monsteret_er_på_mappet === true && p.monster_X_pos + 50 + 100 > p.width - 200){
      p.monster_fart = 15;
    }

    //
    //// MONSTER HIT
    // p.fill("rgba(0,0,0,0.3)")
    // p.rect(p.monster_X_pos + 100, 80 + 475, 50, 70);
    if (vennligjøreren_er_tatt_med === false){
      if (p.spiller.x + p.spiller.width >= p.monster_X_pos + 100 &&    // r1 right edge past r2 left
          p.spiller.x <= p.monster_X_pos + 100 + 50 &&    // r1 left edge past r2 right
          p.spiller.y + p.spiller.height >= 80 + 475 &&    // r1 top edge past r2 bottom
          p.spiller.y <= 80 + 475 + 70) {    // r1 bottom edge past r2 top
            if (plaster_er_tatt_med === true){
              p.spiller.x = -200;// slik at den ikks pilles av igjen etter canvas er borte
              du_er_blitt_bitt();
            } else {
              window.location.href = "Du_tapte.html";
            }
      }
    }

    ///  ta med måne prøve
    // p.fill(0);
    // p.rect(600, 80, 20, 20);
    if (p.spiller.x + p.spiller.width >= 600 &&    // r1 right edge past r2 left
        p.spiller.x <= 600 + 20 &&    // r1 left edge past r2 right
        p.spiller.y + p.spiller.height >= 80 &&    // r1 top edge past r2 bottom
        p.spiller.y <= 80 + 20 &&     // r1 bottom edge past r2 top
        p.keyIsDown(p.ENTER)) {
      p.måne_prøver_er_tatt_med = true;
      ta_med.play();
    }

    /// til rommskipet etter å ha tatt med prøve
    // p.fill(0);
    // p.rect(25, 200, 150, 300);
    if (p.måne_prøver_er_tatt_med === true &&
        p.spiller.x + p.spiller.width >= 25 &&    // r1 right edge past r2 left
        p.spiller.x <= 25 + 150 &&    // r1 left edge past r2 right
        p.spiller.y + p.spiller.height >= 200 &&    // r1 top edge past r2 bottom
        p.spiller.y <= 200 + 300 &&     // r1 bottom edge past r2 top
        p.keyIsDown(p.ENTER)) {
          window.location.href = "Du_vant.html";
    }



    //p.spiller
    p.spiller.vis();
    p.spiller.bevegelse();
    p.spiller.stopp_vegger();
    ///////

  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = på_månen.TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  på_månen.beginShape();
  for (let a = 0; a < på_månen.TWO_PI; a += angle) {
    let sx = x + på_månen.cos(a) * radius2;
    let sy = y + på_månen.sin(a) * radius2;
    på_månen.vertex(sx, sy);
    sx = x + på_månen.cos(a + halfAngle) * radius1;
    sy = y + på_månen.sin(a + halfAngle) * radius1;
    på_månen.vertex(sx, sy);
  }
  på_månen.endShape(på_månen.CLOSE);
}


function start_på_månen_sketch(){
  globalThis.på_månen = new p5(på_månen_spill);
}
