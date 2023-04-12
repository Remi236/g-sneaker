import { useState } from 'react'
type AddToCartProps = {
  id: number
  isAddedToCart?: boolean
}
export const AddToCart = ({ id }: AddToCartProps) => {
  const [addedToCart, setaddedToCart] = useState(false)
  return (
    <button
      className={`product--add-to-cart ${addedToCart ? 'added' : ''}`}
      onClick={() => {
        console.log(id)
        setaddedToCart(true)
      }}
    >
      {addedToCart ? '' : 'Add to Cart'}
    </button>
  )
}
