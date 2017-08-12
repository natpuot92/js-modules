$('.page-header__phone-btn').click(function(evt) {
  evt.preventDefault();
  $('.popup-fotos').removeClass('hidden');

  $("html,body").css("overflow","hidden"); // вот эта строка главная
});


$('.popup-btn__close-ask').click(function() {
  $('.popup-ask').addClass('hidden');

  $("html,body").css("overflow","auto");  // и эта
});




function OffScroll () {
  var winScrollTop = $(window).scrollTop();
  $(window).bind('scroll',function () {

    $(window).scrollTop(winScrollTop);
  });}


  OffScroll ();  //Запустили отмену прокрутки
$(window).unbind('scroll'); //Выключить отмену прокрутки