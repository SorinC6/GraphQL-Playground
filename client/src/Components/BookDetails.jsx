import React from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../querys/Querys";

const BookDetails = props => {
  console.log(props);
  const displayBookDetail = () => {
    const { book } = props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>{book.author.age}</p>
          <p>All books by this Author</p>
          <ul className="other-books">
            {book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <p>No Book selected</p>;
    }
  };

  return <div>{displayBookDetail()}</div>;
};

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
