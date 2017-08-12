$('.section3__big-slider').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: false,
  asNavFor: '.section3__min-slider', //синхронный слайдер
  focusOnSelect: false,
});

$('.section3__min-slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: false,
  appendArrows: $('.section3-slider__arrows'),
  prevArrow: '<button id="prev" type="button" class="btn section3-btn-prev"><span class = "section3-btn-prev-text">Назад</span><div class="section3-btn-prev-arrow"></div></button>',
  nextArrow: '<button id="next" type="button" class="btn section3-btn-next"><span class = "section3-btn-next-text">Вперед</span><div class="section3-btn-next-arrow"></div></button>',
  asNavFor: '.section3__big-slider' // синхроггый слайдер
});


//счетчик

$('.section3__big-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.section3__counter-big').text('0' + (nextSlide + 1));
});

.section3__content
          .slider-inner
            .big-slider__slide-circle
            .section3__big-slider
              .big-slider__slide.big-slider__slide-1.animated
                img(src="./images/features-slide1.png").big-slider__slide-foto.big-slider__slide-foto-1.animated

              .big-slider__slide.big-slider__slide-2.animated
                img(src="./images/features-slide2.png").big-slider__slide-foto.big-slider__slide-foto-2.animated

              .big-slider__slide.big-slider__slide-3.animated
                img(src="./images/features-slide3.png").big-slider__slide-foto.big-slider__slide-foto-3.animated

              .big-slider__slide.big-slider__slide-4.animated
                img(src="./images/features-slide4.png").big-slider__slide-foto.big-slider__slide-foto-4.animated

              .big-slider__slide.big-slider__slide-5.animated
                img(src="./images/features-slide5.png").big-slider__slide-foto.big-slider__slide-foto-5.animated

          .section3__slider-counter-wrapper
            .section3__min-slider
              .min-slider__slide.min-slider__slide-1
                .min-slider__icon.min-slider__icon-1
                  img(src="./images/features-icon1.png").min-slider__slide-foto-1
                .min-slider__text
                  | Не требуем генеральной доверенности и договор купли-продажи
              .min-slider__slide.min-slider__slide-2
                .min-slider__icon.min-slider__icon-2
                  img(src="./images/features-icon2.png").min-slider__slide-foto-2
                .min-slider__text
                  | Пересчет процентов
                  br.min-slider__text
                  | за пользование займом по дням
              .min-slider__slide.min-slider__slide-3
                .min-slider__icon.min-slider__icon-3
                  img(src="./images/features-icon3.png").min-slider__slide-foto-3
                .min-slider__text
                  | При заключении договора,
                  br.min-slider__text
                  | деньги наличными сразу
              .min-slider__slide.min-slider__slide-4
                .min-slider__icon.min-slider__icon-4
                  img(src="./images/features-icon3.png").min-slider__slide-foto-4
                .min-slider__text
                  | Высокая лояльность к клиентам
              .min-slider__slide.min-slider__slide-5
                .min-slider__icon.min-slider__icon-5
                  img(src="./images/features-icon3.png").min-slider__slide-foto-5
                .min-slider__text
                  | Работаем официально, состоим
                  br.min-slider__text
                  | на учете в ЦБ
            .section3__counter
              span.section3__counter-big
                | 01
              =" "
              span.section3__counter-min
            .section3-slider__arrows // место для своих стрелочек