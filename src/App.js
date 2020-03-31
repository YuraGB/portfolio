/**
 * App
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Layout from "./hoc/Layout/Layout";
import HomePageComponent from "./conteiners/HomePageComponent/HomePageComponent";
import AboutMeComponent from "./conteiners/AboutMeComponent/AboutMeComponent";
import ContactMeComponent from "./conteiners/ContactMeComponent/ContactMeComponent";

/**
 * App the main wrapper
 *
 * @return {*} component
 */
function App() {
  return (
    <div>
      <Layout>
          <Switch>
              <Route path='/aboutMe' component={AboutMeComponent}/>
              <Route path='/contactMe' component={ContactMeComponent}/>
              <Route path='/' exact component={HomePageComponent}/>
              <Redirect to='/'/>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
