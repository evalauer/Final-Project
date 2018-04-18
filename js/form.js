var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxuC6Sf5MDLlYnDNe6viug4kp_7TN-oBQbcD3rU51zo3pe5pA/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success: function(response) {
      
    }
  });
})