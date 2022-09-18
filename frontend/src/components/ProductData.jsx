import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'
import Products from './Products'
const BASE_URL = `http://localhost:5000/`

const ProductData = () => {
    const [state,setState]=useState([])
    const [title,setTitle]=useState("")
    const [error,setError]=useState("")
    // useEffect(()=>{
        
    // })
    useEffect(()=>{
        console.log('lllll');
        axios.get(`${BASE_URL}`).then((res)=>{
            console.log(res);
            setTitle(res.data.title)
            setState(res.data.products)
        }).catch((res)=>{
            console.log(res);
            setError(res.data)
        })
        document.title=title

    },[title])
    console.log('ppppp');
    console.log(title);
    

  return (
    <div class="container mt-4" >
      
        {
            state.map((key,index)=>{
                return <Products data={key} key={index}/>
            })
        }
      
     
    </div>
  )
}

export default ProductData
