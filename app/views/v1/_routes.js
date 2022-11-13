const express = require('express')
const router = express.Router()

// who-do-you-want-to-report
router.post('/who-do-you-want-to-report', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-who-do-you-want-to-report');
    } else {
        res.redirect('customer-details');
    }
})

// customer-details
router.post('/customer-details', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-customer-details');
    } else {
        res.redirect('source-of-allegation');
    }
})

// source-of-allegation
router.post('/source-of-allegation', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-source-of-allegation');
    } else {
        res.redirect('what-do-you-think-is-happening');
    }
})

// what-do-you-think-is-happening
router.post('/what-do-you-think-is-happening', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-what-do-you-think-is-happening');
    } else {
        res.redirect('submitter-details');
    }
})

// submitter-details
router.post('/submitter-details', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-submitter-details');
    } else {
        res.redirect('check-your-answer');
    }
})

// cbeck-your-answers
router.post('cbeck-your-answers', function(req, res) {
    res.redirect('confirmation');
})

// check-answers

// Add your routes here - above the module.exports line
module.exports = router
