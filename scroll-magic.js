

var controller = new ScrollMagic.Controller();

  //top-block
var scene = new ScrollMagic.Scene({triggerElement: ".top-block"})
	.setClassToggle(".top-block__man", "fadein-animate-1")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".top-block"})
	.setClassToggle(".top-block__wave", "fadein-animate-2")
	.addTo(controller);
// who-block
var scene = new ScrollMagic.Scene({triggerElement: ".who"})
	.setClassToggle(".who__card-woman", "card-woman-animate")
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".who"})
	.setClassToggle(".who__card-square", "fadein-animate-1").re
	.addTo(controller);


.fadein-animate-1 {
  animation-delay: 0.3s;
  animation-name: fadeIn;
}

.fadein-animate-2 {
  animation-delay: 0.6s;
  animation-name: fadeIn;
}