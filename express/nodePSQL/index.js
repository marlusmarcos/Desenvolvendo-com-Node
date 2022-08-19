const express = require ('express');
const exphbs = require ('express-handlebars');
const {Client} = require('pg');
const port = 3000;
const app = express ();

app.engine ('handlebars', exphbs.engine());

app.set ('view engine', 'handlebars');

app.get ('/', (req, res) => {

    res.render('home');

})

const conn = new Client ({
    user: 'postgres',
    host: 'localhost',
    database: 'testenode',
    password: 'postgres',
    port: 5432,
}) 

conn.connect((err)=>{
    if (err) {
        console.log(err);
    }
    app.listen (3000, (err) => {
        if (err) {
            console.log(err);
            
        }
        console.log (`rodando  na porta 3000`);
    })
});




