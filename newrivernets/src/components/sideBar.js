import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='SideBar'>
      <div style={{ marginRight: '7%' }}>
        <ul>
          <Link to ='/'><p>Home</p></Link>
          <Link to='/contact'>
            <p>Contact Us</p>
          </Link>
          <Link to='/products/specials'>
            <p>Specials</p>
          </Link>
          <Link to='/products/netsandtrawls'>
            <p>Nets and Trawls</p>
          </Link>
          <Link to='/products/trawldoorsandsteel'><p>Trawl Doors and Steel</p></Link>
          <Link to='/products/webbingandnetting'><p>Webbing and Netting</p></Link>
          <Link to='/products/floatsandleads'><p>Floats and Lead</p></Link>
          <Link to='/products/twine'><p>Twine</p></Link>
          <Link to='/products/ropeandcable'><p>Rope and Cable</p></Link>
          <Link to='/products/hardware'><p>Hardware</p></Link>
          <Link to='/products/shellfishgear'> <p>Shellfish Gear</p></Link>
          <Link to='/products/knives'><p>Knives</p></Link>
          <Link to='/products/wearable'><p>Wearables</p></Link>
          <Link to='/products/deckgear'><p>Deck Gear</p></Link>
          <Link to='/products/boatstuff'><p>Boat Stuff</p></Link>
          <Link to='/products/safety'><p>Safety</p></Link>
          <Link to='/products/trailersandparks'><p>Trailers & Parts</p></Link>
          <Link to='/links'><p> Links</p></Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
