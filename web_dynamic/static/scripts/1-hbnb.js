$(function () {
	const listamenities = [];
	const checkboxes = $('input');
	for (const box of checkboxes) {
		box.addEventListener('change', function () {
			if (box.checked) {
				listamenities.push($(box).data('id'));
			} else {
				delete listamenities[$(box).data('id')];
			}
			$('DIV.amenities h4').append(listamenities);
