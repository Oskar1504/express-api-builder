const express = require('express')
const fs = require('fs')

const Response = require('../helper/Response');

const router = express.Router();

router.get('*', async (req, res) => {
    try{
        let set = req.url.split("/").pop().toUpperCase()
        res.json(Response.buildResponse("Api route working"))
    }
    catch(e){
        res.json(Response.buildErrorResponse(e))
    }
})

module.exports = router;