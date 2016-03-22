(function() {
	/* Mobile nav based on Codrops (http://tympanus.net/codrops/2014/09/16/off-canvas-menu-effects/)
	 * Original License:
	 *
	 * Licensed under the MIT license.
	 * http://www.opensource.org/licenses/mit-license.php
	 * 
	 * Copyright 2014, Codrops
	 * http://www.codrops.com
	*/
	var html = document.documentElement,
			body = document.body,
			overlay = document.querySelector( '.js-layout-overlay' ),
		  openbtn = document.querySelector( '.js-nav-hidden-open' ),
		  closebtn = document.querySelector( '.js-nav-hidden-close' ),
		  isOpen = false;

	function init() {
		if(openbtn) {
			openbtn.addEventListener( 'click', toggleNav );
		}
		if(closebtn) {
			closebtn.addEventListener( 'click', toggleNav );
		}
		if(overlay) {
			overlay.addEventListener( 'click', function(e) {
				var target = e.target;
				if( isOpen && target !== openbtn ) {
					toggleNav();
				}
			});
		};
	}

	function disableTouch(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	function toggleNav(e) {
		if(isOpen) {
			classie.remove( body, 'nav-hidden--is-visible' );
			body.removeEventListener( 'touchmove', disableTouch )
		} else {
			classie.add( body, 'nav-hidden--is-visible' );
			body.addEventListener( 'touchmove', disableTouch )
		}
		isOpen = !isOpen;
	}

	init();
	
})();