const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    //Convert empty fields t an empty string for validator
    data.email = !isEmpty(data.email) ? data.email : "";
    data.pass = !isEmpty(data.pass) ? data.pass : "";

    //Email Checks
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }else if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    //Password check
    if(Validator.isEmpty(data.pass)) {
        errors.pass = "Password field is required";
    }

    return {
        errors, isValid: isEmpty(errors)
    };
};