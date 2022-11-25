const user = process.env.MONGO_USER;
const password = encodeURIComponent(process.env.MONGO_PW);

module.exports = uri = `mongodb+srv://${user}:${password}@cluster0.ko55suo.mongodb.net/?retryWrites=true&w=majority`