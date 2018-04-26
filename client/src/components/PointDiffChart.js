import React, { Component } from 'react';

import { formatTeamId } from '../utils/index';

class PointDiffChart extends Component {
  renderPoints() {
    return this.props.quarterOne.plays.map(point => {
      return (
        <li key={`${point.clock}${point.points}`}>
          <div>
            {point.clock} - {point.points} - {formatTeamId(point.leadTeamId)[0]}
          </div>
        </li>
      );
    });
  }

  render() {
    if (!this.props.quarterOne) {
      return <div />;
    }

    return (
      <div>
        <h1>Point Diff Chart</h1>
        <ul>
          {this.renderPoints()}
        </ul>
      </div>
    );
  }
}

export default PointDiffChart;
