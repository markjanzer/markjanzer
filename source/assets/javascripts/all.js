//= require vendor/_fastclick.min
//= require vendor/_parallax.min
//= require vendor/_classie
//= require blocks/_navigation

// ------------------------
// fastclick init
// ------------------------
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

// ------------------------
// parallax init
// ------------------------
var scene = document.getElementsByClassName('js-parallax-scene')[0];
var parallax = new Parallax(scene);
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