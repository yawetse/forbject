'use strict';

var forbject = require('../../index'),
	forbject1,
	yawbutton,
	rafbutton,
	ajaxbutton;

var yawprofiledata = {
		username: "@yawetse",
		profile: {
			summary: "<h2>@yawetse's profile</h2><p>probably from database</p>"
		}
	},
	rafprofiledata = {
		username: "@sonicsound",
		profile: {
			summary: "<h2>@sonicsound's profile</h2><p>you can overwrite forbject's  render prototype function to use your favorite own template language. The default is EJS</p>"
		}
	},
	ajaxprofiledata = {
		username: "@ajaxmockcall",
		profile: {
			summary: "<h2>grab this from ajax post/get</p>"
		}
	};

var loadprofile = function (e) {
	var etarget = e.target;
	if (etarget.id === 'yawbutton') {
		forbject1.update({
			data: yawprofiledata
		});
	}
	else if (etarget.id === 'rafbutton') {
		forbject1.update({
			data: rafprofiledata
		});
	}
	else if (etarget.id === 'ajaxbutton') {
		forbject1.update({
			data: ajaxprofiledata
		});
	}
};

// var tabEvents = function () {
// 	forbject1.on('tabsShowIndex', function (index) {
// 		console.log('tab show index', index);
// 	});
// };

window.addEventListener('load', function () {

	yawbutton = document.querySelector('#yawbutton');
	rafbutton = document.querySelector('#rafbutton');
	// ajaxbutton = document.querySelector('#ajaxbutton');

	forbject1 = new forbject({
		ejsopen: '{{',
		ejsclose: '}}'
	});

	forbject1.addBinder({
		prop: 'username',
		elementSelector: '#username',
		binderType: 'value'
	});

	forbject1.addBinder({
		prop: 'profile',
		elementSelector: '#profile',
		binderType: 'template',
		binderTemplate: document.querySelector('#profile-template').innerHTML
	});

	yawbutton.addEventListener('click', loadprofile, false);
	rafbutton.addEventListener('click', loadprofile, false);
	// ajaxbutton.addEventListener('click', loadprofile, false);
	window.forbject1 = forbject1;
}, false);
