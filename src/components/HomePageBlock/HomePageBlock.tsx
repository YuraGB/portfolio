/**
 * Home Page block component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";

import InfoBlockComponent from "../infoBlockComponent/infoBlockComponent";
import ListItem from "./ListIrem/ListItem";
import './HomePageBlock-animation.css';
import {IHomePageBlockInterface, ChildrenType} from '../../system/types';
import ListCategory from "./listCategory/ListCategory";

/**
 * HomePageBlock
 *
 * @param work
 * @return {*}
 * @constructor
 */
const HomePageBlock: React.FC<IHomePageBlockInterface> = (
    {
        category,
        title,
        type,
        linkDirection
    }
        ) => {
    let list:ChildrenType;
    const [activeCategory, setActiveCategory] = useState('');
    const onHover = (categoryActive) => setActiveCategory(categoryActive);

    if (category) {
        list = Object.keys(category)
            .map(e =>
                <ListItem
                    key={e}
                    onHover={onHover}
                    link={linkDirection}
                    name={type ? category[e][type] : e}
                />);
    } else {
        list = null;
    }

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
                <section>
                    <ListCategory type={activeCategory}/>
                </section>
            </InfoBlockComponent>
        </CSSTransition>
    )
};

export default HomePageBlock;