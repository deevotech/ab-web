let demoController=require('../controller/demoController');
let url=require('url');
let fs = require('fs');

module.exports = function(app, passport){


	/////////////////////////////////////////////////////////////////////////////

	// app.get('/*',function(req, res) {
	// 	res.render('default/custom/error/404-v4',{id:'../../brand_aside/layout'});
	// });

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

	/////////////////////////////////////////////////////////////////////////////

	// app.get('/demo/brand-header/components/base/alert',function(req, res) {
	// 	res.render('default/components/base/alert',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/accordions',function(req, res) {
	// 	res.render('default/components/base/accordions',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/badge',function(req, res) {
	// 	res.render('default/components/base/badge',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/breadcrumb',function(req, res) {
	// 	res.render('default/components/base/breadcrumb',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/button-group',function(req, res) {
	// 	res.render('default/components/base/button-group',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/buttons',function(req, res) {
	// 	res.render('default/components/base/buttons',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/card',function(req, res) {
	// 	res.render('default/components/base/card',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/collapse',function(req, res) {
	// 	res.render('default/components/base/collapse',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/collapse',function(req, res) {
	// 	res.render('default/components/base/collapse',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/dropdown',function(req, res) {
	// 	res.render('default/components/base/dropdown',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/list-group',function(req, res) {
	// 	res.render('default/components/base/list-group',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/modal',function(req, res) {
	// 	res.render('default/components/base/modal',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/navs',function(req, res) {
	// 	res.render('default/components/base/navs',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/tabs/line',function(req, res) {
	// 	res.render('default/components/base/tabs/line',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/tabs/button',function(req, res) {
	// 	res.render('default/components/base/tabs/button',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/pagination',function(req, res) {
	// 	res.render('default/components/base/pagination',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/popovers',function(req, res) {
	// 	res.render('default/components/base/popovers',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/progress',function(req, res) {
	// 	res.render('default/components/base/progress',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/table',function(req, res) {
	// 	res.render('default/components/base/table',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/base/tooltips',function(req, res) {
	// 	res.render('default/components/base/tooltips',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/calendar/agenda-week',function(req, res) {
	// 	res.render('default/components/calendar/agenda-week',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/calendar/basic',function(req, res) {
	// 	res.render('default/components/calendar/basic',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/calendar/external',function(req, res) {
	// 	res.render('default/components/calendar/external',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/calendar/list-view',function(req, res) {
	// 	res.render('default/components/calendar/list-view',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/calendar/rendering',function(req, res) {
	// 	res.render('default/components/calendar/rendering',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/calendar/google',function(req, res) {
	// 	res.render('default/components/calendar/google',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/charts/chart-js',function(req, res) {
	// 	res.render('default/components/charts/chart-js',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/charts/flotcharts',function(req, res) {
	// 	res.render('default/components/charts/flotcharts',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/charts/google-charts',function(req, res) {
	// 	res.render('default/components/charts/google-charts',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/charts/morris-charts',function(req, res) {
	// 	res.render('default/components/charts/morris-charts',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/custom/colors',function(req, res) {
	// 	res.render('default/components/custom/colors',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/custom/head',function(req, res) {
	// 	res.render('default/components/custom/head',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/custom/iconbox',function(req, res) {
	// 	res.render('default/components/custom/iconbox',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/custom/lists',function(req, res) {
	// 	res.render('default/components/custom/lists',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/custom/navs',function(req, res) {
	// 	res.render('default/components/custom/navs',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/custom/notifications',function(req, res) {
	// 	res.render('default/components/custom/notifications',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/custom/spinners',function(req, res) {
	// 	res.render('default/components/custom/spinners',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/custom/timeline',function(req, res) {
	// 	res.render('default/components/custom/timeline',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/custom/typography',function(req, res) {
	// 	res.render('default/components/custom/typography',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/advanced/basic',function(req, res) {
	// 	res.render('default/components/datatables/advanced/basic',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/advanced/column-rendering',function(req, res) {
	// 	res.render('default/components/datatables/advanced/column-rendering',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/advanced/column-visibility',function(req, res) {
	// 	res.render('default/components/datatables/advanced/column-visibility',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/advanced/footer-callback',function(req, res) {
	// 	res.render('default/components/datatables/advanced/footer-callback',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/advanced/headers',function(req, res) {
	// 	res.render('default/components/datatables/advanced/headers',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/advanced/multiple-controls',function(req, res) {
	// 	res.render('default/components/datatables/advanced/multiple-controls',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/advanced/paginations',function(req, res) {
	// 	res.render('default/components/datatables/advanced/paginations',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/advanced/row-callback',function(req, res) {
	// 	res.render('default/components/datatables/advanced/row-callback',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/advanced/row-grouping',function(req, res) {
	// 	res.render('default/components/datatables/advanced/row-grouping',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/advanced/scrollable',function(req, res) {
	// 	res.render('default/components/datatables/advanced/scrollable',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/basic/basic',function(req, res) {
	// 	res.render('default/components/datatables/basic/basic',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/basic/headers',function(req, res) {
	// 	res.render('default/components/datatables/basic/headers',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/basic/paginations',function(req, res) {
	// 	res.render('default/components/datatables/basic/paginations',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/basic/scrollable',function(req, res) {
	// 	res.render('default/components/datatables/basic/scrollable',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/data-sources/ajax-client-side',function(req, res) {
	// 	res.render('default/components/datatables/data-sources/ajax-client-side',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/data-sources/ajax-server-side',function(req, res) {
	// 	res.render('default/components/datatables/data-sources/ajax-server-side',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/data-sources/html',function(req, res) {
	// 	res.render('default/components/datatables/data-sources/html',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/data-sources/javascript',function(req, res) {
	// 	res.render('default/components/datatables/data-sources/javascript',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/extensions/buttons',function(req, res) {
	// 	res.render('default/components/datatables/extensions/buttons',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/extensions/colreorder',function(req, res) {
	// 	res.render('default/components/datatables/extensions/colreorder',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/extensions/keytable',function(req, res) {
	// 	res.render('default/components/datatables/extensions/keytable',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/extensions/responsive',function(req, res) {
	// 	res.render('default/components/datatables/extensions/responsive',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/extensions/rowgroup',function(req, res) {
	// 	res.render('default/components/datatables/extensions/rowgroup',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/extensions/rowreorder',function(req, res) {
	// 	res.render('default/components/datatables/extensions/rowreorder',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/extensions/scroller',function(req, res) {
	// 	res.render('default/components/datatables/extensions/scroller',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/extensions/select',function(req, res) {
	// 	res.render('default/components/datatables/extensions/select',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/search-options/advanced-search',function(req, res) {
	// 	res.render('default/components/datatables/search-options/advanced-search',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/datatables/search-options/column-search',function(req, res) {
	// 	res.render('default/components/datatables/search-options/column-search',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/extended/blockui',function(req, res) {
	// 	res.render('default/components/extended/blockui',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/extended/idle-timer',function(req, res) {
	// 	res.render('default/components/extended/idle-timer',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/extended/scroll',function(req, res) {
	// 	res.render('default/components/extended/scroll',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/extended/session-timeout',function(req, res) {
	// 	res.render('default/components/extended/session-timeout',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/extended/sticky-panels',function(req, res) {
	// 	res.render('default/components/extended/sticky-panels',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/extended/sweetalert2',function(req, res) {
	// 	res.render('default/components/extended/sweetalert2',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/extended/toastr',function(req, res) {
	// 	res.render('default/components/extended/toastr',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/icons/flaticon',function(req, res) {
	// 	res.render('default/components/icons/flaticon',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/icons/fontawesome5',function(req, res) {
	// 	res.render('default/components/icons/fontawesome5',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/icons/lineawesome',function(req, res) {
	// 	res.render('default/components/icons/lineawesome',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/icons/socicons',function(req, res) {
	// 	res.render('default/components/icons/socicons',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/advanced',function(req, res) {
	// 	res.render('default/components/keen-datatable/advanced',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/advanced/column-rendering',function(req, res) {
	// 	res.render('default/components/keen-datatable/advanced/column-rendering',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/advanced/column-width',function(req, res) {
	// 	res.render('default/components/keen-datatable/advanced/column-width',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/advanced/record-selection',function(req, res) {
	// 	res.render('default/components/keen-datatable/advanced/record-selection',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/advanced/row-details',function(req, res) {
	// 	res.render('default/components/keen-datatable/advanced/row-details',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/advanced/modal',function(req, res) {
	// 	res.render('default/components/keen-datatable/advanced/modal',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/api/methods',function(req, res) {
	// 	res.render('default/components/keen-datatable/api/api-method',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/api/events',function(req, res) {
	// 	res.render('default/components/keen-datatable/api/events',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/base/data-ajax',function(req, res) {
	// 	res.render('default/components/keen-datatable/base/data-ajax',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/base/data-json',function(req, res) {
	// 	res.render('default/components/keen-datatable/base/data-json',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/base/data-local',function(req, res) {
	// 	res.render('default/components/keen-datatable/base/data-local',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/base/local-sort',function(req, res) {
	// 	res.render('default/components/keen-datatable/base/local-sort',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/base/translation',function(req, res) {
	// 	res.render('default/components/keen-datatable/base/translation',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/base/html-table',function(req, res) {
	// 	res.render('default/components/keen-datatable/base/html-table',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/child/data-local',function(req, res) {
	// 	res.render('default/components/keen-datatable/child_database/local-data-child',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/child/data-ajax',function(req, res) {
	// 	res.render('default/components/keen-datatable/child_database/remote-data',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/locked/both',function(req, res) {
	// 	res.render('default/components/keen-datatable/locked-column/both-locked',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/locked/html-table',function(req, res) {
	// 	res.render('default/components/keen-datatable/locked-column/html-table-locked',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/locked/left',function(req, res) {
	// 	res.render('default/components/keen-datatable/locked-column/left-locked',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/locked/right',function(req, res) {
	// 	res.render('default/components/keen-datatable/locked-column/right-locked',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/scrolling/both',function(req, res) {
	// 	res.render('default/components/keen-datatable/scrolling/both-scrolling',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/scrolling/horizontal',function(req, res) {
	// 	res.render('default/components/keen-datatable/scrolling/horizontal-scrolling',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/keen-datatable/scrolling/vertical',function(req, res) {
	// 	res.render('default/components/keen-datatable/scrolling/vertical-scrolling',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/portlets/base',function(req, res) {
	// 	res.render('default/components/portlets/base',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/portlets/draggable',function(req, res) {
	// 	res.render('default/components/portlets/draggable',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/portlets/sticky',function(req, res) {
	// 	res.render('default/components/portlets/sticky',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/portlets/tools',function(req, res) {
	// 	res.render('default/components/portlets/tools',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/components/widgets',function(req, res) {
	// 	res.render('default/components/widgets',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/blog/grid',function(req, res) {
	// 	res.render('default/custom/blog/grid',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/blog/grid-v2',function(req, res) {
	// 	res.render('default/custom/blog/grid_v2',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/blog/list',function(req, res) {
	// 	res.render('default/custom/blog/list',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/blog/post',function(req, res) {
	// 	res.render('default/custom/blog/post',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/error/404-v1',function(req, res) {
	// 	res.render('default/custom/error/404-v1',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/error/404-v2',function(req, res) {
	// 	res.render('default/custom/error/404-v2',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/error/404-v3',function(req, res) {
	// 	res.render('default/custom/error/404-v3',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/error/404-v4',function(req, res) {
	// 	res.render('default/custom/error/404-v4',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/faq/faq-v1',function(req, res) {
	// 	res.render('default/custom/faq/faq-v1',{id:'../../brand_header/layout'});
	// });
	
	// app.get('/demo/brand-header/custom/faq/faq-v2',function(req, res) {
	// 	res.render('default/custom/faq/faq-v2',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/faq/faq-v3',function(req, res) {
	// 	res.render('default/custom/faq/faq-v3',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/faq/faq-v4',function(req, res) {
	// 	res.render('default/custom/faq/faq-v4',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/invoices/invoice-v1',function(req, res) {
	// 	res.render('default/custom/invoices/invoice-v1',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/invoices/invoice-v2',function(req, res) {
	// 	res.render('default/custom/invoices/invoice-v2',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/pricing/pricing-v1',function(req, res) {
	// 	res.render('default/custom/pricing/pricing-v1',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/pricing/pricing-v2',function(req, res) {
	// 	res.render('default/custom/pricing/pricing-v2',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/user/profile-v1',function(req, res) {
	// 	res.render('default/custom/user/profile-v1',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/user/login-v1',function(req, res) {
	// 	res.render('default/custom/user/login-v1',{id:'../../brand_header/layout'});
	// });

	// app.get('/demo/brand-header/custom/user/login-v2',function(req, res) {
	// 	res.render('default/custom/user/login-v2',{id:'../../brand_header/layout'});
	// });

}

	// / As with any middleware it is quintessential to call next()
	// / if the user is authenticated

	var isAuthenticated = function (req, res, next) {
	  if (req.isAuthenticated())
	    return next();
	  res.redirect('/login');
	}