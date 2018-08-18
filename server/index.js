require('dotenv').config();
"use strict";

// Basic express setup:
const PORT          = process.env.PORT;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const {MongoClient} = require("mongodb");
const MONGODB_URI = process.env.MONGODB_URI;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    db.close();
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  } 
  console.log("MongoDB running: ",db)
  const DataHelpers = require("./lib/data-helpers.js")(db);
  
  // The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
  // so it can define routes that use it to interact with the data layer.
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  
  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);
  
  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});
