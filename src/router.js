var express = require('express');
var router = express.Router();
var util = require('./util.js');

router.get('/hello', function (req, res) {
    res.send(`hello ${new Date()}`)
});

router.post('/detectface', function (req, res) {
    
    
    util.detectface(req.body,(response)=>{
        res.json(response)
    }, (error)=>{
        res.send(error)
    })

});


module.exports = router;