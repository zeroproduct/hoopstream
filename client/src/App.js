import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
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

  renderCurrentGames() {
    return this.state.currentGames.map(game => {
      return (
        <li key={game.gameId}>
          <Link
            to={{
              pathname: `/g/${game.gameId}`,
              game: {
                gameDate: this.state.gameDate,
                hTeam: game.hTeam.teamId,
                vTeam: game.vTeam.teamId
              }
            }}
          >
            {formatTeamId(game.hTeam.teamId)} vs.{' '}
            {formatTeamId(game.vTeam.teamId)}
          </Link>
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
        <input
          id="date"
          onChange={this.handleInputChange.bind(this)}
          type="text"
          placeholder="Enter a date (YYYYMMDD)"
        />
        <button onClick={() => this.getGameIdFromDate()}>Search</button>
        <div>
          <ul>
            {this.renderCurrentGames()}
          </ul>
        </div>
      </div>
    );
  }
}

// const getLeadTracker = gql`
//   {
//     leadTracker(date: "20180201", gameId: "0021700762", period: "1") {
//       plays {
//         clock
//         points
//         leadTeamId
//       }
//     }
//   }
// `;

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
//
// export default compose(
//   graphql(getLeadTracker, { name: 'leadTrackerQuery' }),
//   graphql(getSchedule, { name: 'scheduleQuery' })
// )(App);

export default graphql(getSchedule, { name: 'scheduleQuery' })(withRouter(App));
