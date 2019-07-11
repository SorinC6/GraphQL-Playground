const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

//dummy data
const books = [
  { id: "1", name: "Name of the Elephant", genre: "Fantasy", authorId: "1" },
  { id: "2", name: "The Last Jedi", genre: "Sf", authorId: "1" },
  { id: "3", name: "The Last Hero", genre: "Action", authorId: "2" },
  { id: "4", name: "Revange on Kan", genre: "Action", authorId: "2" },
  { id: "5", name: "A new Hope", genre: "Sf", authorId: "3" },
  { id: "6", name: "The Empire Strike Back", genre: "Sf", authorId: "2" }
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
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log(parent);
        return _.find(authors, { id: parent.authorId });
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      }
    }
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
        //console.log(typeof args.id);
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
