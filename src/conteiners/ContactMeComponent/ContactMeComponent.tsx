/**
 * Contact me page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {saveCommentsActionCreator} from '../../store/actions/actionCreators';
import FormContactMeComponent from "../../components/FormContactMe/FormContactMeComponent";
import * as utils from "./utils";
import {fireBaseCalls} from "../../axios";
import withErrorHandler from "../../hoc/withErrorHendler/withErrorHendler";

/**
 * ContactMeComponent page
 *
 * @return {*} component
 */
const ContactMeComponent = () => {
    const stateFields = {
        name: {
            elementType: 'input',
            label: 'Your name',
            name: 'name',
            value: '',
            valid: '',
            touched: '',
            elementConfig: {
                type: 'text',
                placeholder: 'Your name',
                validation: {
                    required: true
                }
            }
        },
        email: {
            elementType: 'input',
            label: 'E-mail',
            name: 'e_mail',
            value: '',
            valid: '',
            touched: '',
            elementConfig: {
                type: 'email',
                placeholder: 'Your e-mail',
                validation: {
                    required: true,
                    rules: [utils.validators.validateEmail]
                }
            }
        },
        textarea: {
            elementType: 'textarea',
            label: 'Message',
            name: 'message',
            valid: '',
            value: '',
            touched: '',
            elementConfig: {
                type: 'textarea',
                placeholder: 'Type your message',
                name: 'message',
                cols:"45",
                rows:'7',
                validation: {
                    required: true,
                    rules: [utils.validators.checkForScriptsInText]
                },
            }
        },
    };
    const dispatch = useDispatch();
    const spinner = useSelector(state => state.spinner);

    const [isValidated, setValidationStatus] = useState(false);
    const [formFields, updateFieldsHandler] = useState(stateFields);

    const checkValidity = (value, validationObject) => {
        let is_valid = true;
        if (!validationObject.required) {
            return true;
        }

        is_valid = utils.validators.requireCheck(value) && is_valid;

        if(validationObject.rules && is_valid) {
            is_valid = validationObject.rules.map(validator => validator(value)).every(isValid => isValid === true)
        }

        return is_valid;
    };

    const onChangeHandler = (e, field) => {
        const updatedForm = {
            ...formFields
        };

        const uptdFormElem = {
            ...updatedForm[field]
        };

        uptdFormElem.value = e.target.value;
        uptdFormElem.valid = checkValidity( uptdFormElem.value, uptdFormElem.elementConfig.validation);
        uptdFormElem.touched = true;
        updatedForm[field] = uptdFormElem;

        let formIsValid = utils.formFieldsToArray(updatedForm).every(isValidated => !!isValidated.valid === true);
        setValidationStatus(formIsValid);
        updateFieldsHandler(updatedForm);
    };

    const onSubmitHandler = () => {
        if (isValidated) {
            const data = {
                authorsName: formFields.name.value,
                authorsEmail: formFields.email.value,
                authorsComment: formFields.textarea.value,
                date: new Date().getTime()
            };

            dispatch(saveCommentsActionCreator(data));
        }
    };

    return (
        <article className='content'>
            <h1 className='page_title'>Contact Me</h1>
            <FormContactMeComponent
                isValidated={isValidated}
                setValidationStatus={setValidationStatus}
                spinner={spinner}
                formFields={formFields}
                checkValidity={checkValidity}
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
            />
        </article>
    )
};

export default withErrorHandler(ContactMeComponent, fireBaseCalls);