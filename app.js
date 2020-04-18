const request = require('request')

const forecast = require('./utils/forecast')

const geocode = require('./utils/geocode')

const address = process.argv[2]


if(!address) { 
     
   console.log('Please provide an address')

 } else {

  geocode(address, (error, data) => {

    if(error) {
      
      return console.log(error)         
    
      } 
    
       forecast( data.latitude, data.longitude, (error, forecastData) => {
              
           if(error) {
                    
            return console.log(error)
              
           }
                 console.log(data.location)
                 console.log(forecastData)   
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

