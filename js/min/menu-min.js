/**
* @license 
* menu.js - dgenerico
*/
jQuery.noConflict(),function($){$(function(){var o='<a href="#" class="toggle-nav"><i class="fa fa-bars"></i></a>';$("#menuMapaWeb").after('<div class="menuPrincipal"><ul><li>'+o+"</li></ul></div>"),$(".toggle-nav").click(function(){$("#marco").hasClass("show-nav")?$("#marco").removeClass("show-nav"):$("#marco").addClass("show-nav");var o='<a href="#" class="toggle-subNav"><i class="fa fa-angle-right"></i></a>';$(".nivel1").find("li:has(ul) > a").after(o),$(".nivel1").find("li > a.toggle-subNav").click(function(){$(this).next().slideToggle().css("display","flex"),$(this).toggleClass("abierto")})}),$(".enlacesPie").find("h2").on("click",function(){return $(this).next().slideToggle(),!1}),$(".site_1382936859765").find("ul.nivel2 > li > a").attr("href","#n")})}(jQuery),/**
* @license 
* accordion_movil.js
*/
jQuery.noConflict(),function($){$(function(){$("#accordion .interiorPromocion").first().css({display:"block",width:"280px"}),$("#accordion").tabs(".interiorPromocion",{tabs:"#accordion .imagenPromocion",effect:"slide",initialIndex:5}),$("#accordion .imagenPromocion").each(function(){var o=$(this).next("div");$(o).find("p.linea1cajaPromocion").appendTo($(this))}),$("#contenido_1421201680243 .imagenPromocion").on("click",function(){$("#contenidoCentralSuperior").css("background-image","url('//estaticos.coruna.es/imagesdu/fondoFoto_2.jpg')")}),$("#contenido_1421201704903 .imagenPromocion").on("click",function(){$("#contenidoCentralSuperior").css("background-image","url('//estaticos.coruna.es/imagesdu/fondoFotoOcioMovil.jpg')")}),$("#contenido_1421201707469 .imagenPromocion").on("click",function(){$("#contenidoCentralSuperior").css("background-image","url('//estaticos.coruna.es/imagesdu/fondoFotoCiudadMovil.jpg')")}),$("#contenido_1421201708910 .imagenPromocion").on("click",function(){$("#contenidoCentralSuperior").css("background-image","url('//estaticos.coruna.es/imagesdu/fondoFotoAytoMovil.jpg')")}),$("#accordion .interiorPromocion ul > li").has("ul").addClass("cerrado"),$("#accordion .interiorPromocion ul > li").click(function(o){$(this).has("ul").children().slideToggle(),$(this).has("ul").removeClass(function(){$(this).is(".cerrado")?($(this).removeClass("cerrado").addClass("abierto"),$(this).siblings().removeClass("abierto").addClass("cerrado"),$(this).siblings().children().attr("style","")):$(this).is(".abierto")&&$(this).removeClass("abierto").addClass("cerrado")}),o.stopPropagation()})})}(jQuery);