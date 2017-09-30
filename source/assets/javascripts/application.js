//= require vendor/_fastclick.min
//= require blocks/_menu

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}