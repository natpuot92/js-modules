$("#popup-fotos__form").validate({
  rules: {
    fotos__name: {  // имена инпутов
      required: true
  },
    fotos__tel: {
      required: true,
      digits: true
    },
    fotos__email: {
      required: true,
      email: true
    },
    fotos__area: {
      required: true
  },
    popup_review__checkbox: {
      required: true
    }
  },
  messages: {
    fotos__name: {
      required: 'укажите ваше имя'
    },
    fotos__tel: {
      required: 'укажите ваш телефон',
      digits: 'только цифры'
    },
    fotos__email: {
      required: 'укажите ваш email',
      email: 'некорректрый email'
    },
    fotos__area: {
      required: 'введите ваше сообщение'
    }
  },
  submitHandler: function(form) {

  }
})