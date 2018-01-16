"use strict";

(function() {
	angular
		.module("Website")
		.directive("lstScroll", Directive);

	function Directive() {
		return {
			restrict: "A",
			scope: {
				scrollTo: "@"
			},
			link: function($scope, theElement){
				console.log('linking scroll directive');
				$(theElement).click(function(){
					$('html, body').animate({ scrollTop: $($scope.scrollTo).offset().top });
				})
			}
		};
	}
})();