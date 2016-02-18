$(document).ready(function(){
	
	$('form').on('submit', function(event){
		event.preventDefault();

		//Validate that zip code is 5 digits
		var $form = $('form.send-zip');
		var zipCode =  $('.zipcode', $form).val();

		if(zipCode.length === 5 && Number(zipCode)){

		//Get and store the user entered zip code
		$.get('http://maps.googleapis.com/maps/api/geocode/json?address='+zipCode,function(response){
			console.log(response);
			var lat = response.results[0].geometry.location.lat;
			var lng = response.results[0].geometry.location.lng;
			console.log(lat,lng);

		$.get('https://api.forecast.io/forecast/8a0fa58c6e4493cc19026533b0c35d20/'+lat+','+lng,function(response){
			console.log(response);
			},'jsonp');
		});

		} else {
			alert("You entered an invalid zip code.")
		}
	});
});
