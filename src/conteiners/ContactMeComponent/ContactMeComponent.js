/**
 * Contact me page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import classes from './ContactMe.module.css';
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

/**
 * ContactMeComponent page
 *
 * @param {*}props
 * @return {*} component
 */
const ContactMeComponent = (props) => {
    return (
        <article>
            <h1 className='page_title'>Contact Me</h1>
            <form className={classes.ContactForm} onSubmit={(e) => e.preventDefault()}>
                <Input
                    elementType='textarea'
                    label='Comment'
                    elementConfig={{
                        placeholder: 'Type your message',
                        name: 'message',
                        cols:"45",
                        rows:'7',
                    }}/>
                <Input
                    elementType='input'
                    label='Your name'
                    elementConfig={{
                        placeholder: 'Type your name',
                        name:'name'
                    }}/>
                <Input
                    elementType='input'
                    label='E-mail'
                    elementConfig={{
                        type: 'email',
                        name: 'email',
                        placeholder: 'Type your e-mail',
                    }}/>
                <Button>Send</Button>
            </form>
        </article>
    )
};

export default ContactMeComponent;