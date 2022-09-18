const express=require('express')
const app=express()
const dotenv=require('dotenv')
var cors=require('cors')
const datadetails=require('./router/dataRoute')


dotenv.config()

app.use(cors())
app.use('/',datadetails)



app.listen(process.env.PORT,()=>{
    console.log('listening');
})