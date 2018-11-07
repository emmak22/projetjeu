
// Initialisation de l'objet Armes

gameWeapons = {
  arme0: {
    name: "Mains nues",
    damage: 10,
    css_class: ""
  },

  arme1: {
    name:  "Nunchaku",
    damage: 20,
    css_class: "nunchaku"
  },
  arme2: {
    name: "Kusarigama",
    damage: 25,
    css_class: "kusarigama"
  },
  arme3: {
    name: "Kunai",
    damage: 30,
    css_class: "kunai"
  },
    arme4: {
    name: "Katana",
    damage: 35,
    css_class: "katana"
  }
};
//Placement aleatoire des armes
 function generateWeapons() {
	
  for (let i = 1; i < 3; i++) {

    let random = Math.ceil((Math.random() * 4) - 1);
    let x = Math.ceil(Math.random() * 10); 
    let y = Math.ceil(Math.random() * 10);

    let weapon = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); 
	
	if(($(weapon).attr("type") === "")){ 
		 $(weapon).attr("type", "weapon"); 
		 $(weapon).attr("weapon", "arme" + (1)); 
		 $(weapon).addClass(gameWeapons['arme'+(1)].css_class);
      }  
	else { 
      i--;
    }
  };
  
  for (let i = 1; i < 3; i++) {

    let random = Math.ceil((Math.random() * 4) - 1); 
    let x = Math.ceil(Math.random() * 10); 
    let y = Math.ceil(Math.random() * 10);

    let weapon = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); 
     
	if(($(weapon).attr("type") === "")) { 
		 $(weapon).attr("type", "weapon"); 
		 $(weapon).attr("weapon", "arme" + (2));
		 $(weapon).addClass(gameWeapons['arme'+(2)].css_class);
         } 
	else {
      i--;
    }
  };
  
  for (let i = 1; i < 2; i++) {

    let random = Math.ceil((Math.random() * 4) - 1); 
    let x = Math.ceil(Math.random() * 10); 
    let y = Math.ceil(Math.random() * 10);

    let weapon = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); 
	
     if (($(weapon).attr("type") === "")){ 
	      $(weapon).attr("type", "weapon"); 
          $(weapon).attr("weapon", "arme" + (3)); 
	      $(weapon).addClass(gameWeapons['arme'+(3)].css_class); 
         } 
	else { 
      i--;
    }
  };
 
  for (let i = 1; i < 2; i++) {

    let random = Math.ceil((Math.random() * 4) - 1);
    let x = Math.ceil(Math.random() * 10); 
    let y = Math.ceil(Math.random() * 10);

    let weapon = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); 

	if  (($(weapon).attr("type") === "")){ 
		 $(weapon).attr("type", "weapon"); 
		 $(weapon).attr("weapon", "arme" + (4)); 
		 $(weapon).addClass(gameWeapons['arme'+(4)].css_class);    
		 } 
	else { 
      i--;
    break;
	}
  };
 
};

