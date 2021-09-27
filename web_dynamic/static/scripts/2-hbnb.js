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
