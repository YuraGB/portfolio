/**
 * Work Experience component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import PropTypes from 'prop-types';

import InfoBlockComponent from "../infoBlockComponent/infoBlockComponent";
import ListItem from "../ListIrem/ListItem";

/**
 *
 * @param work
 * @return {*}
 * @constructor
 */
const HomePageBlock = ({category, title, type}) => {
    const list = Object.keys(category).map(e => <ListItem key={e} name={category[e][type] ? category[e][type] : e }/>);

    return (
        <InfoBlockComponent title={title}>
            <ul>
                {
                    list
                }
            </ul>
        </InfoBlockComponent>
    )
};

HomePageBlock.propTypes = {
    category: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.string
};

export default HomePageBlock;