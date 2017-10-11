//slider

$('.reviews__slider').slick({
	prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/prev.png"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/slider/next.png"></button>'
});


//map

	YMaps.jQuery(function () {

	var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
	var s = new YMaps.Style();
	var placemark = new YMaps.Placemark(new YMaps.GeoPoint(27.582231999999934,53.902718570670466));
	map.setCenter(new YMaps.GeoPoint(27.582231999999934,53.902718570670466), 17);
	map.addControl(new YMaps.TypeControl());		
	map.addControl(new YMaps.Zoom());
	map.addControl(new YMaps.MiniMap());
	
	placemark.name = "ул. Захарова, дом 50В";
	placemark.description = "ООО «АВИНКОРП»";
	map.addOverlay(placemark);
})