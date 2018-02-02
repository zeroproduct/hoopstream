import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

import { formatTeamId } from './utils/index';

class App extends Component {
  state = {
    gameDate: '20180201',
    currentGames: []
  };

  getGameIdFromDate() {
    var gamesArr = [];

    this.props.scheduleQuery.schedule.league.standard.filter(games => {
      if (games.startDateEastern === this.state.gameDate) {
        gamesArr.push(games);
        // console.log(gamesArr);
      }
    });

    this.setState({
      currentGames: gamesArr
    });
  }

  renderPlays() {
    return this.props.leadTrackerQuery.leadTracker.plays.map(play => {
      return (
        <li>
          Time: {play.clock}, Points: {play.points}, Team:{formatTeamId(play.leadTeamId)}
        </li>
      );
    });
  }

  handleInputChange(e) {
    if (e.target.id === 'date') {
      this.setState({
        gameDate: e.target.value
      });
    }
  }

  render() {
    if (this.props.scheduleQuery.loading) {
      return <div />;
    }

    return (
      <div className="App">
        {console.log(this.props)}
        {console.log(this.state.currentGames)}
        <button onClick={() => this.getGameIdFromDate()}>Game</button>
        <input
          id="date"
          onChange={this.handleInputChange.bind(this)}
          type="text"
          placeholder="Enter a date (YYYYMMDD)"
        />
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
