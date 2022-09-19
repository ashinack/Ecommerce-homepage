const fs=require('fs')
let mydata=require('../config/config.json')



const datadetails=(req,res)=>{
    try {
       
        res.send(mydata)
        console.log(mydata.title);
        console.log(mydata.products);
    } catch (error) {
        console.log(error);
    }
}

module.exports={datadetails}