import React from 'react'
import {Card} from 'react-bootstrap'

const Products = ({data}) => {
  return (
    
         <Card  className="mx-auto">
      <Card.Body>
       <h2>{data.first_name}</h2>
      <h5>{data.id}</h5>
      {/* <img src={data.image} alt=""></img> */}
      </Card.Body>
      </Card>
      
  )
}

export default Products
