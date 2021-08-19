const på_romstasjonen_spill = p => {

  p.spiller;
  p.inn_i_kontrollrommet = false;


  p.setup = function() {
    p.createCanvas(p.windowWidth, 650);
    p.spiller = new Spiller_kart(p.width/2 - 25, p.height/2 - 25, p);
  }

  p.draw = function() {
    //ting for bakgrunn
    p.background(200);
    p.noStroke();
    p.fill(0, 0, 50);
    p.rect(25, 25, p.width - 50, p.height - 50);
    ///////

    // romstasjonen
    p.fill(230);
    p.stroke(0);
    p.strokeCap(p.SQUARE);
    p.strokeWeight(10);
    p.rect(100, 150, p.width - 200, p.height - 300, 50);
    p.rect(p.width/2 - 300, 75, p.width/2 + 200, p.height - 150, 50);

    //Lang vannrett linje oppe
    p.line(p.width/2 - 300, 200, p.width/2 + 100, 200);
    if (p.spiller.x < p.width/2 + 100 &&
        p.spiller.y < 205){
      p.spiller.y = 205;
    }

    //Oppe venstre kort loddrett inn mot medbay
    p.line(p.width/2 + 100, 205, p.width/2 + 100, 170);
    if (p.spiller.y < 205 &&
        p.spiller.x < p.width/2 + 105){
      p.spiller.x = p.width/2 + 105;
    }

    //kort vannrett linje oppe
    p.line(p.width/2 + 300, 200, p.width - 100, 200);
    if (p.spiller.x > p.width/2 + 250 &&
        p.spiller.y < 205){
      p.spiller.y = 205;
    }

    //Oppe høyre kort loddrett inn mot medbay
    p.line(p.width/2 + 300, 205, p.width/2 + 300, 170);
    if (p.spiller.y < 205 &&
        p.spiller.x > p.width/2 + 245){
      p.spiller.x = p.width/2 + 245;
    }

    //Lang vannrett linje ned
    p.line(p.width/2 - 300, p.height - 200, p.width/2 + 100, p.height - 200);
    if (p.spiller.x < p.width/2 + 100 &&
        p.spiller.y > p.height - 255){
      p.spiller.y = p.height - 255;
    }

    //Nede venstre kort loddrett inn mot spisesalen
    p.line(p.width/2 + 100, p.height - 205, p.width/2 + 100, p.height - 170);
    if (p.spiller.y > p.height - 255 &&
        p.spiller.x < p.width/2 + 105){
      p.spiller.x = p.width/2 + 105;
    }

    //kort vannrett linje nede
    p.line(p.width/2 + 300, p.height - 200, p.width - 100, p.height - 200);
    if (p.spiller.x > p.width/2 + 250 &&
        p.spiller.y > p.height - 255){
      p.spiller.y = p.height - 255;
    }

    //Nede høyre kort loddrett inn mot spisesalen
    p.line(p.width/2 + 300, p.height - 205,p.width/2 + 300, p.height - 170);
    if (p.spiller.y > p.height - 255 &&
        p.spiller.x > p.width/2 + 245){
      p.spiller.x = p.width/2 + 245;
    }

    // kort loddrett linje oppe strømrommet
    p.line(p.width/2 + 400, 200, p.width/2 + 400, p.height - 400);
    if (p.spiller.y < p.height - 400 &&
        p.spiller.x > p.width/2 + 345){
      p.spiller.x = p.width/2 + 345;
    }

    //kort vannrett linje oppe inn til strømrommet
    p.line(p.width/2 + 395, p.height - 400, p.width/2 + 430, p.height - 400);
    if (p.spiller.x > p.width/2 + 350 &&
        p.spiller.y < 255){
      p.spiller.y = 255;
    }

    // kort loddrett linje nede strømrommet
    p.line(p.width/2 + 400, 400, p.width/2 + 400, p.height - 200);
    if (p.spiller.y > p.height - 300 &&
        p.spiller.x > p.width/2 + 345){
      p.spiller.x = p.width/2 + 345;
    }

    //kort vannrett linje nede inn til strømrommet
    p.line(p.width/2 + 395, 400, p.width/2 + 430, 400);
    if (p.spiller.x > p.width/2 + 350 &&
        p.spiller.y > p.height - 305){
      p.spiller.y = p.height - 305;
    }

    // oppe og nede venstre loddrett inn til kontrollrommet
    p.stroke(230);
    p.strokeWeight(15);
    p.line(p.width/2 - 300, 270, p.width/2 - 300, p.height - 270);
    p.strokeWeight(10);
    p.stroke(0);
    if (p.spiller.y > p.height - 320 &&
        p.spiller.x < p.width/2 - 295){
      p.spiller.x = p.width/2 - 295;
    }
    if (p.spiller.y < 270 &&
        p.spiller.x < p.width/2 - 295){
      p.spiller.x = p.width/2 - 295;
    }

    // oppe venstre vannrett inn til kontrollrommet
    p.line(p.width/2 - 295, 270, p.width/2 - 330, 270);
    if (p.spiller.x < p.width/2 - 295 &&
        p.spiller.y < 275){
      p.spiller.y = 275;
    }

    // nede venstre vannrett inn til kontrollrommet
    p.line(p.width/2 - 295, p.height - 270, p.width/2 - 330, p.height - 270);
    if (p.spiller.x < p.width/2 - 295 &&
        p.spiller.y > p.height - 325){
      p.spiller.y = p.height - 325;
    }


    ////////////////////////TEXT
    p.strokeJoin(p.ROUND);
    p.textSize(32);
    p.fill(255);
    p.text("⚡     🔋", p.width - 250 , p.height/2 - 40);
    p.text("Strøm og", p.width - 250 , p.height/2);
    p.text("sikkerhet", p.width - 250 , p.height/2 + 40)
    p.text("🔒     📹", p.width - 250 , p.height/2 + 80);
    p.text("➕   🚑   MedBay  🚨    🏥", p.width/2 + 20, 120);
    p.text("🍞     🍎   Spise sal   🍦     🍔", p.width/2 + 5, p.height - 100);
    p.text("Kontrollrommet", 150, p.height/2 - 100);
    p.text("🎮     👨‍🚀    🚀", 150, p.height/2 + 100);



    //// kommer til neste sekvens
    p.spiller.vis();
    if (p.inn_i_kontrollrommet === false){
      p.spiller.bevegelse();
    }

    // kontrollrommet
    if (p.spiller.x < 260){
      p.spiller.x = 260;
    }
    if (p.spiller.x === 260 && p.keyIsDown(p.ENTER)){
      p.spiller.x = 261;
      p.inn_i_kontrollrommet = true;
      inn_i_kontrollrommet();
    }

    // strøm rommet
    if (p.spiller.x > p.width - 290){
      p.spiller.x = p.width - 290;
    }
    if (p.spiller.x === p.width - 290 && p.keyIsDown(p.ENTER)){
      tekst_animasjon(8);
      strøm_rommet.play();
    }

    // Spisesalen
    if (p.spiller.y > p.height - 180){
      p.spiller.y = p.height - 180;
    }
    if (p.spiller.y === p.height - 180 && p.keyIsDown(p.ENTER)){
      tekst_animasjon(7);
      spise_lyd.play();
    }

    // inn i medbay
    if (p.spiller.y < 130){
      p.spiller.y = 130;
    }
    if (p.spiller.y === 130 && p.keyIsDown(p.ENTER)){
      if (plaster_er_tatt_med === true){
        tekst_animasjon(2);
      } else {
        p.spiller.y = 131;
        inn_i_medbay();
      }
    }
  }
}


function start_romstasjonen_sketch(){
  globalThis.på_romstasjonen = new p5(på_romstasjonen_spill);
}
