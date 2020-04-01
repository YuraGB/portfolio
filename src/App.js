/**
 * App
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import Layout from "./hoc/Layout/Layout";
import HomePageComponent from "./conteiners/HomePageComponent/HomePageComponent";
import AboutMeComponent from "./conteiners/AboutMeComponent/AboutMeComponent";
import ContactMeComponent from "./conteiners/ContactMeComponent/ContactMeComponent";
import './App.css';

/**
 * App the main wrapper
 *
 * @return {*} component
 */
function App({location}) {
  return (
    <div>
      <Layout>
          <TransitionGroup>
              <CSSTransition
                  key={location.key}
                  timeout={{ enter: 300, exit: 100 }}
                  classNames='page-content'
              >
          <Switch>
              <Route path='/aboutMe' component={AboutMeComponent}/>
              <Route path='/contactMe' component={ContactMeComponent}/>
              <Route path='/' exact component={HomePageComponent}/>
              <Redirect to='/'/>
          </Switch>
              </CSSTransition>
          </TransitionGroup>
      </Layout>
    </div>
  );
}

export default withRouter(App);
