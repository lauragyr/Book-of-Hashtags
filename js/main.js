/*--"See the Story"-Button--*/

/*--STORY 1--*/
$("#button1").click(function () {
    $(".wrapper1").slideDown();

    $("#button1").toggle();
    $("#off-button1").toggle();
});

$("#off-button1").click(function () {
    $(".wrapper1").slideUp();
    
    $("#off-button1").toggle();
    $("#button1").toggle();
});


/*--STORY 2--*/
$("#button2").click(function () {
    $(".wrapper2").slideDown();

    $("#button2").toggle();
    $("#off-button2").toggle();
});

$("#off-button2").click(function () {
    $(".wrapper2").slideUp();
    
    $("#off-button2").toggle();
    $("#button2").toggle();
});


/*--STORY 3--*/
$("#button3").click(function () {
    $(".wrapper3").slideDown();

    $("#button3").toggle();
    $("#off-button3").toggle();
});

$("#off-button3").click(function () {
    $(".wrapper3").slideUp();
    
    $("#off-button3").toggle();
    $("#button3").toggle();
});


/*--STORY 4--*/
$("#button4").click(function () {
    $(".wrapper4").slideDown();

    $("#button4").toggle();
    $("#off-button4").toggle();
});

$("#off-button4").click(function () {
    $(".wrapper4").slideUp();
    
    $("#off-button4").toggle();
    $("#button4").toggle();
});


/*--STORY 5--*/
$("#button5").click(function () {
    $(".wrapper5").slideDown();

    $("#button5").toggle();
    $("#off-button5").toggle();
});

$("#off-button5").click(function () {
    $(".wrapper5").slideUp();
    
    $("#off-button5").toggle();
    $("#button5").toggle();
});


/*--STORY 6--*/
$("#button6").click(function () {
    $(".wrapper6").slideDown();

    $("#button6").toggle();
    $("#off-button6").toggle();
});

$("#off-button6").click(function () {
    $(".wrapper6").slideUp();
    
    $("#off-button6").toggle();
    $("#button6").toggle();
});


/*--Infos zu Bilderreihe--*/

$(".story-box").click(function (event) {
	var target = $(event.target);
	//target.siblings().fadeToggle();
	target.toggle();
	target.siblings().toggle();

    //$(".story-box").find(".img-text-wrapper").fadeToggle();
});



/*--Smooth-Scrolling--*/
$(document).ready(function(){
    $("#button1").click(function() { 
       document.querySelector('.wrapper1').scrollIntoView({
           behavior: 'smooth'
       });
    });
});

$(document).ready(function(){
    $("#button2").click(function() { 
       document.querySelector('.wrapper2').scrollIntoView({
           behavior: 'smooth'
       });
    });
});

$(document).ready(function(){
    $("#button3").click(function() { 
       document.querySelector('.wrapper3').scrollIntoView({
           behavior: 'smooth'
       });
    });
});

$(document).ready(function(){
    $("#button4").click(function() { 
       document.querySelector('.wrapper4').scrollIntoView({
           behavior: 'smooth'
       });
    });
});

$(document).ready(function(){
    $("#button5").click(function() { 
       document.querySelector('.wrapper5').scrollIntoView({
           behavior: 'smooth'
       });
    });
});

$(document).ready(function(){
    $("#button6").click(function() { 
       document.querySelector('.wrapper6').scrollIntoView({
           behavior: 'smooth'
       });
    });
});
