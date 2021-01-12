import React, { useState, Component, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const NetsAndTrawls = () => {
  return (
    <div className='FlexWrapper'>
      <h3>
        <Link to='/'>Flounder</Link> Nets, <Link to='/'>Spot(Sink)</Link> Nets,
        <Link to='/'> Menhaden (Bait)</Link> Nets, <Link to='/'>Channel</Link>{' '}
        Nets, <Link to='/'>Shrimp Trawls</Link>
      </h3>
      <h2>Custom Nets:</h2>
      <p>
        If you don't find what you are looking for below, we can make a net to
        your specifications.
      </p>
      <p>
        ----------------------------------------------------------------------------------------------
      </p>
      <h2>Flounder Nets:</h2>
      <p>
        Stretched Mesh Sizes: 5-1/2", 5-3/4", or 6", available in #177 or #139
        webbing and also in #208 webbing for an additional charge.
      </p>
      <p>
        {' '}
        15MD available with or without floats on the topline to comply with NC
        laws
      </p>
      <div className='FlexGrid'>
        <div style={{ marginRight: '10%' }}>
          <p>100 yard nets</p>
          <p>50 yard nets</p>
        </div>
        <div>
          <p>$280</p>
          <p>$145</p>
        </div>
      </div>
      <p>
        ----------------------------------------------------------------------------------------------
      </p>
      <h3>Menhaden Bait Nets</h3>
      <div className='FlexGrid'>
        <div style={{ marginRight: '10%' }}>
          <p>Mesh size 1 9/16 x 3 1/8 stretch</p>
          <p>1 5/8 x 3 1/4 "</p>
          <p>1 3/4 x 3 1/2 "</p>
          <p>1 7/8 x 3 3/4 "</p>
        </div>
        <div>
          <p>$205.00 ea.</p>
          <p>$205.00 ea.</p>
          <p>$205.00 ea.</p>
          <p>$205.00 ea.</p>
        </div>
      </div>
      <p>50 yd, 50 meshes deep, with heavy lead core bottom line: </p>
      <p>
        ----------------------------------------------------------------------------------------------
      </p>
      <h3>Haul Seines</h3>
      <p>4-1/2ft deep, made from #6 1-1/4" Poly Webbing</p>
      <div className='FlexGrid'>
        <div style={{ marginRight: '10%' }}>
          <p>12ft</p>
          <p>29ft</p>
        </div>
        <div>
          <p>$35</p>
          <p>$95</p>
        </div>
      </div>
      <p>
        ----------------------------------------------------------------------------------------------
      </p>
      <h3>Bait Seines</h3>
      <p>
        4ft deep.Commercial grade leads and football shaped floats w/black poly
        webbing
      </p>
      <div className='FlexGrid'>
        <div style={{ marginRight: '10%' }}>
          <p>1/8 square</p>
          <p>1/8 sq</p>
          <p>1/4 square</p>
          <p>1/4 sq</p>
          <p>1/4 sq</p>
          <p>1/4 sq</p>
        </div>
        <div style={{ marginRight: '10%' }}>
          <p>mesh x 20 ft long</p>
          <p>mesh x 25 ft long</p>
          <p>mesh x 15 ft long</p>
          <p>mesh x 20 ft long</p>
          <p>mesh x 25 ft long</p>
          <p>mesh x 30 ft long</p>
        </div>
        <div>
          <p>$26.00</p>
          <p>$35.00</p>
          <p>$17.00</p>
          <p>$23.00</p>
          <p>$27.00</p>
          <p>$41.00</p>
        </div>
      </div>
      <p>
        ----------------------------------------------------------------------------------------------
      </p>
      <h3>Channel Nets</h3>
      <p>
        100ft Channel Net w/ 120 mesh wings, made from #12 x 1-1/2" stretch
        Nylon (dipped): $500 used
      </p>
      <br />
      <h3>Shrimp Trawls</h3>
      <p>
        These trawls are of 6, 7, or 9 twine of poly or nylon and are hung on
        poly rope. Brown shrimp trawls are usually made using a two-seam
        construction. White shrimp trawls will usually utilize a "mongoose"
        pattern and require a center tow line. Trawl Only is a complete trawl
        including tailbag with fish excluders (2 per NC requirement) and has
        floats and chains. A Complete Trawl includes all the Trawl Only
        components plus poly tow lines, tickler chain, trawl doors, shackles to
        attach everything and a recreational fisherman's pink float for the
        tailbag (if applicable) - everything you need to hook up to your boat.
      </p>
      <h4>Brown Shrimp Trawls</h4>
      <div className='FlexGrid'>
        <div style={{ marginRight: '10%' }}>
          <strong>Size</strong>
          <p>10ft</p>
          <p>15ft</p>
          <p>20ft</p>
          <p>26ft</p>
          <p>30ft</p>
          <p>35ft</p>
        </div>
        <div style={{ marginRight: '10%' }}>
          <strong>Trawl Only</strong>
          <p>$160.00</p>
          <p>$240.00</p>
          <p>$320.00</p>
          <p>$416.00</p>
          <p>$480.00</p>
          <p>$560.00</p>
        </div>
        <div>
          <strong>Complete Trawl</strong>
          <p>$280.00</p>
          <p>$420.00</p>
          <p>$560.00</p>
          <p>$728.00</p>
          <p>$840.00</p>
          <p>$980.00</p>
        </div>
      </div>
      <h4>White Shrimp Trawls</h4>
      <div className='FlexGrid'>
        <div style={{ marginRight: '10%' }}>
          <strong>Size</strong>
          <p>10ft</p>
          <p>15ft</p>
          <p>20ft</p>
          <p>26ft</p>
          <p>30ft</p>
          <p>35ft</p>
        </div>
        <div style={{ marginRight: '10%' }}>
          <strong>Trawl Only</strong>
          <p>$180.00</p>
          <p>$270.00</p>
          <p>$360.00</p>
          <p>$468.00</p>
          <p>$540.00</p>
          <p>$630.00</p>
        </div>
        <div>
          <strong>Complete Trawl</strong>
          <p>$300.00</p>
          <p>$450.00</p>
          <p>$600.00</p>
          <p>$780.00</p>
          <p>$900.00</p>
          <p>$1050.00</p>
        </div>
      </div>
      <p>
        ----------------------------------------------------------------------------------------------
      </p>
    </div>
  );
};

export default NetsAndTrawls;
