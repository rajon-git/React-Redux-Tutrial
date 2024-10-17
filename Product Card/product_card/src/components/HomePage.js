import React from 'react'
import Product from './productPage/Product'
import InputForm from './productPage/InputForm'
import { useSelector } from 'react-redux'

export default function HomePage() {
  const products = useSelector((state) => state.products)
  return (
    <div>
      <div class="productWrapper">
      <div class="productContainer" id="lws-productContainer">
      {
        products.length >= 1 ? 
        products.map(item=><Product key={item.id} product={item} />) :
        "No product found"
      }
        
      </div>
        <InputForm/>
      </div>
    </div>
  )
}
