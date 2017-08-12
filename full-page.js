import fullpage from 'fullpage.js'

$(document).ready(function($) {   //инициализация
   $('#fullpage').fullpage({
    anchors:['page-1','page-2', 'page-3', 'page-4', 'page-5', 'page-6', 'page-7', 'page-8', 'page-9', 'page-10'],
    menu:' #menu',
    navigation: true,
    navigationPosition: 'left',
    responsiveWidth: 961,

    afterLoad: function(page) {
      if(!(page === 'page-1')) {
          $('.section1__features-item').css('opacity', 0);
          $('.section1__features-item').removeClass('fadeInUp');
        };
    },
    onLeave: function (link, index){
      if(index === 1) {
          $('.arrow-up').css('opacity', 0);
      }
    }
  })
});
