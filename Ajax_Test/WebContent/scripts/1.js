$(document).ready(function() {
	"use strict"
	var ENDPOINT = "http://localhost:3000/cars";

	$.ajax(ENDPOINT , {
		method: "GET",
		dataType: "json"
	}).then(function(response1) {
		for(var i = 0; i < response1.length; i++){
			$("#result").append("<tr><td>" + response1[i].model +"</td><td>" 
			+ "<button id=\ " + response1[i].id + ">Delete</button>" +"</td></tr>");	
		};			
	});		
	
	$(document).on('click', 'button', function() {
		var idCar = $(this).attr("id");
		 $.ajax(ENDPOINT + "/" + idCar, {
			method: "DELETE",
			dataType: "json"
		}).then(function(response){
			alert("car was delated")
		});
	});
});