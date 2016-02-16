$(document).ready(function(){
  var insert = $.get('http://portal.batchacademy.com/api/wdfne/test-data/hello-world', function(insert){

  	$('.dynamic').text(insert);
	});
});
