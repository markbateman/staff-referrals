// Config
var defaultErrorHeading = 'There is a problem';
var defaultErrorMessage = 'There is an error';

function clearValidation() {
  $('.govuk-error-summary').remove();

  $('.govuk-form-control--error').each(function () {
    $(this).removeClass('govuk-form-control--error');
  });

  $('.govuk-error-message').each(function () {
    $(this).remove();
  });

  $('.govuk-form-group--error').each(function(){
    $(this).removeClass('govuk-form-group--error');
  });
}

function checkTextFields(errors) {
  $(document).find('input[type="text"],input[type="password"], textarea').each(function () {
    var $formgroup = $(this).parents('.govuk-form-group');
    var label = $(this).parent().find('govuk-label').clone().children().remove().end().text();

    if ($formgroup.attr('data-required') !== undefined && $(this).val() === '' && !$(this).parent().hasClass('js-hidden')) {
      if ($(this).attr('id') === undefined) {
        $(this).attr('id', $(this).attr('name'));
      }

      errors.push(
        {
          id: $(this).attr('id'),
          name: $(this).attr('name'),
          errorMessage: $formgroup.attr('data-error').toString() || defaultErrorMessage.toString(),
          label: label,
          type: 'text, password'
        }
      );
    }
  });
  return;
}

function checkSelectors(errors) {
  var checked = [];

  $(document).find('input[type="radio"], input[type="checkbox"]').each(function () {
    var $fieldset = $(this).parents('fieldset');
    var label = $fieldset.find('legend').clone().children().remove().end().text();

    if ($fieldset.attr('data-required') !== undefined && $fieldset.find(':checked').length === 0) {
      if ($(this).attr('id') === undefined) {
        $(this).attr('id', $(this).attr('name'));
      }

      if (checked.indexOf($(this).attr('name')) < 0) {
        checked.push($(this).attr('name'));
        errors.push(
          {
            id: $(this).attr('id'),
            name: $(this).attr('name'),
            errorMessage: $fieldset.attr('data-error').toString() || defaultErrorMessage.toString(),
            label: label,
            type: 'text, password'
          }
        );
      }
    }
  });
}

function appendErrorSummary() {
  var summaryNotPresent = $(document).find('.govuk-error-summary').length === 0;
  var summary = '<div class="govuk-error-summary" role="group" aria-labelledby="error-summary-heading" tabindex="-1">' +
      '<h2 class="govuk-error-summary__title" id="error-summary-heading">' +
        defaultErrorHeading +
      '</h2>' +
      '<ul class="govuk-list govuk-error-summary__list">' +
      '</ul>' +
    '</div>';

  if (summaryNotPresent) {
      $('form').before(summary);
    }
}

function appendErrorMessages(errors) {
  for (var i = 0; i < errors.length; i++) {
    if ($(document).find('a[href="#' + errors[i].id + '"]').length === 0) {
      $('.govuk-list').append(
        '<li><a href="#' + errors[i].id + '">' + errors[i].label +  errors[i].errorMessage + '</a></li>'
      );
      var $formgroup = $(document).find('#' + errors[i].id).parents('.govuk-form-group');
      $formgroup.addClass('govuk-form-group--error');

      if ($formgroup.find('.govuk-error-message').length === 0) {
        if ($formgroup.find('input[type="text"], input[type="password"]').length > 0 || $formgroup.find('textarea').length > 0) {
          if ($formgroup.find('.govuk-date-input').length > 0) {
            $formgroup.find('.govuk-date-input').before(
              '<span class="govuk-error-message govuk-!-padding-top-2">' +
                errors[i].errorMessage +
              '</span>'
            );
          } else {
            $formgroup.find('govuk-label').append(
              '<span class="govuk-error-message govuk-!-padding-top-2">' +
                errors[i].errorMessage +
              '</span>'
            );
            $formgroup.find('.govuk-form-control').addClass('govuk-form-control--error');
          }
        } else if ($formgroup.find('input[type="radio"]').length > 0 || $formgroup.find('input[type="checkbox"]')) {
          $formgroup.find('legend').append(
            '<span class="govuk-error-message govuk-!-padding-top-2">' +
              errors[i].errorMessage +
            '</span>'
          );
        }
      }
    }
  }
}

$(document).on('submit', 'form', function (e) {
  var requiredFieldsPresent = $(document).find('[data-required]').length > 0;

  clearValidation();

  if (requiredFieldsPresent) {
    var errors = [];

    checkTextFields(errors);
    checkSelectors(errors);

    if (errors.length > 0) {
      e.preventDefault();
      appendErrorSummary();
      appendErrorMessages(errors);
      $(document).scrollTop(0);
    }

  }
});
