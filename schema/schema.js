const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data
const books = [
  { id: "1", name: "Name of the Elephant", genre: "Fantasy" },
  { id: "2", name: "The Last Jedi", genre: "Sf" },
  { id: "3", name: "The Last Hero", genre: "Action" }
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fileds: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db or other source
        return _find(books, { id: args.id });
      }
    }
  }
});

// book(id:"2"){

// }

module.exports = new GraphQLSchema({ RootQuery }); //tutorial 8- 7:11
