// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { nanoid } from "@reduxjs/toolkit";

const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://${process.env.REACT_APP_MONGO_USER}:${process.env.REACT_APP_MONGO_PASS}@cluster0.59ndz.mongodb.net/${process.env.REACT_APP_MONGO_DB}?retryWrites=true&w=majority`;

async function handler(req, res) {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (req.method === "GET") {
    const db = client.db();

    const docs = await db.collection("invoices").findOne({ id: req.body.id });
    res.status(200).json(docs);
  }

  if (req.method === "POST") {
    const db = client.db();

    const invoice = {
      id: nanoid(6),
      createdAt: new Date().toDateString(),
      paymentDue: req.body.paymentDue,
      description: req.body.description,
      paymentTerms: req.body.paymentTerms,
      clientName: req.body.clientName,
      clientEmail: req.body.clientEmail,
      status: req.body.status,
      senderAddress: {
        street: req.body.senderStreet,
        city: req.body.senderCity,
        postCode: req.body.senderPostCode,
        country: req.body.senderCountry,
      },  
      clientAddress: {
        street: req.body.clientStreet,
        city: req.body.clientCity,
        postCode: req.body.clientPostCode,
        country: req.body.clientCountry,
      },
      items: req.body.items,
      total: req.body.total,
    };

    const docs = await db.collection("invoices").insertOne(invoice);

    res.status(200).json(docs);
  }

  client.close();
}

export default handler;
