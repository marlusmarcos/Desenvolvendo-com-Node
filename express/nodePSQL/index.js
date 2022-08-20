const express = require ('express');
const exphbs = require ('express-handlebars');
const {Client} = require('pg');
const port = 3000;
const app = express ();

app.engine ('handlebars', exphbs.engine());

app.set ('view engine', 'handlebars');

app.use (express.static('public'));

app.use (
    express.urlencoded ({
        extends: true,
    })
)


app.use (express.json())

app.post ('/usuario/create', (req,res) => {
    const nome = req.body.nome;
    const idade= req.body.idade;

    const sql = `INSERT INTO pessoa (nome, idade) VALUES ('${nome}', '${idade}')`;

    conn.query (sql, (err) => {
        if (err) {
            console.log(err);
        }
        res.redirect ('/');
    })

})

app.get ('/', (req, res) => {

    res.render('home');

})

app.get ('/pessoa', (req, res) => {
    const sql = "SELECT * FROM pessoa;";

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        const pessoas = data.rows;
        console.log(pessoas);
        res.render('books', {pessoas});
    })
    // console.log(pessoas);
    // res.render('books', {pessoas});

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




