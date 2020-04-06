import React, {useState} from 'react';

import classes from "./FormContactMeComponent.module.css";
import Button from "../UI/Button/Button";
import * as utils from "../../conteiners/ContactMeComponent/utils";
import axios from "../../axios";
import Input from "../UI/Input/Input";
import withErrorHandler from "../../hoc/withErrorHendler/withErrorHendler";
import Spinner from "../Spinner/Spinner";

const FormContactMeComponent = (props) => {
    const [isValidated, setValidationStatus] = useState(false);
    const [spinner, showSpinner] = useState(null);
    const [formFields, updateFieldsHandler] = useState({
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
    });
    const checkValidity = (value, validationObject) => {
        let is_valid = true;
        if (!validationObject.required) {
            return true;
        }

        is_valid = utils.validators.reqireCheck(value) && is_valid;

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
            showSpinner(<Spinner/>);
            axios.post('/comments.json', {
                authorsName: formFields.name.value,
                authorsEmail: formFields.email.value,
                authorsComment: formFields.textarea.value
            })
            .then(resp => showSpinner(null))
            .catch(e => showSpinner(null))
        }
    };

    let fields = utils.formFieldsToArray(formFields).map( field => (
        <Input
            key={field.name}
            elementType={field.elementType}
            label={field.label}
            name={field.name}
            elementConfig={field.elementConfig}
            changed={(e)=> onChangeHandler(e, field.id)}
            touched={field.touched}
            invalid={!field.valid}
            shouldValidate={field.elementConfig.validation.required}
        />
    ));

    return (
        <form className={classes.ContactForm} onSubmit={(e) => e.preventDefault()}>
            {spinner ? spinner : fields}
            <Button
                btnType='Success'
                disabled={isValidated}
                clicked={onSubmitHandler}
            >Send</Button>
        </form>
    )
};

export default withErrorHandler(FormContactMeComponent, axios);