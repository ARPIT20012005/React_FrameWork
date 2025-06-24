import React from 'react'

const ProductInfo = () => {
    const Product = {
        name: "Hp PAVILION",
        price: 56000,
        availability: "In Stock",
    };


  return (
    <div>
        <h1>Name: {Product.name}</h1>
        <h1>Price: ${Product.price}</h1>
        <h1>Availability: {Product.availability}</h1>
    </div>
  )
}

export default ProductInfo