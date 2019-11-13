const mongoose = require('mongoose');

const db = {
    username: process.env.DB_USER || "essenciadebruxa",
    password: process.env.DB_PASS || "dVtBZ5K2Q2mDeaft",
    database: process.env.DB_NAME || "essenciadebruxa",
    host: process.env.DB_HOST || "dbh23.mlab.com",
    port: process.env.DB_PORT || "27237",
    authSource: process.env.DB_AUTH || "admin"
}

const uri = `mongodb://${db.username}:${db.password}@${db.host}:${db.port}/${db.database}`;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    /*authSource: db.authSource*/
};

mongoose.connect(uri, options);

dbm = mongoose.connection;
dbm.on('error', err => {
    console.log('Ocorreu um erro ao conectar com a database.');
});
dbm.once('connected', () => {
    console.log('Conectado ao MongoDB');
});
dbm.once('disconnected', () => {
    console.log('Desconectado do MongoDB');
});
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('dBase connection closed due to app termination');
        process.exit(0);
    });
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
