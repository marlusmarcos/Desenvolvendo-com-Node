const express = require ('express')
const app = express ();

const port = 3000;
//renderizando html via GET

const path = require ('path')

const basePath = path.join (__dirname, "arquivosHTML");


app.get ("/", (req, res) => {
    res.sendFile (`${basePath}/index.html`);
    
})

app.listen (port, ()=> {

    console.log (`rodando na porta ${port}`)
})