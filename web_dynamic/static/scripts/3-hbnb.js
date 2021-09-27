$(document).ready(function() {
	const dictamenities = {};
	const checkboxes = $('input');
	for (const box of checkboxes) {
		box.addEventListener('change', function () {
			if (box.checked) {
				dictamenities[$(box).data('id')] = $(box).data('name');
			} else {
				delete dictamenities[$(box).data('id')];
			}
			let listamenities = Object.values(dictamenities);
			$('DIV.amenities h4').text(listamenities.join(', '));
		});
	}
        const url = "http://0.0.0.0:5001/api/v1/status/";
        $.get(url, function(data, textStatus) {
            if (textStatus === "success") {
                $("div#api_status").addClass("available");
            } else { 
                $("div#api_status").removeClass("available");
            }
        });
});
$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  body: '{}',
  dataType: 'json',
  contentType: 'application/json',
  success: function (body) {
    for (const place of body) {
      const article = '<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div><div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div></div><div class="description">' + place.description + '</div></article>';
      $(article).appendTo('SECTION.places');
    }
  }
});
