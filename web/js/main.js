
jQuery(document).ready(function($) {
	$('.modal__tab').hide();
    $('.modal__tab:first').show();
	$('.head__conteiner div:first').addClass('active');

	$('.head__conteiner div').click(function(event) {
		$('.head__conteiner div').removeClass('active');
		$(this).addClass('active')
        $('.modal__tab').hide();

		var selectTab = $(this).find('a').attr("href");
		$(selectTab).fadeIn();

        $(function() {
            $('.slider').slick();
        });
    });
});
