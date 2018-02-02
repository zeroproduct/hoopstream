const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = graphql;

const nba = require('nba.js').default;

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
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
