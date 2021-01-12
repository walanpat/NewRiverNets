import React, { useState, Component, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Specials = () => {
  return (
    <div className='FlexWrapper'>
      <h1>Specials</h1>
      <p>
        We often run across overruns, discontinued items and various other
        things from companies that are going out of business, moving or just
        changing direction. These items can be things we normally have in stock
        but found at a better price, like some of our rope specials or a one
        time deal like outboard parts or the marine wire. Either way they should
        be a great deal!{' '}
      </p>
      <p>
        For more great deals, look us up on eBay under Seller ID "ncnetman".
      </p>
      <strong>Current specials include the following:</strong>
      <Link to='/products/webbingandnetting'>
        <p>Webbing</p>
      </Link>
    </div>
  );
};

export default Specials;
