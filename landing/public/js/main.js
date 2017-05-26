//ToneBase Landing Page JS
//Abhi Nayar - anayar2@gmail.com

$(document).ready(function(){
  /* On Newsletter form submission */
  $(".form-button").on("click", function(){
    $(".form-input, .form-button").hide();
    $("#mce-responses").removeClass("hidden");
  });
});
