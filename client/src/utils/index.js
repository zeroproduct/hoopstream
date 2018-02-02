/**
 * Uses `teamId` value to returns actual team name
 * @param {string} teamId
 * @returns Team name string
 */
function formatTeamId(teamId) {
  switch (teamId) {
    case '1610612738':
      return 'Celtics';
      break;
    case '1610612751':
      return 'Nets';
      break;
    case '1610612752':
      return 'Knicks';
      break;
    case '1610612755':
      return 'Sixers';
      break;
    case '1610612761':
      return 'Raptors';
      break;
    case '1610612741':
      return 'Bulls';
      break;
    case '1610612739':
      return 'Cavaliers';
      break;
    case '1610612765':
      return 'Pistons';
      break;
    case '1610612754':
      return 'Pacers';
      break;
    case '1610612749':
      return 'Bucks';
      break;
    case '1610612737':
      return 'Hawks';
      break;
    case '1610612766':
      return 'Hornets';
      break;
    case '1610612748':
      return 'Heat';
      break;
    case '1610612753':
      return 'Magic';
      break;
    case '1610612764':
      return 'Wizards';
      break;
    case '1610612743':
      return 'Nuggets';
      break;
    case '1610612750':
      return 'Timberwolves';
      break;
    case '1610612760':
      return 'Thunder';
      break;
    case '1610612757':
      return;
      'Trail Blazers';
      break;
    case '1610612762':
      return 'Jazz';
      break;
    case '1610612744':
      return 'Warriors';
      break;
    case '1610612746':
      return 'Clippers';
      break;
    case '1610612747':
      return 'Lakers';
      break;
    case '1610612756':
      return 'Suns';
      break;
    case '1610612758':
      return 'Kings';
      break;
    case '1610612742':
      return 'Mavericks';
      break;
    case '1610612745':
      return 'Rockets';
      break;
    case '1610612763':
      return 'Grizzlies';
      break;
    case '1610612740':
      return 'Pelicans';
      break;
    case '1610612759':
      return 'Spurs';
      break;
    default:
      return;
  }
}

export { formatTeamId };
