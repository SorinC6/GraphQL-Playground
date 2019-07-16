import React from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../querys/Querys";
import BookDetails from "./BookDetails";

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
      <BookDetails />
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
