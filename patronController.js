/*
Author: Mallikarjun
Date: 01-06-2000
Description: Define CRUD operations for Patron
*/

// patronController.js

// Import patron model
Patron = require('./patronModel');

// Handle index actions
exports.index = function (req, res) {
    Patron.get(function (err, patrons) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "patron retrieved successfully",
            data: patrons
        });
    });
};

// Handle create patron actions
exports.new = function (req, res) {
    var patron = new Patron();
    patron.firstName = req.body.firstName ? req.body.firstName : patron.firstName;
    patron.middleName = req.body.middleName;
    patron.lastName = req.body.lastName;
    patron.gender = req.body.gender;
    patron.email = req.body.email;
    patron.phone = req.body.phone;
    
    // save the patron and check for errors
    patron.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New patron created!',
            data: patron
        });
    });
};

// Handle view patron info
exports.view = function (req, res) {
    Patron.findById(req.params.patron_id, function (err, patron) {
        if (err)
            res.send(err);
        res.json({
            message: 'Patron details loading..',
            data: patron
        });
    });
};

// Handle update patron info
exports.update = function (req, res) {
Patron.findById(req.params.patron_id, function (err, patron) {
        if (err)
            res.send(err);
// Change the code here ---------------------- Malli ------------------------------
patron.firstName = req.body.firstName ? req.body.firstName : patron.firstName;
        patron.gender = req.body.gender;
        patron.email = req.body.email;
        patron.phone = req.body.phone;
// save the patron and check for errors
        patron.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Patron Info updated',
                data: patron
            });
        });
    });
};

// Handle delete patron
exports.delete = function (req, res) {
    Patron.remove({
        _id: req.params.patron_id
    }, function (err, patron) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Patron deleted'
        });
    });
};