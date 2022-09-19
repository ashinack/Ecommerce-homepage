import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Product.css'
import axios from 'axios'
import Header from './Header'
import { Button, Card } from 'react-bootstrap'
const BASE_URL = `http://localhost:5000/`

const ProductData = () => {
    const [products,setProducts]=useState([])
    const [title,setTitle]=useState("")
    const [header,setheader]=useState([])
    const [error,setError]=useState("")
    
    useEffect(()=>{
        
        axios.get(`${BASE_URL}`).then((res)=>{
            
            setheader(res.data.header)
            setTitle(res.data.title)
            setProducts(res.data.products)
        }).catch((res)=>{
           
            setError(res.data)
        })
        document.title=title

    },[title,products,header])
  
    

  return (
    <>
    <Header headerdata={header}/>
   
        <div className='Row'>
            <div className='posters'>
        {
            products.map((key,index)=>{
                return (

                    
      <Card style={{width:'17rem',height:'17rem',color:'black'}} className='mx-3 my-5'>
      <Card.Body key={index}>
        
       
      <img src={key.image} alt="" style={{width:'200px',height:'100px'}}></img>
      <h2 >{key.name}</h2>
      <span>{key.Category}</span><br></br>
      <Button className='mt-3'>ADD TO CART</Button>
      </Card.Body>
      </Card>)
               
            })
        }
        </div>
      </div>
    </>
  )
}

export default ProductData
