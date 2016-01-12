$(document).ready(function() {
	"use strict"
	
	var buttonId = 0;
	var rows = $("tbody tr");
	
	for(var i=0; i<rows.length; i++){
		$(rows[i]).append("<button id=\"button"+i+"\">Button</button>");		
	}

	$("#button0").click(function(){
		$("#name1").remove();
	});
	
	$("#button1").click(function(){
		var Name = $(".filter input").val();
		$(".filter").attr("data-filter-val",Name);
	});
	
	$("#button2").click(function() {
		var nums = $(".row-number");
		for(var i=0; i<nums.length; i++){
			$(nums[i]).append(i);
		}
	})
});