
//Прелоадер
$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow");
});


$(document).ready(function(){

	new WOW().init();
	$('#nav').onePageNav();

	//Адаптивная ширина для .main
	$(".wow").filter(".fadeIn").attr("data-wow-delay", ".4s");

	function height(argument) {
		$("#main").css("height", $(window).height());
	}
	
	height();

	$(window).resize(function(){
		height();
	});

	//Изменение навигация при прокрутке
	$(window).on("scroll", function() {
    if($(window).scrollTop() > $(window).height() - 90) {
        $("nav").addClass("navbar-default");
    } else {
       $("nav").removeClass("navbar-default");
    }
});

	$(".night").on("change", function(){
		if($('.night').prop('checked'))
			{
				$("body").css("color", "#f5f5f5");
			}
		else
			$("body").css("color", "#333");
	});

});