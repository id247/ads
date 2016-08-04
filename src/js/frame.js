'use strict'

;(function App(window, document){

	function createBubble(){
		let bubble = document.createElement('div');

		bubble.classList.add('bubble');

		document.body.appendChild(bubble);

		return bubble;
	}

	function bubbles(){
		const  places = document.querySelectorAll('[data-bubble]');
		const bubble = createBubble();
		
		let showBubbleAgain = true;

		var data = {
			'970': 'Баннер 970x200 <br /> CTR: 0,5%',
			'sidebar': 'Баннер 240x400 <br /> CTR: 0,2%',
			'branding': 'Брендинг <br /> CTR: 0,8—1%',
			'footer': 'Баннер 728x90 <br /> CTR: 0,15%',
		};

		[...places].forEach((place)=> {
			place.addEventListener('mouseover', function(){
				const elemRect = this.getBoundingClientRect();
				const dataId = this.getAttribute('data-bubble');
				const info = data[dataId];
				if (!info || !showBubbleAgain){
					return;
				}
				showBubbleAgain = false;
				bubble.innerHTML = info;
				bubble.style.top = (elemRect.top + document.body.scrollTop + 10) + 'px';
				if (dataId === 'branding'){
					bubble.style.left = '50%';
					bubble.style.marginLeft = '-480px';
				}else{
					bubble.style.left = (elemRect.left + 10) + 'px';
					bubble.style.marginLeft = '0px';
				}
				
				bubble.classList.add('bubble--visible');
			});

			place.addEventListener('mouseleave', function(){
				showBubbleAgain = true;
			});
		});

		bubble.addEventListener('click', function(){
			showBubbleAgain = false;
			bubble.innerHTML = '';
			bubble.classList.remove('bubble--visible');
		});
	}


	function init(){

		bubbles();
	}

	init();

})(window, document, undefined);
