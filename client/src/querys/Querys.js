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
