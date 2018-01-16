'use strict';

(function(){
	angular
		.module('Website')
		.controller('HeaderController', ['$scope', 'ModalService', Controller]);

	function Controller($scope, ModalService){
		var $slide = $("#slide");
		var slideBackgrounds = [
			'dist/images/hero-bg.png',
			'dist/images/hero-bg-2.png',
		];
		var slideIndex = 0;

		$scope.showContactModal = function(){
			ModalService
				.showModal({ 
					templateUrl: 'dist/templates/pages/home/contact/contact.modal.template.html',
					controller:  'ContactModalController' 
				})
				.then(function(modal){
					console.log(modal);
					modal.element.modal();
				});
		};

		$scope.options = [{
			url: '#amanda-lima',
			label: 'INÍCIO'
		}, {
			url: '#treine-comigo',
			label: 'TREINE COMIGO',
		}, {
			url: '#planos',
			label: 'PLANOS'
		},{
			url: '#duvidas',
			label: 'DÚVIDAS FREQUENTES'
		},{
			url: '#fale-conosco',
			label: 'FALE CONOSCO'
		}];

		function getNextIndex() {
			slideIndex++;
			if(slideIndex === slideBackgrounds.length){
				slideIndex = 0;
			}
			return slideIndex;
		}

		function getPreviousIndex() {
			slideIndex--;
			if(slideIndex === -1){
				slideIndex = slideBackgrounds.length - 1;
			}
			return slideIndex;
		}

		this.nextImage = function(){
			var finalBackgroundProp = 'url(' + slideBackgrounds[getNextIndex()] + ')';
			$slide.css('background-image', finalBackgroundProp);
		}

		this.previousImage = function(){
			var finalBackgroundProp = 'url(' + slideBackgrounds[getPreviousIndex()] + ')';
			$slide.css('background-image', finalBackgroundProp);
		}
	}
})();

