import React from 'react';

import './App.css';
import { ClassCounter } from './common/sample';
import Header from './common/header'
import {BrowserRouter} from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <ClassCounter label={'ClassCounter'} />
    </BrowserRouter>
  );
}

export default App;
