const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} = graphql;


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {}
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {}
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
