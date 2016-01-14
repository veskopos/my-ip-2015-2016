$(document).ready(function() {
	"use strict"
	var ENDPOINT = "http://jsonplaceholder.typicode.com/posts";
	
	console.log($("#footer a.tu").attr("title"));
	console.log($("#col1 p").text());
	$("#menu-top-level-menu").append("<li id=menu-item-1234><a href = #>new button");
	$("#footer").append("<div id = dynamiccontent>");
	$("#dynamiccontent").append("<input id=textinput>");
	$("#dynamiccontent").append("<button id=addbutton>Button</button>");
	$("#dynamiccontent").append("<ul id=posts>");
	$("#menu-item-1234").click(function(){
		$(".inscreen div:nth-child(2)").after($(".inscreen div:nth-child(1)"));
		alert("hello world");
	});
	
	$.ajax(ENDPOINT , {
		method: "GET",
		dataType: "json"
	}).then(function(response) {
		for(var i = 0; i < 5; i++){
			$("#posts").append("<li>"+ response[i].body +"</li>")
			.append("<button id=\ " + response[i].id + " class=delete" + ">Delete</button>");
		};
		$(".delete").click(function() {
			if(confirm("Deleting "+response[i].body+"!")){
				var idButton = $(this).attr("id");
				$.ajax(ENDPOINT + "/" + idButton, {
					method: "DELETE",
					dataType: "json"
				}).then(function(response){
					alert("Deleted!");
				});		
			};
		});
	});
	
	$("#addbutton").click(function(){
		if($("#textinput").val() == 0){
			alert("you must enter text")
		}else{
			$.ajax(ENDPOINT, {
				method: "POST",
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify({
					userId: 10,
					title: "POST",
					body: $("#textinput").val()}),
				dataType: "json"
			}).then(function(response) {
				$.ajax(ENDPOINT + "/" + (response.id), {
					method: "GET",
					dataType: "json"
				}).then(function(response1) {
					$("#posts").append("<li>"+ response1.body +"</li>");
				});
			});
		};
	});
	
	$("#posts").before("<input />");
	
	//alert("Under Construction!");
});