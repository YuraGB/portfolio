/**
 * App
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import classes from './App.module.css';
import Layout from "./hoc/Layout/Layout";
import HomePageComponent from "./conteiners/HomePageComponent/HomePageComponent";
import AboutMeComponent from "./conteiners/AboutMeComponent/AboutMeComponent";

/**
 * App the main wrapper
 *
 * @return {*} component
 */
function App() {
  return (
    <div className={classes.App}>
      <Layout>
          <Switch>
              <Route path='/aboutMe' component={AboutMeComponent}/>
              <Route path='/' exact component={HomePageComponent}/>
              <Redirect to='/'/>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
