/**
 * Contact me page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import classes from './ContactMe.module.css';
import Input from "../../components/UI/Input/Input";

const ContactMeComponent = (props) => {
    return (
        <article>
            <h1 className='page_title'>Contact Me</h1>
            <form className={classes.ContactForm}>
                <Input elementType='textarea' label='Comment'/>
                <Input elementType='input' label='Your name'/>
                <Input elementType='input' label='email' elementConfig={{type: 'email'}}/>
            </form>
        </article>
    )
};

export default ContactMeComponent;