/**
 * Error wrapper
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, {Component} from 'react';

import Auxx from "../Auxx/Auxx";
import Modal from "../../components/UI/Modal/Modal";
import {stateType} from '../../store/sagas/system/types';

/**
 * withErrorHandler
 *
 * @param {*} WrapperComponent component
 * @param {*} axios requests hendler
 * @return component
 */
const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        readonly reqInt:{any};
        readonly resInt:{any};
        constructor (props) {
            super(props);

            this.reqInt = axios.interceptors.request.use(null, req => {
                this.setState({error: null});
                return req;
            });

            this.resInt = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        };

        componentWillUnmount() {
            axios.interceptors.response.eject(this.resInt);
            axios.interceptors.request.eject(this.reqInt);
        };

        state:stateType = {
            error: null
        };

        errorConfirmMethod = () => {
            this.setState({error: null})
        };

        render() {
            return (
                <Auxx>
                    <Modal
                        show={!!this.state.error}
                        modalClosed={this.errorConfirmMethod}
                    >
                        {this.state.error ?
                            this.state.error.message:
                            null
                        }
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Auxx>
            )
        }
    }
};

export default withErrorHandler;