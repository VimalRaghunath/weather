const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv");
const connectDB = require("./DataBase/db");
const WeatherGraphqlSchema = require("./Model/WeatherGraphqlSchema");
const Controllers = require("./Controller/WeatherController");

dotenv.config();

connectDB();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    WeatherGraphqlSchema,
    rootValue: Controllers,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
