var $sendButton = $('#send-button');
var $humanCheck = $('input[name="human"]');

$humanCheck.on('click', function(){
    if ( $(this).is(':checked') )
        $sendButton.prop('disabled', false);
    else
        $sendButton.prop('disabled', true);
});
