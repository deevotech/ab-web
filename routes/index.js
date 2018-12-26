let demoController=require('../controller/demoController');
let url=require('url');
let fs = require('fs');

module.exports = function(app, passport){


	/////////////////////////////////////////////////////////////////////////////

	app.get('/',function(req, res) {
		res.render('default/custom/user/login-v2');
	});

	/////////////////////////////////////////////////////////////////////////////


	app.get('/demo/brand-aside',function(req, res) {
		res.render('default/dashboards/brand_aside',{id:'../brand_aside/layout'});
	});

	app.get('/demo/brand-aside/*',function(req, res) {

		var path = url.parse(req.url);
		var text = '/demo/brand-aside/';
		var dir = path.pathname.replace(text,'./views/default/') + '.ejs';
		var send = path.pathname.replace(text,'default/') + '.ejs';
		var layout='';

		if(path.pathname.split('/').length == 7){
			layout='../../../brand_aside/layout';
		}else if(path.pathname.split('/').length == 6){
			layout='../../brand_aside/layout';
		}else{
			layout='../brand_aside/layout';
		}


		fs.exists(dir,function(e){
			if(e==true){
				res.render(send,{id:layout});
			}else{
				res.render('default/custom/error/404-v4',{id:'../../brand_aside/layout'});
			}
		});
	});

	/////////////////////////////////////////////////////////////////////////////

	app.get('/demo/brand-header',function(req, res) {
		res.render('default/dashboards/brand_header',{id:'../brand_header/layout'});
	});

	app.get('/demo/brand-header/*',function(req, res) {

		var path = url.parse(req.url);
		var text = '/demo/brand-header/';
		var dir = path.pathname.replace(text,'./views/default/') + '.ejs';
		var send = path.pathname.replace(text,'default/') + '.ejs';
		var layout='';

		if(path.pathname.split('/').length == 7){
			layout='../../../brand_header/layout';
		}else if(path.pathname.split('/').length == 6){
			layout='../../brand_header/layout';
		}else{
			layout='../brand_header/layout';
		}


		fs.exists(dir,function(e){
			if(e==true){
				res.render(send,{id:layout});
			}else{
				res.render('default/custom/error/404-v4',{id:'../../brand_header/layout'});
			}
		});
	});

	/////////////////////////////////////////////////////////////////////////////

	app.get('/demo/light-aside',function(req, res) {
		res.render('default/dashboards/light_aside',{id:'../light_aside/layout'});
	});

	app.get('/demo/light-aside/*',function(req, res) {

		var path = url.parse(req.url);
		var text = '/demo/light-aside/';
		var dir = path.pathname.replace(text,'./views/default/') + '.ejs';
		var send = path.pathname.replace(text,'default/') + '.ejs';
		var layout='';

		if(path.pathname.split('/').length == 7){
			layout='../../../light_aside/layout';
		}else if(path.pathname.split('/').length == 6){
			layout='../../light_aside/layout';
		}else{
			layout='../light_aside/layout';
		}


		fs.exists(dir,function(e){
			if(e==true){
				res.render(send,{id:layout});
			}else{
				res.render('default/custom/error/404-v4',{id:'../../brand_header/layout'});
			}
		});
	});

	/////////////////////////////////////////////////////////////////////////////

	app.get('/demo/navy-aside',function(req, res) {
		res.render('default/dashboards/navy_aside',{id:'../navy_aside/layout'});
	});

	app.get('/demo/navy-aside/*',function(req, res) {

		var path = url.parse(req.url);
		var text = '/demo/navy-aside/';
		var dir = path.pathname.replace(text,'./views/default/') + '.ejs';
		var send = path.pathname.replace(text,'default/') + '.ejs';
		var layout='';

		if(path.pathname.split('/').length == 7){
			layout='../../../navy_aside/layout';
		}else if(path.pathname.split('/').length == 6){
			layout='../../navy_aside/layout';
		}else{
			layout='../navy_aside/layout';
		}


		fs.exists(dir,function(e){
			if(e==true){
				res.render(send,{id:layout});
			}else{
				res.render('default/custom/error/404-v4',{id:'../../brand_header/layout'});
			}
		});
	});

	/////////////////////////////////////////////////////////////////////////////

	app.get('/demo/navy-header',function(req, res) {
		res.render('default/dashboards/navy_header',{id:'../navy_header/layout'});
	});

	app.get('/demo/navy-header/*',function(req, res) {

		var path = url.parse(req.url);
		var text = '/demo/navy-header/';
		var dir = path.pathname.replace(text,'./views/default/') + '.ejs';
		var send = path.pathname.replace(text,'default/') + '.ejs';
		var layout='';

		if(path.pathname.split('/').length == 7){
			layout='../../../navy_header/layout';
		}else if(path.pathname.split('/').length == 6){
			layout='../../navy_header/layout';
		}else{
			layout='../navy_header/layout';
		}


		fs.exists(dir,function(e){
			if(e==true){
				res.render(send,{id:layout});
			}else{
				res.render('default/custom/error/404-v4',{id:'../../brand_header/layout'});
			}
		});
	});

}

	// / As with any middleware it is quintessential to call next()
	// / if the user is authenticated

	var isAuthenticated = function (req, res, next) {
	  if (req.isAuthenticated())
	    return next();
	  res.redirect('/login');
	}