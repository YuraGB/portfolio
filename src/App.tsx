/**
 * App
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

import Layout from "./hoc/Layout/Layout";
import HomePageComponent from "./conteiners/HomePageComponent/HomePageComponent";
import './App.css';

/**
 * App the main wrapper
 *
 * @return {*} component
 */
const App:React.FC = () => {
  return (
      <Layout>
              <Switch>
                  <Route path='/' exact component={HomePageComponent}/>
                  <Redirect to='/'/>
              </Switch>
      </Layout>
  );
};

export default withRouter(App);
