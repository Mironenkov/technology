/**
 * Created by GloryManU on 04.07.2016.
 */
(function(){
	$('.tech-description-slider').lightSlider({
		item: 1,
		speed: 1000,
		pager: false,
		loop: true,
		slideMargin: 0
	});
	$('.tech-card-slider').lightSlider({
		gallery:true,
		galleryMargin: 20,
		thumbMargin: 30,
		item:1,
		loop:true,
		thumbItem:3,
		slideMargin:0,
		enableDrag: false,
		enableTouch: false,
		responsive : [
			{
				breakpoint:800,
				settings: {
					thumbMargin: 10
				}
			},
			{
				breakpoint:480,
				settings: {
					thumbMargin: 5
				}
			}
		]
	});

	//Equipment
	$('.tech-equipment-table-row--click').click(function(){
		$(this).next().slideToggle("slow");
	});
})();