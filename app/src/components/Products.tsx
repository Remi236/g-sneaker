import { useEffect, useContext } from 'react'
import '../styles/Products.css'
import { ProductItem } from './'
import { Product } from '../models'
import { DataContext } from '../contexts/dataContext'

export const Products = () => {
  const { isLoading, productSelector, loadProducts } = useContext(DataContext)
  const shoes = productSelector

  useEffect(() => {
    loadProducts()
  }, [])

  const renderBody = () => {
    if (isLoading) return <p>Loading...</p>
    if (!shoes) return <p>Your products is empty</p>
    if (!shoes.length) return <p>Your products is empty</p>
    return shoes.map((item: Product) => (
      <ProductItem key={item.id} item={item} />
    ))
  }

  return (
    <article className="article">
      <h1>Products</h1>
      <section className="products">{renderBody()}</section>
    </article>
  )
}
