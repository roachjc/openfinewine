import React from 'react';

function WinePage(props) {
  console.log('props are', props);
  const paramName = props.match.params.name.replace(/-/g, ' ');
  const paramVint = +props.match.params.vintage;
  let wine = props.wines.filter(wine => wine.wineName === paramName && wine.vintage === paramVint);
  wine = wine[0];
  return (
    <div className="wine">
      <h3>{wine.vintage} {wine.wineName}</h3>
      <div className="wine-details">
        <ul>
          <li>Price: ${wine.sellPrice}</li>
          <li>Bottle size: {wine.bottlSize}cl</li>
          <li>Case size: {wine.caseSize}</li>
          <li>Case type: {wine.caseType}</li>
        </ul>
      </div>
    </div>
  );
}

export default WinePage;
