$(document).ready(function(){
  // Write your code here
  $('form').on('submit',function(event){
  	event.preventDefault();

  //Grab the values of the form inputs
  	var $form = $('form.send-message');

  	var $name = $('.name', $form);
  	var $email = $('.email', $form);
  	var $message = $('.message', $form);

  //Store the values in an object
  	var formObj = {
  		name: $name.val(),
  		email: $email.val(),
  		message: $message.val()
  	};

  	//Post object to Batch Academy
  	$.post('http://portal.batchacademy.com/api/wdfne/test-data/send-fake-message',
  		formObj
  	, function(response){
  		console.log(response.status);
  	});

  });
});
