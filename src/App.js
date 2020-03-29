/**
 * App
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import classes from './App.module.css';
import Layout from "./hoc/Layout/Layout";

/**
 * App the main wrapper
 *
 * @return {*} component
 */
function App() {
  return (
    <div className={classes.App}>
      <Layout>

      </Layout>
    </div>
  );
}

export default App;
