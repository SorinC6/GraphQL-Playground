import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../querys/Querys";
import BookDetails from "./BookDetails";

const BookList = props => {
  const [selected, setSelected] = useState(null);

  const displayBooks = () => {
    let data = props.data;
    if (data.loading) {
      return <p>Loading books ...</p>;
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={() => selectHandler(book.id)}>
            {book.name}
          </li>
        );
      });
    }
  };

  const selectHandler = bookId => {
    setSelected(bookId);
  };

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
