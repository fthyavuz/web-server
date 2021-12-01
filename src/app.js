const express = require('express')

const app = express()

app.get('',(req,res)=>{
    res.send('Hello Express!')
})

app.get('/help',(req,res)=>{
    res.send('Help Page')
})

app.get('/about',(req,res)=>{
    res.send('About page')
})

app.get('/weather',(req,res)=>{
    res.send('Weather Page')
})

app.listen(3000,()=>{
    console.log('The server is up on port 3000')
})
