/**
 * Layout page wrapper
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useState} from 'react';

import Auxx from "../Auxx/Auxx";
import classes from './Layout.module.css';
import Toolbar from "../../components/Toolbar/Toolbar";
import ReturnToHPComponent from "../../components/Navigation/ReturnToHPComponent/ReturnToHPComponent";
import Context from "../../Context/context";
import ApplicationMessagesComponent from "../../components/ApplicationMessagesComponent/ApplicationMessagesComponent";

/**
 * Layout component
 *
 * @return component
 */
const Layout = (props) => {
    const [is_directToAboutMe, directToAbouteMeHendler] = useState(false);
    const [showModal, setModalStatus] = useState(false);
    const [message, applicationMessageHendler] = useState(null);

    const onOpenModalHandler = () => setModalStatus(prevState => !prevState);
    const directToAboutMe = () => directToAbouteMeHendler(true);
    const hideApplicationMessage = (response) => {
        applicationMessageHendler(response);

        setTimeout(() => {
           applicationMessageHendler(null)
        }, 5000);
    };

    return (
        <Auxx>
            <Context.Provider
                value={
                    {
                        is_directToAboutMe,
                        directToAboutMe,
                        showModal,
                        onOpenModalHandler,
                        message,
                        hideApplicationMessage
                    }
                }>
                <ReturnToHPComponent />
                <ApplicationMessagesComponent message={message}/>
                <Toolbar isDirected={is_directToAboutMe} clicked={directToAboutMe}/>
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Context.Provider>
        </Auxx>
    )
};

export default Layout;
