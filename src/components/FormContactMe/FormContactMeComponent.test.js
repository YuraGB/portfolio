/**
 * Form unit test
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {FormContactMeComponent} from "./FormContactMeComponent";
import Spinner from "../Spinner/Spinner";
import Button from "../UI/Button/Button";
import * as utils from "../../conteiners/ContactMeComponent/utils";

configure({adapter: new Adapter()});

/**
 * there is an issue with HOC withErrorHandler
 * the tests don't work (
 */
describe('<ContactForm/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FormContactMeComponent formFields={{
            name: {
                elementType: 'input',
                label: 'Your name',
                name: 'name',
                value: '',
                valid: '',
                touched: '',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name',
                    validation: {
                        required: true
                    }
                }
            },
            email: {
                elementType: 'input',
                label: 'E-mail',
                name: 'e_mail',
                value: '',
                valid: '',
                touched: '',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your e-mail',
                    validation: {
                        required: true,
                        rules: [utils.validators.validateEmail]
                    }
                }
            },
            textarea: {
                elementType: 'textarea',
                label: 'Message',
                name: 'message',
                valid: '',
                value: '',
                touched: '',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Type your message',
                    name: 'message',
                    cols:"45",
                    rows:'7',
                    validation: {
                        required: true,
                        rules: [utils.validators.checkForScriptsInText]
                    },
                }
            },
        }} />);
    });

    it("If props.spinner true show spinner", () => {
        wrapper.setProps({spinner: true});
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it("there is submit Button", () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    })
});
