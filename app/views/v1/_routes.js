const express = require('express')
const router = express.Router()

// index
router.post('/index', function(req, res) {
    // Reset all known V1 variables, listed out by page

    // who-do-you-want-to-report.html
    req.session.data['who-do-you-want-to-report'] = null;

    // suspect-details.html
    req.session.data['suspect-first-name'] = null;
    req.session.data['suspect-last-name'] = null;
    req.session.data['known-by-another-name'] = null
    req.session.data['known-by-another-name-full-name'] = null
    req.session.data['suspect-ni-number'] =null;
    req.session.data['suspect-address-line-1'] = null;
    req.session.data['suspect-address-line-2'] = null;
    req.session.data['suspect-address-town'] = null;
    req.session.data['suspect-address-county'] =null;
    req.session.data['suspect-address-postcode'] = null;
    req.session.data['suspect-date-of-birth-day'] = null;
    req.session.data['suspect-date-of-birth-month'] = null;
    req.session.data['suspect-date-of-birth-year'] = null;
    req.session.data['suspect-telephone-number'] = null;

    // source-of-allegation.html
    req.session.data['source-of-allegation'] = null;

    // what-do-you-think-is-happening.html
    req.session.data['living-together'] = null;
    req.session.data['living-together-hint'] = null;
    req.session.data['working-and-claiming'] = null;
    req.session.data['working-and-claiming-hint'] = null;
    req.session.data['capital'] = null;
    req.session.data['capital-hint'] = null;
    req.session.data['other-income'] = null;
    req.session.data['other-income-hint'] = null;
    req.session.data['abroad-fraud'] = null;
    req.session.data['abroad-fraud-hint'] = null;
    req.session.data['doubtful-disability'] = null;
    req.session.data['doubtful-disability-hint'] = null;
    req.session.data['housing-related'] = null;
    req.session.data['housing-related-hint'] = null;

    // submitter-details.html
    req.session.data['submitter-first-name'] = null;
    req.session.data['submitter-last-name'] = null;
    req.session.data['submitter-email-address'] = null;

    res.redirect('who-do-you-want-to-report');
})

// who-do-you-want-to-report
router.post('/who-do-you-want-to-report', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-who-do-you-want-to-report');
    } else {
        res.redirect('suspect-details');
    }
})

// suspect-details
router.post('/suspect-details', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-suspect-details');
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
        res.redirect('check-your-answers');
    }
})

// cbeck-your-answers
router.post('cbeck-your-answers', function(req, res) {
    res.redirect('confirmation');
})

// check-answers

// Add your routes here - above the module.exports line
module.exports = router
