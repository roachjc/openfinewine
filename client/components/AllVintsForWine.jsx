import React from 'react';
import { Link, BrowserRouter as Router, Route} from 'react-router-dom';

function AllVintsForWine(props) {

  const param = props.name.replace(/-/g, ' ');
  const matchedWines = props.wines.filter(wine => wine.wineName === param)
    .map((wine) => {
      return (
        <li className="wine-name" key={wine._id}>
          <Link to={`/wines/${props.name}/${wine.vintage}`}>
            {wine.vintage} {wine.wineName}
          </Link>
        </li>
      );
    });
  return (
    <div>{ matchedWines }</div>
  );
}

export default AllVintsForWine;
