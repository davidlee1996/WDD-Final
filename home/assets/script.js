$(document).ready(function() {

$(".title").click(function() {
	$(".title").css("color","rgb(104,104,104) ");
});

$("#content_title").text("Season Finale");

$("#banner").hover(function() {
	$("#banner").stop().animate({ opacity: 0.5 });
}, function() {
	$("#banner").stop().animate({ opacity: 1 });
});

$(".points").hover(function() {
	$(this).append($("<span> (GP:7)</span>"));
}, function() {
	$(this).find("span:last").remove();
});

$(".club").hover(function() {
	$(this).prepend($("<span>*</span>"));
}, function() {
	$(this).find("span:first").remove();
});

});
