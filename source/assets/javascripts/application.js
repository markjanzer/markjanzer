//= require vendor/_fastclick.min
//= require vendor/_picturefill.min
//= require blocks/_menu

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);