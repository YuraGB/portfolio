/**
 * Work Experience component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {CSSTransition} from "react-transition-group";

import InfoBlockComponent from "../infoBlockComponent/infoBlockComponent";
import ListItem from "../ListIrem/ListItem";
import './HomePageBlock-animation.css';
import {HomePageBlockInterface} from '../../store/sagas/system/types';

/**
 * HomePageBlock
 *
 * @param work
 * @return {*}
 * @constructor
 */


const HomePageBlock: React.FC<HomePageBlockInterface> = (
    {
        category,
        title,
        type,
        linkDirection
    }
        ) => {
    const list = Object.keys(category)
        .map(e =>
            <ListItem
                key={e}
                link={linkDirection}
                name={type ? category[e][type] : e }
            />);

    return (
        <CSSTransition
            appear
            in={true}
            classNames='home-block'
            timeout={300}
        >
            <InfoBlockComponent title={title}>
                <ul>
                    {
                        list
                    }
                </ul>
            </InfoBlockComponent>
        </CSSTransition>
    )
};

export default HomePageBlock;