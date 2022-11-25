const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri");

async function main() {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        const dbs = await client.db().admin().listDatabases()
        console.table(dbs.databases)
        // Make the appropriate DB calls

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// Add functions that make DB calls here