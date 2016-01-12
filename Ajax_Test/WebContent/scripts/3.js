$(document).ready(function() {
	"use strict"
	//var i = 0;
	var ENDPOINT = "http://localhost:3000/users";
	function taskEndpoint(taskId) {
		return ENDPOINT + "/" + taskId;
	}
	
	function listTasks() {
		return $.ajax(ENDPOINT, {
			method: "GET",
			dataType: "json"
		});
	}
	
	/*function readTask(taskId) {
		return $.ajax(taskEndpoint(taskId), {
			method: "GET",
			dataType: "json"
		});
	}*/
	
	
	function reloadTasks() {
		listTasks().then(function(response) {
			function addTaskToList(task) {
				var newItem = $("<li />");
				newItem.text(task.id);
				newItem.text(task.name);
				//newItem.addClass("list-group-item");
				//newItem.attr("data-task-id", task.id);
				$("div").append(newItem);
			}
			$("div").html("");
			_.forEach(response, addTaskToList);
			$("input").val("");
		});
	}
	
$("#add1").click(function(){

		$.ajax(ENDPOINT, {
			method: "POST",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify({
				name: $("input").val()
			}),
			dataType: "json",
			success: function() {
				reloadTasks();
			}
		});
	});
//reloadTasks();


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

	})
	
});

});