gameMap = {}; 
// Initialise une nouvelle carte 

  function generateMap() {

 $('#map')[0].innerHTML = ""; 

  var el =  $('#map')[0];

  for (var i = 0; i < 10; i++) { 
    var row = $("<div/>"); 
      $(row).attr("class", "row"); 
	  $(el).append(row);

    for (var j = 0; j < 10; j++) {
      var col = $("<div/>");
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

  for (var i = 0; i < 10; i++) {
    var x = Math.floor(Math.random() * 10)-1; 
	var y = Math.floor(Math.random() * 10)-1;

    var wall = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); 

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
