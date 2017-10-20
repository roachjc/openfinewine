import React from 'react';
import ReactDOM from 'react-dom';
// import Pagination from 'react-js-pagination';
import WineItem from './WineItem';

function WineList(props) {
  const wineNodes = props.wines.map((wine) => {
    return <WineItem className="wine-item" winedetails={wine} key={wine._id} />;
  });

  // TODO! GET PAGINATION WORKING!
      // <Pagination
      //   activePage={props.activePage}
      //   itemsCountPerPage={10}
      //   totalItemsCount={450}
      //   pageRangeDisplayed={5}
      //   onChange={props.handlePageChange}
      // />

  return (
    <div id="wine-list">
      <h2>Wine List</h2>
      <ul className="wine-list">{ wineNodes }</ul>
    </div>
  );
}


//   render() {
//     const wineNodes = this.state.wines.map((wine) => {
//       return <WineItem winedetails={wine} key={wine._id} />;
//     });

//     return (
//       <div id="wine-list">
//         <h2>Wine List</h2>
//         { wineNodes }
//       </div>
//     );
//   }
// }

export default WineList;
