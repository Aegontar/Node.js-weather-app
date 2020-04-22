const request = require('request')

const forecast = require('./utils/forecast')

const geocode = require('./utils/geocode')

require('dotenv').config()

const address = process.argv[2]


if(!address) { 
     
   console.log('Please provide an address')

 } else {

  geocode(address, (error, {latitude, longitude, location}) => {

    if(error) {
      
      return console.log(error)         
    
      } 
    
       forecast( latitude, longitude, (error, forecastData) => {
              
           if(error) {
                    
            return console.log(error)
              
           }
                 console.log(location)
                 console.log(forecastData)   
              // console.log(process.env.CORD_API)
          })
        
    })
  
}

  
  

 



  // -75.7088, 44.1545
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

