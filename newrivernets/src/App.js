import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TitleBlock from '../src/components/titleBlock';
import SideBar from '../src/components/sideBar';
function App() {
  return (
    <div className='AppWrapper'>
<SideBar/>       
      <div className='App'>
        <TitleBlock/>
        <div>
          {' '}
          <h1>New River Nets</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
