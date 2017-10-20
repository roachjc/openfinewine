import React from 'react';

function WineDetails(props) {
  const details = props.details;
  return (
    <ul className="wine-detail">
      <li className="details casesize">Case Size: {details.caseSize}</li>
      <li className="details casttype">Case Type: {details.caseType}</li>
      <li className="details bottlesize">Bottle Size: {details.bottleSizeCl}cl</li>
      <li className="details price">Price: ${details.sellPrice}</li>
    </ul>
  );
}

export default WineDetails;
