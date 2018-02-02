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

export { formatTeamId };
