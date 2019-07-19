import React from 'react';

import './App.css';
import Search from './page/home'
import Header from './common/header'
import {BrowserRouter} from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Search/>
    </BrowserRouter>
  );
}

export default App;
