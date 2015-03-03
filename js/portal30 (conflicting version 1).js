/**
* @license 
* portal30.js - dgenerico
*/

jQuery.noConflict();
(function($) {
$(function(){

	$("#idiomas li:has(a)").addClass("activo");
	$('#buscadorCabecera').find('.botonEnviarBuscador').attr('value','');
	//$('.accesosPortada .imagen').each(function () {
		//$(this).next().prepend(this);	
	//});	
	$('.cajaDesplegable').find('h3').nextAll().not('div').wrapAll('<div class="relacionadosItem" />');
	
	$(".cajaDesplegable").find(".imagen").on("click", function (){
	$(this).next().find(".relacionadosItem").slideToggle(); 
	});
	$(".cajaDesplegable").find("h3").on("click", function (){
	$(this).nextAll("div.relacionadosItem").slideToggle(); 
	});
	$(".cajaDesplegable").find("h3").on("click", function (){
	$(this).nextAll("ul.listaCategorias").slideToggle(); 
	});
	$(".cajaDesplegable").find("img").on("click", function (){
	$(this).next().find(".listadoResultados").slideToggle(); 
	});
	$(".cajaDesplegable").find("h2").on("click", function (){
	$(this).nextAll("dl.relacionadosItem").slideToggle(); 
	});
	$(".cajaDesplegable").find("img").on("click", function (){
	$(this).addClass("imagenDesplegable");
	$(this).next("dl").slideToggle(); 
	});
	$(".cajaDesplegable").find("h2").on("click", function (){
	$(this).nextAll("dl").addClass("dlDesplegar");
	$(this).nextAll("dl").slideToggle(); 
	});
	$('.cajaDesplegable').find('h3').nextAll().not('div').wrapAll('<div class="relacionadosItem" />');
	
	
	$('#buscadorFormularioFechas').find('p').toggleClass('abierto');
	$('#buscadorFormularioFechas').find('p').on("click", function (){
		$(this).next("fieldset").slideToggle(); 
		$(this).toggleClass('abierto');
	});		
	
	$('.buscadorCategoriasComplejo ul.cat1nivel > li').has('ul').find('> label').addClass('padre');
	
	$('.buscadorCategoriasComplejo ul.cat1nivel > li').has('ul').find(' label').on("click", function (){
		$(this).toggleClass('abierto');
		$(this).parent().children('ul').slideToggle();
		return false; 
	});
	
	$('.buscadorCategoriasComplejo').find('input').on("click", function (){
		//$('input.marcado').removeClass('marcado');
		$('li.catMarcada').removeClass('catMarcada');
		//$(this).toggleClass('marcado');
		$(this).parents('li').addClass('catMarcada');	
	});
	
	//barraCompartir
	$('#barraCompartir').find('li.compartir > a').on("click", function (){
		$(this).toggleClass('abierto');
		$(this).next('ul').slideToggle();
		return false; 
	});
	
	//relacionados conc
	$('.concDesplegable').find('.desConTitulo').append('<span class="fa fa-arrow-circle-o-down"></span>');
	$('.concDesplegable').find('span.fa').on("click", function (){
		$(this).toggleClass('abierto');
		$(this).prev('div').slideToggle();
	});
	
	
	//meter masInfo en buscadorResultado
	
	$('p.masInfo').each(function () {
		var listaHermana = $(this).prev();
		$(this).appendTo(listaHermana);
	});
	
	outdatedBrowser({
	        //bgColor: '#0083D7',
	        color: '#FFF',
	        lowerThan: 'transform',
	        languagePath: ''
	    });
	
	
	$('.mason > div').addClass('brick');
	$('.mason > div:first-of-type').removeClass('brick');
	
	var $container = $('.mason');
	// initialize
	$container.masonry({
	  columnWidth: '.anchoBrick',
	  gutter: 1,
	  itemSelector: '.brick'
	});
	
	var msnry = $container.data('masonry');
		
	});
	})(jQuery);