$(function() {
	smoothScroll(300);
	travelBelt();
	travelLoad();
	projectStuff();
	
	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
	$(".biglink").fitText(1.5);
	
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


function travelBelt() {
  
  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-unit').click(function() {
    $('.travel-belt').addClass("slided");
    $('.travel-container').show();
  });
  
  $('.travel-return').click(function() {
    $('.travel-belt').removeClass("slided");
    $('.travel-container').hide(800);
  });

}


function  travelLoad() {
  
  $.ajaxSetup({ cache: true });
  
  $('.thumb-unit').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'travel/'+ newfolder;
      
    $('.trip-load').html(spinner).load(newHTML);
    $('.trip-title').text(newTitle);
  });
  
}




function projectStuff() {
  
  $('.project-unit').first().addClass('active-project');
  $('.project-logo').first().addClass('active-project');
  $('.projects-mobile-nav span').first().addClass('active-project');
  
  
  $('.project-logo, .projects-mobile-nav span').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);
        
    $('.project-unit').removeClass('active-project').eq(position).addClass('active-project');
    $siblings.removeClass('active-project');
    $this.addClass('active-project');
  });
  
  
  $('.project-control-next, .project-control-prev').click(function() {
  
    var $this = $(this),
        curActiveProject = $('.projects-belt').find('.active-project'),
        position = $('.projects-belt').children().index(curActiveProject),
        projectNum = $('.project-unit').length;
        
      if($this.hasClass('project-control-next')) {
        
        if(position < projectNum -1){
          $('.active-project').removeClass('active-project').next().addClass('active-project');
        } else {
          $('.project-unit').removeClass('active-project').first().addClass('active-project');
          $('.project-logo').removeClass('active-project').first().addClass('active-project');
        }
        
      } else {
        
        if (position === 0) {
          $('.project-unit').removeClass('active-project').last().addClass('active-project');
          $('.project-logo').removeClass('active-project').last().addClass('active-project');
        } else {
          $('.active-project').removeClass('active-project').prev().addClass('active-project');  
        }

      }
        
  
  });
  
}


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );





