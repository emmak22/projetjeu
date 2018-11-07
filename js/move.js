
 function countMove() {

  let player = gamePlayers.tour; 
  let x = parseInt(gamePlayers[player].coordX);
  let y = parseInt(gamePlayers[player].coordY);
  
  //deplacements droite
 for (let i = 1; i < 4; i++) {
    let el = document.querySelector(".square[data-x='" + (x + i) + "'][data-y='" + y + "']"); 

    if (el) {
      if (($(el).attr("type") === "wall") || ($(el).attr("type") === "player")|| ($(el).attr("type") === "player+weapon")) { 
        break;
      } else if (($(el).attr("type") === "") || ($(el).attr("type") === "weapon")) { 

        if ($(el).attr("type") === "") { 
          $(el).attr("type", "move"); 
        } else if ($(el).attr("type") === "weapon") { 
          $(el).attr("type", "move+weapon");
        }
         $(el).addClass("move" + player);
        $(el).click(clickMove); 
      }
    }
  };

  // calcul des deplacements gche
  for (let i = 1; i < 4; i++) {
    let el = document.querySelector(".square[data-x='" + (x - i) + "'][data-y='" + y + "']"); 
    
	if (el) { 
      if (($(el).attr("type") === "wall") || ($(el).attr("type") === "player")|| ($(el).attr("type") === "player+weapon")) { 
        break;
      } else if (($(el).attr("type") === "") || ($(el).attr("type") === "weapon")) { 
        if ($(el).attr("type") === "") { 
          $(el).attr("type", "move"); 
        } else if ($(el).attr("type") === "weapon") { 
          $(el).attr("type", "move+weapon"); 
        }
        $(el).addClass("move" + player); 
        $(el).click(clickMove); 
      }
    }
  };

  // calcul des deplacements en haut
  for (let i = 1; i < 4; i++) {
    let el = document.querySelector(".square[data-x='" + (x) + "'][data-y='" + (y + i) + "']");

    if (el) { 
      if (($(el).attr("type") === "wall") || ($(el).attr("type") === "player")|| ($(el).attr("type") === "player+weapon")) { 
        break;
      } else if (($(el).attr("type") === "") || ($(el).attr("type") === "weapon")) { 
        if ($(el).attr("type") === "") {
          $(el).attr("type", "move");
        } else if ($(el).attr("type") === "weapon") {
          $(el).attr("type", "move+weapon");
        }
         $(el).addClass("move" + player);
        $(el).click(clickMove); 
      }
    }
  };

  // calcul des deplacements en bas
  for (let i = 1; i < 4; i++) {
    let el = document.querySelector(".square[data-x='" + (x) + "'][data-y='" + (y - i) + "']");

    if (el) { 
      if (($(el).attr("type") === "wall") || ($(el).attr("type") === "player")|| ($(el).attr("type") === "player+weapon")) { 
        break;
      } else if (($(el).attr("type") === "") || ($(el).attr("type") === "weapon")) { 
        if ($(el).attr("type") === "") {
          $(el).attr("type", "move");
        } else if ($(el).attr("type") === "weapon") {
          $(el).attr("type", "move+weapon");
        }
        $(el).addClass("move" + player);
        $(el).click(clickMove); 
      }
    }
  };
  
	let el1 = document.querySelector(".square[data-x='" + x + "'][data-y='" + (y - 1) + "']");
	let el2 = document.querySelector(".square[data-x='" + x + "'][data-y='" + (y + 1) + "']");
	let el3 = document.querySelector(".square[data-x='" + (x - 1) + "'][data-y='" + y + "']");
	let el4 = document.querySelector(".square[data-x='" + (x + 1) + "'][data-y='" + y + "']");

	if (el1) { 
		if (($(el1).attr("type") === "player") ||($(el1).attr("type") === "player+weapon")){ 
		fight = true;
		deleteMove();
		}
	}
	if (el2) {
		if (($(el2).attr("type") === "player") ||($(el2).attr("type") === "player+weapon")){
		fight = true;
		deleteMove();
		}
	}
	if (el3) {
		if (($(el3).attr("type") === "player")||($(el3).attr("type") === "player+weapon")) {
		fight = true;
		deleteMove();
		}
	}
	if (el4) {
		if (($(el4).attr("type") === "player") ||($(el4).attr("type") === "player+weapon")){
		fight = true;
		deleteMove();
		}
	}
	
	let buttonAttack = $('#attack')[0]; 
	let buttonDefend = $('#defend')[0];

	if (fight === true) { 
  
	deleteMove();

    buttonAttack.disabled = false; 
    buttonAttack.style.opacity = 1; 
	buttonDefend.disabled = false; 
	buttonDefend.style.opacity = 1;
	} 
	else {
    buttonAttack.disabled = true; 
    buttonAttack.style.opacity = 0.4; 
	buttonDefend.disabled = true; 
	buttonDefend.style.opacity = 0.4;
	}

};


