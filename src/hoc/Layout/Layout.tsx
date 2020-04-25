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
import ApplicationMessagesComponent from "../../components/ApplicationMessagesComponent/ApplicationMessagesComponent";

/**
 * Layout component
 * @param props
 * @return {*} Component
 */
const Layout:React.FC = (props) => {

    return (
        <Auxx>
                <ReturnToHPComponent />
                <ApplicationMessagesComponent />
                <Toolbar clicked={()=>{}}/>
                <main className={classes.Content}>
                    {props.children}
                </main>
                <footer>
                    <span>copyright</span>
                </footer>
        </Auxx>
    )
};

export default Layout;
