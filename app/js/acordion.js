$(document).ready(function(){
	console.log('test')
  $('.p-icon').on('click', function(){
      $(this).toggleClass('active');
  });
    $('.clear').on('click', function(){
      $(this).toggleClass('active');
  });
     $('.p-icon').on('click', function(){
      $(this).parents('.accordion-part').find('.p-text').slideToggle();
    });
     $('.clear').on('click', function(){
      $(this).parents('.accordion-part').find('.p-text').slideToggle();
    });
});

 