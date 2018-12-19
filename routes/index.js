let demoController=require('../controller/demoController');

module.exports = function(app, passport){

	app.get('/demo/brand-header',function(req, res) {

		res.render('default/child-theme/content');

	});



}
	// As with any middleware it is quintessential to call next()
	// if the user is authenticated
	var isAuthenticated = function (req, res, next) {
	  if (req.isAuthenticated())
	    return next();
	  res.redirect('/login');
	}

