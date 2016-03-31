$(document).ready(function(){

//wysuwane menu

function menu(){

	$('ol#menu li').hover(function(){
		$(this).find('#addlist').slideDown(500);
	}, 
	function(){
		$(this).find('#addlist').slideUp(500);
	});
}
menu();

//chairs

function covers(){

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
}
covers();

//slider

function slider(){

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
}

slider();

//dropdowns
	
	function calculator(){

	$('.dropdowns .arrow-down').on('click', function(){
		$(this).next('.drop').toggle();
	});



	var clair = $('.dropdowns').first().find('.drop li').first();
	var namePrice1 = clair.data('price');
		clair.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Clair');
			$('.title').html('Clair');
			$('.title_chair').html(namePrice1);
			sumSummary();
		})


	var margarita = $('.dropdowns').first().find('.drop li').eq(1);
	var namePrice2 = margarita.data('price');
		margarita.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Margarita');
			$('.title').html('Margarita');			
			$('.title_chair').html(namePrice2);
			sumSummary();
		})

	var selena = $('.dropdowns').first().find('.drop li').eq(2);
	var namePrice3 = selena.data('price');
		selena.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Selena');
			$('.title').html('Selena');
			$('.title_chair').html(namePrice3);
			sumSummary();
		})


	var czerwony = $('.dropdowns').eq(1).find('.drop li').first();
	var colorPrice1 = czerwony.data('price');
		czerwony.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Czerwony');
			$('.color').html('Czerwony');
			$('.color_chair').html(colorPrice1);
			sumSummary();
		})

	var czarny = $('.dropdowns').eq(1).find('.drop li').eq(1);
	var colorPrice2 = czarny.data('price');
		czarny.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Czarny');
			$('.color').html('Czarny');
			$('.color_chair').html(colorPrice2);
			sumSummary();
		})

	var pomaranczowy = $('.dropdowns').eq(1).find('.drop li').eq(2);
	var colorPrice3 = pomaranczowy.data('price');
		pomaranczowy.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Pomarańczowy');
			$('.color').html('Pomarańczowy');
			$('.color_chair').html(colorPrice3);
			sumSummary();
		})

	var tkanina = $('.dropdowns').eq(2).find('.drop li').first();
	var patternPrice1 = tkanina.data('price');
		tkanina.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Tkanina');
			$('.pattern').html('Tkanina');
			$('.pattern_chair').html(patternPrice1);
			sumSummary();
		})

	var skora = $('.dropdowns').eq(2).find('.drop li').eq(1);
	var patternPrice2 = skora.data('price');
		skora.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Skóra');
			$('.pattern').html('Skóra');
			$('.pattern_chair').html(patternPrice2);
			sumSummary();
		})


	var check2 = $('#check2');
	var transportPrice = check2.data('price');
	
	check2.on('click', function(){
		check2.toggleClass('check3');

		if (check2.hasClass('check3')){
			$('.transport').html('Transport');								
			$('.transport_chair').html(transportPrice);
		} else{
			$('.transport').html('Transport');
			$('.transport_chair').html("0");
		}
		sumSummary();
	})

	function sumSummary(){

		var sum = $('.sum');
		var suma = 0;
		var sumaColor = 0;
		var sumaPattern = 0;
		var sumaTransport = 0;

	if ($('.title_chair').html() == namePrice1){
		suma = suma + parseInt(namePrice1);
	}
	else if ($('.title_chair').html() == namePrice2){
		suma = suma + parseInt(namePrice2);
	}
	else if ($('.title_chair').html() == namePrice3){
		suma = suma + parseInt(namePrice3);
	}

	if ($('.color_chair').html() == colorPrice1){
		sumaColor = sumaColor + parseInt(colorPrice1);
	}
	else if ($('.color_chair').html() == colorPrice2){
		sumaColor = sumaColor + parseInt(colorPrice2);
	}
	else if ($('.color_chair').html() == colorPrice3){
		sumaColor = sumaColor + parseInt(colorPrice3);
	}

	if ($('.pattern_chair').html() == patternPrice1){
		sumaPattern = sumaPattern + parseInt(patternPrice1);
	}
	else if ($('.pattern_chair').html() == patternPrice2){
		sumaPattern = sumaPattern + parseInt(patternPrice2);
	}

	if ($('.transport_chair').html() == transportPrice){
		sumaTransport = sumaTransport + parseInt(transportPrice);
	}
	else if ($('.transport_chair').html() == "0"){
		sumaTransport = sumaTransport + parseInt("0");
	}

	sum.html(suma + sumaColor + sumaPattern + sumaTransport);
	}
	
	sumSummary();
	}

	calculator();
});