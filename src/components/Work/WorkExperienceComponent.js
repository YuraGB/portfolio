/**
 * Work Experience component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import PropTypes from 'prop-types';

import InfoBlockComponent from "../infoBlockComponent/infoBlockComponent";
import ProfessionComponent from "./ProfessionComponent/ProfessionComponent";

/**
 *
 * @param work
 * @return {*}
 * @constructor
 */
const WorkExperienceComponent = ({work}) => {
    const list = Object.keys(work).map(e => <ProfessionComponent key={e} name={work[e].proffesion}/>);

    return (
        <InfoBlockComponent title='Work Experience'>
            <ul>
                {
                    list
                }
            </ul>
        </InfoBlockComponent>
    )
};

WorkExperienceComponent.propTypes = {
    work: PropTypes.object
};

export default WorkExperienceComponent;