"use strict";

console.log("Donors Loaded");
let $ = require('jquery');

function getDonorData(donorData) {

	let donorName = $("#donorName").val(),
		donorEmail = $("#donorEmail").val(),
		donationAmount = $("#donationAmount").val(),
		donorArr = [];

		donorArr.push(donorName, donorEmail, donationAmount);

		console.log("Donor Info:", donorArr);

		if ($("#test2").is(":checked")) {
			console.log("Per Lap is Checked");
			$("#tableTarget").append(`
				  <tr>
	                <td>${donorName}</td>
	                <td>${donorEmail}</td>
	                <td>$${donationAmount} per lap</td>
	              </tr>`);
		} else if (!$("#test2").is(":checked")) {
			console.log("Per Lap is NOT Checked");
			$("#tableTarget").append(`
				  <tr>
	                <td>${donorName}</td>
	                <td>${donorEmail}</td>
	                <td>$${donationAmount}</td>
	              </tr>`);
		}

		$("#donorName").val("");
		$("#donorEmail").val("");
		$("#donationAmount").val("");

}

module.exports = getDonorData;