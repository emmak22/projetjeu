gameMap = {}; 
// Initialise une nouvelle carte 

  function generateMap() {

 $('#map')[0].innerHTML = ""; 

  let el =  $('#map')[0];

  for (let i = 0; i < 10; i++) { 
    let row = $("<div/>"); 
      $(row).attr("class", "row"); 
	  $(el).append(row);

    for (let j = 0; j < 10; j++) {
      let col = $("<div/>");
      $(col).attr("class", "square");
      $(col).attr("data-x", j + 1); 
      $(col).attr("data-y", i + 1); 
      $(col).attr("type", ""); 
	  $(col).attr("weapon", "");
      $(row).append(col);
    };
  };
};

//Initialise les obstacles 

function generateWall() {

  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 10)-1; 
	let y = Math.floor(Math.random() * 10)-1;

    let wall = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); 

    if ($(wall).attr("type") === "") { 
        $(wall).attr("type", "wall"); 
		$(wall).addClass("wall"); 
    } else {
      i--; 
    };
  };
};

// genere la carte a l'ouverture de l'application
generateMap();
