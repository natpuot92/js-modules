$('.overlay').click(function(evt) {
  if ($(evt.target).closest('.popup__container').length == 0) {
    $('.popup-ask').addClass('hidden');
    $('.popup-fotos').addClass('hidden');
    $('.popup-review').addClass('hidden');
    $("html,body").css("overflow","auto");
  }
})