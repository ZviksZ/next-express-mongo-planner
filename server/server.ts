import * as dotenv from "dotenv";

dotenv.config();

import "./core/db";

const schema = require('./shemas/shema');
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const express = require("express");


const app = express();

app.use(cors());

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(process.env.PORT, (): void => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
