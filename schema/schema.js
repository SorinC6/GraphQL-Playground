const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

//dummy data
const books = [
  { id: "1", name: "Name of the Elephant", genre: "Fantasy" },
  { id: "2", name: "The Last Jedi", genre: "Sf" },
  { id: "3", name: "The Last Hero", genre: "Action" }
];

const authors = [
  { id: "1", name: "Chis Sorin", age: 30 },
  { id: "2", name: "Iuga Alin", age: 33 },
  { id: "3", name: "Vlad Vasile", age: 40 }
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db or other source
        console.log(typeof args.id);
        return _.find(books, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
