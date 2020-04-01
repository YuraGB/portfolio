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

/**
 * Layout component
 *
 * @return component
 */
const Layout = (props) => {
  //  const [showSideDrower, showSideDrowerHendler] = useState(false); in-progress
    const [is_directToAboutMe, directToAbouteMeHendler] = useState(false);

    const directToAboutMe = () => {
      directToAbouteMeHendler(true);
    };

    /*
        const sideDrowerCloseHandler = () => {
            showSideDrowerHendler(prev => {
                return {
                    ...prev,
                    showSideDrower: !prev.showSideDrower
                }
            })
        };*/

    return (
        <Auxx>
            <Context.Provider value={{is_directToAboutMe, directToAboutMe}}>
                <ReturnToHPComponent/>
                <Toolbar isDirected={is_directToAboutMe} clicked={directToAboutMe}/>
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Context.Provider>
        </Auxx>
    )
};

export default Layout;
