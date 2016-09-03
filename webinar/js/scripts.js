$(document).ready(function(){

		var header_menu_name 	= 'header-menu',
				header_menu 			= $('.' + header_menu_name),
				button_menu 			= $('.btn-menu'),
				button_menu_class = $('.btn-menu-class'),
				body 							= $(".body");

		function toggler(){
			body.toggleClass("header-menu-push");
			button_menu_class.toggleClass('navbar-toggle-open');
			header_menu.toggleClass('header-menu-open');
		}
		button_menu.click(function(e){
			toggler();
			e.stopPropagation();
		});
		// $(document).click(function(e){
		// 	if( header_menu.hasClass(header_menu_name + '-open') ) {
		// 		if ( ! $(e.target).is('.'+header_menu_name + ', .'+header_menu_name+"*") ) {
		// 			toggler();
		// 		}
		// 	}
		// });
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top
			},1000);
			return false;
		});
		$(window).on('hashchange', function(e){
			history.replaceState ("", document.title, e.originalEvent.oldURL);
		});
});	