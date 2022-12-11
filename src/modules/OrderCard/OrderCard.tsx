import Button from 'components/Button'
import Divider from 'components/Divider'
import { Modal } from 'antd'
import React from 'react'
import Tag from 'components/Tag'
import s from './OrderCard.module.scss'
import { useMyOrderStore } from 'store/useMyOrderStore'

const Order = () => {
  const { products, owner, createdOn, updatedOn } = useMyOrderStore((state) => state.order)
  const totalBill = products.reduce((acc, { price, quantity }) => acc + (price * quantity), 0)

  const onClickCancel = () => {
    Modal.confirm({
      title: 'Are you sure you want to cancel the order?',
      cancelText: 'No',
      okText: 'Yes',
    })
  }

  const onClickRefund = () => {
    Modal.confirm({
      title: 'Are you sure you want to refund?',
      cancelText: 'No',
      okText: 'Yes',
    })
  }

  const onClickResendConfirmation = () => {
    Modal.success({
      content: 'Confirmation sent!',
    })
  }

  const onClickResentTracking = () => {
    Modal.success({
      content: 'Tracking sent!',
    })
  }

  return (
    <>
      <div className={s.orderInfo}>
        <h1><b>Order</b> US5426899</h1>
        <div className={s.orderDate}>
          <p>Created on {createdOn}</p>
          <p>Last updated on {updatedOn}</p>
        </div>
      </div>
      <div className={s.orderCard}>
        <div className={s.header}>
          <div className={s.headerImg} />
          <div className={s.headerProduct}>PRODUCT</div>
          <div className={s.headerQuantity}>QUANTITY</div>
          <div className={s.headerPrice}>PRICE</div>
        </div>

        {products.map(({ id, name, img, quantity, price }) => (
          <div key={id}>
            <div className={s.product}>
              <div className={s.productImg}><img src={img} alt={name} /></div>
              <div className={s.productName}>
                <p className={s.name}>{name}</p>
                <p className={s.quantity}><b>Quantity:</b> {quantity}</p>
              </div>
              <div className={s.productQuantity}>{quantity}</div>
              <div className={s.productPrice}>${price * quantity}</div>
            </div>
            <Divider />
          </div>
        ))}

        <div className={s.orderTotal}>
          <b>Total:</b>
          <span className={s.orderTotalPrice}>${Math.round(totalBill * 100) / 100}</span>
        </div>
        <Divider />

        <div className={s.orderShippingAddress}>
          <h2>
            SHIPPING ADDRESS
          </h2>
          <div className={s.owner}>
            <p>{owner.firstName} {owner.lastName}</p>
            <p>
              {owner.address} {owner.city.toUpperCase()}, {owner.state} {owner.zipCode}
            </p>
            <p>{owner.country}</p>
          </div>
        </div>

        <div className={s.tags}>
          <Tag text="SUBSCRIPTION_ORDER" />
          <Tag text="PAID" />
          <Tag text="UNFULFILLED" />
        </div>
        <Divider />

        <div className={s.orderAction}>
          <Button onClick={onClickCancel}>Cancel</Button>
          <Button onClick={onClickRefund}>Refund</Button>
          <Button onClick={onClickResendConfirmation}>Resend Confirmation</Button>
          <Button onClick={onClickResentTracking}>Resend Tracking</Button>
        </div>

      </div>
    </>
  )
}

export default Order
