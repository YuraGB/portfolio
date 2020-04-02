/**
 * asyncComponent wrapper
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {Component} from 'react';

/**
 * asyncComponent
 * lazy load
 *
 * @param importComponent
 * @return {*} component
 */
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        };

        componentDidMount() {
            importComponent()
            .then( cmp => {
                this.setState({component:cmp.default});
            })
        }

        render () {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
};

export default asyncComponent;