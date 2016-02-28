$(document).ready(function(){

//wysuwane menu

$('#menu a').first().on('mouseover', function(){
	$('#addlist').slideDown(500);
})
$('#addlist').on('mouseover', function(){
	$('this').css('display', 'block');
})

$('#addlist').on('mouseleave', function(){
	$('#addlist').slideUp(500);
})

// $('#menu a').first().on('mouseleave', function(){
// 	$('#addlist').slideUp(500);
// })

//chairs

$('#box1').on('mouseover', function(){
	$('#box1').siblings().css('visibility', 'hidden');
})

$('#box1').on('mouseleave', function(){
	$('#box1').siblings().css('visibility', 'initial');
})

$('#box2').on('mouseover', function(){
	$('#box2').siblings().css('visibility', 'hidden');
})

$('#box2').on('mouseleave', function(){
	$('#box2').siblings().css('visibility', 'initial');
})

//slider

	var leftArrow = $('#leftarrow').find('p');
	var rightArrow = $('#rightarrow').find('p');

	var images = $('#slider').find('img');
	var index = 0;
	var width = 400;
	var imagesLength = images.length;
	$('#slider').width(width);
	$('#slider ul').css('width', width * imagesLength);

	rightArrow.on('click', function(){

		if (index >= images.length-1){
			index = 0;
		} else {
			index = index +1;
		}

		$('#slider ul').animate({left: (-1)*width*index});

	})

	leftArrow.on('click', function(){

		if(index <= 0){
			index = images.length-1;
		} else {
			index = index -1;
		}
		
		$('#slider ul').animate({left: (-1)*width*index});		

	})



});