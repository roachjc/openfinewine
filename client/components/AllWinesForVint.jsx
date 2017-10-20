import React from 'react';
import { Link } from 'react-router-dom';

function AllWinesForVint(props) {
  const matchedWines = props.wines.filter(wine => wine.vintage === +props.match.params.vintage);
  const wineNodes = matchedWines.map((wine, i) => {
    const urlName = wine.wineName.replace(/ /g, '-');
    return (
      <li className="wines" key={i}>
        <Link to={`/wines/${urlName}/${wine.vintage}`}>{wine.vintage} {wine.wineName}</Link>
      </li>
    );
  });

  return (
    <div className="wines">
      <h3>All wines from the {props.match.params.vintage} vintage</h3>
      { wineNodes }
    </div>
  );
}

export default AllWinesForVint;
