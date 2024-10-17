import React from 'react'
import CartItem from './cartpage/CartItem'
import BillSection from './cartpage/BillSection'

export default function CartPage() {
  return (
    <div>
      <main class="py-16">
    <div class="container 2xl:px-8 px-2 mx-auto">
      <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div class="cartListContainer">
        <div class="space-y-6">
            <CartItem/>
        </div>
        <div>
          <BillSection/>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}
