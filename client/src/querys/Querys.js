import { gql } from "apollo-boost";

export const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

export const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

export const addBookMutation = gql`
  mutation {
    addBook(name: ",genre:", authorId: ""){
      name
      id
    }
  }
`;
