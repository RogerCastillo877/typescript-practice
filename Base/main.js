"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = function (text) {
        return (text.length > 3) ? true : false;
    };
    Validations.ValidateDate = function (myDate) {
        return (isNaN(myDate.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Rocas'));
//# sourceMappingURL=main.js.map