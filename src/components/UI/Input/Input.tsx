/**
 * Input UI element
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import classes from './Input.module.css';
import {UIInputInterface} from '../../../store/sagas/system/types';

/**
 * Input UI component
 * @param {*} props
 * @return {*} component
 */
const Input:React.FC<UIInputInterface> = ({
                   invalid,
                   touched,
                   shouldValidate,
                   changed,
                   name,
                   elementType,
                   elementConfig,
                   value,
                   label
}) => {
    let inputElement;
    const inputClasses = [classes.InputElement];

    if(invalid && shouldValidate && touched) {
        inputClasses.push(classes.Invalid);
    };

    switch (elementType) {
        case ('input'):
            inputElement = <input  onChange={changed}  name={name} className={inputClasses.join(' ')} {...elementConfig} value={value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea  onChange={changed} name={name} className={inputClasses.join(' ')} {...elementConfig} value={value}/>;
            break;
        case ('select'):
            inputElement =
                <select  onChange={changed} name={name} className={inputClasses.join(' ')} value={value}>
                    {
                        elementConfig.options.map( option => {
                            return (
                                <option key={option.value} value={option.value}>
                                    {option.value}
                                </option>
                            )
                        })
                    }
                </select>;
            break;
        default:
            inputElement = <input onChange={changed} className={inputClasses.join(' ')} {...elementConfig} value={value}/>;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}  htmlFor="">{label ? label : name}</label>
            {inputElement}
        </div>
    )
};

export default Input;