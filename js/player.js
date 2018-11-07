gamePlayers = {};
gamePlayers.tour = 0; 
fight = false; 

// Initialisation des joueurs 
 function generatePlayers() {
  gamePlayers[1] = { 
    name: "Ninja1",
    life: 100,
    coordX: 0,
    coordY: 0,
    weapon: "arme0",
    action: "defend", 
    css_class: "player1" 
  };

  gamePlayers[2] = {
    name: "Ninja2",
    life: 100,
    coordX: 0,
    coordY: 0,
    weapon: "arme0",
    action: "defend",
    css_class: "player2"
  };

	
   for (let i = 1; i < 3; i++) {
    let x = parseInt(Math.ceil(Math.random() * 10)); 
    let y = parseInt(Math.ceil(Math.random() * 10));
    gamePlayers[i].coordX = x;
    gamePlayers[i].coordY = y;

    let el1 = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); 
    let test = false;


    for (let j = -1; j < 2; j++) {
      for (let k = -1; k < 2; k++) {
        let el2 = document.querySelector(".square[data-x='" + (x - j) + "'][data-y='" + (y - k) + "']");
        if (el2) {
          if ($(el2).attr("type") === "player") {
            test = true;
          }
        }
      };
    };

    if (($(el1).attr("type") !== "") || ($(el1).attr("type") === "weapon")) {
      i--;
    } else if (test) { 
      i--;
    } else {
      $(el1).attr("type","player");
      $(el1).addClass(gamePlayers[i].css_class); 
    }
  };


  gamePlayers.tour = Math.round(Math.random() + 1);


  // Affichage des informations des joueurs
	  const infos1Weapon = $('#weapon1')[0];
	  const infos1Life =$('#life1')[0];

	  const infos2Weapon = $('#weapon2')[0];
	  const infos2Life = $('#life2')[0];

	  // informations arme et points de vie
	  infos1Weapon.innerHTML = "Armes : " + gameWeapons[gamePlayers[1].weapon].name + " (+" + gameWeapons[gamePlayers[1].weapon].damage + ")";
	  infos1Life.innerHTML = "Points de vie : " + gamePlayers[1].life;

	  infos2Weapon.innerHTML = "Armes : " + gameWeapons[gamePlayers[2].weapon].name + " (+" + gameWeapons[gamePlayers[2].weapon].damage + ")";
	  infos2Life.innerHTML = "Points de vie : " + gamePlayers[2].life;

  };


// Attaque du joueur 
	
	function attack() {
	 deleteMove();
	 let tour = gamePlayers.tour; 
	 let otherTour = (gamePlayers.tour === 1) ? 2 : 1; 


	gamePlayers[tour].action = "attack"; 

	let damage = gameWeapons[gamePlayers[tour].weapon].damage;
    let life = gamePlayers[otherTour].life;

    if (gamePlayers[tour].action === "attack") { 
     life -= damage;
     gamePlayers[otherTour].life = life;
     let elLife = $('#life' + otherTour)[0];
     elLife.innerHTML = "Points de vie : " + life;
    } 
     gamePlayers.tour = (gamePlayers.tour === 1) ? 2 : 1; 
	 info();
  };

	function defend() { 
	deleteMove();
	 let tour = gamePlayers.tour; 
	 let otherTour = (gamePlayers.tour === 1) ? 2 : 1; 

    gamePlayers[tour].action = "defend"; 
	 
	 let damage = gameWeapons[gamePlayers[tour].weapon].damage;
	 let life = gamePlayers[otherTour].life;
	
	if (gamePlayers[gamePlayers.tour].action = "defend"){
	 damage /= 2;
     life -= damage;
     gamePlayers[otherTour].life = life;
     let elLife = $('#life' + otherTour)[0];
     elLife.innerHTML = "Points de vie : " + life;
	}
	 gamePlayers.tour = (gamePlayers.tour === 1) ? 2 : 1;
	 info();
  };

  //Informations du joueur 

  function info() {

  if (gamePlayers[1].life <= 0) { 

     alert("Le ninja 2 est le grand vainqueur!");
     fight=false;
	 deleteMove();
	 gameNew();  
  }

  if (gamePlayers[2].life <= 0) {
	 
     alert("Le ninja 1 est le grand vainqueur!");
	 deleteMove();
	 fight=false;
     gameNew(); 
	
  }
  
	 const el1 = $('#player1').css('opacity', 0.4)[0];
	 const el2 = $('#player2').css('opacity', 0.4)[0];
	 $('#player' + gamePlayers.tour).css('opacity', 1);
  };