$(document).ready(function() {
	"use strict"
	var ENDPOINT = "http://jsonplaceholder.typicode.com/posts";
	
	console.log($("#footer a.tu").attr("title"));
	console.log($("#col1 p").text());
	
	var newLi = $("<li />").attr("id", "menu-item-1234");
	newLi.append($("<a />").text("new button"));
	$("#menu-top-level-menu").append(newLi);
	
	var div = $("<div />").attr("id", "dynamiccontent");
	$("#footer").append(div);
	
	var input = $("<input />").attr("id", "textinput");
	$("#dynamiccontent").append(input);
	
	var button = $("<button />").attr("id", "addbutton");
	button.append($("<a />").text("Button"));
	$("#dynamiccontent").append(button);
	
	var ul = $("<ul />").attr("id", "posts");
	$("#dynamiccontent").append(ul);
	
	$("#menu-item-1234").click(function(){
		$("#col1").insertAfter("#col2");
		alert("hello world");
	});
	
	$.ajax(ENDPOINT , {
		method: "GET",
		dataType: "json"
	}).then(function(response) {
		for(var i = 0; i < 5; i++){
			var posts = $("<li />").text(response[i].body);
			$("#posts").append(posts);
		};
	});	
	
	function deleting(data){
		 $("#posts").append($("<li/>").text(data.body).append($("<button/>").text("X").click(function(){
				if(confirm("Deleting "+data.body+"!")){
					$.ajax(ENDPOINT + "/" + data.id, {
						method: "DELETE",
						dataType: "json",
						success: function() { 
							$("#posts li:contains("+data.body+")").remove();
							alert("Deleted!");
						}
					});
				};
		})));
	};
	
	var responseGet = 5;
	$("#addbutton").click(function(){
		if($("#textinput").val() === ""){
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
				$.ajax(ENDPOINT+"/"+(response.id-100+responseGet), {
					method: "GET",
					dataType: "json",
					success: function() { 
						responseGet++;
					}
				}).then(function(response1) { 
					deleting(response1);
				});
			});
		}
	});

	$("#posts").before($("<input id=userId></input>").change(function(){
		alert($("#userId").val());
		$.ajax(ENDPOINT + "?userId=" + $(this).val() , {
			method: "GET",
			dataType: "json"
		}).then(function(response){
			$("#posts").empty();
			$.each(response, function() {deleting(this);});
		});
	}));

	//alert("Under Construction!");
});