import { MongoClient } from "./mongodb";
// const { ClientEncryption } = require('mongodb-client-encryption');
import uri from "./atlas_uri";

async function connectToClusterAndInsertDocument() {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        await addStockToWatchlist(client, { symbol: "MMM", name: "3M" });

    }
    catch (err) {
        console.error("Error connecting to database.");
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

// connectToClusterAndInsertDocument().catch(console.error);

// Add functions that make DB calls here
async function addStockToWatchlist(client, newStock) {
    const result = await client.db("watchlist").collection("stocks").insertOne(newStock);
    console.log(`New stock added to watchlist with the following id: ${result.insertedId}`);
    console.log(result);
}

export default connectToClusterAndInsertDocument;

// const watchBtn = document.getElementById("watchlist-btn");
// watchBtn.addEventListener("click", connectToClusterAndInsertDocument);

connectToClusterAndInsertDocument();

