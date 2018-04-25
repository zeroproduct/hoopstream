import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
// import { withRouter } from 'react-router';

import PointDiffChart from './PointDiffChart';

import { formatTeamId } from './utils/index';

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
      <div>
        {console.log(this.props)}
        <h1>
          {gameDate}
        </h1>
        <p>
          {formatTeamId(hTeam)} vs. {formatTeamId(vTeam)}
        </p>
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

// export default GameDetail;
