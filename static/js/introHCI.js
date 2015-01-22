'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Please wait...");
		$(".jumbotron p").toggleClass("active");
		$("a.thumbnail").click(projectClick);
		$('#submitBtn').click(updateProject);
	});
}

function updateProject(e) {
	var projectID = $('#project').val();
	console.log(projectID);
	$(projectID).animate({
		width: $('#width').val()
	});

	var newText = $('#description').val();
	console.log(newText);
	$(projectID + " .project-description").text(newText);
}

function projectClick(e) {
	console.log("Project clicked");
	//prevent the page from reloading
	e.preventDefault();
	console.log(this);

	// In an event listener, $(this) is the element that fired the event
	var projectTitle = $(this).find("p").text();
	console.log(projectTitle);
	var jumbotronHeader = $(".jumbotron h1");
	console.log("Number of matching items: " + jumbotronHeader.length);
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	var media = $(containingProject).find("img.img");
	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		$(description).fadeToggle();
		$(media).fadeToggle();
	} 
};	


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
