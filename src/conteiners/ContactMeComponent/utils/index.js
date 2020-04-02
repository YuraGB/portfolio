/**
 * utils
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

/**
 * formFieldsToArray
 * Normalise object into array
 *
 * @param {*}obj
 * @return [{*}] Array of the inputs data
 */
export const formFieldsToArray = (obj) => {
    return Object.keys(obj).map(field => {
        return {
            id: field,
            ...obj[field]
        }
    });
};

/**
 * The object with validator functions*
 *
 */
export const validators = {
    checkForScriptsInText: (text) => {
        return true;
    },

    reqireCheck: (value) => {
       return value.trim() !== '';
    },

    validateEmail: (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
};
