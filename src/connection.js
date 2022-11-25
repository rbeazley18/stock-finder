
const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri");

export async function connectToClusterAndInsertDocument(stockInfoToAdd) {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        addStockToWatchlist(client, stockInfoToAdd)

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// Add functions that make DB calls here
async function addStockToWatchlist(client, newStock){
    const result = await client.db("watchlist").collection("stocks").insertOne(newStock);
    console.log(`New stock added to watchlist with the following id: ${result.insertedId}`);
}

