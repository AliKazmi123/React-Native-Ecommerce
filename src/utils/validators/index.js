import {Map} from 'immutable';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import passwordValidator from 'password-validator';
import { strings } from '../../res';
let schema = new passwordValidator();

export function validatorRegister(email, password, name) {
    let errors = Map();

    if (
        !name ||
        !isLength(name, { min: 1, max: 32 })
    ) {
        errors = errors.set('name', strings.error_text_name);
    }

    if (!email || !isEmail(email)) {
        errors = errors.set('email', strings.error_text_email);
    }

    if (!password || !schema.validate(password)) {
        errors = errors.set('password', strings.error_text_password);
    }

    return errors;
}

export function validatorSignIn(email, password) {
    let errors = Map();

    if (!email || !isEmail(email)) {
        errors = errors.set('email', strings.error_text_email);
    }

    if (!password || !schema.validate(password)) {
        errors = errors.set('password', strings.error_text_password);
    }

    if (
        !isLength(password, { min: 6 })
    ) {
        errors = errors.set('password', strings.error_text_password);
    }

    return errors;
}