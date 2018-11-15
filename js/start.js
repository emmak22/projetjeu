const game = {} 

function gameNew() {
 
  generateMap(); 
  generateWall(); 
  generateWeapons(); 
  generatePlayers(); 

  console.log("Le ninja " + gamePlayers.tour + " commence");
  update(); 
 
};


function update(){  
  info(); 
  countMove();
 
};

	$('#newgame').on('click',function(){
	gameNew();
	});


	$('#attack').prop('disabled', true );
	$('#attack').on('click',function(){
	   attack();
	});
	
	
	$('#defend').prop('disabled', true );
	$('#defend').on('click',function(){
	   defend();
	});
