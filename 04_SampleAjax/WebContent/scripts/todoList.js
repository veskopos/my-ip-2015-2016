$(document).ready(function() {
	"use strict";
	var ENDPOINT = "http://localhost:3000/tasks";
	function taskEndpoint(taskId) {
		return ENDPOINT + "/" + taskId;
	}

	function showPanel(panelName) {
		var ALL_PANELS = ["emptyPanel", "readPanel", "updatePanel", "createPanel"];
		_.forEach(ALL_PANELS, function(nextValue) {
			$("#"+nextValue).hide();
		});
		$("#"+panelName).show();
	}

	function listTasks() {
		return $.ajax(ENDPOINT, {
			method: "GET",
			dataType: "json"
		});
	}
	
	function readTask(taskId) {
		return $.ajax(taskEndpoint(taskId), {
			method: "GET",
			dataType: "json"
		});
	}
	
	function showTaskView(task) {
		$("#readPanel .task-title").text(task.title);
		$("#readPanel .task-description").text(task.description);
		showPanel("readPanel");
	}
	
	function reloadTasks() {
		listTasks().then(function(response) {
			function addTaskToList(task) {
				var newItem = $("<li />");
				newItem.text(task.title);
				newItem.addClass("list-group-item");
				newItem.attr("data-task-id", task.id);
				$("#tasksList").append(newItem);
			}
			$("#tasksList").html("");
			_.forEach(response, addTaskToList);
		});
	}
	
	function Form(task) {
 		$("#updatePanel input").val(task.title);
 		$("#updatePanel textarea").val(task.description);
 	}
 	
 	function Edited(taskId) {
 		var task = {
 			title: $("#updatePanel input").val(),
 			description: $("#updatePanel textarea").val()
 		}
 		
 		$.ajax(taskEndpoint(taskId), {
 			method: "PUT",
 			contentType: "application/json; charset=utf-8",
 			data: JSON.stringify(task),
 			dataType: "json"
 		});
 	}

	function attachHandlers() {
		var taskId = null;
		$(document).on("click", "#tasksList [data-task-id]", function() {
			taskId = $(this).attr("data-task-id");
			readTask(taskId).then(showTaskView);
		});
		
		$(".task-action-cancel").click(function() {
			showPanel("emptyPanel");
		});
		
		//----------Edit function-------------------
		$("#readPanel .task-action-ok").click(function() {
 			showPanel("updatePanel");
 			readTask(taskId).then(Form);
 		});
  		
  		$("#updatePanel .task-action-ok").click(function() {
  			Edited(taskId);
  			window.location.reload();
		});
	}
	
	attachHandlers();
	reloadTasks();
});