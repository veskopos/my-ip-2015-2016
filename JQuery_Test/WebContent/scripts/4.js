$(document).ready(function() {
	"use strict"
	
/*$(".read-more").click(function() {
	var data = null;
	data = $(this).attr("data-more");
	$(this).text(data);
	});	
	*/
var buttons = $("p button");
for(var i=0; i<buttons.length; i++){
	var txt = $(buttons[i]).attr("data-more");
	$(buttons[i]).click(function(){
		$(this).text(txt);
	});
}

/*
$("#add").click(function() {
	var input = $('<input>');
	$('.user-content').append(input);
	input.val("#content");
	$("#content").remove();
});
*/

$("#add").click(function() {
	var content = $('#content').val();
	
	var div = $('<div>').text(content);
	//newdiv=("<div>"+content+"</div>");
	$('.user-content').append(div);
	$('#content').remove();
});
});