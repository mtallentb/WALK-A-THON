"use strict";

console.log("DOM Event Handlers");

let $ = require('jquery'),
	getDonors = require('./load-info.js');

$('#donateBtn').click(() => {
	getDonors();
});