/* eslint-disable @typescript-eslint/ban-ts-comment */
import { cleanup, render } from '@testing-library/react'
import { defaultOwner, defaultProducts, useMyOrderStore } from 'store/useMyOrderStore'

import OrderCard from '.'
import React from 'react'
import { UserOrder } from 'types'

jest.mock('store/useMyOrderStore', () => ({
  ...jest.requireActual('store/useMyOrderStore'),
  useMyOrderStore: jest.fn(),
}))

jest.mock('antd', () => ({
  Modal: {},
}))

const mockedUseMyOrderStore = useMyOrderStore as unknown as jest.Mock

const setupScreen = (initialValues?: Partial<UserOrder>) => {
  mockedUseMyOrderStore.mockReturnValue({
    // @ts-ignore
    products: defaultProducts,
    // @ts-ignore
    owner: defaultOwner,
    // @ts-ignore
    createdOn: '',
    // @ts-ignore
    updatedOn: '',
    ...initialValues,
  })
  return render(<OrderCard />)
}

describe('OrderCard component', () => {
  afterEach(cleanup)

  it('should render correctly', () => {
    const screen = setupScreen()
    screen.findByAltText('Ryan Fralick')
    screen.findByAltText('Fringilla Sollicitudin Consectetur')
  })

  it('should calculate total bill correctly', async () => {
    const screen = setupScreen({
      products: [
        {
          id: 1,
          img: '',
          name: 'Ultricies Nibh',
          quantity: 2,
          price: 5,
        },
        {
          id: 2,
          img: '',
          name: 'Ultricies Nibh',
          quantity: 2,
          price: 10,
        },
      ],
    })
    expect((await screen.findByLabelText('total price')).textContent).toBe('$30')
  })
})
