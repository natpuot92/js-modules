label.checkbox-wrapper
            .checkbox-wrapper__checkbox
              input(type="checkbox" name = "section1__checkbox" checked).section1__form-checkbox
              .checkbox
                span.checkbox__circle
                span.checkbox__yes.checkbox-active
                  | да
                span.checkbox__no
                  | нет
            .checkbox-wrapper__text
              span.checkbox-wrapper__text-1
                | Даю согласие на
                =' '
                a(href="#")
                  | Обработку персональных данных
                  = ' '
              span.checkbox-wrapper__text-2
                | Ваши данные не будут переданы третьим лицам

var checkBox1 = $('.section1__form-checkbox');
checkBox1.change(function() {
  if(checkBox1.prop('checked')) {
    $('.checkbox__circle').animate({"left": "23px"}, "fast", function() {
      $('.checkbox__yes').css("display", "block");
      $('.checkbox__no').css("display", "none");
      $('.section1__form-btn').prop('disabled', false);
    });
  } else {
    $('.checkbox__circle').animate({"left": "0"}, "fast", function() {
      $('.checkbox__yes').css("display", "none");
      $('.checkbox__no').css("display", "block");
      $('.section1__form-btn').prop('disabled', true);
    });
    };
});

