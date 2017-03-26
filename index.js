import express from 'express';
import { MongoClient } from 'mongodb';

let database;
const app = express();
const fallbackUrl = 'mongodb://localhost:27017/relay_test';

app.use(express.static('public'));

MongoClient.connect(process.env.MONGO_URL || fallbackUrl, (err, db) => {
  if (err) throw err;

  database = db;
  app.listen(3000, () => console.log('Listening on port 3000'));
});

app.get('/data/links', (req, res) => {
  database.collection('links').find({}).toArray((err, links) => {
    if (err) throw err;
    res.json(links);
  });
});
