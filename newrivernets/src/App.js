import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TitleBlock from '../src/components/titleBlock';
import SideBar from '../src/components/sideBar';
import ContactUs from '../src/pages/contactUs';
import Specials from '../src/pages/specials';
import NetsAndTrawls from '../src/pages/netsAndTrawls';
import WebbingAndNettingBlock from '../src/pages/webbingAndNetting';
import TrawlDoorsAndSteelBlock from '../src/pages/trawlDoorsAndSteel';

function App() {
  return (
    <div className='AppWrapper'>
      <Router>
        <SideBar />
        <div className='App'>
          <TitleBlock />
          <div>
            <Route path='/' exact component={TitleBlock} />
            <Route path='/contact' exact component={ContactUs} />
            <Route path='/products/specials' exact component={Specials} />
            <Route
              path='/products/netsandtrawls'
              exact
              component={NetsAndTrawls}
            />
            <Route
              path='/products/trawldoorsandsteel'
              exact
              component={TrawlDoorsAndSteelBlock}
            />
            <Route
              path='/products/webbingandnetting'
              exact
              component={WebbingAndNettingBlock}
            />
            <Route
              path='/products/floatsandleads'
              exact
              component={<div></div>}
            />
            <Route path='/products/twine' exact component={<div></div>} />
            <Route
              path='/products/ropeandcable'
              exact
              component={<div></div>}
            />
            <Route path='/products/hardware' exact component={<div></div>} />
            <Route
              path='/products/shellfishgear'
              exact
              component={<div></div>}
            />
            <Route path='/products/knives' exact component={<div></div>} />
            <Route path='/products/wearable' exact component={<div></div>} />
            <Route path='/products/deckgear' exact component={<div></div>} />
            <Route path='/products/boatstuff' exact component={<div></div>} />
            <Route path='/products/safety' exact component={<div></div>} />
            <Route
              path='/products/trailersandparks'
              exact
              component={<div></div>}
            />
            <Route path='/links' exact component={<div></div>} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
