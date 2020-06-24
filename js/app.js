
// Contact Form Validation

/* function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  } */


 // Modal

 /* $(document).ready(function(){
  $("body").one('mouseleave' , function(){
    $("#exitpop-out").show();
  });

  $('.close').click(function(){
    $("#exitpop-out").hide();
  });

}); */

// Modal run per user session

$(document).ready(function() {
  var cookieValue = $.cookie("user-session");

  if (!cookieValue || !cookieValue.length) {
    setTimeout(function() {
      $("body").one("mouseleave" , function(){
        $("#exitpop-out").show();
      });
      $.cookie("user-session", "1");
    }, 3000);

    $(".close").click(function(){
      $("#exitpop-out").hide();
    });
  }
});


// Onlick Smooth Animation Scroll to Video

/* $("#intro-video-btn").click(function() {
  $('html, body').animate({
      scrollTop: $("#intro-video").offset().top
  }, 1000);
}); */

// Pop out Video onclick
$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true
	});
});