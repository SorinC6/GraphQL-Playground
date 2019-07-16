import React from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../querys/Querys";

const BookDetails = props => {
  return (
    <div>
      <p>Book Detail Here</p>
    </div>
  );
};

export default graphql(getBookQuery)(BookDetails);
