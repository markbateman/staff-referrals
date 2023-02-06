const express = require('express')
const router = express.Router()

// index
router.post('/index', function(req, res) {
    // Reset all known V3 variables, listed out by page

    // NEED TO RECONSIDER THIS AS IT COULD BE 'ERROR-CAPTURE' FOR EXAMPLE AND
    // RESET ON A PER COMPLETED BASIS READY FOR THE 'NEXT' PAGE
    req.session.data['page-errors'] = 'no';

    // who-do-you-want-to-report.html
    req.session.data['who-do-you-want-to-report'] = null;

    // suspect-details.html
    req.session.data['suspects-first-name'] = null;
    req.session.data['suspects-last-name'] = null;
    req.session.data['known-by-other-names'] = null;
    req.session.data['suspects-ni-number'] = null;
    req.session.data['suspects-address-line-1'] = null;
    req.session.data['suspects-address-line-2'] = null;
    req.session.data['suspects-address-town'] = null;
    req.session.data['suspects-address-county'] =null;
    req.session.data['suspects-address-postcode'] = null;
    req.session.data['suspects-address-region'] = "choose";
    req.session.data['suspects-age'] = null;
    req.session.data['suspects-date-of-birth-day'] = null;
    req.session.data['suspects-date-of-birth-month'] = null;
    req.session.data['suspects-date-of-birth-year'] = null;
    req.session.data['suspects-age-2'] = null;
    req.session.data['suspects-approximate-age'] = null;
    req.session.data['contact-telephone'] = null;
    req.session.data['suspect-contact-telephone'] = null;
    req.session.data['contact-mobile'] = null;
    req.session.data['suspect-contact-mobile'] = null;
    req.session.data['contact-email'] = null;
    req.session.data['suspect-contact-email'] = null;

    // source-of-allegation.html
    req.session.data['source-of-allegation'] = null;

    // what-fraud-do-you-think-is-happening.html
    req.session.data['living-together'] = "";
    req.session.data['living-together-hint'] = "";
    req.session.data['working-and-claiming'] = "";
    req.session.data['working-and-claiming-hint'] = "";
    req.session.data['id-fraud'] = "";
    req.session.data['id-fraud-hint'] = "";
    req.session.data['capital'] = "";
    req.session.data['capital-hint'] = "";
    req.session.data['other-income'] = "";
    req.session.data['other-income-hint'] = "";
    req.session.data['abroad-fraud'] = "";
    req.session.data['abroad-fraud-hint'] = "";
    req.session.data['doubtful-disability'] = "";
    req.session.data['doubtful-disability-hint'] = "";
    req.session.data['housing-related'] = null;
    req.session.data['housing-related-hint'] = "";
    req.session.data['not-providing-care'] = "";
    req.session.data['not-providing-care-hint'] = "";
    req.session.data['other'] = "";
    req.session.data['other-hint'] = "";

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
    if (req.session.data["who-do-you-want-to-report"] == "person") {
        if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
            res.redirect('check-your-answers#section-allegation-details');
        } else {
            res.redirect('suspects-personal-details');
        }    
    } else {
        res.redirect('unable-to-proceed');
    }
})

// suspects-personal-details
router.post('/suspects-personal-details', function(req, res) {
    if (req.session.data['suspects-age'] == 'date-of-birth' || req.session.data['suspects-age'] == 'approximate-age' || req.session.data['suspects-age'] == 'age-not-known') {
        if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
            req.session.data['page-errors'] = 'no';
            res.redirect('check-your-answers#section-suspects-details');
        } else {
            req.session.data['page-errors'] = 'no';
            res.redirect('suspects-address-and-contact-details');
        }
    } else {
        // Reload the same page, errors will now be flagged...
        req.session.data['page-errors'] = 'yes';
        res.redirect('suspects-personal-details#error-summary');
    }
})

// suspects-address-and-contact-details
router.post('/suspects-address-and-contact-details', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        req.session.data['page-errors'] = 'no';
        res.redirect('check-your-answers#section-suspects-details');
    } else {
        req.session.data['page-errors'] = 'no';
        res.redirect('source-of-allegation');
    }
})

// source-of-allegation
router.post('/source-of-allegation', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-allegation-details');
    } else {
        res.redirect('what-fraud-do-you-think-is-happening');
    }
})

// what-fraud-do-you-think-is-happening
router.post('/what-fraud-do-you-think-is-happening', function(req, res) {
    if ((req.session.data['living-together'] == 'living-together' && req.session.data['living-together-hint'].length !== 0) || 
        (req.session.data['working-and-claiming'] == 'working-and-claiming' && req.session.data['working-and-claiming-hint'].length !== 0) || 
        (req.session.data['id-fraud'] == 'id-fraud' && req.session.data['id-fraud-hint'].length !== 0) || 
        (req.session.data['capital'] == 'capital' && req.session.data['capital-hint'].length !== 0) || 
        (req.session.data['other-income'] == 'other-income' && req.session.data['other-income-hint'].length !== 0) || 
        (req.session.data['abroad-fraud'] == 'abroad-fraud' && req.session.data['abroad-fraud-hint'].length !== 0) || 
        (req.session.data['doubtful-disability'] == 'doubtful-disability' && req.session.data['doubtful-disability-hint'].length !== 0) || 
        (req.session.data['housing-related'] == 'housing-related' && req.session.data['housing-related-hint'].length !== 0) || 
        (req.session.data['not-providing-care'] == 'not-providing-care' && req.session.data['not-providing-care-hint'].length !== 0) || 
        (req.session.data['other'] == 'other' && req.session.data['other-hint'].length !== 0)) {
        if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
            req.session.data['page-errors'] = 'no';
            res.redirect('check-your-answers#section-what-do-you-think-is-happening');
        } else {
            req.session.data['page-errors'] = 'no';
            res.redirect('how-long-has-the-fraud');
        }
    } else {
        // Reload the same page, errors will now be flagged...
        req.session.data['page-errors'] = 'yes';
        res.redirect('what-fraud-do-you-think-is-happening#error-summary');
    }
})

// what-fraud-do-you-think-is-happening-v2
router.post('/what-fraud-do-you-think-is-happening-v2', function(req, res) {
    res.redirect('how-long-has-the-fraud-v2');
})

// how-long-has-the-fraud-v2
router.post('/how-long-has-the-fraud-v2', function(req, res) {
    res.redirect('submitters-details');
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
    if (req.session.data['submitters-first-name'].length == 0 || req.session.data['submitters-last-name'].length == 0) {
        // Reload the same page, errors will now be flagged...
        req.session.data['page-errors'] = 'yes';
        res.redirect('submitters-details#error-summary');
    } else {
        if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
            req.session.data['page-errors'] = 'no';
            res.redirect('check-your-answers#section-submitters-details');
        } else {
            req.session.data['page-errors'] = 'no';
            res.redirect('check-your-answers');
        }
    }
})

// cbeck-your-answers
router.post('cbeck-your-answers', function(req, res) {
    res.redirect('confirmation');
})

// give-feedback
router.post('/give-feedback', function(req, res) {
    res.redirect('feedback-confirmation');
})

// Add your routes here - above the module.exports line
module.exports = router
