"use strict";
exports.__esModule = true;
exports.addButton = exports.addTextToElement = exports.deleteElementsInsideDiv = exports.createDiv = exports.createInputField = void 0;
exports.createInputField = function (idOfInputfieldPasteArea, idOfInputField) {
    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = idOfInputField;
    var placeToPasteInputField = document.getElementById(idOfInputfieldPasteArea);
    placeToPasteInputField.appendChild(inputField);
};
exports.createDiv = function (divPlacementId, divsID) {
    var div = document.createElement('div');
    div.id = divsID;
    var placeToAddDiv = document.getElementById(divPlacementId);
    placeToAddDiv.appendChild(div);
};
exports.deleteElementsInsideDiv = function (idOfPlaceToClear) {
    var placeToClear = document.getElementById(idOfPlaceToClear);
    placeToClear.innerHTML = "";
};
exports.addTextToElement = function (textPlacementId, textToPaste) {
    var placeToAddText = document.getElementById(textPlacementId);
    placeToAddText.innerText += textToPaste;
};
exports.addButton = function (buttonPlacementId, buttonText, attachedFunction, typeOfEventOnButton) {
    var btn = document.createElement('button');
    btn.addEventListener(typeOfEventOnButton, (attachedFunction));
    btn.innerHTML = buttonText;
    document.getElementById(buttonPlacementId).appendChild(btn);
};
