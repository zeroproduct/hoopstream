const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = graphql;

const nba = require('nba.js').default;

const ScheduleGameTeamIdType = new GraphQLObjectType({
  name: 'ScheduleGameTeamId',
  fields: () => ({
    teamId: { type: GraphQLString }
  })
});

const ScheduleGameType = new GraphQLObjectType({
  name: 'ScheduleGame',
  fields: () => ({
    gameId: { type: GraphQLString },
    startDateEastern: { type: GraphQLString },
    hTeam: { type: ScheduleGameTeamIdType },
    vTeam: { type: ScheduleGameTeamIdType }
  })
});

const StandardType = new GraphQLObjectType({
  name: 'Standard',
  fields: () => ({
    standard: { type: new GraphQLList(ScheduleGameType) }
  })
});

const ScheduleType = new GraphQLObjectType({
  name: 'Schedule',
  fields: () => ({
    league: { type: StandardType }
  })
});

const PlaysType = new GraphQLObjectType({
  name: 'Plays',
  fields: () => ({
    clock: { type: GraphQLString },
    leadTeamId: { type: GraphQLString },
    points: { type: GraphQLString }
  })
});

const LeadTrackerType = new GraphQLObjectType({
  name: 'LeadTracker',
  fields: () => ({
    plays: { type: new GraphQLList(PlaysType) }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    leadTracker: {
      type: LeadTrackerType,
      args: {
        date: { type: GraphQLString },
        gameId: { type: GraphQLString },
        period: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return nba.data
          .leadTracker({
            date: args.date,
            gameId: args.gameId,
            period: args.period
          })
          .then(res => res)
          .catch(err => console.log(err));
      }
    },
    schedule: {
      type: ScheduleType,
      args: {
        year: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return nba.data
          .schedule({
            year: args.year
          })
          .then(res => {
            var game = res.league.standard;

            //Filters out pre-season games, where gameId's are less than 20000000
            var currentSeasonGame = game.filter(x => {
              return x.gameId > 20000000;
            });

            var scheduleObj = {
              league: {
                standard: currentSeasonGame
              }
            };

            return scheduleObj;
          })
          .catch(err => console.log(err));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
