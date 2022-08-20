const express = require ('express');
const exphbs = require ('express-handlebars');
const conn = require ('./db/conn');
const port = 3000;
const app = express ();
const user = require ('./models/User');


app.engine ('handlebars', exphbs.engine());

app.set ('view engine', 'handlebars');

app.use (express.static('public'));

app.use (
    express.urlencoded ({
        extends: true,
    })
)

app.use (express.json())

conn.sync().then (() => {
    app.listen (3000, (err) => {
        if (err) {
            console.log(err);
            
        }
        console.log (`rodando  na porta 3000`);
    })
}) 







