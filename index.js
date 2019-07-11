const express = require("express");
const graphHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

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
