const express = require('express')
const router = express.Router()

// who-do-you-want-to-report
router.post('/who-do-you-want-to-report', function(req, res) {
    res.redirect('customer-details');
})

// customer-details
router.post('/customer-details', function(req, res) {
    res.redirect('source-of-allegation');
})

// source-of-allegation
router.post('/source-of-allegation', function(req, res) {
    res.redirect('what-do-you-think-is-happening');
})

// what-do-you-think-is-happening
router.post('/what-do-you-think-is-happening', function(req, res) {
    res.redirect('submitter-details');
})

// submitter-details
router.post('/submitter-details', function(req, res) {
    res.redirect('check-your-answers');
})






// content
router.post('/content', function(req, res) {
    res.redirect('address');
})

// address
router.post('/address', function(req, res) {
    res.redirect('check-your-answers');
})

// check-answers

// Add your routes here - above the module.exports line
module.exports = router
