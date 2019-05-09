
'use strict';


$("#btn").click(function(){
    
    $(".nav-menu").toggle(300);
})








$(window).resize(function() {

  if ($(this).width() < 980) {

    $('#btlImg').hide();

  } else {

    $('#btlImg').show();

    }

 });
