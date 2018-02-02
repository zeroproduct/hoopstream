import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

import { formatTeamId } from './utils/index';

class App extends Component {
  renderPlays() {
    return this.props.data.leadTracker.plays.map(play => {
      return (
        <li>
          Time: {play.clock}, Points: {play.points}, Team:{formatTeamId(play.leadTeamId)}
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div />;
    }

    return (
      <div className="App">
        <div>
          <ul>
            {this.renderPlays()}
          </ul>
        </div>
      </div>
    );
  }
}

const query = gql`
  {
    leadTracker(date: "20180131", gameId: "0021700758", period: "1") {
      plays {
        clock
        points
        leadTeamId
      }
    }
  }
`;

export default graphql(query)(App);
