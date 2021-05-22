/* login middleware function
this gives logs the GET url to the console*/

const moment = require ('moment');
const fs = require('fs')
const path = require('path')
const logger = (req, res, next) =>{
    timestamp = (`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
    console.log(timestamp)
    fs.appendFile(path.join(__dirname, '../others', 'timestamp.txt'), timestamp, (err)=>{
        if (err) throw err;
    })
    next()
}

module.exports =logger;