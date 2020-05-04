/**
 * Work Experience component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from "react-transition-group";

import InfoBlockComponent from "../infoBlockComponent/infoBlockComponent";
import ListItem from "./ListIrem/ListItem";
import './HomePageBlock-animation.css';
import Context from "../../Context/context";
import DescriptionBlock from "../DescriptionBlock/DescriptionBlock";

/**
 * HomePageBlock
 *
 * @param work
 * @return {*}
 * @constructor
 */
const HomePageBlock = ({category, title, type, linkDirection}) => {
    const {state} = useContext(Context);
    const [categoryType, setActiveCategoryName] = useState('');
    const onHoverHendler = (categoryName) => setActiveCategoryName(categoryName);
    const list = Object.keys(category)
        .map(e =>
            <ListItem
                key={e}
                link={linkDirection}
                name={category[e][type] ? category[e][type] : e }
                onHover={onHoverHendler}
            />
            );

    return (
        <CSSTransition
            appear
            in={!!state.hp}
            classNames='home-block'
            timeout={300}
        >
            <InfoBlockComponent
                onMouseLeave={() => onHoverHendler('')}
                title={title}>
                <ul>
                    {
                        list
                    }
                </ul>
                <DescriptionBlock type={categoryType}/>
            </InfoBlockComponent>
        </CSSTransition>
    )
};

HomePageBlock.propTypes = {
    category: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.string,
    linkDirection: PropTypes.string
};

export default HomePageBlock;