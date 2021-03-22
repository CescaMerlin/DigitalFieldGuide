const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { buildGraphbackAPI } = require("graphback");
const schema = require("./schema");
const Knex = require("knex");
const { migrateDB } = require("graphql-migrations");
const { createKnexDbProvider } = require("@graphback/runtime-knex");
const dbConfig = require("..knexfile.js");
const path = require("path");

const environment = process.env.NODE_ENV || "development";
const config = dbConfig[environment];

//create the connection to the database
const db = Knex(config);

//create the table in the database
migrateDB(config, schema, {})
  .then(() => {
    console.log("Migrated database");
  })
  .catch((err) => console.log(err));

//create the postgres data provider
const knexDbProviderCreator = createKnexDbProvider(db);

//creates a schema, CRUD resolvers, services and data providers
const { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(schema, {
  dataProviderCreator: knexDbProviderCreator,
});

const server = new ApolloServer({
  typeDefs,
  resolvers: [resolvers],
  context: contextCreator,
});

const app = express();
server.applyMiddleware({ app });
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server with Apollo at localhost:${Port}/${server.graphqlPath}`
  );
});
