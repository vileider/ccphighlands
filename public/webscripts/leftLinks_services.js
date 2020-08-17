"use strict";
exports.__esModule = true;
var htmlService_templates_1 = require("./htmlService_templates");
var htmlService_templates_2 = require("./htmlService_templates");
var htmlService_templates_3 = require("./htmlService_templates");
var htmlService_templates_4 = require("./htmlService_templates");
var htmlService_templates_5 = require("./htmlService_templates");
var createLoginEnvironment = function () {
    htmlService_templates_1.deleteElementsInsideDiv('infoPanel');
    htmlService_templates_2.createDiv('infoPanel', 'LoginDiv');
    htmlService_templates_3.addTextToElement('LoginDiv', 'Login  ');
    htmlService_templates_4.createInputField('LoginDiv', 'LoginField');
    htmlService_templates_2.createDiv('infoPanel', 'PasswordDiv');
    htmlService_templates_3.addTextToElement('PasswordDiv', '\n Password');
    htmlService_templates_4.createInputField('PasswordDiv', 'PasswordField');
    htmlService_templates_5.addButton('infoPanel', 'Login', saveTypedLPIntoObject, 'click');
};
alert('ddd');
document.getElementById('LoginLeftLink').addEventListener('click', function () {
    createLoginEnvironment();
});
var saveTypedLPIntoObject = function () {
    var lPholder = {
        login: '',
        password: ''
    };
    lPholder.login = document.getElementById('LoginField').value;
    lPholder.password = document.getElementById('PasswordField').value;
    return lPholder;
};
