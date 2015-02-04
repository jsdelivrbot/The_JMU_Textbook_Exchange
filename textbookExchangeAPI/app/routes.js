//Load the user model
var User = require('../app/Models/users.js');
var Textbook = require('../app/Models/textbooks.js');
var Course = require('../app/Models/courses.js');

module.exports = function(app, passport) {

	//CORS Middleware
	app.use(function(req, res, next) {

		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	//Login Route
	app.post('/login', function(req, res, next) {

	 	passport.authenticate('local-login', function(err, user, info) {
			if (err) {
			      return next(err); // will generate a 500 error
			    }
			    // Generate a JSON response reflecting authentication status
			    if (! user) {
			      return res.send({ success : false, message : 'authentication failed' });
			    }
			    return res.send({ success : true, message : 'authentication succeeded' });
			  })(req, res, next);
	});

	//Sign-Up Route
	app.post('/signup', function(req, res, next) {

		var username = req.body.username;
		var password = req.body.password;
		var phone = req.body.phone;
		var email = req.body.email;

		res.send({ message: 'Signup started'});
		
		var user = new User();
		user.username = this.username;
		user.password = this.password;
		user.phone = this.phone;
		user.email = this.email;

		var text = User.username;
		res.send({ meassage: text});

		user.save(function (err, User) {
  			if (err) return console.error(err);

		});


		// passport.authenticate('local-signup', function(err, user, info) {
		// 	if (err) {
		// 	      return next(err); // will generate a 500 error
		// 	    }
		// 	    // Generate a JSON response reflecting authentication status
		// 	    if (! user) {
		// 	      return res.send({ success : false, message : 'account creation failed' });
		// 	    }
		// 	    return res.send({ success : true, message : 'account creation succeeded' });
		// 	  })(req, res, next);
	});

	app.post('/logout', function(req, res) {

		res.json({ message: 'logout'});
	});

	//MyPosts Route
	app.post('/book/myposts', function(req, res) {

		res.json({ message: 'myposts'});

	});


	//Search textbook route
	app.post('/book/search', function(req, res) {
		var textbook = new Textbook();
		var title = req.body.title;
		var author = req.body.author;
		var major = req.body.department;
		var courseNo = req.body.courseNo;
		var isbn = req.body.isbn;
		var query = null;

		//Values for textbook object
		textbook.title = req.body.title;  
		textbook.author = req.body.author;;
		textbook.price = req.body.price;
		textbook.course = req.body.department + "_" + req.body.courseNo;
		textbook.isbn = req.body.isbn; 

		// if (textbook.title != null){
		// 	query += Textbook.where('title').equals(textbook.title);
		// };

		// if (textbook.author != null){
		// 	query += Textbook.where('author').equals(textbook.author);
		// };

		// console.log(String(query));
		//Find Functionality - Note: Queries are part of the MODEL not the textbook object. Unlike saves which are saving the object.

		Textbook.find({}).where('title').equals(textbook.title).exec(function(err, result) {
			if (err)
				res.send(err);

			console.log("returning data");
			console.log(result);

			res.json({ "textbook":result });
			
		});

		//var text = 'Posted the ' + title + " " +author;
		//res.json({ message: 'hooray! welcome to our api!' });

		// returnedObj = textbook.isbnSearch();
		// console.log(textbook.isbnSearch());
		// res.json(textbook.isbnSearch());

	});

	//Add new textbook route
	app.post('/book/create', function(req,res) { 
//---------------------------------------------------This shit works-----------------------------------------------
		var title = req.body.title;
		var author = req.body.author;
		var major = req.body.department;
		var courseNo = req.body.courseNo;
		var isbn = req.body.isbn;

		//Textbook object based in the textbook schema
		var textbook = new Textbook(); 		
		textbook.title = req.body.title;  
		textbook.author = req.body.author;
		textbook.edition = req.body.edition;
		textbook.publisher = req.body.publisher;
		textbook.yearPublished = req.body.year;
		textbook.price = req.body.price;
		textbook.course = req.body.department + "_" + req.body.courseNo;
		textbook.isbn10 = req.body.isbn;

		//Course object based on courses schema
		var course = new Course();
		course.course_title = req.body.department + "_" +req.body.courseNo;
		course.department = req.body.department;
		course.course_no = req.body.courseNo;

		//creates a new course in the DB if it exists
		if (course.ifCourseExists == true) {

			course.save(function(err) {
				if (err)
					res.send(err);
			});


		}

		// save the textbook and check for errors
		textbook.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'textbook created!' });
		});

		var text = 'Textbook added: ' + title;
		res.json({message: text});

	});




};

function isLoggedIn(req, res, next) {

	//if user us authenticated in the session carry on
	if (req.isAuthenticated())
		return next();

	res.redirect('/')

}