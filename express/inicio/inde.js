const express = require('express');
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send ("Mandando mg na porta 3001");
});

app.listen (port, () => {
    console.log (`rodando na porta ${port}`)
})



























// const express = require ('express')

// const app = express();
// const port = 3000

// app.get ("/", (req, res) => {
//     res.send ("primeiro get com node, 5k em 2023 é relidade!! até março, amém")

// })

// app.listen(port, () => {
//     console.log (`servidor rodando na porta ${port}`);
// })