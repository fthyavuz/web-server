const request = require('postman-request')

//const access_key = '95f68b3d37c937f9d7ffec101cc4e715'

const forecast = (lat,lon,callback) => {
    url = 'http://api.weatherstack.com/current?access_key=' + process.env.ACCESS_KEY_WEATHER + '&query=' + lat + ',' + lon
    request({url,json:true},(error,{ body }) => {
        if(error){
            callback('Unable to connect to weather service',undefined)
        } else if(body.error){
            callback('Unable to find location',undefined)
        } else {
                const temp = body.current.temperature
                const flike = body.current.feelslike
                const description = body.current.weather_descriptions[0]
            callback(undefined,description+' .It is currently '+ temp + ' degrees out. It feels like ' + flike + ' degrees out.Air humidity ' + body.current.humidity )
        }
    })
}

module.exports = forecast