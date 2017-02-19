
//Прелоадер
$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow");
});


$(document).ready(function(){

	new WOW().init();
	$('#nav').onePageNav();
	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

	$(".sandwich, .menu_item").click(function() {
  		$(".sandwich").toggleClass("active");
	});

	$(".wow").filter(".fadeIn").attr("data-wow-delay", ".4s");

	$(".social-buttons").hover(function(event){
		var element = event.currentTarget.children[0].classList[1];
		if(element == "fa-vk")
			$("." + element).parent().css("background-color", "#507299");
		if(element == "fa-facebook")
			$("." + element).parent().css("background-color", "#3b5998");
	}, function(){
		$(".social-buttons").css("background-color", "transparent");
	});
	//Адаптивная ширина для .main
	function height(argument) {
		$(".main").css("height", $(window).height());
	}
	
	height();

	$(window).resize(function(){
		height();
	});

	

	//Изменение навигация при прокрутке
	$(window).on("scroll", function() {
    	if($(window).scrollTop() > $(window).height() - 90) {
    		$(".navbar-default").css("background-color", "rgb(245, 245, 245)");
    	    $(".navbar-brand").css("visibility", "visible");
    	    $(".nav>li>a").css({"font-size": "1.3em", "margin-top": "0px"});
    	} else {
    		$(".navbar-default").css("background-color", "transparent");
       		$(".navbar-brand").css("visibility", "hidden");
       		$(".nav>li>a").css({"font-size": "1.6em", "margin-top": "20px"});
    	}
	});
});
