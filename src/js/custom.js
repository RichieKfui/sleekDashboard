$(document).ready(function() {

  $('#openSidebar').on('click', function() {
    $('.left-sidebar').toggleClass('show');
    $('#mainPanel').toggleClass('show');
  });

});