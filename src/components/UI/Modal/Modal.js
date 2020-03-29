/**
 * Modal
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.module.css';
import Auxx from "../../../hoc/Auxx/Auxx";
import Backdrop from "../Backdrop/Backdrop";

/**
 * Modal
 *
 * @param props
 * @return {*} component
 */
const Modal = (props) => {
    return (
        <Auxx>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0vh)': 'translateY(100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {
                    props.children
                }
            </div>
            <Backdrop
                show={props.show}
                clicked={props.modalClosed}
            />
        </Auxx>
    )
};

Modal.propTypes = {
    show: PropTypes.bool,
    modalClosed: PropTypes.func
};

export default React.memo(Modal);