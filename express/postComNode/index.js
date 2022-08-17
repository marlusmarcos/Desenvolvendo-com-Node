const express = require ('express')
const app = express ();

const port = 3000;
//renderizando html via GET

const path = require ('path')

const basePath = path.join (__dirname, "arquivosHTML");

app.use (
    express.urlencoded ({
        extends: true,
    })
)


app.use (express.json())

app.post("/users/add", (req,res) => {
    console.log (req.body);
    const pessoa =  (req.body);
    const nome = pessoa.name;
    const age = pessoa.age;
    console.log (`o nome do usuário é: ${nome} e sua idade é: ${age}`);
    res.sendFile (`${basePath}/userform.html`);

})
app.get ("/users/create", (req,res) =>{

    res.sendFile (`${basePath}/userform.html`);
})

app.get ("/users/:id", (req, res) => {
    const id = req.params.id;

    console.log (`Buscando usuário pelo id: ${id}`);
    
    res.sendFile (`${basePath}/users.html`);
})

app.get ("/", (req, res) => {
    res.sendFile (`${basePath}/index.html`);
    
})

app.listen (port, ()=> {

    console.log (`rodando na porta ${port}`)
})