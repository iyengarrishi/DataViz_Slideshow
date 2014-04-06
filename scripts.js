
//These are my images
var images = ["Image1.png","Image2.png","Image3.png","Image4.png","Image5.png"];

var index = 0;

function navSet(){
	//Set up a click event to change image
	$(".button").on("click", function(){
		
		//If the image is next, and not the first or last image in the slideshow, then this variable will
		//change the image
		var isNext = $(this).hasClass("next");
		if(isNext == true && index !=(images.length-1)){
			index=index+1;
		}else if(isNext == false && index > 0){
			index=index-1;
		}
		
		//Next we disable the ability to click on a button if there is no image
		
		if (index == 0){
			$(".button.prev").addClass("disabled");
			}else if(index == (images.length-1)){
				$(".button.next").addClass("disabled");
			}else{
				$(".button").removeClass("disabled");
			}
		console.log(isNext);
		
		//Create a function to change the images
		
		nextImage();
	});
		
}

//Define the function that changes the image

function nextImage(){
	$(".imagesHere").html("<img src='images/"+images[index]+"'/>"
	);
}

$(document).ready(function(){
	//Add the fist image to our page using the html tag
	$(".imagesHere").html(
		"<img src='images/"+images[index]+"'/>"
	);
	navSet();
});
