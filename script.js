let overskrift = document.querySelector("h2");
let bilde_div = document.querySelectorAll("div")[0];
let script_div = document.querySelectorAll("div")[1];
let stop_tekst_animasjon = false;
let vennligjøreren_er_tatt_med = false;
let plaster_er_tatt_med = false;
let hoppelyd = document.querySelector("audio");
hoppelyd.volume = 0.2;
let musikk = document.querySelectorAll("audio")[1];
musikk.volume = 0.3;
let ta_med = document.querySelectorAll("audio")[2];
let kontrollrommet_lyd = document.querySelectorAll("audio")[3];
kontrollrommet_lyd.volume = 0.5;
let spise_lyd = document.querySelectorAll("audio")[4];
let strøm_rommet = document.querySelectorAll("audio")[5];


let bane_tekst = [
  'Du er en astronaut og skal ut på ditt første oppdrag. Du skal først til romstasjonen, så til månen får å hente ut prøver, og så tilbake. Du styrer med pilene og trykk "ENTER" for å gå inn steder eller hente ting.',
  'Du glemte nesten å ta med deg vennligjøreren! Nå er alt klart for oppdraget. Trykk "ENTER" for å fortsette.',
  'Her har du allerede vært.',
  'Oppskytningen går fint og du kom deg helt til romstasjonen uten problemer. Trykk "ENTER" for å fortsette.',
  'Kom deg til månen. Du styrer med pilene. og trykk "ENTER" for å gå inn steder.',
  'I kontrollrommet ser alt bra ut. Romskipet har fått påfyll av drivstoff og vi er klare til å dra videre. Trykk "ENTER" for å fortsette.',
  'Du har snart ankommet månen..... Trykk "ENTER" for å fortsette.',
  '🍔 🍔 🍔 🍔 🍔 🍔 🍔 🍔 Mmmmmmmm det var godt med mat.',
  'Alle sikringene og parometerne ser fine ut.',
  'Du fant plaster! Det kan kanskje brukes senere.',
  'Du har ankommet månen! Vær forsiktig, MONSTER! Ta med deg måneprøvene og komm deg tilbake til skipet. Du bruker "ENTER" til å plukke opp prøvene og å gå inn i skipet.',
  'Du har ankommet månen! Du husket å ta med vennligjøreren så dette burde gå som smurt, ta med deg måneprøvene og komm deg tilbake til skipet. Du bruker "ENTER" til å plukke opp prøvene og å gå inn i skipet.',
  'Du ble bitt, men det er ikke over enda. Du husket å ta med deg plaster så du kommer ikke til å dø, men det er for farlig for denne gang. Du drar til bake til jorda og så må du gjøre opppdraget på nytt, men denne gangen husker du å gå innom teststasjonen. Trykk "ENTER" for å fortsette.']


// bakgrunnsmusikk
document.addEventListener('keydown', start_musikk);

function start_musikk (){
  musikk.play()
  document.removeEventListener('keydown', start_musikk);
};


//////////////////////////Inn i teststasjonen
function inn_i_teststasjonen() {
  vennligjøreren_er_tatt_med = true;
  ta_med.play();
  document.querySelector("main").innerHTML = ""; // main lager canvas tror jeg
  på_jorda.noLoop();
  tekst_animasjon(1);

  let img = document.createElement("img"); // lager img tagg og legger den til
  img.src ="Bilder/vennligjører.gif";
  img.style.width = "100%";
  bilde_div.appendChild(img);

  document.addEventListener('keypress', ut_av_teststasjonen);
}

function ut_av_teststasjonen(e) {
  if (e.code === "Enter"){
    document.removeEventListener('keypress', ut_av_teststasjonen); // bare en gang
    bilde_div.innerHTML = ""; // fjerner gif-en
    stop_tekst_animasjon = true; // på grunn av det ikke startes en ny tekst animasjon må vi stoppe den.
    overskrift.textContent = "";
    på_jorda.setup(); // starter sketchen igjen
    på_jorda.loop();
  }
}


/////////////////////////Inn i romskipet
function inn_i_rommskipet() {
  document.querySelector("main").innerHTML = ""; // fjerner canvas
  på_jorda.noLoop();
  tekst_animasjon(3);

  let video = document.createElement("video"); // lager video tagg og source tagg så legger de til
  video.style.width = "100%";
  let source = document.createElement("source");
  source.src ="Bilder/oppskyting.mp4";
  video.appendChild(source);
  bilde_div.appendChild(video);
  video.volume = 0.2;
  video.play(); // spill av

  document.addEventListener('keypress', til_romstasjonen);
}

