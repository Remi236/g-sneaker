import { useEffect, useContext } from 'react'
import { DataContext } from '../contexts/dataContext'
import '../styles/Carts.css'
import { CartItem } from './'
import { Cart } from '../models'

export const Carts = () => {
  const { cartSelector, loadCarts, apiResponse } = useContext(DataContext)
  const cart = cartSelector
  const cartItems = cart.items
  const cartTotal = cart.total

  useEffect(() => {
    loadCarts()
  }, [])

  const renderBody = () => {
    // if (isLoading) return <p>Loading...</p>
    if (apiResponse.message) return <p>{apiResponse.message}</p>
    if (!cartItems.length) return <p>Your cart is empty</p>
    return cartItems.map((item: Cart) => <CartItem key={item.id} item={item} />)
  }

  return (
    <article className="article">
      <div className="cart--header">
        <h1>Cart</h1>
        <label className="cart--total">${cartTotal.toFixed(2)}</label>
      </div>
      <section className="carts">{renderBody()}</section>
    </article>
  )
}
