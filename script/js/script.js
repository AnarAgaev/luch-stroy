$(document).ready(function(){ 

	// показываем тест при клике по кнопкам
	$('#fulfill_dream, #get_sale').on('click', function(e){
		$('.background-modal').fadeIn(150);
		$('body').toggleClass('lock');
    	$('#custom-test').toggleClass('show');


    	//$('#background-modal').removeClass('hide').addClass('show');
	});


	// скрываем тест при клике по пустому полю или кнопке закрыть
	$('.background-modal').on('click', function(e){
		//$(this).fadeOut(150);
    	//$('body').toggleClass('lock');
    	//$('#custom-test').toggleClass('show');

    	//$('#background-modal').removeClass('hide').addClass('show');
	});
















/*

	// показываем colback при клике по кнопке
	$('#colback_modal_btn, #colback_modal_btn_head').on('click', function(e){
		$('.modal_background').addClass('show');
    	$('.colback_modal').removeClass('hide').addClass('show');

    	/* для маленьких по ширине экранов приклеиваем модальное окно к верху 
    	страницы через css a в js проскролим страницу к началу 
    	if (window.innerHeight < 690) $('html, body').animate({scrollTop: 0},500);
	});

	// показываем feedback при клике по кнопке
	$('#feedback_modal_btn').on('click', function(e){
		$('.modal_background').addClass('show');
    	$('.feedback_modal').removeClass('hide').addClass('show');

    	/* для маленьких по ширине экранов приклеиваем модальное окно к верху 
    	страницы через css a в js проскролим страницу к началу 
    	if (window.innerHeight < 825) $('html, body').animate({scrollTop: 0},500);
	});

	// скрываем модальное окно при клике по крестику
	$('.modal_close').on('click', function(e){
		$('.modal_background').removeClass('show');
    	$(this).parent().removeClass('show').addClass('hide');
	});

*/
/*
	// прокрутить к началу страницы при клике по кнопке стрелка вверх
	$('#go_to_top').on('click', function(e){
		$('html, body').animate({scrollTop: 0},500);
    	return false;
	});
	
	
*/

	
	
	
	

	
	
	
	
	
	
	
});