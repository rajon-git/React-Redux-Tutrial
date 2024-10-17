import React from 'react'
import Product from './productPage/Product'
import InputForm from './productPage/InputForm'

export default function HomePage() {
  return (
    <div>
      <div class="productWrapper">
      <div class="productContainer" id="lws-productContainer">
        <Product/>
      </div>
        <InputForm/>
      </div>
    </div>
  )
}
