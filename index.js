const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// Routes
app.get('/', (req, res) => {
    res.render('index',{
    })
  })

app.get('/privacy', (req, res) => {
  res.render('privacy',{
  })
})

app.get('/terms', (req, res) => {
  res.render('t&c',{
  })
})

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "pug");

// Server configuration
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));






