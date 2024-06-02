import {MongoClient, Db} from 'mongodb';
const connectionString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(connectionString);
await client.connect();
export let db: Db = client.db('donjulio');
