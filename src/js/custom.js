$(document).ready(function() {
  html = $('html');

  $('#openSidebar').on('click', function() {
    html.toggleClass('nav-open');
    $(this).toggleClass('toggled');
  });


  $('.collapse').collapse({
    toggle: false
  });

});