//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here



// PIP telephone appointment journey logic

// Run this code when a form is submitted to 'interpreter-answer'
router.post('/interpreter-answer', function (req, res) {

  // Make a variable and give it the value from 'need-interpreter'
  var interpreterYesNo = req.session.data['need-interpreter']

  // Check whether the variable matches a condition
  if (interpreterYesNo == "Yes"){
    // Send user to what language page
    res.redirect('/parrot/pip-ta/interpreter-language')
  } else {
    // Send user to next page
    res.redirect('/parrot/pip-ta/same-sex-hcp')
  }

})

// Run this code when a form is submitted to 'ucb-answer'
router.post('/ucb-answer', function (req, res) {

  // Make a variable and give it the value from 'UCB-marker'
  var ucbYesNo = req.session.data['UCB-marker']

  // Check whether the variable matches a condition
  if (ucbYesNo == "Yes"){
    // Send user to what language page
    res.redirect('/parrot/pip-ta/UCB-detail')
  } else {
    // Send user to next page
    res.redirect('/parrot/pip-ta/claimant-support')
  }

})

// Run this code when a form is submitted to 'app-preferences'
router.post('/app-preferences', function (req, res) {

  // Make a variable and give it the value from 'UCB-marker'
  var appprefsYesNo = req.session.data['app-preferences']

  // Check whether the variable matches a condition
  if (appprefsYesNo == "Yes"){
    // Send user to what language page
    res.redirect('/parrot/pip-ta/app-date-time-O6-page-3')
  } else {
    // Send user to next page
    res.redirect('/parrot/pip-ta/app-date-time-O6-page-2')
  }

})

// Run this code when a form is submitted to 'cancel-answer'
router.post('/cancel-pip-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var cancelYesNo = req.session.data['cancel-booking']

  // Check whether the variable matches a condition
  if (cancelYesNo == "Yes"){
    // Send user to caseload page
    res.redirect('/parrot/status-led-design/book-assessment')
  } else {
    // Send user to previous page
    res.redirect('javascript:history.go(-1)')
  }

})

// WCA face to face appointment journey logic

// Run this code when a form is submitted to 'wca-interpreter-answer'
router.post('/wca-interpreter-answer', function (req, res) {

  // Make a variable and give it the value from 'need-interpreter'
  var interpreterWCAYesNo = req.session.data['need-wca-interpreter']

  // Check whether the variable matches a condition
  if (interpreterWCAYesNo == "Yes"){
    // Send user to what language page
    res.redirect('/parrot/wca-f2f/interpreter-language')
  } else {
    // Send user to next page
    res.redirect('/parrot/wca-f2f/same-sex-hcp')
  }

})

// Run this code when a form is submitted to 'cancel-answer'
router.post('/cancel-wca-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var cancelWCAYesNo = req.session.data['cancel-wca-booking']

  // Check whether the variable matches a condition
  if (cancelWCAYesNo == "Yes"){
    // Send user to caseload page
    res.redirect('/parrot/status-led-design/book-assessment')
  } else {
    // Send user to previous page
    res.redirect('javascript:history.go(-1)')
  }

})

// Run this code when a form is submitted to 'cancel-answer'
router.post('/deactivate-hcp-answer', function (req, res) {

  // Make a variable and give it the value from 'deactivate-HCP'
  var deactivateHCPYesNo = req.session.data['deactivate-hcp']

  // Check whether the variable matches a condition
  if (deactivateHCPYesNo == "Yes"){
    // Send user to caseload page
    res.redirect('/parrot/HCP-admin/HCP-profiles-deactivated-success')
  } else {
    // Send user to previous page
    res.redirect('/parrot/HCP-admin/joe-bloggs-profile')
  }

})

// Run this code when a form is submitted to 'remove-jane-answer'
router.post('/remove-jane-answer', function (req, res) {

  // Make a variable and give it the value from 'remove-jane'
  var removeJaneYesNo = req.session.data['remove-jane']

  // Check whether the variable matches a condition
  if (removeJaneYesNo == "Yes"){
    // Send user to caseload page
    res.redirect('/parrot/HCP-admin/HCP-profiles-jane-remove-success')
  } else {
    // Send user to previous page
    res.redirect('/parrot/HCP-admin/jane-smith-profile')
  }

})

