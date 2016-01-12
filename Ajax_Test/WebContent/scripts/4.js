$(document).ready(function() {
	"use strict"
	var ENDPOINT = "http://localhost:3000/pois";
	
	$("#update").click(function(){
 		var task = {
 			label: $("#label").val(),
 			id: $("#id").val()
 		}
 		
 		$.ajax(ENDPOINT + "/" + $("#id").val(), {
 			method: "PUT",
 			contentType: "application/json; charset=utf-8",
 			data: JSON.stringify(task),
 			dataType: "json"
 		}).then(function(response) {
 			$.ajax(ENDPOINT + "/" + (response.id), {
 				method: "GET",
 				dataType: "json"
 			}).then(function(response1) {
 				$("#poiLabel").text(response1.label);
 				$("#poiId").text(response1.id);
 			});
 		});
	});
});