function til_romstasjonen(e) {
  if (e.code === "Enter"){
    document.removeEventListener('keypress', til_romstasjonen); // bare en gang
    bilde_div.innerHTML = ""; // fjerner videoen
    tekst_animasjon(4);
    start_romstasjonen_sketch();
  }
}



function inn_i_medbay(){
  plaster_er_tatt_med = true;
  ta_med.play();
  document.querySelector("main").innerHTML = ""; // main lager canvas tror jeg
  på_romstasjonen.noLoop();
  tekst_animasjon(9);

  let img = document.createElement("img"); // lager img tagg og legger den til
  img.src ="Bilder/plaster.gif";
  img.style.width = "100%";
  bilde_div.appendChild(img);

  document.addEventListener('keypress', ut_av_medbay);
}
function ut_av_medbay(e){
  if(e.code === "Enter"){
    document.removeEventListener('keypress', ut_av_medbay); // bare en gang
    bilde_div.innerHTML = ""; // fjerner gif-en
    stop_tekst_animasjon = true; // på grunn av det ikke startes en ny tekst animasjon må vi stoppe den.
    overskrift.textContent = "";
    på_romstasjonen.setup();
    på_romstasjonen.loop();
    på_romstasjonen.spiller.y = 131;
    på_romstasjonen.spiller.x = på_romstasjonen.width/2 + 170
  }
}

function inn_i_kontrollrommet() {
  tekst_animasjon(5);
  kontrollrommet_lyd.play();
  document.addEventListener('keypress', til_månen);
}

function til_månen(e) {
  if (e.code === "Enter"){
    document.removeEventListener('keypress', til_månen); // bare en gang
    kontrollrommet_lyd.pause();
    kontrollrommet_lyd.currentTime = 0;
    document.querySelector("main").innerHTML = ""; // fjerner canvas
    på_romstasjonen.noLoop();

    let video = document.createElement("video"); // lager video tagg og source tagg så legger de til
    video.style.width = "100%";
    let source = document.createElement("source");
    source.src ="Bilder/oppskyting.mp4";
    video.appendChild(source);
    bilde_div.appendChild(video);
    video.volume = 0.2;
    video.play(); // spill av

    tekst_animasjon(6);
    document.addEventListener('keypress', ankommet_månen);
  }
}

function ankommet_månen(e){
  if (e.code === "Enter"){
    document.removeEventListener('keypress', ankommet_månen); // bare en gang
    bilde_div.innerHTML = ""; // fjerner videoen
    start_på_månen_sketch();
    if (vennligjøreren_er_tatt_med === false){
      tekst_animasjon(10);
    } else {
      tekst_animasjon(11);
    }
  }
}


function du_er_blitt_bitt(){
  document.querySelector("main").innerHTML = ""; // fjerner canvas
  på_månen.noLoop();

  let video = document.createElement("video"); // lager video tagg og source tagg så legger de til
  video.style.width = "100%";
  let source = document.createElement("source");
  source.src ="Bilder/oppskyting.mp4";
  video.appendChild(source);
  bilde_div.appendChild(video);
  video.volume = 0.2;
  video.play(); // spill av

  tekst_animasjon(12);
  document.addEventListener('keypress', start_på_nytt);
}

function start_på_nytt(e){
  if (e.code === "Enter"){
    document.removeEventListener('keypress', start_på_nytt);
    bilde_div.innerHTML = "";
    plaster_er_tatt_med = false;
    inn_i_teststasjonen();
  }
}



//////////////tekst animasjon
let id;
function tekst_animasjon(tekst_nummer) {
  stop_tekst_animasjon = false;
  overskrift.textContent = "";
  let i = 0;
  clearInterval(id);
  id = setInterval(frame, 35);
  function frame() {
    if (i == 300) {
      clearInterval(id);
    } else if (stop_tekst_animasjon === true){
      clearInterval(id);
      stop_tekst_animasjon = false;
    } else {
      overskrift.textContent +=
      bane_tekst[tekst_nummer].charAt(i);
      i++;
    }
  }
}
