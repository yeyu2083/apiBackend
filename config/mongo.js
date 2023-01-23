
const mongoose = require("mongoose");

const options = {
    maxPoolSize: 100,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const db_uri = process.env.db_uri ;
mongoose.set('strictQuery', false)
mongoose.connect(db_uri, options, (err) => {
    err ? console.log(`No se pudo conectar a Mongo Atlas: ${err.message}`) :
    console.log('Mongo Atlas conectado');
});