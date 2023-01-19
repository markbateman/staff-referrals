const express = require('express')
const router = express.Router()

// index
router.post('/index', function(req, res) {
    // Reset all known V2 variables, listed out by page

    // NEED TO RECONSIDER THIS AS IT COULD BE 'ERROR-CAPTURE' FOR EXAMPLE AND
    // RESET ON A PER COMPLETED BASIS READY FOR THE 'NEXT' PAGE
    req.session.data['page-errors'] = 'no';

    // who-do-you-want-to-report.html
    req.session.data['who-do-you-want-to-report'] = null;

    // suspect-details.html
    req.session.data['suspects-first-name'] = null;
    req.session.data['suspects-last-name'] = null;
    req.session.data['known-by-other-names'] = null;
    req.session.data['suspects-ni-number'] =null;
    req.session.data['suspects-address-line-1'] = null;
    req.session.data['suspects-address-line-2'] = null;
    req.session.data['suspects-address-town'] = null;
    req.session.data['suspects-address-county'] =null;
    req.session.data['suspects-address-postcode'] = null;
    req.session.data['suspects-address-region'] = null;
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
        res.redirect('suspects-personal-details');
    }    
})

// who-do-you-want-to-report
//router.post('/who-do-you-want-to-report', function(req, res) {
//    if (req.session.data['who-do-you-want-to-report'] === '') {
//        errorWhoDoYouWantToReport = true
//        errors.push({
//            text: 'Enter the country the entity was formed in',
//            href: '#country'
//        })
//    } else {
//        if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
//            res.redirect('check-your-answers#section-allegation-details');
//        } else {
//            res.redirect('suspects-personal-details');
//        }
//    }
//})

// suspects-personal-details
router.post('/suspects-personal-details', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers#section-suspects-details');
    } else {
        res.redirect('suspects-address-and-contact-details');
    }
})

// suspects-address-and-contact-details
router.post('/suspects-address-and-contact-details', function(req, res) {
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

    if (req.session.data['living-together'] == 'living-together' || 
        req.session.data['working-and-claiming'] == 'working-and-claiming' || 
        req.session.data['id-fraud'] == 'id-fraud' || 
        req.session.data['capital'] == 'capital' || 
        req.session.data['other-income'] == 'other-income' || 
        req.session.data['abroad-fraud'] == 'abroad-fraud' || 
        req.session.data['doubtful-disability'] == 'doubtful-disability' || 
        req.session.data['housing-related'] == 'housing-related' || 
        req.session.data['not-providing-care'] == 'not-providing-care' || 
        req.session.data['other'] == 'other') {
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
            res.redirect('what-do-you-think-is-happening#error-summary');
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
