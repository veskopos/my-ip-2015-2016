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
			$("#posts").append("<li>"+ response[i].body +"</li>");
		};
	});
	
	$("#addbutton").click(function(){
		if($("#textinput").val() == 0){
			alert("you must enter text")
		};
	});
	
	//alert("Under Construction!");
});