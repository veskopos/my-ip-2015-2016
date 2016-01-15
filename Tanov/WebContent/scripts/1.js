$(document).ready(function() {
	"use strict"
	var ENDPOINT = "http://localhost:3000/expressions";
	
	$("#secondDiv input").val("Hello world");
	
	for(var i=1; i<6; i++){
		var elements = $("<li />").text(i);
		$(".count").append(elements);
	};

		var rowCount = $('#deleteMeTable td:nth-child(2)');
		$("#deleteMeTable tr").each(function(){
			var row = $(this);
			var button = $("<button />").text("Delete").click(function(){
				row.remove();	
			});
			button.appendTo(row.find(rowCount));
		});

		$.ajax(ENDPOINT , {
			method: "GET",
			dataType: "json"
		}).then(function(response) {
			for(var i = 0; i < response.length; i++){
				var posts = $("<tr />");
				/*
					<tr>
						<td>name</td>
						<td>text</td>
					</tr>
				*/
				
				var col1 = $("<td />");
					col1.text(response[i].name);
				
				var	col2 = $("<td />");	
					col2.text(response[i].text);
				
				var	col3 = $("<td />");	
					col3.text(response[i].difficulty);
					
				var	col4 = $("<td />");	
				var view = $("<button />").attr("id", "View");
					view.text("View");
				var increment = $("<button />").attr("id", "increment");
					increment.text("Increment");
					col4.append(view);	
					col4.append(increment);
					
					posts.append(col1);
					posts.append(col2);
					posts.append(col3);
					posts.append(col4);
				
				$("#resultsTable").append(posts);
			};
		});	

	$("#addButton").click(function(){
		$.ajax(ENDPOINT, {
			method: "POST",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify({
				difficulty: 5,
				text: $("#firstDiv input").val(),
				name: $("#secondDiv input").val()}),
			dataType: "json"
		})		
	});
});