/**
* @license 
* tabsTexto.js
*/


jQuery.noConflict();
(function($) {
$(function(){
	$('.panes').before('<ul id="etiquetas" class="tabs"></ul>');
	
	$('#etiquetas').before($('.panes h2'));
	$('#etiquetas').before($('.panes > h3'));
	
	$('.panes .cajaGenerica a[name]').each(function()
		{
			var idEnlace = $(this).attr("name");
			$(this).parent().attr('id', 'tab' + idEnlace);
		});

	$('.panes .textoContenido h3').each(function()
		{
			var hrefPadre = $(this).parents('.cajaGenerica').attr('id');
			var htmlStr = $(this).html();
			$('.tabs').append('<li><a href="#' + hrefPadre + '">'+ htmlStr +'</a></li>');
		});
		
	$('.panes .textoContenidoTab h3').each(function()
		{
			var hrefPadre = $(this).parents('.cajaGenerica').attr('id');
			var htmlStr = $(this).html();
			$('.tabs').append('<li><a href="#' + hrefPadre + '">'+ htmlStr +'</a></li>');
		});
	

	$("ul.tabs").tabs("div.panes > div");
	
});
})(jQuery);
