/**
 * Layout page wrapper
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {Component} from 'react';

import Auxx from "../Auxx/Auxx";
import classes from './Layout.module.css';
import Toolbar from "../../components/Toolbar/Toolbar";

/**
 * Layout component
 *
 * @return component
 */
class Layout extends Component {
    state = {
        showSideDrower: false
    };
    sideDrowerCloseHandler = () => {
        this.setState(prev => {
            return {
                ...prev,
                showSideDrower: !prev.showSideDrower
            }
        })
    };

    render() {
        return (
            <Auxx>
                <Toolbar
                    drawerToggleClicked={this.sideDrowerCloseHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxx>
        )
    }
}

export default Layout;
