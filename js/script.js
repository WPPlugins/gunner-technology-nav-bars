(function($){
  
  $(function() {
    $(".nav-collapse .nav > li").each(function() {
      if($(this).find('ul').length && !$(this).hasClass('dropdown')) {
        $(this).addClass('dropdown').find('a:first').addClass('dropdown-toggle').attr({'data-toggle': 'dropdown'}).append('<b class="caret"></b>').
        parent('li').find('ul').addClass('dropdown-menu');
      }
    });
  });
})(window.jQuery);