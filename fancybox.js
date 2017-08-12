
fancybox($);

$(document).ready(function() {
 $("a[rel=lightbox-group]").fancybox({
   helpers:  {
    overlay : {
      css : {
        'background' : 'rgba(255,255,255,0.5)'
      }
    }
  }
  });
});

//чтоб добавить стрелочки, нужно перенести картинку с ними и прописать путь