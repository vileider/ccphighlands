
import {deleteElementsInsideDiv} from './htmlService_templates';
import {createDiv} from './htmlService_templates';
import {addTextToElement} from './htmlService_templates';
import {createInputField} from './htmlService_templates';
import {addButton} from './htmlService_templates';


var createLoginEnvironment = function () {
    deleteElementsInsideDiv('infoPanel');
    createDiv('infoPanel', 'LoginDiv');
    addTextToElement('LoginDiv', 'Login  ');
    createInputField('LoginDiv', 'LoginField');
    createDiv('infoPanel', 'PasswordDiv');
    addTextToElement('PasswordDiv', '\n Password');
    createInputField('PasswordDiv', 'PasswordField');
    addButton('infoPanel', 'Login', saveTypedLPIntoObject, 'click');
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
     
    lPholder.login = (<HTMLInputElement>document.getElementById('LoginField')).value;
    lPholder.password = (<HTMLInputElement>document.getElementById('PasswordField')).value;
    return lPholder;
};
