//Get Required HTML Elements
//Get all the boxes!
var boxes = document.getElementsByClassName("row_object");
var colors = []
var clicked = []
var not_available = []


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
/*


*/
function shuffle(arr){
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
	console.log(colors[2])
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener("click",function(){
			this.style.transition = "all 1s";
			setColor(this);
		})
	}
}


function setColor(clicked_square){
	index_clicked = Number(clicked_square.id);
	clicked_square.style.background = colors[index_clicked];
	clicked.push(clicked_square);
	
	if(clicked.length == 2){
		checkIfCorrect(clicked);
		clicked = [];}
}





function checkIfCorrect(arr){
	if(!clicked[0].style.background === clicked[1].style.background){
		console.log("naw");
		clicked[0].style.background = 'black';
		clicked[1].style.background = "black";}

	else{
		console.log("correct");
	}

}



//My Play Function - It willc all all methods in an organized manner
/*
Steps for loading game:
1) Set Color of Boxes


*/
function play(){
	get_colors(6);
	console.log(colors);
	setListeners()
}


play();