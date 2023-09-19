const Validator = require('validator');
const isEmpty = require('is-empty');
const { default: isEmail } = require('validator/lib/isEmail');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    //Conversion of empty field to an empty string for validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.pass = !isEmpty(data.pass) ? data.pass : "";
    data.pass2 = !isEmpty(data.pass2) ? data.pass2 : "";

    //Name check
    if(Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    //Email check
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }else if(!isEmail(data.email)){
        errors.email = "Email is not valid";
    }

    //Password check
    if(Validator.isEmpty(data.pass)) {
        errors.pass = "Password field is required";
    }

    if(!Validator.isLength(data.pass, {min:6, max:30})) {
        errors.pass = "Password must be atleast 6 characters"
    }

    if(!Validator.equals(data.pass, data.pass2)) {
        errors.pass2 = "Passwords must match!";
    }

    return {
        errors, isValid: isEmpty(errors)
    };
};