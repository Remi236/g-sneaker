import { useContext } from 'react'
import { Product, SelectorEnum } from '../models'
import { DataContext } from '../contexts/dataContext'

type ProductProps = {
  item: Product
}
export const ProductItem = ({ item }: ProductProps) => {
  const { addItem, editItem } = useContext(DataContext)
  const { id, name, description, price, image, isAddedToCart } = item

  return (
    <div className="product" data-id={id}>
      <div className="product--image">
        <img src={image} alt={name} />
      </div>
      <h3 className="product--name">{name}</h3>
      <div className="product--description">{description}</div>
      <div className="product--bottom">
        <label>${price}</label>
        <button
          className={`product--add-to-cart ${isAddedToCart ? 'added' : ''}`}
          onClick={() => {
            editItem({ ...item, isAddedToCart: true }, SelectorEnum.PRODUCTS)
            addItem(item, SelectorEnum.CART)
          }}
        >
          {isAddedToCart ? '' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
