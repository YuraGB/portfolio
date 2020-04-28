/**
 * Application messages
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {CSSTransition} from "react-transition-group";
import {useDispatch, useSelector} from 'react-redux';

import classes from './ApplicationMessagesComponent.module.css';
import {setSystemMessage} from '../../store/actions/actionCreators';
import './animation.css';

/**
 * ApplicationMessagesComponent
 *
 * @return {*} component
 */
const ApplicationMessagesComponent:React.FC = () => {
    const {text, status} = useSelector(state => state.systemMessage);
    const dispatch = useDispatch();

    return (
        <CSSTransition
            in={!!status}
            timeout={4000}
            classNames='application-message'
            onEntered={() =>  dispatch(setSystemMessage({text: text, status: ''}))}
            onExited={() => dispatch(setSystemMessage({text: '', status: ''}))}
        >
            <div className={[classes.Message, classes[status]].join(' ')}>
                {text && (
                    <span>
                        {text}
                    </span>)
                }
            </div>
        </CSSTransition>
    );
};

export default ApplicationMessagesComponent;
