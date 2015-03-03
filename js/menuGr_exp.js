jQuery(document).ready(function() {
var icMenu = '<a href="#" class="toggle-nav"><i class="fa fa-bars"></i></a>';
jQuery('#menuMapaWeb').after('<div class="menuPrincipal"><ul><li>'+ icMenu + '</li></ul></div>');

jQuery('.toggle-nav').click(function() {
	jQuery('#menuMapaWeb ul.nivel1').toggleClass('menuAbierto');

});
jQuery('#menuMapaWeb').find('.nivel1 > li > a').each(function() 
	{
		jQuery(this).clone().appendTo('.menuPrincipal ul').wrap('<li></li>');
	});
jQuery(".interiorPromocion").first().css({
		      "display": "block",
		      "width": "520px"
		    });
 jQuery("#accordion").tabs(".interiorPromocion", {
       tabs: '#accordion img',
       effect: 'horizontal'
});
jQuery(".cajaTu .imagenPromocion").on("click", function () {
	jQuery("#contenidoCentralSuperior").css("background-image", "url('images/fondoFoto.png')");
});
jQuery(".cajaOcio .imagenPromocion").on("click", function () {
	jQuery("#contenidoCentralSuperior").css("background-image", "url('images/fondoFotoOcio2.png')");
});
jQuery(".cajaCiudad .imagenPromocion").on("click", function () {
	jQuery("#contenidoCentralSuperior").css("background-image", "url('images/fondoFotoCiudad.png')");
});
jQuery(".cajaAyto .imagenPromocion").on("click", function () {
	jQuery("#contenidoCentralSuperior").css("background-image", "url('images/fondoFotoAyto.png')");
});
jQuery('#detalleNoticia').find('.relacionados').addClass('prueba').appendTo('#contenidoAux');
}); 
