import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WineList from './WineList';
import WinesRoute from './WinesRoute';

const url = 'http://localhost:3000/getwines';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wines: [],
      activePage: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then((wines) => {
        this.setState({ wines });
      });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <main>
        
        <Switch>
          <Route exact path="/" render={() => <WineList wines={this.state.wines} activePage={this.state.activePage} handlePageChange={this.handlePageChange} />} />
          <Route path="/wines" render={() => <WinesRoute wines={this.state.wines} />} />
          <Route path="/vintages" render={() => <WinesRoute wines={this.state.wines} />} />
        </Switch>
      </main>
    );
  }
}

export default Main;

// You can pass an object as the to prop and specify state. See the docs.

// <Link to={{
//   pathname: '/courses',
//   state: { fromDashboard: true }
// }}> Courses </Link>
// Then you can grab that state in the new route from this.props.location.state
