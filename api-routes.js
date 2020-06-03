/*
Author: Mallikarjun
Date: 01-06-2000
Description: This file is to define all routers for Byrds
*/

// api-routes.js
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Byrds crafted with care!!',
    });
});

// Import patron controller
var patronController = require('./patronController');

// Patron routes
router.route('/patrons')
    .get(patronController.index)
    .post(patronController.new);
router.route('/patrons/:patron_id')
    .get(patronController.view)
    .patch(patronController.update)
    .put(patronController.update)
    .delete(patronController.delete);

    // Export API routes
module.exports = router;