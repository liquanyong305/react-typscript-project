import React from 'react';

import './App.css';
import { ClassCounter } from './common/sample';
import { Search} from './page/home/components/Search'
import Header from './common/header'
import {BrowserRouter} from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <ClassCounter label={'ClassCounter'} />
      <Search/>
    </BrowserRouter>
  );
}

export default App;
