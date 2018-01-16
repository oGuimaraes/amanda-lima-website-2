"use strict";

(function() {
	angular
		.module("Website")
		.directive("lstMenuButton", Directive);

	function Directive() {
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/menu-button/menu-button.template.html",
			transclude: true,
			replace: true,
			scope: {
				options: "="
			},
			link: function($scope, theElement, attrs){
				var $overlay = $(".lst-menu-button__overlay");
				var $body = $('body');

				function showOverlay() {
					$overlay.css({ 
						display: 'block',
						position: 'absolute',
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					});
					$body.css({ overflow: 'hidden' });
				}

				function hideOverlay() {
					$overlay.css({ display: 'none' });
					$body.css({ overflow: 'initial' });
				}

				$scope.openMenu = function(){
					showOverlay();
					window.addEventListener('resize', showOverlay);
				};

				$scope.closeMenu = function(){
					hideOverlay();
					window.removeEventListener('resize', showOverlay);
				};
			}
		};
	}
})();
