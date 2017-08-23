

// $(".nav").click(function() {
// 	$(this).css("background-color", "red");
// });


// function hvr(dom, action)
// {
//     if (action == 'in')
//     {
//         $(dom).find("[col=g]").css("background-image", "images/cupgif.gif");
//         // $(dom).find("[col=b]").css("display", "inline-block");
//     }

//     else
//     {
//         $(dom).find("[col=g]").css("background-image", "images/lightgif.gif");
//         // $(dom).find("[col=g]").css("display", "inline-block");
//     }
// }


// var main = function() {
//   $("#a").hover(function (){
//   $(this).parent("div").css("background-color","yellow")
// 	});
// }

// $(document).ready(main);

// var about= new Image();
// about.src = "url('images/lightgif.gif')";
// var portfolio = new Image();
// portfolio.src = 'image/drawinggif.gif';
// var resume = new Image();
// resume.src = 'image/typewritergif.gif';
// var contact = new Image();
// contact.src = 'image/cupgif.gif';
// var fox = new Image();
// fox.src = 'image/foxgif.gif';

function mouseOver() {
	document.getElementById("pls").style.backgroundImage = "url('images/lightgif.gif')";
}

function mouseOver2() {
	document.getElementById("pls").style.backgroundImage = "url('images/drawinggif.gif')";
}
function mouseOver3() {
	document.getElementById("pls").style.backgroundImage = "url('images/typewritergif.gif')";
}

function mouseOver4() {
	document.getElementById("pls").style.backgroundImage = "url('images/cupgif.gif')";
}

function mouseOut() {
	document.getElementById("pls").style.backgroundImage = "url('images/website.png')";
}

