// const user = process.env.MONGO_USER;
// const password = encodeURIComponent(process.env.MONGO_PW);
// console.log(password);
require('dotenv').config();

module.exports = uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.ko55suo.mongodb.net/?retryWrites=true&w=majority`