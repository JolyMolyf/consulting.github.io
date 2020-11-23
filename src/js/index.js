$(".header-button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz").offset().top
    }, 1000);
});

var $firstBurger = $("#first-burger");
var $secondBurger = $("#second-burger");
var $thirdBurger = $("#third-burger");
var $burgers = $("#burgers"); 
var $topnav = $("#nav");
var $submitPop = $("#pop-up-submit");
var $topNavBtn = $(".top-nav-button");
var $popUp = $(".pop-up-wrapper");
var $callme = $("#callme");



var $deskpopup = $(".pop-up-desk-wrapper");
var $desknamepopup = $("#desk-name-pop-up");
var $deskphonepopup = $("#desk-phone-pop-up");
var $deskSubmit = $("#desk-pop-up-submit");


var name = ""; 
var phone = ""; 

$callme.click(function(){
	console.log("here");
	$deskpopup.removeClass("hide");
	$deskpopup.addClass("show");

});

$deskSubmit.click(function(){
	name = $desknamepopup.val(); 
	phone = $deskphonepopup.val(); 

		$.post("src/js/callback.php",
   		{
 	   	nameDesk: name, 
 	   	phoneDesk: phone
 		},
 	 	function(res, status){
 	    var data = JSON.parse(res);
 	    console.log(data);
 	    console.log("Status: " + status);

 	});
 	

 	console.log("sent");

 	$deskpopup.addClass("hide");
	$deskpopup.removeClass("show");
	
});




var clicked = false; 
$burgers.click(function() {

		
	if(!clicked){
		$('body').addClass("modal-open");
		$topnav.addClass("top-nav-shown");
		$secondBurger.css("display", "none");
		$firstBurger.addClass("first-burger-show");
		$thirdBurger.css("transform", "rotate(-45deg)");
		$burgers.addClass("offset");
		$(".top-nav-header").addClass("show");
		$(".top-nav-button").addClass("show");
		clicked = true; 
	}else{
		$('body').removeClass("modal-open");

		$(".top-nav-header").removeClass("show");
		$(".top-nav-button").removeClass("show");
		$burgers.removeClass("offset");
		$firstBurger.removeClass("first-burger-show");
		$thirdBurger.css("transform", "rotate(0)");
		$topnav.removeClass("top-nav-shown").addClass("top-nav");
		$secondBurger.css("display", "block");
		clicked = false;
		if($(".pop-up-wrapper").hasClass("show")){
			$(".pop-up-wrapper").removeClass("show");
		}

	}

});




$topNavBtn.click(function() {

		$popUp.addClass("show");
		clickedTopNav = true;


});


var submited = false;

$submitPop.click(function() {
	  if($("#name-pop-up").val() == '' || $("#phone-pop-up").val() == ''){
      		alert('Input can not be left blank');
   		}	else{
   			$popUp.removeClass("show");
			submited = true;

			var name = $("#name-pop-up").val(); 
			var phone = $("#phone-pop-up").val(); 
		$.post("src/js/callback.php",
   		{
 	   	nameDesk: name, 
 	   	phoneDesk: phone
 		},
 	 	function(res, status){
 	    var data = JSON.parse(res);
 	    console.log(data);
 	    console.log("Status: " + status);

 	});
 	
			
   		}	

});


$(".desk-pop-close").click(function (){

	$deskpopup.removeClass("show");
	$deskpopup.addClass("hide");
});



