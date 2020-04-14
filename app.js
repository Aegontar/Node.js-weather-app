const request = require('request')

const forecast = require('./utils/forecast')

const geocode = require('./utils/geocode')

//const url = "https://api.darksky.net/forecast/d18543d5b61ebcb32ebac9612bafb89d/37.8267,-122.4233"

//const url = "https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/O39RjAvc1BIWO0B0_vBb_suhDtZkHyIgS0MyuLTuNXXsYwpZ1v50t1gc?season=13&api_key=RGAPI-29fffc4b-e48a-4b37-9f93-a5a68b5e5090"

/* request({url:url, json:true}, (error, response) => {
        
  
  if (error) {

   console.log("Check your internet connection -_-")

  } else if (response.body.error) {

    console.log("Unable to find location")

  }
  
  else {
   
    console.log("It is currently " + response.body.currently.temperature + " Degree C. There is a " + response.body.currently.precipProbability + "% chance of rain.")

    
  }
    
  
}) */





/*


const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWVnb250YXIiLCJhIjoiY2s4YnpzMW4xMDB4dTNmbHNua2NoZGhqbCJ9.PzFwRuPV1tb6-044P1d9fg"

//const url = "https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/O39RjAvc1BIWO0B0_vBb_suhDtZkHyIgS0MyuLTuNXXsYwpZ1v50t1gc?season=13&api_key=RGAPI-29fffc4b-e48a-4b37-9f93-a5a68b5e5090"

request({url:geocodeURL, json:true}, (error, response) => {
        
    if (error) {
    

       console.log("Cannot connect to server! Check your internet connection")


  } else if (response.body.features.length === 0) {

       console.log("Unable to find location! Try another search")

  }
  
  
  else {

      const latitute = response.body.features[0].center[1]

      const longitude = response.body.features[0].center[0]
  
      console.log( "latitute is " + latitute + "longitude " + longitude )
                
  }
      
  
}) 

const geocode = (address, callback) => {


  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYWVnb250YXIiLCJhIjoiY2s4YnpzMW4xMDB4dTNmbHNua2NoZGhqbCJ9.PzFwRuPV1tb6-044P1d9fg"

  request ({url:url, json:true}, (error, response) => {

     if (error) {

          callback("unable to connect to the location service!", undefined)

     } else if (response.body.features.length === 0) {


         callback("unable to connect to the location try another search!", undefined)

     } else {


      callback(undefined, {

        latitute: response.body.features[0].center[1],

        longitude: response.body.features[0].center[0],

        location: response.body.features[0].place_name

        

      })


     }

         

  })
  
  } */
  
  geocode("Philadelphia", (error, data) => {
         
          console.log("Error", error)
          console.log("Data", data)

  })




  //
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})