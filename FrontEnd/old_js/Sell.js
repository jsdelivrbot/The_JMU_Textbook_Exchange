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
	
	searchButton = document.getElementById("createPost_Button");
    searchButton.addEventListener("click", function() { 
    validateSellInfo();}, true);	
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
function validateSellInfo(){
	var title = getInput("Title");
	var author = getInput("Author");
	var isbn = getInput("ISBN");
	var Class = getInput("Course");
	var major = getInput("Department");
	var price = getInput("Price");
	
	if (isbn != "" && price != ""){
		sendSellInfo();		
	}
	
	else {
		window.alert("Please make sure ISBN and Price are provided");
	}
}