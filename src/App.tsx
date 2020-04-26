/**
 * App
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {Route, Switch, Redirect, withRouter, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import Layout from "./hoc/Layout/Layout";
import HomePageComponent from "./conteiners/HomePageComponent/HomePageComponent";
import './App.css';
import {abMePageReducer, homePageReducer} from './store/reducers';
import {watchHP, watchABMe} from './store/sagas';
import AboutMeComponent from './conteiners/AboutMeComponent/AboutMeComponent';

const rootReducer = combineReducers({
       hp:homePageReducer,
       comments:abMePageReducer
    });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchHP);
sagaMiddleware.run(watchABMe);

/**
 * App the main wrapper
 *
 * @return {*} component
 */
const App:React.FC = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Layout>
                  <Switch>
                      <Route path='/aboutMe' component={AboutMeComponent}/>
                      <Route path='/' exact component={HomePageComponent}/>
                      <Redirect to='/'/>
                  </Switch>
              </Layout>
          </BrowserRouter>
      </Provider>
  );
};

export default withRouter(App);
