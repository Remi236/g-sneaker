import { useContext } from 'react'
import Trash from '/assets/trash.png'
import { Cart, SelectorEnum } from '../models'
import { DataContext } from '../contexts/dataContext'
type CartProps = {
  item: Cart
}
export const CartItem = ({ item }: CartProps) => {
  const { editItem, deleteItem } = useContext(DataContext)
  const { id, name, quantity, price, image, isAddedToCart } = item

  return (
    <div className={`cart ${isAddedToCart ? 'in' : 'out'}`} key={id}>
      <div className="cart--image">
        <img src={image} alt={name} />
      </div>
      <div className="cart--content">
        <h3 className="cart--name">{name}</h3>
        <div className="cart--price">${price}</div>
        <div className="cart--bottom">
          <div className="cart--buttons-group">
            <button
              className="cart--button"
              onClick={() => {
                console.log(quantity)
                if (quantity < 2) {
                  editItem(
                    { ...item, isAddedToCart: false },
                    SelectorEnum.PRODUCTS,
                  )
                  editItem({ ...item, isAddedToCart: false }, SelectorEnum.CART)
                  deleteItem(item, SelectorEnum.CART)
                  return
                }
                editItem({ ...item, quantity: quantity - 1 }, SelectorEnum.CART)
              }}
            >
              -
            </button>
            <span className="cart--quantity">{quantity}</span>
            <button
              className="cart--button"
              onClick={() =>
                editItem({ ...item, quantity: quantity + 1 }, SelectorEnum.CART)
              }
            >
              +
            </button>
          </div>
          <button
            className="cart--del"
            onClick={() => {
              editItem({ ...item, isAddedToCart: false }, SelectorEnum.PRODUCTS)
              editItem({ ...item, isAddedToCart: false }, SelectorEnum.CART)
              deleteItem(item, SelectorEnum.CART)
            }}
          >
            <img src={Trash} alt="trash" />
          </button>
        </div>
      </div>
    </div>
  )
}
