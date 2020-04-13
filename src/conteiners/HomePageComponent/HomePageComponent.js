/**
 * Home Page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {useEffect, useState} from 'react';

import axios from '../../axios';
import WorkExperienceComponent from '../../components/Work/WorkExperienceComponent'
import classes from './HomePage.module.css';

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
        <article className={['content', classes.HomePage].join(' ')}>
            {proffesions && <WorkExperienceComponent work={proffesions} />}
        </article>
    )
};

export default HomePageComponent;