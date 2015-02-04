/**
 *@author Ross Ellingworth
 * 
 * This is a class that reads in the values 
 * from the HTML Document and compares it to 
 * known values (ie: Password, and Username). 
 */

var usernamesArray = ["ellingrr", "sheehacm"];
var passwordsArray = ["same123", "stuff"];

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
	var login_button;
	var signUp_button;
	
	login_button = document.getElementById("login_button");
    login_button.addEventListener("click", function() { 
    compareLoginInfo();}, true);
    
    signUp_button = document.getElementById("signUp_button");
    signUp_button.addEventListener("click", function() { 
    createNewInfo();}, true);	
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
 *Compares the values in stored in the arrays to inputs 
 */
function compareLoginInfo(){	
	var username = getInput("username");
	var password = getInput("password");
	var userSame = false;
	var passSame = false;
	var location = 0;
	
	//Compares the input to values in the array
	for (var i = 0; i < usernamesArray.length; i++){	
		if(usernamesArray[i] == username){
			userSame = true;
			location = i;
		}
	}
	
	if(passwordsArray[location] == password){	
			passSame = true;
		}
	
	//If the passwords are the same then change the page
	if (userSame == true && passSame == true){
		document.location.href = "loginSuccess.html";
		sendLoginPost();
	}
	
	else if (userSame == false || passSame == false){
		window.alert("You have put in either an incorrect password or username!");
	}
}

/**
 *This is a function that adds to the global array when a new password and username is created
 */
function createNewInfo(){
	var username = getInput("username");
	var password = getInput("password");
	var location = usernamesArray.length;

	if (username != "" && password != ""){		
		//store the values
		usernamesArray[location] = username;
		passwordsArray[location] = password;
		
		//wipe text fields and prompt login
		window.alert("Information saved! PLease Login.");
		
		document.getElementById("username").value ="";
		document.getElementById("password").value ="";
		sendLoginPost();	
	}
	
	else {
		window.alert("Please make sure all fields are filled correctly!");
	}
}
