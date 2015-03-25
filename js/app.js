$(document).ready(function() {
  $('.ryu').mouseenter(function() {
  	$('.ryu-still').hide();
  	$('.ryu-ready').show();	
  })	
   .mouseleave(function() {
   	 $('.ryu-ready').hide();
   	 $('.ryu-still').show();
  })
   .mousedown(function() {
   	   playHadouken();
   	   $('.ryu-ready').hide();
   	   $('.ryu-throwing').show();
   	   $('.hadouken').finish().show()
   	   	  .animate(
  		    {'left': '1020px'},
  		    500,
  		    function() {
    	      $(this).hide();
              $(this).css('left', '520px');
  		   }
        );
  })
  			 
   .mouseup(function() {
   	  // ryu goes back to his ready position
   	  $('.ryu-throwing').hide();
   	  $('.ryu-ready').show();
  })
   $('body').keydown(function(x) {
   	  if(x.keyCode == 88) {
   	  	$('.ryu-ready').hide();
   	  	$('.ruy-cool').show();
   	 }
  })
   $('body').keyup(function(x) {
   	  if(x.keyCode == 88) {
   	  	$('.ryu-ready').show();
   	  	$('.ruy-cool').hide();
   	  }
   })
});

function playHadouken () {
	$('#hadouken-sound') [0].volume = 0.2;
	$('#hadouken-sound') [0].load();
	$('#hadouken-sound') [0].play();
}