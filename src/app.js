const express = require('express')
const path = require('path')
const hbs  = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Fatih Yavuz'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'Some help text',
        title: 'Help',
        name: 'Fatih Yavuz'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name: 'Fatih Yavuz'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        location: 'Ankara',
        forecast: 5
    })
})

// handle 404 pages 

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name: 'Fatih Yavuz',
        errorMessage:'Help article not found'
        
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:404,
        name: 'Fatih Yavuz',
        errorMessage:'Page Not Found!'
        
    })
})


app.listen(3000,()=>{
    console.log('The server is up on port 3000')
})
