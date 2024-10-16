require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('aditya bharti')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at the website</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>Chai aur code</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
