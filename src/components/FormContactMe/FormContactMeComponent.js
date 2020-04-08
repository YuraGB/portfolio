/**
 * The Form
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';
import PropTypes from 'prop-types';

import classes from "./FormContactMeComponent.module.css";
import Button from "../UI/Button/Button";
import * as utils from "../../conteiners/ContactMeComponent/utils";
import axios from "../../axios";
import Input from "../UI/Input/Input";
import withErrorHandler from "../../hoc/withErrorHendler/withErrorHendler";
import Spinner from "../Spinner/Spinner";

/**
 * Form component
 *
 * @param {*} props
 * @return {*} component
 */
export const FormContactMeComponent = (props) => {
    let fields = null;

    if( props.formFields) {
        fields = utils.formFieldsToArray(props.formFields).map(field => (
            <Input
                key={field.name}
                elementType={field.elementType}
                label={field.label}
                name={field.name}
                elementConfig={field.elementConfig}
                changed={(e) => props.onChangeHandler(e, field.id)}
                touched={field.touched}
                invalid={!field.valid}
                shouldValidate={field.elementConfig.validation.required}
            />
        ));
    }

    return (
        <form className={classes.ContactForm} onSubmit={(e) => e.preventDefault()}>
            {props.spinner ? <Spinner/> : fields}
            <Button
                btnType='Success'
                disabled={props.isValidated && !props.spinner}
                clicked={props.onSubmitHandler}
            >Send</Button>
        </form>
    )
};

FormContactMeComponent.propTypes = {
    formFields: PropTypes.object,
    isValidated:PropTypes.bool,
    onSubmitHandler: PropTypes.func,
    onChangeHandler: PropTypes.func
};

export default withErrorHandler(FormContactMeComponent, axios);
