const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fileds: () => ({
    id: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});
