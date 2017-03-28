import fs from 'fs';
import express from 'express';
import GraphQLHTTP from 'express-graphql';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';
import { MongoClient } from 'mongodb';
import Schema from './data/Schema';

const app = express();
const fallbackUrl = 'mongodb://localhost:27017/relay_test';

app.use(express.static('public'));

(async () => {
  const db = await MongoClient.connect(process.env.MONGO_URL || fallbackUrl);
  const schema = Schema(db);

  app.use('/graphql', GraphQLHTTP({
    schema,
    graphiql: true,
  }));

  app.listen(3000, () => console.log('Listening on port 3000'));

  const json = await graphql(schema, introspectionQuery);
  fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), (err) => {
    if (err) throw err;

    console.log('Generated JSON schema');
  });
})();

