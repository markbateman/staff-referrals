const express = require('express')
const router = express.Router()

// index
router.post('/index', function(req, res) {
    // Reset all known V2 variables, listed out by page

    // who-do-you-want-to-report.html
    req.session.data['who-do-you-want-to-report'] = null;

    // suspect-details.html
    req.session.data['suspects-first-name'] = null;
    req.session.data['suspects-last-name'] = null;
    req.session.data['known-by-another-name'] = null
    req.session.data['known-by-another-name-full-name'] = null
    req.session.data['suspects-ni-number'] =null;
    req.session.data['suspects-address-line-1'] = null;
    req.session.data['suspects-address-line-2'] = null;
    req.session.data['suspects-address-town'] = null;
    req.session.data['suspects-address-county'] =null;
    req.session.data['suspects-address-postcode'] = null;
    req.session.data['suspects-address-region'] = null;
    req.session.data['suspects-date-of-birth-day'] = null;
    req.session.data['suspects-date-of-birth-month'] = null;
    req.session.data['suspects-date-of-birth-year'] = null;
    req.session.data['contact-telephone'] = null;
    req.session.data['suspect-contact-telephone'] = null;
    req.session.data['contact-mobile'] = null;
    req.session.data['suspect-contact-mobile'] = null;
    req.session.data['contact-email'] = null;
    req.session.data['suspect-contact-email'] = null;

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
    req.session.data['not-providing-care'] = null;
    req.session.data['not-providing-care-hint'] = null;
    req.session.data['other'] = null;
    req.session.data['other-hint'] = null;

    // how-long-has-the-fraud.html
    req.session.data['how-long-has-the-fraud'] = null;
    
    // submitter-details.html
    req.session.data['submitters-first-name'] = null;
    req.session.data['submitters-last-name'] = null;
    req.session.data['submitters-email-address'] = null;

    res.redirect('who-do-you-want-to-report');
})

// who-do-you-want-to-report
router.post('/who-do-you-want-to-report', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-allegation-details');
    } else {
        res.redirect('suspects-details');
    }
})

// suspects-details
router.post('/suspects-details', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-suspects-details');
    } else {
        res.redirect('source-of-allegation');
    }
})

// source-of-allegation
router.post('/source-of-allegation', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-allegation-details');
    } else {
        res.redirect('what-do-you-think-is-happening');
    }
})

// what-do-you-think-is-happening
router.post('/what-do-you-think-is-happening', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-what-do-you-think-is-happening');
    } else {
        res.redirect('how-long-has-the-fraud');
    }
})

// how-long-has-the-fraud
router.post('/how-long-has-the-fraud', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-allegation-details');
    } else {
        res.redirect('submitters-details');
    }
})

// submitters-details
router.post('/submitters-details', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-submitters-details');
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
