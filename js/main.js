jQuery(document).ready(function($){
        if (window.innerWidth <= 768){
          $('#cta-buttons').removeClass('btn-group-justified').addClass('btn-group-vertical btn-block');
          $('#details-tabs').removeClass('nav-justified');
        } else if (window.innerWidth > 768) {
          $('#cta-buttons').removeClass('btn-group-vertical').addClass('btn-group-justified');
          $('#details-tabs').addClass('nav-justified');
        }
        $('#details-table a').click(function (e) {
          e.preventDefault()
          $(this).tab('show')
        });
        if (window.innerWidth <= 960){
          $('#similar-vehicles-panel, #contact-map-panel').removeClass('in');
        }
        /*
       * Replace all SVG images with inline SVG
       */
        $('img.svg').each(function(){
          var $img = jQuery(this);
          var imgID = $img.attr('id');
          var imgClass = $img.attr('class');
          var imgURL = $img.attr('src');
  
          jQuery.get(imgURL, function(data) {
              // Get the SVG tag, ignore the rest
              var $svg = jQuery(data).find('svg');
  
              // Add replaced image's ID to the new SVG
              if(typeof imgID !== 'undefined') {
                  $svg = $svg.attr('id', imgID);
              }
              // Add replaced image's classes to the new SVG
              if(typeof imgClass !== 'undefined') {
                  $svg = $svg.attr('class', imgClass+' replaced-svg');
              }
              
              // Remove any invalid XML tags as per http://validator.w3.org
              $svg = $svg.removeAttr('xmlns:a');
              
              // Replace image with new SVG
              $img.replaceWith($svg);
          });
    
                    });
        (function($) {
            fakewaffle.responsiveTabs(['xs', 'sm']);
        })(jQuery);
      });
      jQuery(window).resize(function(){
        if (window.innerWidth <= 768){
          $('#cta-buttons').removeClass('btn-group-justified').addClass('btn-group-vertical btn-block');
          $('#details-tabs').removeClass('nav-justified');
        } else if (window.innerWidth > 768) {
          $('#cta-buttons').removeClass('btn-group-vertical').addClass('btn-group-justified');
          $('#details-tabs').addClass('nav-justified');
        }
        if (window.innerWidth <= 960){
          $('#similar-vehicles-panel, #contact-map-panel').collapse('hide');
        } else {
          $('#similar-vehicles-panel,  #contact-map-panel').collapse('show');
        }
      });