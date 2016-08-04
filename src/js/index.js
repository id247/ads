'use strict';

;(function App(window, document, $){
	console.log('run');

	var $iframe = $('.demo__iframe');
	var $menuHrefs = $('.menu__href');

	function updateIframe(target){
		const newSrc = $iframe.attr('src').replace(/(frames\/).*(\.html)/, '$1' + target + '$2');
		$iframe.attr('src', newSrc);
	}

	function updateMenu(target){
		$menuHrefs	.removeClass('active')
					.filter('[href="#' + target + '"]')
					.addClass('active');
	}

	function menu(){
		$menuHrefs.on('click', function(e){			
			const target = $(this).attr('href').substr(1);
			updateIframe(target);
			updateMenu(target);
		});
	}

	function getHash(){
		if (location.hash){
			return location.hash.substr(1);
		}
		return 'index';		
	}

	function nav(){
		const target = getHash();		
		updateIframe(target);
		updateMenu(target);
	}


	function init(){

		menu();
		nav();
	}

	init();

})(window, document, jQuery, undefined);
