var memory_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function createDynamicDiv(memory_array)
{
	for(var i = 0; i < memory_array.length; i++)
	{
	   var d = document.createElement("div");		
	   d.id = "tile" + i;	  
	   d.value=memory_array[i];	  
	  d.addEventListener("click", function () {
		  memoryFlipTile(this);
	   },false);	 		
	   document.getElementById('memory_board').appendChild(d); 
   } 
}


//New Board - 1 - Schuffle and 2- Create dynamic div element
function newBoard()
{
	tiles_flipped = 0;   
    shuffleArray(memory_array);
   	createDynamicDiv(memory_array);  
	 
}


function memoryFlipTile(tile){
 
	if(tile.innerHTML=="" && memory_values.length < 2){

		tile.style.background = '#FFF';
        tile.innerHTML = tile.value;
        //when first clicked
		if(memory_values.length == 0){
			 
			memory_values.push(tile.value);
            memory_tile_ids.push(tile.id);
            
        }
        //when second clicked
        else if(memory_values.length == 1){
			 
			memory_values.push(tile.value);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				 
				memory_values = [];
            	memory_tile_ids = [];
				 
				if(tiles_flipped == memory_array.length){
					alert("All done and board is cleared.Reinitializing the board again...");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'black';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'black';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 600);
			}
		}
	}
}
