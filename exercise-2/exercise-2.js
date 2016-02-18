$(document).ready(function(){
  $.get('http://portal.batchacademy.com/api/wdfne/test-data/items', function(items){
  	
  	console.log(items);

  var itemTemplate = $('template#item').html();

  for(var i = 0; i < items.length; i++){

  	var newItem = $(itemTemplate);
  	$('.name',newItem).text(items[i].name);
  	$('.price',newItem).text('$' + items[i].price.toFixed(2));
  	$('.items').append(newItem);
  }

	});
});
