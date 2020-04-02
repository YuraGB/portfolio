/**
 * Input UI element
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.css';

/**
 * Input UI component
 * @param {*} props
 * @return {*} component
 */
const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

  /*  if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    };*/

    switch (props.elementType) {
        case ('input'):
            inputElement = <input  onChange={props.changed}  name={props.name} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea  onChange={props.changed} name={props.name} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>;
            break;
        case ('select'):
            inputElement =
                <select  onChange={props.changed} name={props.name} className={inputClasses.join(' ')} value={props.value}>
                    {
                        props.elementConfig.options.map( option => {
                            return (
                                <option key={option.value} value={option.value}>
                                    {option.displayValue}
                                </option>
                            )
                        })
                    }
                </select>;
            break;
        default:
            inputElement = <input onChange={props.changed} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}  htmlFor="">{props.label ? props.label : props.name}</label>
            {inputElement}
        </div>
    )
};

Input.propTypes = {
    label: PropTypes.string,
    elementConfig: PropTypes.object
};

export default Input;