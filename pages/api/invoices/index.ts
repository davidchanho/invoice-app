// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://${process.env.REACT_APP_MONGO_USER}:${process.env.REACT_APP_MONGO_PASS}@cluster0.59ndz.mongodb.net/${process.env.REACT_APP_MONGO_DB}?retryWrites=true&w=majority`;

async function handler(req, res) {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (req.method === "GET") {
    const db = client.db();

    const docs = await db.collection("invoices").find().toArray();
    
    res.status(200).json(docs);
  }

  client.close();
}

export default handler;
