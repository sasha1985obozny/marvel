$(function(){

	$('.btn_menu').click(function(){
    $('.menu ul').slideToggle();
    });

	$('#owl1').owlCarousel({
		singleItem: true,
		pagination: true,
		paginationSpeed: 500,
	});

	$('#owl2').owlCarousel({
		singleItem: true,
		pagination: true,
		paginationSpeed: 500,
	});

	$('#owl3').owlCarousel({
		singleItem: true,
		navigation: true,
		pagination: false,
		navigationText: ['<img src="img/arrowLeft.png" alt="left">', '<img src="img/arrowRight.png" alt="right.png">'],
		items: 2,
		itemsDesktop: [1199,2],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		itemsMobile: [479,1]
	});


	$('.box3 .sizes a').click(function() {
        $('.box3 .sizes a').removeClass("active"); // удаляем у всех ссылок класс active
        $(this).addClass("active"); // устанавливаем класс active при нажатии
    });


	var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
            	
                thousandSeparator: "",
                duration: 3000
            });


 
            show = false;
        }
        
    });


   var mixer = mixitup('.mixportfolio');


   $("#menu").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

 

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),

 

        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

         

        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 1500);

    });


});