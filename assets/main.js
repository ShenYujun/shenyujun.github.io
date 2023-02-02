(function () {
	$(function() {
		// Sidebar toggle behavior
		$('.nav-button').on('click', function() {
			$('.navbar-vertical, .nav-button, .content, .item').toggleClass('active');
		});

		$(".nav-item a").on('click', function() {
			$('.navbar-vertical, .nav-button, .content, .item').removeClass('active');
		});

		$(".content").on('click', function() {
			$('.navbar-vertical, .nav-button, .content, .item').removeClass('active');
		});

		$(window).on('scroll', function(event) {
			if ($(this).scrollTop() > 0) {
				$('.back-to-top-button').fadeIn(200);
			} else {
				$('.back-to-top-button').fadeOut(200);
			}
		});

		$(window).scroll(function() {
			var scrollbarLocation = $(this).scrollTop();
			$('.nav-link').each(function() {
				var sectionOffset = $(this.hash).offset().top;
				if (sectionOffset < scrollbarLocation + 50) {
					$(this).parent().addClass('active');
					$(this).parent().siblings().removeClass('active');
				}
			});
		});

	});

}());
