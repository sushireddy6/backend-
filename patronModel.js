/*
Author: Mallikarjun
Date: 01-06-2000
Description: Define schema structure for patron
*/

// patronModel.js
var mongoose = require('mongoose');

/*
{
	"patronName": "firstname middlename lastname",
	"firstName": "firstname",
	"middleName": "middlename",
	"lastName": "lastname",
	"dob": "dd-mm-yyyy",
	"gender": "M",
	"origination": "friedintro",
	"emailid": "emailid@provider.com",
	"phone": "123456789",
	"password": "!@!##$@(&(&()))",
	"verifiedEmail": "Waiting - Confirmation",
	"verifiedPhone": "Yes - OTP",
	"verifiedCaptcha": "Yes"
}
*/

// Setup schema  ----------------- Mailli: This needs changes  -----------------------
var patronSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    emailID: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    origination: {
        type: String,
        required: false
    },
    verifiedEmail: {
        type: String,
        required: false
    },
    verifiedPhone: {
        type: String,
        required: false
    },
    verifiedCaptcha: {
        type: String,
        required: false
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Patron model
var Patron = module.exports = mongoose.model('patron', patronSchema);
module.exports.get = function (callback, limit) {
    Patron.find(callback).limit(limit);
}