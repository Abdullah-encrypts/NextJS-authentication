import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
   'mongodb+srv://abdullah:NeDauoXRqWEV4rsx@cluster0.ykhvabp.mongodb.net/auth-ex?retryWrites=true&w=majority'
  );

  return client;
}
