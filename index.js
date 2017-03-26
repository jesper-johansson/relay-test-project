import express from 'express';
import GraphQLHTTP from 'express-graphql';
import { MongoClient } from 'mongodb';
import Schema from './data/Schema';

let database;
const app = express();
const fallbackUrl = 'mongodb://localhost:27017/relay_test';

app.use(express.static('public'));

MongoClient.connect(process.env.MONGO_URL || fallbackUrl, (err, db) => {
  if (err) throw err;

  database = db;
  app.use('/graphql', GraphQLHTTP({
    schema: Schema(db),
    graphiql: true,
  }));

  app.listen(3000, () => console.log('Listening on port 3000'));
});
