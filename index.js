const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("<h1 style='color: blue;'>Teste HTML!</h1>")
})
app.get('/first', (req, res) => {
  // query.params == filtros por palavras chaves
  //rec.params == varias instancias do mesmo nicho
res.send(`<h1 style='color: blue;'>first</h1>`)
})

app.get('/second', (req, res) => {
  // query.params == filtros por palavras chaves
  //rec.params == varias instancias do mesmo nicho
res.send(`<h1 style='color: red;'>second</h1>`)
})

app.get('/third', (req, res) => {
  // query.params == filtros por palavras chaves
  //rec.params == varias instancias do mesmo nicho
res.send(`<h1 style='color: green;'>third</h1>`)
})

app.listen(3000)

// nodemon - ferramenta para automatizar o processo de reload
// serv + cod
