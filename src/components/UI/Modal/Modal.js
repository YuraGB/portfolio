/**
 * Modal
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useContext} from 'react';
import {CSSTransition} from "react-transition-group";

import classes from './Modal.module.css';
import Auxx from "../../../hoc/Auxx/Auxx";
import Backdrop from "../Backdrop/Backdrop";
import Context from "../../../Context/context";
import './modal-animation.css'


/**
 * Modal
 *
 * @param props
 * @return {*} component
 */
const Modal = (props) => {
    const {showModal, onOpenModalHandler} = useContext(Context);

    return (
        <Auxx>
            <CSSTransition
                in={showModal}
                classNames='show-popup'
                timeout={500}
            ><section
                className={classes.Modal}
            >
                {
                    props.children
                }
            </section>
            </CSSTransition>
            <Backdrop
                show={showModal}
                clicked={onOpenModalHandler}
            />
        </Auxx>
    )
};

export default React.memo(Modal);