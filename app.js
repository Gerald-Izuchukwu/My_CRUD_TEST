const express = require ('express');
const path = require('path');
const fs = require('fs');
const { brothers, brothers2 } = require('./brothers_db');
const Brother = require('./models/brother.models')

const logger = require('./middleware/log_mw');
// const route 
const PORT = 5600;

// initializes the express middle ware
const app = express();

// // set a static folder middleware
// app.use(express.static(path.join(__dirname, 'public')));


// init log middleware
/*this basically runs anytime a request is sent */
app.use(logger)

app.get('/', (req, res)=>{
    res.send("We are here")

})

// getting all brothers
app.get('/brothers', (req, res)=>{
    return res.json({
        message : "Aloha Everybody, these are my brothers",
        details : brothers
    })
})

// getting single brothers by page
app.get('/1', (req, res)=>{
    return res.json({
        details : brothers.Brother1
    })
})

app.get('/2', (req, res)=>{
    return res.json({
        details : brothers.Brother2
    })
})

app.get ('/3', (req, res)=>{
    return res.json({
        details: brothers.Brother3
    })
})

// getting brothers by id
app.get('/brothers/:id', (req, res)=>{
    /* first lets check if the ID passed exists, if it does we send back the api, if not we throw an error and set
    the status to 400*/
    
    // the some method basically returns a boolean(true or false) depending on the argument passed,
    const found = brothers2.some(brother => {
        return brother.id === parseInt(req.params.id)});

    if (found) {
        res.json(brothers2.filter(brother =>{
            return brother.id ===(parseInt(req.params.id)) //we use parseInt to convert the ID to a string
        }))
        
    } else {
        res.status(400).json({msg: `no member with the id of ${req.params.id}`})
        
    }
    
})
app.listen(PORT, (req, res)=>{
    console.log(`server running on port : ${PORT}`)
})
