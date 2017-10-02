if (nextSlide == 0 && currentSlide !== 1) {
      $(nextSlideElement).css({'animation-name': 'move-next-right'});
      $(currentSlideElement).css({'animation-name': 'move-prev-right'});

      setTimeout(function() {
        $(nextSlideElement).css('animation-name', '')
      }, 500);
      setTimeout(function() {
        $(currentSlideElement).css('animation-name', '')
      }, 500);

      setTimeout
    } else if (nextSlide == lastSlide && currentSlide == 0) {
      console.log('asdasd')
      $(nextSlideElement).css({'animation-name': 'move-next-left'});
      $(currentSlideElement).css({'animation-name': ' move-prev-left'});

      setTimeout(function() {
        $(nextSlideElement).css('animation-name', '')
      }, 500);
      setTimeout(function() {
        $(currentSlideElement).css('animation-name', '')
      }, 500);

    } else if (nextSlide > currentSlide && currentSlide !== lastSlide){
      $(nextSlideElement).css({'animation-name': 'move-next-right'});
      $(currentSlideElement).css({'animation-name': 'move-prev-right'});

      setTimeout(function() {
        $(nextSlideElement).css('animation-name', '')
      }, 500);
      setTimeout(function() {
        $(currentSlideElement).css('animation-name', '')
      }, 500);

    } else {
      $(nextSlideElement).css({'animation-name': 'move-next-left'});
      $(currentSlideElement).css({'animation-name': ' move-prev-left'});

      setTimeout(function() {
        $(nextSlideElement).css('animation-name', '')
      }, 500);

      setTimeout(function() {
        $(currentSlideElement).css('animation-name', '')
      }, 500);
    };
  });



          .slick-track {
            perspective-origin: 20% 50%;
            perspective: 1350px;
          }



@keyframes move-next-right {
  0% {
   transform: translateX(600px) rotateY(-70deg) scale(0.5);


    }
  100% {
    transform: translateX(0) rotateY(0) scale(1);

  }
}

@keyframes move-prev-right {
  0% {
   transform: translateX(0) rotateY(0) scale(1);

    }
  100% {
    transform: translateX(-600px) rotateY(70deg) scale(0.5);

  }
}

@keyframes move-next-left {
  0% {
   transform: translateX(-600px) rotateY(70deg) scale(0.5);


    }
  100% {
    transform: translateX(0) rotateY(0) scale(1);

  }
}

@keyframes move-prev-left {
  0% {
   transform: translateX(0) rotateY(0) scale(1);


    }
  100% {
    transform: translateX(600px) rotateY(-70deg) scale(0.5);
  }
}

