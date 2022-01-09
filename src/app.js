const express = require('express')
const path = require('path')
const hbs  = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// define port
//const port = process.env.PORT || 3000

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

// handle index file
app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Fatih Yavuz'
    })
})

// handle help page
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'Some help text',
        title: 'Help',
        name: 'Fatih Yavuz'
    })
})

// handle about page
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name: 'Fatih Yavuz'
    })
})

// handle weather data
app.get('/weather',(req,res)=>{

    const address = req.query.address
    if(!address){
        return res.send({
            errorMessage:'You must provide an address!'
        })
    }

    geocode(address,(error,{latitude,longtitude,placeName}={})=>{
        if (error){
            return res.send({
                errorMessage: error
            })  
        }
    
        forecast(latitude,longtitude,(error,forecastData)=>{
            if(error){
                return res.send({
                    errorMessage:error
                }) 
            }

            res.send({
                forecast: forecastData,
                location: placeName,
                address:  address
            })

        })
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

// handle 404 pages
app.get('*',(req,res)=>{
    res.render('404',{
        title:404,
        name: 'Fatih Yavuz',
        errorMessage:'Page Not Found!'
        
    })
})

// start the server
app.listen(process.env.PORT,()=>{
    console.log('The server is up on port ' + process.env.PORT)
})
