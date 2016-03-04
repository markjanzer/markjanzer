//= require vendor/_fastclick.min
//= require vendor/_parallax.min
//= require vendor/_rellax.min
//= require vendor/_classie
//= require blocks/_navigation

// ------------------------
// fastclick.js init
// ------------------------
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

// ------------------------
// rellax.js init
// ------------------------
var rellax = new Rellax('.rellax');

// ------------------------
// parallax.js init
// ------------------------
var scene = document.getElementsByClassName('js-parallax-scene')[0];
var parallax = new Parallax(scene);


// ------------------------
// logo color swap
// ------------------------
function logoColor(offset) {
	var body = document.body;

	function listener() {
		var y = window.pageYOffset;
		if ( y >= offset ) {
			classie.add( body, 'nav-visible__logo--is-dark' );
		} else {
			classie.remove( body, 'nav-visible__logo--is-dark');
		}
	}

  window.addEventListener( 'scroll', listener, false );
}




// ------------------------
// headroom init
// ------------------------
// var header = document.getElementsByClassName('js-layout-header')[0];
// var headroom = new Headroom(header, {
//   "offset": 0,
//   "tolerance": 0,
//   "classes": {
//     "initial":  "js-headroom",
//     "pinned":   "js-headroom--pinned",
//     "unpinned": "js-headroom--unpinned"
//   }
// });
// headroom.init();


// // social popups
// var socialLinks = document.querySelectorAll('.social-link');
// for( var i = 0; i < socialLinks.length; i++ ){
//   socialLinks[i].addEventListener( 'click', function(e) {
//     e.preventDefault();
//     if ( e.target.id ) {
//       var target = e.target;
//     } else {
//       var target = e.target.parentNode;
//     }
//     var name = target.id,
//         width  = 600,
//         height = 375,
//         left   = (window.innerWidth - width)  / 2,
//         top    = (window.innerHeight - height) / 2,
//         url    = target.href,
//         opts   = 'status=1' +
//                  ',width='  + width  +
//                  ',height=' + height +
//                  ',top='    + top    +
//                  ',left='   + left;

//     window.open(url, name, opts);
//     return false;
//   }, false);
// }