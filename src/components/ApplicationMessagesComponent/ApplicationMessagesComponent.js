/**
 * Application messages
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from "react-transition-group";

import classes from './ApplicationMessagesComponent.module.css';
import './animation.css';

/**
 * ApplicationMessagesComponent
 *
 * @param {*} message
 * @return {*} component
 */
const ApplicationMessagesComponent = ({message}) => {
    let component = null;
    const [messageStatus, handlerMessage] = useState(false);

    useEffect(() => {
        handlerMessage(!!message);
    }, [message]);

    if (message) {
        component =
            <CSSTransition
                in={messageStatus}
                timeout={4000}
                classNames='application-message'
                onEntered={() => handlerMessage(false)}
            >
                <div className={[classes.Message, classes[message.status]].join(' ')}>
                    <span>
                        {message.text}
                    </span>
                </div>
            </CSSTransition>
    }

    return component;
};

ApplicationMessagesComponent.propTypes = {
    message: PropTypes.object
};

export default ApplicationMessagesComponent;
