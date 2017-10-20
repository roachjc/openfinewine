import React from 'react';
import { Link } from 'react-router-dom';

function AllWines(props) {
  const mySet = new Set();
  props.wines.forEach(wine => mySet.add(wine.wineName));
  const nameList = [...mySet];

  const wineNameNodes = nameList.map((name, i) => {
    const urlName = name.replace(/ /g, '-');
    return (
      <li className="wine-name" key={i}>
        <Link to={`/wines/${urlName}`}>{name}</Link>
      </li>
    );
  });

  return (
    <div className="wines">
      <h3>All Wines</h3>
      { wineNameNodes }
    </div>
  );
}

export default AllWines;
