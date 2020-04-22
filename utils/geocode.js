const request = require('request')
const dotenv = require('dotenv').config()


const geocode = (address, callback) => {


    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + process.env.CORD_API
    
    request ({url, json:true}, (error, {body}) => {
  
       if (error) {
  
            callback("unable to connect to the location service!", undefined)
  
       } else if (body.features.length === 0) {
  
  
            callback("unable to connect to the location try another search!", undefined)
  
       } else {
  
  
            callback(undefined, {
            
               
               latitude: body.features[0].center[1],

               longitude: body.features[0].center[0],
            
               location: body.features[0].place_name
  
           })
       }
  
    })
    
  }

    
  module.exports = geocode


