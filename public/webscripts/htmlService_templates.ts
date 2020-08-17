export var createInputField = function (idOfInputfieldPasteArea: string, idOfInputField: string) {
    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = idOfInputField;
    var placeToPasteInputField = document.getElementById(idOfInputfieldPasteArea);
    (<HTMLBodyElement>placeToPasteInputField).appendChild(inputField);
};
export var createDiv = function (divPlacementId: string, divsID: string) {
    var div = document.createElement('div');
    div.id = divsID;
    var placeToAddDiv = document.getElementById(divPlacementId);
    (<HTMLBodyElement>placeToAddDiv).appendChild(div);
};
export var deleteElementsInsideDiv = function (idOfPlaceToClear: string) {
    var placeToClear = document.getElementById(idOfPlaceToClear);
    (<HTMLBodyElement>placeToClear).innerHTML = "";
};
export var addTextToElement = function (textPlacementId: string, textToPaste: string) {
    var placeToAddText = document.getElementById(textPlacementId);
    (<HTMLBodyElement>placeToAddText).innerText += textToPaste;
};
export var addButton = function (buttonPlacementId: string, buttonText: string, attachedFunction:  () =>  void, typeOfEventOnButton: string) {
    var btn = document.createElement('button');
    btn.addEventListener(typeOfEventOnButton, (attachedFunction));
    btn.innerHTML = buttonText;
    (<HTMLBodyElement>document.getElementById(buttonPlacementId)).appendChild(btn);
};
