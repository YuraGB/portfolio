/**
 * The Form
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import classes from "./FormContactMeComponent.module.css";
import Button from "../UI/Button/Button";
import * as utils from "../../conteiners/ContactMeComponent/utils";
import {fireBaseCalls} from "../../axios";
import Input from "../UI/Input/Input";
import withErrorHandler from "../../hoc/withErrorHendler/withErrorHendler";
import Spinner from "../Spinner/Spinner";
import {IFormInterface} from "../../system/types"

/**
 * FormContactMeComponent
 *
 * @param formFields
 * @param onChangeHandler
 * @param isValidated
 * @param spinner
 * @param onSubmitHandler
 * @constructor
 */
export const FormContactMeComponent:React.FC<IFormInterface> = (
    {
        formFields,
        onChangeHandler,
        isValidated,
        spinner,
        onSubmitHandler
    }) => {
    let fields;

    if(formFields) {
        fields = utils.formFieldsToArray(formFields).map(field => (
            <Input
                key={field.name}
                elementType={field.elementType}
                label={field.label}
                name={field.name}
                elementConfig={field.elementConfig}
                changed={(e) => onChangeHandler(e, field.id)}
                touched={field.touched}
                invalid={!field.valid}
                shouldValidate={field.elementConfig.validation.required}
            />
        ));
    } else {
        fields = null;
    }

    return (
        <form className={classes.ContactForm} onSubmit={(e) => e.preventDefault()}>
            {spinner ? <Spinner/> : fields}
            <Button
                btnType='Success'
                disabled={isValidated && !spinner}
                clicked={onSubmitHandler}
            >Send</Button>
        </form>
    )
};

export default withErrorHandler(FormContactMeComponent, fireBaseCalls);
