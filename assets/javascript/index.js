$(document).ready(function() {

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  4500);

$(document).ready(function() {
    $("ul li a").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
});

});