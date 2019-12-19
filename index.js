//Init Variables
var mods = document.querySelectorAll(".mode");
var reset = document.getElementById("reset");
var msg = document.getElementById("message");
var rgb2g = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var copatter = new Array();
var pickedColor;
var mode=1;



init();
// Init Functions to load the Game
function init(){
	resetG();
	setupSqaures();
}
//ResetG_ame Function to reset to initial Gamestate
function resetG(){
	
	pickedColor = genRndColor();
	rgb2g.innerHTML = pickedColor;
	//rgb2g.style.background = pickedColor;
	copatter = genColors(pickedColor);
	copatter = shuffle(copatter);
	setColors(copatter);
	
	resetButton.textContent = "New Colors"
	msg.textContent = "";
	//change colors of squares
	h1.style.background = "steelblue";
	setupSqaures();

}

//Function shuffle to randomize the Array order
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
//Function SetupSquares to setup the ColorSquares
function setupSqaures(){

	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			var sqColor = this.style.background;
			var n = sqColor.lastIndexOf(")");
			n=n+1;
			sqColor = sqColor.slice(0,n);
			console.log(sqColor);
			if(sqColor == pickedColor){
				msg.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				//resetG();
				h1.style.background = sqColor;
				for (var i = 0; i < squares.length; i++) {
					squares[i].style.display = "block";
					squares[i].style.background = sqColor;
				}
			} else {
				this.style.background = "#232323";
				msg.textContent = "Try Again"
			}


		});
	}

}


function genColors(initi){
	
	var arr = [];
	arr[0]=initi;

	if(mode == 1){
		for (var i = 1; i < 3; i++) {
			
			arr.push(genRndColor());
			//colors = shuffle(colors);
		}
		//colors = shuffle(colors);
		return arr;
	}else if(mode == 2){
		for (var i = 1; i < 6; i++) {
			arr.push(genRndColor());
		}
		return arr;
	}else if(mode == 3){
		//Coming Soon :D		
	}
}
//Function to generate a random Color
function genRndColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Function to assign color to the ColorSquares
function setColors(copatter){

		if(mode == 1){
				for (var i = 0; i < squares.length; i++) {
					if(copatter[i]){
						squares[i].style.display = "block";
						squares[i].style.background	 = copatter[i];
					}else{
						squares[i].style.display = "none";
					}
				}
		}else{
				for (var i = 0; i <squares.length; i++) {
					if(copatter[i]){
						squares[i].style.display = "block";
						squares[i].style.background	 = copatter[i];
					}else{
						squares[i].style.display = "none";
					}
				}
		}
}


//Eventlistener for Mode Buttons

mods[0].addEventListener("click", function(){

mods[0].classList.add("selected");
mods[1].classList.remove("selected");
//mods[2].classList.remove("selected");
mode = 1;
resetG();
});

mods[1].addEventListener("click", function(){

mods[1].classList.add("selected");
mods[0].classList.remove("selected");
//mods[2].classList.remove("selected");
mode = 2;
resetG();

});

reset.addEventListener("click", function(){
	resetG();
});