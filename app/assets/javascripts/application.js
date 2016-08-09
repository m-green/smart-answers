//= require smart-answers
//= require helpers
//= require start-button-ab-test-july-2016

$(document).ready(function() {
  $('#current-error').focus();
});

function linkToTemplatesOnGithub() {
  $('*[data-debug-template-path]').each(function() {
    var element = $(this);
    var path = element.data('debug-template-path');
    var filename = path.split('/').pop();
    var host = 'https://github.com';
    var organisation = 'alphagov';
    var repository = 'smart-answers'
    var branch = 'deployed-to-production';
    var url = [host, organisation, repository, 'blob', branch, path].join('/');
    var anchor = $('<a>Template on GitHub</a>').attr('href', url).attr('style', 'color: deeppink;').attr('title', filename);
    element.prepend(anchor);
    element.attr('style', 'border: 3px solid deeppink; padding: 10px; margin: 3px');
    element.removeAttr('data-debug-template-path');
  });
};
