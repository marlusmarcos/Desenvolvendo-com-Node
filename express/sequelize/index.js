const express = require ('express');
const exphbs = require ('express-handlebars');
const conn = require ('./db/conn');
const User = require('./models/User');
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

app.get ('/users/create', (req, res) => {
    res.render ('adduser');
})

app.post ('/users/create', async (req,res) => {
    const name = req.body.name;
    const ocuppation = req.body.ocuppation;
    let newsLatter = req.body.newsLatter;
    if (newsLatter === 'on') {
        newsLatter = true 
    } else {
        newsLatter = false;
       }
          await User.create ({name,ocuppation,newsLatter});
    res.redirect('/');
})

app.get ('/', (req,res) => {
    res.render('home');
}) 

conn.sync().then (() => {
    app.listen (3000, (err) => {
        if (err) {
            console.log(err);
            
        }
        console.log (`rodando  na porta 3000`);
    })
}) 







