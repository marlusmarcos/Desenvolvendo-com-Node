const { raw } = require('express');
const express = require ('express');
const exphbs = require ('express-handlebars');
const conn = require ('./db/conn');
const User = require('./models/User');
const port = 3000;
const app = express ();
const user = require ('./models/User');
const Address = require('./models/Address');


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

app.get ('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user =  await User.findOne({
        raw: true,
        where : {id : id}
    }
    )
    res.render('userview', user);
})

app.get ('/users/edit/:id', async (req,res) => {
    const id = req.params.id;
    const user = await User.findOne ({
        raw: true,
        where: {id : id}
    })
    res.render('editusers', user);
})

app.post ('/users/edit', async (req,res) => {
    const id = req.body.id;
    const name = req.body.name;
    const ocuppation = req.body.ocuppation;
    let newsLatter = req.body.newsLatter;
    if (newsLatter === 'on') {
        newsLatter = true 
    } else {
        newsLatter = false;
       }
    const datauser = {
        id,
        name,
        ocuppation,
        newsLatter
    }   
    await User.update (datauser, {
        where: {
            id : id
        }
    }
    );
    res.redirect('/');
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

app.get ('/', async (req,res) => {
    const users = await User.findAll(
        {
            raw: true
        }
        );
    console.log(users)
    res.render('home', {users : users});
}) 

app.post('/address/create', async (req,res) => {
    const UserId = req.body.UserId;
    const street = req.body.street;
    const number = req.body.number;
    const city = req.body.city;
    
    const address = {
        UserId,
        street,
        number,
        city,
    }
    await Address.create(address);
    res.redirect(`/users/edit/${UserId}`);
})

conn.
sync().
//sync({force : true}).
then (() => {
    app.listen (3000, (err) => {
        if (err) {
            console.log(err);
            
        }
        console.log (`rodando  na porta 3000`);
    })
}) 







