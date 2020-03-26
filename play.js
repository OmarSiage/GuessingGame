//Some Variables
var colors = []
var clicked = []
var not_available = []

var max_score = 0;
var current_Score = 0;

//Get Required HTML Elements
var boxes = document.getElementsByClassName("row_object");
var reset = document.getElementById("resetButt")
var currentScore  = document.getElementsByClassName("currentScore");
var maxScore  = document.getElementsByClassName("bestScore");


//I want to begin by changing the colors of the squares everytime page is loaded / new game started
//I need to return a string of the format : rgb(255, 242, 123) - I need the numbers to be randomly generated
function color_selector(){
	var red_amount = Math.floor(Math.random() * 256);
	var green_amount = Math.floor(Math.random() * 256);
	var blue_amount = Math.floor(Math.random() * 256);
	return "rgb("+red_amount+", "+green_amount+", "+blue_amount+")";
}


//This Generate Colors Will Store 12 Colors (2 of each of the same color)
function get_colors(amount){
	for (var i = 0; i < amount; i++) {
		currColor = color_selector();
		colors.push(currColor);
		colors.push(currColor);}}



//I'll need a function that can shuffle the array
function shuffle(arr){
	//Little overkill to do 30 times, but it's just to ensure proper shuffling.
	for (var i = 0; i < 30; i++) {
		//Pick a random number between 0 and length - 1 of the array
		let switch_this_index = Math.floor(Math.random() * arr.length);
		let with_this_index = Math.floor(Math.random() * arr.length);

		let temp_val = arr[switch_this_index];

		arr[switch_this_index] = arr[with_this_index];
		arr[with_this_index] = temp_val;
	}

	return arr;
}




function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis){
    	console.log("stuck");
    }
}



//I need a function that sets a listener on all buttons!
function setListeners(){
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener("click",function(){
			this.style.transition = "all 1s";
			setColor(this);
		})
	}

	reset.addEventListener("click",function(){
		resetGame();
	})
}



function setColor(clicked_square){
	if(!(not_available.includes(clicked_square))){
		index_clicked = Number(clicked_square.id);
		clicked_square.style.background = colors[index_clicked];
		clicked.push(clicked_square);
		console.log(clicked)
		not_available.push(clicked_square);
	}

	if(clicked.length == 2){
		checkIfCorrect(clicked);
		clicked = [];
	}
}





function checkIfCorrect(arr){
	//Wrong Answer - Update Score, Change Colors of Selectors
	if(!(clicked[0].style.background === clicked[1].style.background)){
		clicked[0].style.background = 'black';
		clicked[1].style.background = "black";
		not_available.pop();
		not_available.pop();
		current_Score = current_Score - 1;
		currentScore[0].innerHTML = current_Score
	}

	//Correct Answer - Update Score
	else{
		current_Score = current_Score + 1;
		currentScore[0].innerHTML = current_Score

	}

}



function init(){
	get_colors(6);
	colors = shuffle(colors);
	console.log(colors);
	setListeners();
}



function resetGame(){
	//Set all blocks back to black
	for (var i = 0; i < boxes.length; i++) {
			boxes[i].style.background = "black";}

	if(current_Score > max_score){
		max_score = current_Score;
		maxScore[0].innerHTML = max_score;
	}
	current_Score = 0;
	currentScore[0].innerHTML = current_Score;

	colors = [];
	clicked = [];
	not_available = [];
	get_colors(6);
	colors = shuffle(colors);

}


init();