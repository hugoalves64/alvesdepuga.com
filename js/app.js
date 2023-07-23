$(document).ready(function(){
  $(".burger").on("click", function(){
      $(".nav-links").toggleClass("nav-active");
  })
})

$(document).ready(function(){
 	$('ul li').click(function(){
 		$(this).siblings().removeClass('active');
 		$(this).toggleClass('active');

 	})
})




 
jQuery(function(){
	$(function () {
		$(window).scroll(function () { //Fonction appelée quand on descend la page
			if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
				$('.scrollUp').css('right','30px'); // Replace à 10pixels de la droite l'image
				} else { 
					$('.scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
				}
			});
		});
	});