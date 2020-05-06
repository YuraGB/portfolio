import React from 'react';

import classes from './Profile.module.css';
import ProfilePicture from '../../assets/images/profileImg/profileImg.jpeg'

const ProfileImg = () => {
    return (
        <section className={classes.Profile}>
            <img src={ProfilePicture} alt="profileImg"/>
        </section>
    )
};

export default ProfileImg;