// Run this code when a form is submitted to 'what-assessments'
router.post('/what-assessments-answer', function (req, res) {

  // Make a variable and give it the value from 'what-assessments'
  var whatAssessments = req.session.data['what-assessments']

  // Check whether the variable matches a condition
  if (whatAssessments == "unassigned"){
    // Send user to unassigned delivery list
    res.redirect('/parrot/delivery-list/delivery-list-unassigned')
  } else if (whatAssessments == "assigned"){
    // Send user to delivery list
    res.redirect('/parrot/delivery-list/delivery-list-assigned')
  } else {
    // Send user to filter by hcp
    res.redirect('/parrot/delivery-list/filter-by-HCP')
  }

})





// Run this code when a form is submitted to 'what-assessments'
router.post('/what-assessments-answer-v1', function (req, res) {

  // Make a variable and give it the value from 'what-assessments'
  var whatAssessments = req.session.data['what-assessments']

  // Check whether the variable matches a condition
  if (whatAssessments == "unassigned"){
    // Send user to unassigned delivery list
    res.redirect('/v1/delivery-list/delivery-list-unassigned')
  } else if (whatAssessments == "assigned"){
    // Send user to delivery list
    res.redirect('/v1/delivery-list/delivery-list-assigned')
  } else {
    // Send user to filter by hcp
    res.redirect('/v1/delivery-list/filter-by-HCP')
  }

})



// RB Takeover with new code from v1 folder
// Run this code when a form is submitted to 'interpreter-answer'
router.post('/manage-what', function (req, res) {

  // Make a variable and give it the value from page
  var manage = req.session.data['manage']

  // Check whether the variable matches a condition
  if (manage == "appointments"){
    // Send user to what language page
    res.redirect('/v1/availability-management/appointments/appointments')
  } else {
    // Send user to next page
    res.redirect('/v1/availability-management/location')
  }

})

router.post('/status-check', function (req, res) {

  // Make a variable and give it the value from page
  var status = req.session.data['status']

  // Check whether the variable matches a condition
  if (status == "assessment-booked"){
    // Send user to what language page
    res.redirect('/v1/pip-ta/update-status-assessment-booked')
  } else {
    // Send user to next page
    res.redirect('/v1/pip-ta/update-status-confirmation')
  }

})



//v2
router.post('/manage-what2', function (req, res) {

  // Make a variable and give it the value from page
  var manage = req.session.data['manage']

  // Check whether the variable matches a condition
  if (manage == "appointments"){
    // Send user to what language page
    res.redirect('/v2/availability-management/appointments/appointments')
  } else {
    // Send user to next page
    res.redirect('/v2/availability-management/location')
  }

})

router.post('/status-check', function (req, res) {

  // Make a variable and give it the value from page
  var status = req.session.data['status']

  // Check whether the variable matches a condition
  if (status == "assessment-booked"){
    // Send user to what language page
    res.redirect('/v2/pip-ta/update-status-assessment-booked')
  } else {
    // Send user to next page
    res.redirect('/v2/pip-ta/update-status-confirmation')
  }

})



//v2
router.post('/manage-what3', function (req, res) {

  // Make a variable and give it the value from page
  var manage = req.session.data['manage']

  // Check whether the variable matches a condition
  if (manage == "agents"){
    // Send user to what language page
    res.redirect('/v3/availability-management/agents/agent-profiles')
  } else {
    // Send user to next page
    res.redirect('/v3/availability-management/availability/existing-slots')
  }

})




//v4
router.post('/manage-what4', function (req, res) {

  // Make a variable and give it the value from page
  var manage = req.session.data['manage']

  // Check whether the variable matches a condition
  if (manage == "agents"){
    // Send user to what language page
    res.redirect('/v4/availability-management/agents/agent-profiles')
  } else {
    // Send user to next page
    res.redirect('/v4/availability-management/availability/existing-slots')
  }

})

