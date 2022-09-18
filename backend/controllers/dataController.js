const fs=require('fs')
let rawdata = require('../config/data.json')
let mydata=require('../config/config.json')



const datadetails=(req,res)=>{
    try {
        console.log(rawdata);
        res.send(mydata)
        console.log(mydata.title);
        console.log(mydata.products);
    } catch (error) {
        console.log(error);
    }
}

module.exports={datadetails}