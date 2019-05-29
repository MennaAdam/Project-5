
$(function (){
  //Adjust Header Height
  $('.section').height($(window).height());



//Scrolling

$('.nav-link[href*="#"]').click(function () {

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000);
});

//Open & Close the sidebar

$(".button").click(function(){
	$(".sidebar").animate({width:'show'}, 1000,),
  $(".text").css('position', 'absolute').animate({left:'60%'},1000),
  $(".button").css('position', 'absolute').animate({left:'20%'},1000);
  });

	
$("#close").click(function() {
    $(".sidebar").animate({width:'hide'}, 1000),
    $(".text").css('position', 'absolute').animate({left:'50%'},1000),
    $(".button").css('position', 'absolute').animate({left:'2%'},1000);
});

//Details

$(document).ready(function() {
	$("#one").css("display", "block");
 	 $("h3").click(function() {
    var $target = $(this).parent().next().slideToggle(1000);
    $(".singer").not($target).slideUp(1000);
  });
});

//Duration countdown

function countDownTimer(date) {
  var elem = $('#duration');
  var futureTime = new Date(date).getTime();

  setInterval(function() { 
  var timeLeft = Math.floor( (futureTime - new Date().getTime()) / 1000 );
  var days =  Math.floor(timeLeft / 86400);
  timeLeft -= days * 86400;
  var hours = Math.floor(timeLeft / 3600) % 24;
  timeLeft -= hours * 3600;
  var min = Math.floor(timeLeft / 60) % 60;
  timeLeft -= min * 60;
  var sec = timeLeft % 60;

  document.getElementById("days").innerHTML=  days + " D",
  document.getElementById("hours").innerHTML= "0" + "-" + hours + " h",
  document.getElementById("minutes").innerHTML=  "0" + "-" + min + " m" ,
  document.getElementById("seconds").innerHTML=  "0" + "-" + sec + " s";                           
 
  });

}

countDownTimer('May 13, 2019 09:00:00');

//Textarea characters counter

var maxChar = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var length = maxChar-length;
  $('#characters-counter').text(length);
  if (length <= 0) {
  	$("#characters-counter").text("your available character finished");
  }
});

  });
