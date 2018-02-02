import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

import { formatTeamId } from './utils/index';

class App extends Component {
  state = {};

  renderPlays() {
    return this.props.leadTrackerQuery.leadTracker.plays.map(play => {
      return (
        <li>
          Time: {play.clock}, Points: {play.points}, Team:{formatTeamId(play.leadTeamId)}
        </li>
      );
    });
  }

  render() {
    if (this.props.leadTrackerQuery.loading) {
      return <div />;
    }

    return (
      <div className="App">
        {console.log(this.props)}
        <div>
          <ul>
            {this.renderPlays()}
          </ul>
        </div>
      </div>
    );
  }
}

const getLeadTracker = gql`
  {
    leadTracker(date: "20180201", gameId: "0021700762", period: "2") {
      plays {
        clock
        points
        leadTeamId
      }
    }
  }
`;

const getSchedule = gql`
  {
    schedule(year: "2017") {
      league {
        standard {
          gameId
          startDateEastern
          hTeam {
            teamId
          }
          vTeam {
            teamId
          }
        }
      }
    }
  }
`;

export default compose(
  graphql(getLeadTracker, { name: 'leadTrackerQuery' }),
  graphql(getSchedule, { name: 'scheduleQuery' })
)(App);
