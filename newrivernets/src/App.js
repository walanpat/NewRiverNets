import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='AppWrapper'>
      <div className='SideBar'>
        <h1>Side Bar</h1>
        <br />
        Home
        <br />
        Contact Us
        <br />
        Specials
        <br />
        Nets and Trawls
        <br />
        Trawl Doors and Steel
        <br />
        Webbing and Netting
        <br />
        Floats and Lead
        <br />
        Twine
        <br />
        Rope and Cable
        <br />
        Hardware
        <br />
        Shellfish Gear
        <br />
        Knives
        <br />
        Wearables
        <br />
        Deck Gear
        <br />
        Boat Stuff
        <br />
        Safety
        <br />
        Trailers and Parts
        <br />
        Links
      </div>
      <div className='App'>
        <div>
          <h1>New River Nets</h1>
        </div>
        <div>
          {' '}
          <h1>New River Nets</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
