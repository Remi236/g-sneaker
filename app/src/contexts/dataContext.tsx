import { useState, createContext } from 'react'
import {
  Product,
  Cart,
  storeDefault,
  DataContextType,
  SelectorEnum,
} from '../models'
import dataProducts from '../data/shoes.json'
import dataCarts from '../data/carts.json'

type ContextProps = {
  children: JSX.Element
}

const DataContext = createContext({} as DataContextType)

const DataContextProvider = ({ children }: ContextProps) => {
  const [store, setStore] = useState(storeDefault)
  const [isLoading, setIsLoading] = useState(true)

  const productSelector = store.products
  const cartSelector = store.cart

  const addItem = async (itemAdd: Product | Cart, selector: string) => {
    setIsLoading(true)
    const cartItem: Cart = {
      id: itemAdd.id,
      name: itemAdd.name,
      color: itemAdd.color,
      price: itemAdd.price,
      image: itemAdd.image,
      quantity: 1,
      isAddedToCart: true,
    }

    if (selector === SelectorEnum.CART) {
      const items = [...store['cart'].items, cartItem]
      const total = items.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
        0,
      )
      const cart = {
        items,
        total,
      }
      if (items) {
        setStore((preStore) => ({ ...preStore, cart }))
      }
      setIsLoading(false)
      return
    }

    setStore((preStore) => ({
      ...preStore,
      products: [...store.products, itemAdd as Product],
    }))

    setIsLoading(false)
  }

  const editItem = async (itemEdit: Product | Cart, selector: string) => {
    setIsLoading(true)

    if (selector === SelectorEnum.CART) {
      const editCartItem: Cart = { ...itemEdit } as Cart

      const items = store['cart'].items.map((item: Cart) =>
        item.id === editCartItem.id ? editCartItem : item,
      )
      const total = items.reduce(
        (accumulator: number, item: Cart) =>
          accumulator + item.price * item.quantity,
        0,
      )
      const cart = {
        items: items as Cart[],
        total,
      }
      if (items) {
        setStore((preStore) => ({ ...preStore, cart }))
      }
      setIsLoading(false)
      return
    }

    setStore((preStore) => ({
      ...preStore,
      products: [...store.products].map((item: Product) =>
        item.id === itemEdit.id ? itemEdit : item,
      ) as Product[],
    }))

    setIsLoading(false)
  }

  const deleteItem = async (itemDelete: Product | Cart, selector: string) => {
    setIsLoading(true)

    if (selector === SelectorEnum.CART) {
      const items = store['cart'].items.filter(
        (item) => item.id !== itemDelete.id,
      )
      const total = items.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
        0,
      )
      const cart = {
        items,
        total,
      }
      if (items) {
        setTimeout(() => {
          setStore((preStore) => ({ ...preStore, cart }))
        }, 800)
      }
      setIsLoading(false)
      return
    }

    setTimeout(() => {
      setStore((preStore) => ({
        ...preStore,
        products: [...store.products].filter(
          (item) => item.id !== itemDelete.id,
        ),
      }))
    }, 800)

    setIsLoading(false)
  }

  const loadProducts = async () => {
    setIsLoading(true)
    const products = dataProducts.shoes.map((item) => ({
      ...item,
      isAddedToCart: false,
    }))
    if (products) {
      setStore((preStore) => ({ ...preStore, products }))
    }
    setIsLoading(false)
  }

  const loadCarts = async () => {
    setIsLoading(true)
    const items = dataCarts.cart.map((item: Cart) => ({
      ...item,
      isAddedToCart: true,
    }))
    const total = items.reduce(
      (accumulator, item) => accumulator + item.price,
      0,
    )
    const cart = {
      items,
      total,
    }
    if (items) {
      setStore((preStore) => ({ ...preStore, cart }))
    }
    setIsLoading(false)
  }

  const DataContextData = {
    isLoading,
    setIsLoading,
    store,
    setStore,
    productSelector,
    cartSelector,
    addItem,
    editItem,
    deleteItem,
    loadProducts,
    loadCarts,
  }

  return (
    <DataContext.Provider value={DataContextData}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataContextProvider }
