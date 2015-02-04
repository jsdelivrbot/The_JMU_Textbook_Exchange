/**
 *@author Colin Sheehan
 * 
 * This class sends POST requests from the forms 
 */

/**
 * This function sends loginPost info to the sever 
 */
function sendLoginPost() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var parameter = "username= "+username+" & password= "+password;
	
	var xmlhttp;
	if (window.XMLHttpRequest) {
  	// code for IE7+, Firefox, Chrome, Opera, Safari
  	xmlhttp=new XMLHttpRequest();
  	}
	else{
 	// code for IE6, IE5
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
    		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
   		}
	};
	
	xmlhttp.open("POST","ajax_info.txt",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(parameters);
}


/**
 * This function sends Buy search info to the sever 
 */
function sendBuyInfo() {
	var title = document.getElementById("Title").value;
	var author = document.getElementById("Author").value;
	var isbn = document.getElementById("ISBN").value;
	var course = document.getElementById("Course").value;

	var parameter = "title="+title+"&author="+author+"&isbn="+isbn+"&courseNo="+course;
	
	var xmlhttp;
	if (window.XMLHttpRequest) {
  	// code for IE7+, Firefox, Chrome, Opera, Safari
  	xmlhttp=new XMLHttpRequest();
  	}
	else{
 	// code for IE6, IE5
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
    		//document.getElementById("li_title").innerHTML=xmlhttp.responseText;
    		console.log(xmlhttp.responseText);
    		var response = JSON.parse(xmlhttp.responseText);
    		console.log(response);
    		document.getElementById("li_title").innerHTML= response.textbook[0].title;
    		document.getElementById("li_author").innerHTML= response.textbook[0].author;
    		//document.getElementById("lli_ISBN").innerHTML= "Null";
    		document.getElementById("li_Course").innerHTML= response.textbook[0].course;
    		document.getElementById("li_Price").innerHTML= response.textbook[0].price;

    		document.getElementById("li_title_2").innerHTML= response.textbook[1].title;
    		document.getElementById("li_author_2").innerHTML= response.textbook[1].author;
    		//document.getElementById("lli_ISBN_2").innerHTML= "Null";
    		document.getElementById("li_Course_2").innerHTML= response.textbook[1].course;
    		document.getElementById("li_Price_2").innerHTML= response.textbook[1].price;
   		}
	};

	xmlhttp.open("POST","http://localhost:8080/book/search",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(parameter);
	//var response = JSON.parse(xmlhttp.responseText);
	//console.log(xmlhttp.responseText);

	//document.getElementById("li_title").innerHTML= xmlhttp.responseText;
}

/**
 * This function sends create Post info to the sever 
 */
function sendSellInfo() {
	var title = document.getElementById("Title").value;
	var author = document.getElementById("Author").value;
	var edition = document.getElementById("Edition").value;
	var publisher = document.getElementById("Publisher").value;
	var year = document.getElementById("Year").value;
	var isbn = document.getElementById("ISBN").value;
	var course = document.getElementById("Course").value;
	var department = document.getElementById("Department").value;
	var price = document.getElementById("Price").value;

	var parameter = "title="+title+"&author="+author+"&edition=" +edition+"&publisher="+publisher+
		"&year="+year+"&isbn="+isbn+"&courseNo="+course+"&department="+department+"&price="+price; 
	
	var xmlhttp;
	
	if (window.XMLHttpRequest) {
  		// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
  	else{
  		// code for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
    		document.getElementById("createResponse").innerHTML=xmlhttp.responseText;
   		}
	};

	xmlhttp.open("POST","http://localhost:8080/book/create",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(parameter);
}