//Deplacement du joueur 
function move(e) {

  let player = gamePlayers.tour; 
  

  let xBegin = parseInt(gamePlayers[player].coordX);
  let yBegin = parseInt(gamePlayers[player].coordY);
  let elBegin = document.querySelector(".square[data-x='" + xBegin + "'][data-y='" + yBegin + "']"); 

  let xEnd = parseInt(e.target.getAttribute("data-x"));
  let yEnd = parseInt(e.target.getAttribute("data-y"));
  let elEnd = document.querySelector(".square[data-x='" + xEnd + "'][data-y='" + yEnd + "']"); 

 
  let xMove = xEnd - xBegin;
  let yMove = yEnd - yBegin;
  let elXMove = document.querySelectorAll(".square[data-x='" + xBegin + "']"); 
  let elYMove = document.querySelectorAll(".square[data-y='" + yBegin + "']"); 

  if (xMove > 0) {
    for (let i = 0; i < xMove; i++) {
      if ($(elYMove[xEnd - 1 - i]).attr("type") === "weapon") { 
	   changeItem(elYMove, (xEnd - 1 - i));
      }
    };
  } else if (xMove < 0) {
    for (let i = 0; i < -xMove; i++) {
      if ($(elYMove[xEnd - 1 + i]).attr("type") === "weapon") {
       changeItem(elYMove, (xEnd - 1 + i));
      }
    };
  } else if (yMove > 0) {
    for (let i = 0; i < yMove; i++) {
      if ($(elXMove[yEnd - 1 - i]).attr("type") === "weapon") {
       changeItem(elXMove, (yEnd - 1 - i));
      }
    };
  } else
  if (yMove < 0) {
    for (let i = 0; i < -yMove; i++) {
      if ($(elXMove[yEnd - 1 + i]).attr("type") === "weapon") {
        changeItem(elXMove, (yEnd - 1 + i));
      }
    };
  };



  if (elBegin && elEnd) {

    if ($(elEnd).attr("type") === "weapon") {
     $(elEnd).attr("type", "player+weapon"); 
     $(elEnd).removeClass(gameWeapons[elEnd.getAttribute("weapon")].css_class);
     $(elEnd).addClass(gamePlayers[player].css_class); 
    } else { 
      $(elEnd).attr("type", "player"); 
      $(elEnd).addClass(gamePlayers[player].css_class);
    }

    if ($(elBegin).attr("type") === "player+weapon") { 
      $(elBegin).attr("type", "weapon");
      $(elBegin).removeClass(gamePlayers[player].css_class);
      $(elBegin).addClass(gameWeapons[elBegin.getAttribute("weapon")].css_class);
    } else {
      $(elBegin).attr("type", "");
      $(elBegin).removeClass(gamePlayers[player].css_class);
    }

      gamePlayers[player].coordX = xEnd;
      gamePlayers[player].coordY = yEnd;
  }

     gamePlayers[gamePlayers.tour].action = "defend"; 
     gamePlayers.tour = (gamePlayers.tour === 1) ? 2 : 1; 
      
  update();
};



