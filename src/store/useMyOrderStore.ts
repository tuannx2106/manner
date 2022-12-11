import { UserOrder } from 'types'
import create from 'zustand'
import dayjs from 'dayjs'

export const defaultOwner = {
  id: 1,
  firstName: 'Ryan',
  lastName: 'Fralick',
  address: '1489 DESERT SPRINGS AVE',
  state: 'Washington',
  city: 'Richland',
  zipCode: '99352',
  country: 'United States',
}

export const defaultProducts = [{
  id: 1,
  img: '/img/img_product_1.png',
  name: 'Ultricies Nibh',
  quantity: 2,
  price: 8.99,
},
{
  id: 2,
  img: '/img/img_product_2.png',
  name: 'Fringilla Sollicitudin Consectetur',
  quantity: 1,
  price: 14.99,
}]

export type MyOrderStore = {
  order: UserOrder
  updateQuantity: (productID: number, newQuantity: number) => void
  removeProduct: (productID: number) => void
  checkout: (order: UserOrder) => void
}

export const useMyOrderStore = create<MyOrderStore>()((set) => ({
  order: {
    createdOn: dayjs().format('MMM Do YYYY'),
    updatedOn: dayjs().format('MMM Do YYYY'),
    products: defaultProducts,
    owner: defaultOwner,
  },
  updateQuantity: (id, newQuantity) => set((state) => ({
    order: {
      ...state.order,
      products: state.order.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: newQuantity,
          }
        } return product
      }),
    },
  })),
  removeProduct: (id) => set((state) => ({
    order: {
      ...state.order,
      products: state.order.products.filter((product) => product.id !== id),
    },
  })),
  checkout: (order) => set({ order }),
}))
