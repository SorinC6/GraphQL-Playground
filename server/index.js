const express = require("express");
const graphHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow crosss origin request
app.use(cors());

// mongoDb connection string
//mongodb+srv://sorin:test123@test-zjuzv.mongodb.net/test?retryWrites=true&w=majority

mongoose.connect(
  "mongodb+srv://sorin:test123@test-zjuzv.mongodb.net/test?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("Connected to Database Woop Woop");
});
// tutorial 17
app.use(
  "/test",
  graphHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("server listening on port: 4000");
});
