const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
let templateNumber = -1;

document.addEventListener(`keydown`, function (evt) {
  if (evt.altKey && evt.keyCode === KEY_CODE_RIGHT) {
    if (templateNumber >= -1 && templateNumber < arrayTemplates.length - 1) {
      templateNumber++;
      showWindow(templateNumber);
    }
  }
  if (evt.altKey && evt.keyCode === KEY_CODE_LEFT) {
    if (templateNumber === -1) {
      return;
    }
    if (templateNumber > 0) {
      templateNumber--;
      showWindow(templateNumber);
    }
  }
}); 