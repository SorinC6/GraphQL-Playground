import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// components
import BookList from "./Components/BookList";
import AddBook from "./Components/AddBook";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/test"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Woop Code Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
