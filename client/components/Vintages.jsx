import React from 'react';
import { Link } from 'react-router-dom';

function Vintages(props) {
  const mySet = new Set();
  props.wines.forEach(wine => mySet.add(wine.vintage));
  const vintageList = [...mySet];

  const vintageNodes = vintageList.map((vintage, i) => {
    return (
      <li className="vintage-name" key={i}>
        <Link to={`/vintages/${vintage}`}>{vintage}</Link>
      </li>
    );
  });
  return (
    <div className="vintage-list">
      <h3>All Vintages</h3>
      { vintageNodes }
    </div>
  );
}

export default Vintages;
