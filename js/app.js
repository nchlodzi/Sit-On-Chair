$(document).ready(function(){

//wysuwane menu


$('ol#menu li').hover(function(){
	$(this).find('#addlist').slideDown(500);
}, 
function(){
	$(this).find('#addlist').slideUp(500);
}
);

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

//dropdowns
	
	function calculator(){

	$('.dropdowns .arrow-down').on('click', function(){
		$(this).next('.drop').toggle();
	});



	var clair = $('.dropdowns').first().find('.drop li').first();
	
		clair.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Clair');
			$('.title').html('Clair');
			var namePrice = clair.data('price');
			$('.title_chair').html(namePrice);
			// $('.sum').html(namePrice);
		sumSummary();
		})


	var margarita = $('.dropdowns').first().find('.drop li').eq(1);

		margarita.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Margarita');
			$('.title').html('Margarita');			
			var namePrice = margarita.data('price');
			$('.title_chair').html(namePrice);
			// $('.sum').html(namePrice);
			sumSummary();
		})

	var selena = $('.dropdowns').first().find('.drop li').eq(2);
	
		selena.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Selena');
			$('.title').html('Selena');
			var namePrice = selena.data('price');			
			$('.title_chair').html(namePrice);
			// $('.sum').html(namePrice);
			sumSummary();
		})


	var czerwony = $('.dropdowns').eq(1).find('.drop li').first();
	
		czerwony.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Czerwony');
			$('.color').html('Czerwony');
			var colorPrice = czerwony.data('price');
			$('.color_chair').html(colorPrice);
			sumSummary();
		})

	var czarny = $('.dropdowns').eq(1).find('.drop li').eq(1);
	
		czarny.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Czarny');
			$('.color').html('Czarny');
			var colorPrice = czarny.data('price');
			$('.color_chair').html(colorPrice);

			sumSummary();
		})

	var pomaranczowy = $('.dropdowns').eq(1).find('.drop li').eq(2);
	
		pomaranczowy.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Pomarańczowy');
			$('.color').html('Pomarańczowy');
			var colorPrice = pomaranczowy.data('price');
			$('.color_chair').html(colorPrice);

			sumSummary();
		})

	var tkanina = $('.dropdowns').eq(2).find('.drop li').first();
	
		tkanina.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Tkanina');
			$('.pattern').html('Tkanina');
			var patternPrice = tkanina.data('price');
			$('.pattern_chair').html(patternPrice);
			sumSummary();
		})

	var skora = $('.dropdowns').eq(2).find('.drop li').eq(1);

		skora.on('click', function(){
			$(this).parent().siblings('.dropLabel').html('Skóra');
			$('.pattern').html('Skóra');
			var patternPrice = skora.data('price');
			$('.pattern_chair').html(patternPrice);
			sumSummary();
		})


	var check2 = $('#check2');

	
	check2.on('click', function(){
		check2.toggleClass('check3');

		if (check2.hasClass('check3')){
			$('.transport').html('Transport');					
			var transportPrice = check2.data('price');
			$('.transport_chair').html(transportPrice);
		} else{
			$('.transport').html('Transport');
			$('.transport_chair').html("0");
		}
		sumSummary();
	})


	function sumSummary(){
		// var sum = 0;

		// $('.sum').html(
		// 	parseInt(namePrice1) + 
		// 	parseInt(colorPrice1) + 
		// 	parseInt(colorPrice2) + 
		// 	parseInt(colorPrice3) + 
		// 	parseInt(patternPrice) +  
		// 	parseInt(transportPrice)
		// 	) +" zł";
		// return sum;
	
}	
	// var sum = $('.sum');

	var namePrice = $('.title_chair').html();
	var colorPrice = $('.color_chair').html();
	var patternPrice = $('.pattern_chair').html();
	var transportPrice = $('.transport_chair').html();

	$('.sum').html(parseInt(namePrice) 
				 + parseInt(colorPrice) 
				 + parseInt(patternPrice) 
				 + parseInt(transportPrice));

	}
	calculator();
});