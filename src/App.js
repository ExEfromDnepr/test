import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import LatestPage from './modules/page/LatestPage.js';
import ViewPage from './modules/page/ViewPage.js';

const App = (props)=> {


  return (
    <Router>
      <Route exact path="/" component={LatestPage}  />
      <Route exact path="/viewPost/posts/" component={ViewPage}/>
    </Router>

  );
}



export default (App);
