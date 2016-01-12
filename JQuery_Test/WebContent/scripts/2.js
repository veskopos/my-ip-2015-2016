$(document).ready(function() {
	"use strict"
	
	$(document).on('click', '#remove', function() {
		$('div').remove();
	});
	
	$(document).on('click', '#add', function() {
		var input = $('<input>');
		//var input = $("<input>Input</input>");
		$('span span').append(input);
		input.val('auto');
		//$(input).attr("value","auto");
	});
	
	$(document).on('click', '.autofill-action', function() {
		$('.autofill-data').each(function() {
			var attr = $(this).attr('data-autofill-value');
			$(this).append(attr);
		});
	});
	/* This works too
	$(".autofill-action").click(function() {
		var data = $(".autofill-data");
		for(var i=0; i<data.length; i++){
			var text = $(data[i]).attr("data-autofill-value");
			$(data[i]).text(text);
		}
	}); */
});