import React from 'react';

import './Block.css';

function blockColor(numberOfGames) {
  switch (numberOfGames) {
    case 0:
      return '#eee';
    case 1:
    case 2:
      return '#ddd';
    case 3:
    case 4:
      return '#ccc';
    case 5:
      return '#aaa';
    case 6:
      return '#999';
    case 7:
      return '#777';
    case 8:
      return '#555';
    case 9:
      return '#444';
    case 10:
      return '#222';
    case 11:
    case 12:
      return '#111';
    case 13:
    case 14:
      return '#000';
    default:
      return '';
  }
}

const Block = ({ date, game, blockClick, blockHover, blockStyle }) => {
  const color = blockColor(game);

  return (
    <div
      className={blockStyle}
      style={{
        backgroundColor: color,
        width: 25,
        height: 25,
        fontSize: '10px'
      }}
      onClick={blockClick}
      onMouseOver={blockHover}
    />
  );
};

export default Block;
