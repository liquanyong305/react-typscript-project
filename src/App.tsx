import React from 'react';

import './App.css';
import Search from './page/home'
import BasicInfo from './page/basicInfo'
import Header from './common/header'
import Error from './common/error/Error'
import ErrorBoundary from './common/error/ErrorBoundary'
import {BrowserRouter, Route} from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <ErrorBoundary>
      <Header></Header>
      <Route path='/search' exact component={Search}></Route>
      <Route path='/basicInfo' exact component={BasicInfo}></Route>
      <Route path='/error' exact component={Error}></Route>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
