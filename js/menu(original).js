$(function() {
	$('#menuMapaWeb').after('<div class="menuPrincipal"><ul><li>
	<a href="#" class="toggle-nav"><i class="fa fa-bars fa-border"></i></a></li></ul></div>');
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        
            if ($('#marco').hasClass('show-nav')) {
                // Do things on Nav Close
                $('#marco').removeClass('show-nav');
            } else {
                // Do things on Nav Open
                $('#marco').addClass('show-nav');
            }
            //$('#site-wrapper').toggleClass('show-nav');
    });
    
    
});
