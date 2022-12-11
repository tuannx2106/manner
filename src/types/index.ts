export type Product = {
  id: number;
  img: string;
  name: string;
  price: number;
}

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
}

export type ProductOrder = Product & {
  quantity: number
}

export type UserOrder = {
  products: ProductOrder[]
  owner: User
  createdOn: string
  updatedOn: string
}
