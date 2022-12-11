import { Card, InputNumber, Popconfirm, Space } from 'antd'

import { CloseCircleFilled } from '@ant-design/icons'
import React from 'react'
import s from './YourCart.module.scss'
import { useMyOrderStore } from 'store/useMyOrderStore'

const getRoundedNumber = (number: number):number => Math.round(number * 100) / 100

const YourCart = () => {
  const products = useMyOrderStore((state) => state.order.products)
  const updateQuantity = useMyOrderStore((state) => state.updateQuantity)
  const removeProduct = useMyOrderStore((state) => state.removeProduct)
  const totalBill = products.reduce((acc, { price, quantity }) => acc + (price * quantity), 0)

  return (
    <Card title="Your cart">
      {products.map(({ id, img, name, quantity, price }) => (
        <div key={id} className={s.product}>
          <div className={s.imgArea}><img src={img} alt={name} /></div>
          <div className={s.productInfo}>
            <b className={s.productName}>{name}</b>
            <div className={s.quantityArea}>
              <Space size={4}>
                <Popconfirm title="Are you sure?" onConfirm={() => removeProduct(id)}>
                  <CloseCircleFilled />
                </Popconfirm>
                <InputNumber
                  min={1}
                  defaultValue={quantity}
                  onChange={(value) => {
                    if (!value || value < 1) return
                    updateQuantity(id, value)
                  }}
                />
              </Space>
              <p>${getRoundedNumber(price * quantity)}</p>
            </div>
          </div>
        </div>
      ))}
      <p className={s.total}>
        <b>Total: </b>${getRoundedNumber(totalBill)}
      </p>
    </Card>
  )
}

export default YourCart
