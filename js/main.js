;(function($){
	"use strict";
var accordion = $('.ba-accordion');



	accordion.on('click', 'dt',function(){
		var clicked = $(this);


		accordion.find('dt').not(clicked).next().slideUp(350);
		clicked.next().slideToggle(350);


	});


})(jQuery);




