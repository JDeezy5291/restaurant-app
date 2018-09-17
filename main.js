// ACTIVE NAVBAR
$(document).ready(function() {
// ACTIVATES LINKS
    $('#sidebar ul li a').click(function() {
    	$('#sidebar ul li a').removeClass('active');
    	$(this).addClass('active');
	});

// UNDERLINE LINK WHEN CLICKED
	$(function(){
	  $('#sidebar ul li a').each(function() {
	    if ($(this).prop('href') == window.location.href) {
	    	$(this).addClass('current');
	    }
	  });
	});
});