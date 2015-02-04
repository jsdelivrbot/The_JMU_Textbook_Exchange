/**
 * @author Colin Sheehan
 *
 * This is a class that reads the buy
 * search values
 */


/**
 *The initial function that loads on startup
 *  
 */
function init(){
	registerEventHandlers();	
}

/**
 *The event handlers for the web app 
 */
function registerEventHandlers(){
	var searchButtton;	
	
	searchButton = document.getElementById("SearchButton");
    searchButton.addEventListener("click", function() { 
    validateBuyInfo();}, true);	
}

/**
 *When passed a name of the DOM Element it returns its value
 *  
 * @param {Object} name - the name of the dom element
 */
function getInput(name){
	var output ="";
	output = document.getElementById(name).value;
	
	if (output == null){
		output ="";
	}
	return output;
}

/**
 *This is a function that adds to the global array when a new password and username is created
 */
function validateBuyInfo(){
	var title = getInput("Title");
	var author = getInput("Author");
	var isbn = getInput("ISBN");
	var course = getInput("Course");
	
	if (title != "" || author != "" || isbn != "" || course != ""){
		sendBuyInfo();		
	}
	
	else {
		window.alert("Please make sure at least one field is filled");
	}
}