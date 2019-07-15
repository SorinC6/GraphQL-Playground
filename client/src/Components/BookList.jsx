import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../querys/Querys";

const BookList = props => {
  const displayBooks = () => {
    let data = props.data;
    if (data.loading) {
      return <p>Loading books ...</p>;
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
