//alert email button
function email() {
  alert("El correo fue enviado correctamente...");
}
//tooltip activate
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

 // smooth scroll
 $(document).ready(function(){
$("a").click(function(){
 var go = this.hash

  $("html, body").animate(
    {
      scrolltop: $(go).offset().top, -70} 800)
  

    
//Desaparecer y aparecer card-body
$("#card1").click(function() {
  $("#crb1").toggle("slow", function() {
    // Animation complete.
  });
});

$("#card2").click(function() {
  $("#crb2").toggle("slow", function() {
    // Animation complete.
  });
});

$("#card3").click(function() {
  $("#crb3").toggle("slow", function() {
    // Animation complete.
  });
});
