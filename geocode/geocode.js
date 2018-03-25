const request = require('request');

module.exports = {
    
    geocodeAddress: (url, callback)=>{
    var encodedURL = encodeURIComponent(url);
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyBKOICrGyaZre5Wx4LEfUUIVLUeLv_x0X8`,
        json: true
        }, (error, response, body)=>{
        if(error){
            callback('Unable to connect to Google service.');
        } else if(body.status === 'ZERO_RESULTS'){
            callback('Google: unable to find that address.');
        }
        else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })

        }
        })
    }
}