//Changement de l'arme 

 function changeItem(el, nb) {

  const change = el[nb].getAttribute("weapon");
	

  if (gamePlayers[gamePlayers.tour].weapon === "arme0") { 
    $(el[nb]).removeClass(gameWeapons[el[nb].getAttribute("weapon")].css_class);
    $(el[nb]).attr("weapon", "");
    $(el[nb]).attr("type", ""); 
    gamePlayers[gamePlayers.tour].weapon = change; 


    const infosWeapon = document.getElementById('weapon' + gamePlayers.tour);
    infosWeapon.innerHTML = "Armes : " + gameWeapons[gamePlayers[gamePlayers.tour].weapon].name + " (+" + gameWeapons[gamePlayers[gamePlayers.tour].weapon].damage + ")";

  } else { 
    $(el[nb]).removeClass(gameWeapons[el[nb].getAttribute("weapon")].css_class); 
    $(el[nb]).addClass(gameWeapons[gamePlayers[gamePlayers.tour].weapon].css_class); 

    $(el[nb]).attr("weapon", gamePlayers[gamePlayers.tour].weapon); 
    $(el[nb]).attr("type", "weapon"); 

    gamePlayers[gamePlayers.tour].weapon = change; 

    const infosWeapon = $('#weapon' + gamePlayers.tour)[0];
    infosWeapon.innerHTML = "Armes : " + gameWeapons[gamePlayers[gamePlayers.tour].weapon].name + " (+" + gameWeapons[gamePlayers[gamePlayers.tour].weapon].damage + ")";
  }
 };
 
	function deleteMove () {

	let player = gamePlayers.tour;
	let x = parseInt(gamePlayers[player].coordX);
	let y = parseInt(gamePlayers[player].coordY);


	for (let i = 1; i < 4; i++) {
		let el = document.querySelector(".square[data-x='" + (x + i) + "'][data-y='" + y + "']"); 

		if (el) { 

			if ( $(el).attr("type") === ("move")) { 
			$(el).attr("type", ""); 
			$(el).removeClass("move" + player);
			$(el).off('click', clickMove, false); 

      } else if ( $(el).attr("type") === ("move+weapon")) { 
			$(el).attr("type", "weapon"); 
			$(el).removeClass("move" + player); 
			$(el).off('click', clickMove, false); 
			}
		}
	}

	for (let i = 1; i < 4; i++) {
		let el = document.querySelector(".square[data-x='" + (x - i) + "'][data-y='" + y + "']");

		if (el) { 

			if ( $(el).attr("type") === ("move")) {
			$(el).attr("type", "");
			$(el).removeClass("move" + player);
			$(el).off('click', clickMove, false);

      } else if ( $(el).attr("type") === ("move+weapon")) {
			$(el).attr("type", "weapon");
			$(el).removeClass("move" + player);
			$(el).off('click', clickMove, false);
			}
		}
	}


	for (let i = 1; i < 4; i++) {
		let el = document.querySelector(".square[data-x='" + (x) + "'][data-y='" + (y + i) + "']");

		if (el) { 

			if ( $(el).attr("type") === ("move")) {
			$(el).attr("type", "");
			$(el).removeClass("move" + player);
			$(el).off('click', clickMove, false);

      } else if ( $(el).attr("type") === ("move+weapon")) {
			$(el).attr("type", "weapon");
			$(el).removeClass("move" + player);
			$(el).off('click', clickMove, false);
			}
		}
	}

 
	for (let i = 1; i < 4; i++) {
		let el = document.querySelector(".square[data-x='" + (x) + "'][data-y='" + (y - i) + "']");

		if (el) { 
			if ( $(el).attr("type") === ("move")) {
			$(el).attr("type", "");
			$(el).removeClass("move" + player);
			$(el).off('click', clickMove, false);

      } else if ( $(el).attr("type") === ("move+weapon")) {
			$(el).attr("type", "weapon");
			$(el).removeClass("move" + player);
			$(el).off('click', clickMove, false);
			}
		}
	}
};

//Gestion du clic sur la carte

function clickMove (e) {
 deleteMove(); 
  move(e); 
};

