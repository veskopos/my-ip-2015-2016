$(document).ready(function() {
	"use strict"
	var ENDPOINT = "http://localhost:3000/users";

	$("#add").click(function() {
		$.ajax(ENDPOINT, {
			method: "POST",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify({name: $("input").val()}),
			dataType: "json"
		}).then(function(response) {
			$.ajax(ENDPOINT + "/" + (response.id), {
				method: "GET",
				dataType: "json"
			}).then(function(response1) {
				$("#userName").text(response1.name);
				$("#userId").text(response1.id);
			});
		});
	});
});