const express = require("express");
const graphHTTP = require("express-graphql");

const app = express();

app.use("/test", graphHTTP({
  
}));

app.listen(4000, () => {
  console.log("server listening on port: 4000");
});
