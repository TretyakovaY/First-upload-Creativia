$(document).ready(function(){
	console.log('test')
  $('.p-icon').on('click', function(){
      $(this).toggleClass('active');
  });
    $('.accordion-part').on('click', function(){
      $(this).toggleClass('active');
  });
     $('.p-icon').on('click', function(){
      $(this).parents('.accordion-part').find('.p-text').slideToggle();
    });
     $('.accordion-part').on('click', function(){
      $(this).parents('.accordion').find('.p-text').slideToggle();
    });
});

 