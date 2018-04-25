import React, { Component } from 'react';
import _ from 'lodash';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import Block from './Block';
import LoadingScreen from './LoadingScreen';
import './App.css';

import { formatTeamId } from './utils/index';

class App extends Component {
  state = {
    currentGames: [],
    groupedGames: {},
    detailDate: 'DEFAULT',
    detailNumOfGames: ''
  };

  renderGames() {
    const groupedGames = _.groupBy(
      this.props.scheduleQuery.schedule.league.standard,
      game => game.startDateEastern
    );
    this.setState({ groupedGames });
  }

  renderBlocks() {
    return Object.entries(this.state.groupedGames).map(([key, value]) => {
      const dayOfWeek = moment(key).format('ddd').toLowerCase();
      const month = moment(key).format('MMM').toLowerCase();
      return (
        <Block
          key={key}
          blockStyle={`${dayOfWeek} ${month} block`}
          blockHover={() =>
            this.setState({
              detailDate: key,
              detailNumOfGames: value.length
            })}
          blockClick={() =>
            this.setState({
              currentGames: value
            })}
          date={key}
          game={value.length}
        />
      );
    });
  }

  renderCurrentGames() {
    return this.state.currentGames.map(game => {
      return (
        <li key={game.gameId}>
          {console.log(game)}
          <Link
            style={{ color: '#ffa39e' }}
            to={{
              pathname: `/g/${game.startDateEastern}_${game.hTeam.teamId}_${game
                .vTeam.teamId}_${game.gameId}`,
              game: {
                gameDate: game.startDateEastern,
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

  render() {
    if (this.props.scheduleQuery.loading) {
      return <LoadingScreen />;
    }

    return (
      <div className="App">
        {console.log(this.state.currentGames)}
        <div className="game-grid">
          <button className="search-button" onClick={() => this.renderGames()}>
            Search
          </button>
          <div className="block-grid">
            <div className="sun date-header">SUN</div>
            <div className="mon date-header">MON</div>
            <div className="tue date-header">TUE</div>
            <div className="wed date-header">WED</div>
            <div className="thu date-header">THU</div>
            <div className="fri date-header">FRI</div>
            <div className="sat date-header">SAT</div>
            {this.renderBlocks()}
          </div>
        </div>
        <div className="list-of-games">
          <div className="date">
            <span style={{ fontSize: '56px' }}>
              {this.state.detailDate === 'DEFAULT'
                ? ''
                : moment(this.state.detailDate)
                    .format('MMMM Do YYYY')
                    .toUpperCase()}
            </span>
            <br />
            <span style={{ fontSize: '24px' }}>
              {this.state.detailDate === 'DEFAULT'
                ? ''
                : moment(this.state.detailDate).format('dddd').toUpperCase()}
            </span>
          </div>
          <div className="current-games">
            {this.renderCurrentGames()}
          </div>
        </div>
      </div>
    );
  }
}

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

export default graphql(getSchedule, { name: 'scheduleQuery' })(App);
