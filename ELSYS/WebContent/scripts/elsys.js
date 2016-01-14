$(document).ready(function() {
	"use strict"
			
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
	
	//alert("Under Construction!");
});