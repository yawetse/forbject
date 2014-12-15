'use strict';

var forbject = require('../../index'),
	forbject1,
	formjectTestResult;

// var tabEvents = function () {
// 	forbject1.on('tabsShowIndex', function (index) {
// 		console.log('tab show index', index);
// 	});
// };
window.testForbject = function () {
	forbject1.refresh();
	formjectTestResult.innerHTML = JSON.stringify(forbject1.getObject(), null, 2);
};

window.addEventListener('load', function () {
	forbject1 = new forbject('#forbject-test');
	formjectTestResult = document.querySelector('#forbject-test-result');

	// ajaxbutton.addEventListener('click', loadprofile, false);
	window.forbject1 = forbject1;
}, false);
