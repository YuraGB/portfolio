/**
 * App
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {Route, Switch, Redirect, withRouter, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import Layout from "./hoc/Layout/Layout";
import HomePageComponent from "./conteiners/HomePageComponent/HomePageComponent";
import ContactMeComponent from "./conteiners/ContactMeComponent/ContactMeComponent";
import AboutMeComponent from './conteiners/AboutMeComponent/AboutMeComponent';
import store from './store';

import './App.css';

/**
 * App the main wrapper
 *
 * @return {*} component
 */
const App:React.FC = () => {
  return (
      <Provider store={store()}>
          <BrowserRouter>
              <Layout>
                  <Switch>
                      <Route path='/aboutMe' component={AboutMeComponent}/>
                      <Route path='/contactMe' component={ContactMeComponent}/>
                      <Route path='/' exact component={HomePageComponent}/>
                      <Redirect to='/'/>
                  </Switch>
              </Layout>
          </BrowserRouter>
      </Provider>
  );
};

export default withRouter(App);
