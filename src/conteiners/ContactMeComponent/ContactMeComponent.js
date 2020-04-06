/**
 * Contact me page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import FormContactMeComponent from "../../components/FormContactMe/FormContactMeComponent";

/**
 * ContactMeComponent page
 *
 * @param {*}props
 * @return {*} component
 */
const ContactMeComponent = (props) => {

    return (
        <article className='content'>
            <h1 className='page_title'>Contact Me</h1>
            <FormContactMeComponent/>
        </article>
    )
};

export default ContactMeComponent;