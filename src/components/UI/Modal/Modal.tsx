/**
 * Modal
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {CSSTransition} from "react-transition-group";

import classes from './Modal.module.css';
import Auxx from "../../../hoc/Auxx/Auxx";
import Backdrop from "../Backdrop/Backdrop";
import './modal-animation.css';
import {IModalInterface} from '../../../store/sagas/system/types';

/**
 * Modal
 *
 * @param props
 * @return {*} component
 */
const Modal:React.FC<IModalInterface> = React.memo(({children, show, modalClosed}) => {
    return (
        <Auxx>
            <CSSTransition
                in={show}
                classNames='show-popup'
                timeout={500}
            ><section
                className={classes.Modal}
            >
                {
                    children
                }
            </section>
            </CSSTransition>
            <Backdrop
                show={show}
                clicked={modalClosed}
            />
        </Auxx>
    )
});

export default React.memo(Modal);