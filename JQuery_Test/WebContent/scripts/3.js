$(document).ready(function() {
	"use strict"
	// define function:
	$(".autoremove").click(function(){
		$(".autoremove").remove();
		//$("ul li:first-child").remove();
	});
	
	$("#create").click(function(){
		$("body").append("<div>Hello world</div>");	
	});
	/*
	$("#attribute").click(function(){
		var data = $(this).attr("data-value");
		$(this).text(data);
	});
	*/
	$("div button").click(function(){
		var data = $(this).attr("data-value");
		$(this).text(data);
	});
	
	/*$(".concatenate").click(function() {
		var buttons = $( ":button" );
		$( "div" ).val( function() {
			$("input").val(buttons.length);
			return buttons ;
		});
	});*/

	$(".concatenate").click(function() {
/*		var allButtons = $("ul li button");
		_.forEach(allButtons, function(value) {
			var next = $(value);
			var input = $("#input");
			input.val(next.text);
		});
	});	
	
	*/

		//var allButtons = $("button");
		//var next = $(allButtons.length);
		//$("#input").val(next);
		
		var buttons = null
			$("button").each(function() {
				buttons = $("button").text();
			}); 
		$("#input").val(buttons);
	});	
	/*
	// This works too 
		var sum ="";
		$(".concatenate").click(function() {
			var button = $("button");
			for(var i=0; i<button.length; i++){
				var next=$(button[i]).text();
				sum=sum+next;
			}
			sum=sum.slice(0,-1);
			$("input").val(sum);
		});
	-------------------------------------
	*/ 
		/*_.forEach(allButtons, function(value) {
			var next = $(value.text);
			$("#input").val(next);
			//return next ;
			//alert(next.text()); 
		});	
	}); */
	/*$(document).on('click', '.autofill-action', function() {
		$('.autofill-data').each(function() {
			var attr = $(this).attr('data-autofill-value');
			$(this).append(attr);
		});
	})*/
});