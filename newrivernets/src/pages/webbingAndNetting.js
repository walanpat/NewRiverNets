import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const WebbingAndNettingBlock = () => {
  return (
    <div className='FlexWrapper'>
      <p>
        Check out our <Link to='/'>Webbing Clearence!</Link>
      </p>
      <h2>Shrimp Trawl Webbing</h2>
      <p>Poly or Nylon</p>
      <p>Knotted</p>
      <p>(Available by the bale or by the lb)</p>

      <p>
        Twine size........stretched mesh
        size..............nylon.............poly.........These prices are for
        uncut bales 100-200 lbs.
      </p>
      <div className='FlexGrid'>
        <div style={{ marginRight: '10%' }}>
          <p>#6</p>
          <p>#7</p>
          <p>#9</p>
          <p>#12</p>
          <p>#15</p>
        </div>
        <div style={{ marginRight: '10%' }}>
          <p>1 1/2 x 200 md</p>
          <p>1 1/2-1 5/8-1 3/4-1 7/8x200</p>
          <p>1 1/2-1 5/8-1 3/4-1 7/8x200</p>
          <p>1 1/2-1 5/8-1 3/4-1 7/8x200</p>
          <p>1 5/8-1 3/4-1 7/8x200</p>
        </div>
        <div style={{ marginRight: '10%' }}>
          <p>$8.00lb</p>
          <p>$7.00lb</p>
          <p>$7.00lb</p>
          <p>$6.00lb</p>
          <p>$6.00lb</p>
        </div>
        <div>
          <p>$5.75lb</p>
          <p>$5.75lb</p>
          <p>$5.20lb</p>
          <p>$4.85lb</p>
          <p>$4.60lb</p>
        </div>
      </div>
      <h4>Bag Webbing: poly or nylon</h4>
      <div className='FlexGrid'>
        <div style={{ marginRight: '10%' }}>
          <p>#15</p>
          <p>#18</p>
          <p>#21</p>
          <p>#24</p>
          <p>#30</p>
          <p>#36</p>
          <p>#42</p>
        </div>
        <div style={{ marginRight: '10%' }}>
          <p>1 1/4-1 1/2x 120md</p>
          <p>1 1/2 x 120md</p>
          <p>1 1/2 x 120md</p>
          <p>1 1/2 x 120md</p>
          <p>1 1/2 x 120md</p>
          <p>1 1/2-1 3/4x120md</p>
          <p>1 1/2 x 120md</p>
        </div>
        <div>
          <p>$7.00 lb</p>
          <p>$7.00 lb</p>
          <p>$7.00 lb</p>
          <p>$7.00 lb</p>
          <p>$7.00 lb</p>
          <p>$7.00 lb</p>
          <p>$7.00 lb</p>
        </div>
      </div>

      <h2>Braided Nylon</h2>
      <p>Used for Scallop and Clam Nets and Scallop Drags</p>
      <p>
        #84. ------------------ 3" stretch ------------------ $5.00 lb/bale
        ------------------ $5.50lb/piece
      </p>

      <h3>MONO WEBBING PRICES:</h3>
      <div className='FlexGrid2'>
        <div className='FlexGrid'>
          <div style={{ marginRight: '10%' }}>
            <p>#46, #69 or #104</p>
            <p>#139</p>
            <p>#177</p>
          </div>
          <div>
            <p>$10.00 /LB</p>
            <p>$9.00 /LB</p>
            <p>$9.00 /LB</p>
          </div>
        </div>
        <div className='FlexGrid'>
          <div style={{ marginRight: '10%' }}>
            <p>#208</p>
            <p>#277 (.57mm)</p>
            <p>.60, .66, .70, .81, .90mm</p>
          </div>
          <div>
            <p>$9.00 /LB</p>
            <p>$9.00 /LB</p>
            <p>$9.00 /LB</p>
          </div>
        </div>
      </div>

      <h4>Clearance Length Stretch Webbing</h4>
      <strong>Mono Webbing @ $3/lb:</strong>
      <div className='FlexGrid'>
        <div style={{ marginRight: '5%' }}>
          <p>0.40mm (#139) </p>
          <p>0.40mm (#139) </p>
          <p>0.40mm (#139) </p>
          <p>0.40mm (#139) </p>
        </div>
        <div style={{ marginRight: '5%' }}>
          {' '}
          <p> 4-1/4" 20MD in</p>
          <p> 4-1/4" 25MD in</p>
          <p> 4-1/2" 20MD in</p>
          <p> 4-1/2" 25MD in</p>
        </div>
        <div>
          {' '}
          <p> ~ 5-lb bundles (only three of these left!)</p>
          <p> ~ 5-lb bundles</p>
          <p> ~ 5-lb bundles</p>
          <p> ~ 5-lb bundles</p>
        </div>
      </div>
      <strong>Nylon Multi-Filament @ $3 /lb:</strong>
      <div className='FlexGrid'>
        <div style={{ marginRight: '5%' }}>
          <p>0.46mm </p>
          <p>0.46mm </p>
          <p>0.46mm </p>
          <p>0.46mm </p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.69mm</p>
          <p>0.33mm (#104) </p>
          <p>0.33mm (#104) </p>
          <p>0.40mm (#139)</p>
          <p>0.40mm (#139)</p>
          <p>0.40mm (#139)</p>
        </div>
        <div style={{ marginRight: '5%' }}>
          <p> 2-1/2" x 35MD in</p>
          <p>2-5/8" x 35MD in</p>
          <p>2-3/8" x 30MD in</p>
          <p>4-1/4" x 24MD in</p>
          <p>3-3/4" x 25MD in</p>
          <p>3-3/4" x 50MD in</p>
          <p>4" x 50MD in </p>
          <p>4-1/8" x 22MD in</p>
          <p>4-1/4" x 45MD in</p>
          <p>4-1/2" x 22MD in</p>
          <p>4-1/2" x 55MD in </p>
          <p> 4-15/16" x 35MD in</p>
          <p>5-1/4" x 25MD in</p>
          <p>5-1/4" x 45MD</p>
          <p>5-3/8" x 25MD </p>
          <p>5-1/2" x 25MD in</p>
          <p>5-1/2" x 55MD in</p>
          <p>2-1/2" x 35MD in</p>
          <p>2-3/4" x 35MD in</p>
          <p>3-1/2" x 20MD in </p>
          <p>4" x 40MD in </p>
          <p>4" x 50MD in</p>
        </div>
        <div>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>two 1.5-lb bundles</p>
          <p>~6 lbs</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles</p>
          <p>~ 5-lb bundles (only two of these left!)</p>
          <p>~ 5-lb bundles (only two of these left!)</p>
          <p>~ 5-lb bundles</p>
        </div>
      </div>
    </div>
  );
};

export default WebbingAndNettingBlock;
