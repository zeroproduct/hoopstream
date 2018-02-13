import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
// import { withRouter } from 'react-router';

import { formatTeamId } from './utils/index';

class GameDetail extends Component {
  // state = {
  //   date: this.props.location.game.gameDate,
  //   gameId: this.props.match.params.id
  // };

  render() {
    const gameDate = this.props.match.params.id.split('_')[0];
    const hTeam = this.props.match.params.id.split('_')[1];
    const vTeam = this.props.match.params.id.split('_')[2];

    return (
      <div>
        {console.log(this.props)}
        <h1>
          {gameDate}
        </h1>
        <p>
          {formatTeamId(hTeam)} vs. {formatTeamId(vTeam)}
        </p>
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

export default graphql(getLeadTracker, {
  name: 'leadTrackerQuery',
  options: props => ({
    variables: {
      date: props.match.params.id.split('_')[0],
      gameId: props.match.params.id.split('_')[3],
      period: '1'
    }
  })
})(GameDetail);

// export default GameDetail;
