/**
 * Home Page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useEffect, useState} from 'react';

import axios from '../../axios';
import WorkExperienceComponent from '../../components/Work/WorkExperienceComponent'

/**
 * HomePageComponent
 *
 * @param {*} props
 * @return {*} component
 */
const HomePageComponent = (props) => {
    const [proffesions, setProffesions] = useState(null);

    useEffect( () => {
        axios.get('/work.json')
            .then(resp => setProffesions(resp.data)
        )
    }, []);

    return (
        <article className='content'>
            <h1 className='page_title'>HomePage</h1>
            {proffesions && <WorkExperienceComponent work={proffesions} />}
        </article>
    )
};

export default HomePageComponent;