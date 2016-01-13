$(document).ready(function() {
	"use strict"
	var ENDPOINT = "http://localhost:3000/pois";

	$("#search").click(function(){
		$.ajax(ENDPOINT + "/?type=" + $("#filter").val(), {
			method: "GET",
			dataType: "json"
		}).then(function(response1) {
			for(var i = 0; i < response1.length; i++){
				$("#result").append("<tr><td>" + response1[i].type +"</td><td>" + response1[i].name +"</td></tr>");
			};
			console.log(response1);
		});
	});
});