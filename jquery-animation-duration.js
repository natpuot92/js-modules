//jquery

var duration = 400;
 var elements = $('.section1__features-item')
 elements.each(function(index) {
   $(this).delay(duration * index).queue(function(){
     $(this).addClass('fadeInUp').dequeue();
   })
   });



//js
var duration = 400;
var elements = $('.section2__item');
var elementsGoodPosition = [];

elementsGoodPosition[0] = elements[1]
elementsGoodPosition[1] = elements[2]
elementsGoodPosition[2] = elements[0]
function addFade (index) {
  elementsGoodPosition[index].classList.add('fadeInUp');
}
for (var i = 0; elementsGoodPosition.length > i; i++) {
  var timeout = duration * i
  setTimeout(addFade, timeout, i);
};
