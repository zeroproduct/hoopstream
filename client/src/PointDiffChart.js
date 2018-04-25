import React, { Component } from 'react';

import { formatTeamId } from './utils/index';

class PointDiffChart extends Component {
  renderPoints() {
    return this.props.quarterOne.plays.map(point => {
      return (
        <li>
          <div>
            {point.clock} - {point.points} - {formatTeamId(point.leadTeamId)}
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
