
'use strict';



$('#btn').click(function(){
    
    if ($('.nav-menu').is(':hidden')){
      
      $('#navBtn').removeClass('fa-bars');
      $('#navBtn').addClass('fa-times');
      
    } else {
      
      $('#navBtn').removeClass('fa-times');
      $('#navBtn').addClass('fa-bars');
      
    }
    
  });



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
