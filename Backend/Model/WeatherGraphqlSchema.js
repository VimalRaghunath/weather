const { buildSchema } = require("graphql");

const WeatherGraphqlSchema = buildSchema(`
    type Weather {
    id: ID!
    city: String!
    temperature: Float!
    description: String!
    icon: String!
    date: String!
  }

  type Query {
    getWeather(city: String!): Weather
    getHistory(city: String!, from: String!, to: String!): [Weather]
  }
    `);

module.exports = WeatherGraphqlSchema;