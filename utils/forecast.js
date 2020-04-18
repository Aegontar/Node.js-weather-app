 const request = require('request')





const forecast = (latitude, longitude, callback) => {

//const url = 'https://api.darksky.net/forecast/d18543d5b61ebcb32ebac9612bafb89d/'  + latitude + ',' + longitude



const url = 'https://api.darksky.net/forecast/d18543d5b61ebcb32ebac9612bafb89d/' + latitude + ','  + longitude + '/'

     request({ url:url, json:true}, (error, response) => {

        if (error) {
                 
                callback('unable to connect to weather service!', undefined)

        } else if(response.body.error) {
                
                callback('unable to connect to weather servicex2!', undefined)


        } else {

                callback(undefined,  response.body.daily.data[0].summary )
    
       } 
 
    }) 


    console.log(latitude, longitude)

} 

 


module.exports = forecast



















