# DigiTori - a Digital Field Guide

DigiTori is designed to be an english field guide to the birds of Japan. Users can search for birds according to specific parameters and view information about each bird. Currently available information fields include a photo, common names, scientific names, and a range map.

Available search parameters:

- The common name in English
- The common name in Japanese
- The common name in Romaji
- Order
- Family
- Species

## Who is the website for?

English-speaking birdwatchers in Japan who want a simple field guide to Japan's birds that they can easily reference at any time by computer or mobile device.

## How it works

DigiTori is a one page application with a simple design and user interface. Once you select your desired search, you receive basic information about each bird that matches your search. To start a new search, all you need to do is click the button to return to the input options.

## Technology used

- Postgres Database
- Apollo-Express servers
- GraphQL and Graphback
- Apollo-Client
- React
- Knex

## How to install

1. Clone the repo and `npm install`
1. Create a local postgres database
1. Create a .env file
   1. Define your .env variables DB_USER, DB_PW, DB_NAME.
   1. Make sure .env is in .gitignore
1. Run `npm run dev` to create the database schema and start the backend server in nodemon mode.
1. Run `knex seed:run` to seed the database.
1. Run `npm run hack` to start the front end server in hot-reload mode.

NOTE: This app was created using Graphback, which means there is no resolvers file and the schema file doesn't contain any queries. Graphback generates these automatically according to the schema. To view the schema, queries, mutations, etc., go to localhost:4000/graphql and check the documentation in the GraphiQL playground.
