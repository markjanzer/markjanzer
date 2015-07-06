//= require fastclick.min
//= require html5shiv.min
//= require headroom.min
//= require classie
//= require offcanvas

// ------------------------
// fastclick init
// ------------------------
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

// ------------------------
// headroom settings
// ------------------------
var desktop = document.querySelector("#nav");
var desktop_headroom = new Headroom(desktop, {
  "offset" : 40,
  "tolerance" : 5,
  "classes" : {
    "initial" : "nav-transition",
    "pinned" : "nav-down",
    "unpinned" : "nav-up",
    "top" : "nav-top",
    "notTop" : "nav-not-top"
  }
});

var mobile = document.querySelector("#mobile");
var mobile_headroom = new Headroom(mobile, {
  "offset" : 0,
  "tolerance" : 5,
  "classes" : {
    "initial" : "nav-transition",
    "pinned" : "nav-down",
    "unpinned" : "nav-up",
    "top" : "nav-top",
    "notTop" : "nav-not-top"
  }
});

function initHeadroom() {
	var viewport = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if( viewport > 768 ) {
		desktop_headroom.init();
	} else {
		mobile_headroom.init();
	}
}



// ------------------------
// headroom init
// ------------------------
initHeadroom();


// ------------------------
// onresize init
// ------------------------
window.onresize = function() {
	desktop_headroom.destroy();
	mobile_headroom.destroy();
	initHeadroom();
  colorHeight();
}


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