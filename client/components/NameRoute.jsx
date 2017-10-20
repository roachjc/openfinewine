import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllVintsForWine from './AllVintsForWine';
import WinePage from './WinePage';

function NameRoute(props) {
  const name = props.match.params.name;
  console.log('hello from name route');
  return (
    <Switch>
      <Route exact path={`/wines/${name}`} render={() => <AllVintsForWine wines={props.wines} name={name} />} />
      <Route path={`/wines/${name}/:vintage`} render={() => <WinePage wines={props.wines} />} />
    </Switch>
  );
}

// <Route path=".wines/:name/:vintage" render={prop => (<WinePage wines={props.wines} {...prop} />)} />
export default NameRoute;
