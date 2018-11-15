$(document).ready(function(){
	console.log('test')
	$('.p-minus').on('click', function(){
      $(this).toggleClass('active')
    });
    $('.p-minus').on('click', function(){
      $(this).parents('.accordion-part').find('.p-text').slideToggle();
});
});

 