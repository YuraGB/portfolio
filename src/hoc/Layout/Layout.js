/**
 * Layout page wrapper
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import Auxx from "../Auxx/Auxx";
import classes from './Layout.module.css';
import Toolbar from "../../components/Toolbar/Toolbar";
import ReturnToHPComponent from "../../components/Navigation/ReturnToHPComponent/ReturnToHPComponent";
import Context from "../../Context/context";
import FooterComponent from "../../components/Footer/FooterComponent";
import ApplicationMessagesComponent from "../../components/ApplicationMessagesComponent/ApplicationMessagesComponent";
import useLayoutCustomHook from "./LayoutCustomHook";
import PromptComponent from "../../components/PromptComponent/PromptComponent";

/**
 * Layout component
 * @param props
 * @return {*} Component
 */
const Layout = (props) => {
    const value = useLayoutCustomHook();

    return (
        <Auxx>
            <Context.Provider value={value}>
                <PromptComponent/>
                <ReturnToHPComponent />
                <ApplicationMessagesComponent message={value.message}/>
                <Toolbar isDirected={value.is_directToAboutMe} clicked={value.directToAboutMe}/>
                <main className={classes.Content}>
                    {props.children}
                </main>
                <FooterComponent/>
            </Context.Provider>
        </Auxx>
    )
};

export default Layout;
