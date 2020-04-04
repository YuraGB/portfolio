/**
 * Backdrop unitest
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Backdrop from './Backdrop';

configure({adapter: new Adapter()});

describe('<Backdrop />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Backdrop />);
    });

    it('show backdrop if prop.show present', () => {
        wrapper.setProps({show:true});
        expect(wrapper.getElement()).toEqual(<div className='Backdrop'></div> );
    })
});