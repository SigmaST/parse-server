var app = require('express')();

var ParseServer = require('./lib/index.js').ParseServer;

var parse = new ParseServer({
    databaseURI: "postgres://postgres:aritrader@192.168.0.230/traderclube_api",
    appId: 'jin3j3kn35',
    masterKey: '123456',
    serverURL: 'http://localhost:1337'
});

app.use(parse);

app.listen(1337, function () {
    console.log('Iniciado!');
});