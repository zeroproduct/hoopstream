import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import * as moment from 'moment';

import PointDiffChart from './PointDiffChart';

import { formatTeamId, getTeamColors } from '../utils/index';

class GameDetail extends Component {
  state = {};

  render() {
    const gameDate = this.props.match.params.id.split('_')[0];
    const hTeam = this.props.match.params.id.split('_')[1];
    const vTeam = this.props.match.params.id.split('_')[2];

    if (this.props.leadTrackerQ1 === null) {
      return <div />;
    }

    return (
      <div className="game-detail">
        <div style={{ textAlign: 'center' }} className="header">
          <span style={{ fontSize: 48 }}>
            {moment(gameDate).format('dddd, MMM d YYYY').toUpperCase()}
          </span>
          <span
            style={{
              width: '480px',
              margin: '0 auto',
              display: 'block',
              fontSize: 24
            }}
          >
            <div
              style={{
                color: getTeamColors(hTeam)[1],
                backgroundColor: getTeamColors(hTeam)[0]
              }}
            >
              {formatTeamId(hTeam)}
            </div>
            vs.
            <div
              style={{
                color: getTeamColors(vTeam)[1],
                backgroundColor: getTeamColors(vTeam)[0]
              }}
            >
              {formatTeamId(vTeam)}
            </div>
          </span>
        </div>
        <PointDiffChart
          quarterOne={this.props.leadTrackerQ1.leadTracker}
          quarterTwo={this.props.leadTrackerQ2.leadTracker}
          quarterThree={this.props.leadTrackerQ3.leadTracker}
          quarterFour={this.props.leadTrackerQ4.leadTracker}
        />
      </div>
    );
  }
}

const getLeadTracker = gql`
  query LeadTrackerQuery($date: String!, $gameId: String!, $period: String!) {
    leadTracker(date: $date, gameId: $gameId, period: $period) {
      plays {
        clock
        points
        leadTeamId
      }
    }
  }
`;

export default compose(
  graphql(getLeadTracker, {
    name: 'leadTrackerQ1',
    options: props => ({
      variables: {
        date: props.match.params.id.split('_')[0],
        gameId: props.match.params.id.split('_')[3],
        period: '1'
      }
    })
  }),
  graphql(getLeadTracker, {
    name: 'leadTrackerQ2',
    options: props => ({
      variables: {
        date: props.match.params.id.split('_')[0],
        gameId: props.match.params.id.split('_')[3],
        period: '2'
      }
    })
  }),
  graphql(getLeadTracker, {
    name: 'leadTrackerQ3',
    options: props => ({
      variables: {
        date: props.match.params.id.split('_')[0],
        gameId: props.match.params.id.split('_')[3],
        period: '3'
      }
    })
  }),
  graphql(getLeadTracker, {
    name: 'leadTrackerQ4',
    options: props => ({
      variables: {
        date: props.match.params.id.split('_')[0],
        gameId: props.match.params.id.split('_')[3],
        period: '4'
      }
    })
  })
)(GameDetail);
