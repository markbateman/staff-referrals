/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

/////

 // Add new element
 $(".add").click(function(){

  // Finding total number of elements added
  var total_element = $(".govuk-form-group").length;
 
  // last <div> with element class id
  var lastid = $(".govuk-form-group:last").attr("id");
  var split_id = lastid.split("_");
  var nextindex = Number(split_id[1]) + 1;

  var max = 20;
  // Check total number elements
  if(total_element < max ){
   // Adding new div container after last occurance of element class
   $(".govuk-form-group:last").after("<div class='govuk-form-group' id='div_"+ nextindex +"'></div>");

   // Adding label to <div>
   $("#div_" + nextindex).append("<label class='govuk-label' for='official-number_"+ nextindex +"'>Other name "+ nextindex +"</label>");
 
   // Adding element to <div>
   $("#div_" + nextindex).append("<input class='govuk-input govuk-!-width-one-quarter govuk-!-margin-right-6' autocomplete='off' maxlength='9' type='text' name='official-number_"+ nextindex +"'> <span id='remove_" + nextindex + "' class='govuk-button govuk-button--secondary remove' >Remove "+ nextindex +"</span>");
 
  }
 
 });

 // Remove element
 $('.container').on('click','.remove',function(){
 
  var id = this.id;
  var split_id = id.split("_");
  var deleteindex = split_id[1];

  // Remove <div> with id
  $("#div_" + deleteindex).remove();

 }); 

/////

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
