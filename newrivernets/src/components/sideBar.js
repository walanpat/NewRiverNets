import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='SideBar'>
      <div style={{ marginRight: '5%' }}>
        <ul>
          <p>Home</p>
          <p>Contact Us</p>
          <p>Specials</p>
          <p>Nets and Trawls</p>
          <p>Trawl Doors and Steel</p>
          <p>Webbing and Netting</p>
          <p>Floats and Lead</p>
          <p>Twine</p>
          <p>Rope and Cable</p>
          <p>Hardware</p>
          <p>Shellfish Gear</p>
          <p>Knives</p>
          <p>Wearables</p>
          <p>Deck Gear</p>
          <p>Boat Stuff</p>
          <p>Safety</p>
          <p>Trailers & Parts</p>
          <p> Links</p>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
