import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import WineDetails from './WineDetails';

class WineItem extends React.Component {
  render() {
    const wine = this.props.winedetails;
    return (
      <div className="wine-item">
        <Link className="wine-name" to={`/wines/${wine.wineName}/${wine.vintage}`}>{wine.vintage} {wine.wineName}</Link>
        <WineDetails details={wine} />
      </div>
    );
  }
}

export default WineItem;
