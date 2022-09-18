const express=require('express')
const { datadetails }=require('../controllers/dataController')
const router=express.Router()

router.get('/', datadetails)

module.exports=router