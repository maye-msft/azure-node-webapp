
const axios = require('axios');
require('dotenv').config()
const querystring = require("querystring");

const detectface = function(image, cb, err) {
    const subscriptionKey = process.env.coginitive_service_face_key;
    const endpoint = process.env.coginitive_service_face_endpoint;
    const data = image;
    const params = {
        "returnFaceId": true,
        "returnFaceLandmarks": false,
        "returnFaceAttributes":
            "age,gender,smile,facialHair,headPose,glasses,emotion,hair,makeup,accessories,blur,exposure,noise"
    };


    
    const paramstr = querystring.stringify(params);
    const url = `${endpoint}/detect?${paramstr}`;

    httprequest('post', url, {
        "Content-Type":"application/octet-stream",
        "Ocp-Apim-Subscription-Key": subscriptionKey
    }, data).then(function (response) {
        cb(response.data)
    }).catch(function(e){
        err(e)
    });
}


const httprequest = function(method, url, headers, data) {
    return axios({
        method:method,
        url: url,
        headers: headers,
        data: data
    })
}


module.exports = {
    detectface:detectface
}