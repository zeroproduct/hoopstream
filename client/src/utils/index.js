/**
 * Uses `teamId` value to returns actual team name
 * @param {string} teamId
 * @returns Team name string
 */
function formatTeamId(teamId) {
  switch (teamId) {
    case '1610612738':
      return 'Celtics';
    case '1610612751':
      return 'Nets';
    case '1610612752':
      return 'Knicks';
    case '1610612755':
      return 'Sixers';
    case '1610612761':
      return 'Raptors';
    case '1610612741':
      return 'Bulls';
    case '1610612739':
      return 'Cavaliers';
    case '1610612765':
      return 'Pistons';
    case '1610612754':
      return 'Pacers';
    case '1610612749':
      return 'Bucks';
    case '1610612737':
      return 'Hawks';
    case '1610612766':
      return 'Hornets';
    case '1610612748':
      return 'Heat';
    case '1610612753':
      return 'Magic';
    case '1610612764':
      return 'Wizards';
    case '1610612743':
      return 'Nuggets';
    case '1610612750':
      return 'Timberwolves';
    case '1610612760':
      return 'Thunder';
    case '1610612757':
      return 'Trail Blazers';
    case '1610612762':
      return 'Jazz';
    case '1610612744':
      return 'Warriors';
    case '1610612746':
      return 'Clippers';
    case '1610612747':
      return 'Lakers';
    case '1610612756':
      return 'Suns';
    case '1610612758':
      return 'Kings';
    case '1610612742':
      return 'Mavericks';
    case '1610612745':
      return 'Rockets';
    case '1610612763':
      return 'Grizzlies';
    case '1610612740':
      return 'Pelicans';
    case '1610612759':
      return 'Spurs';
    default:
      return '';
  }
}

function getTeamColors(teamId) {
  switch (teamId) {
    case '1610612738':
      return ['#007A33', '#BA9653'];
    case '1610612751':
      return ['#000000', '#FFFFFF'];
    case '1610612752':
      return ['#006BB6', '#F58426'];
    case '1610612755':
      return ['#006BB6', '#ED174C'];
    case '1610612761':
      return ['#CE1141', '#000000'];
    case '1610612741':
      return ['#CE1141', '#000000'];
    case '1610612739':
      return ['#6F263D', '#041E42'];
    case '1610612765':
      return ['#ED174C', '#006BB6'];
    case '1610612754':
      return ['#002D62', '#FDBB30'];
    case '1610612749':
      return ['#00471B', '#EEE1C6'];
    case '1610612737':
      return ['#E03A3E', '#26282A'];
    case '1610612766':
      return ['#1D1160', '#00788C'];
    case '1610612748':
      return ['#98002E', '#F9A01B'];
    case '1610612753':
      return ['#0077C0', '#C4CED4'];
    case '1610612764':
      return ['#002B5C', '#E31837'];
    case '1610612743':
      return ['#00285E', '#418FDE'];
    case '1610612750':
      return ['#0C2340', '#78BE20'];
    case '1610612760':
      return ['#007AC1', '#EF3B24'];
    case '1610612757':
      return ['#E03A3E', '#000000'];
    case '1610612762':
      return ['#002B5C', '#00471B'];
    case '1610612744':
      return ['#006BB6', '#FDB927'];
    case '1610612746':
      return ['#ED174C', '#006BB6'];
    case '1610612747':
      return ['#552583', '#FDB927'];
    case '1610612756':
      return ['#1D1160', '#E56020'];
    case '1610612758':
      return ['#5A2D81', '#63727A'];
    case '1610612742':
      return ['#00538C', '#002B5E'];
    case '1610612745':
      return ['#CE1141', '#000000'];
    case '1610612763':
      return ['#6189B9', '#00285E'];
    case '1610612740':
      return ['#0C2340', '#C8102E'];
    case '1610612759':
      return ['#C4CED4', '#000000'];
    default:
      return '';
  }
}

export { formatTeamId, getTeamColors };
