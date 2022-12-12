/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, Card, Form, Input, Result, Select } from 'antd'

import React from 'react'
import dayjs from 'dayjs'
import dynamic from 'next/dynamic'
import s from './EditOrderPage.module.scss'
import { useMyOrderStore } from '../../store/useMyOrderStore'
import { useRouter } from 'next/router'

const YourCart = dynamic(() => import('./components/YourCart'), { ssr: false });

const Order = () => {
  const router = useRouter()
  const [form] = Form.useForm()

  const { order, checkout } = useMyOrderStore()

  if (!order.products.length) {
    return (
      <Result
        status="404"
        subTitle="Your cart is empty. Go back to our website and pick some more stuffs :)"
        extra={<Button type="primary" onClick={() => router.reload()}>Back Home</Button>}
      />
    )
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <YourCart />
        <Card
          style={{
            marginTop: 24,
            overflowX: 'hidden',
          }}
          title="Shipping information"
        >
          <Form
            form={form}
            name="shippingInformation"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}
            initialValues={{ ...order.owner }}
            onFinish={(formValues) => {
              checkout({
                ...order,
                owner: formValues,
                updatedOn: dayjs().format('MMM Do YYYY'),
              })
              router.push('/')
            }}
          >
            <Form.Item
              label="First name"
              name="firstName"
              rules={[{
                required: true,
                message: 'Required',
              }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last name"
              name="lastName"
              rules={[{
                required: true,
                message: 'Required',
              }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{
                required: true,
                message: 'Required',
              }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              rules={[{
                required: true,
                message: 'Required',
              }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Country"
              name="country"
              rules={[{
                required: true,
                message: 'Required',
              }]}
            >
              <Select>
                <Select.Option value="United States">United States</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="State"
              name="state"
              rules={[{
                required: true,
                message: 'Required',
              }]}
            >
              <Select>
                <Select.Option value="Alabama">Alabama</Select.Option>
                <Select.Option value="Arizona">Arizona</Select.Option>
                <Select.Option value="Alaska">Alaska</Select.Option>
                <Select.Option value="Washington">Washington</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Zip code"
              name="zipCode"
              rules={[{
                required: true,
                message: 'Required',
              }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{
              offset: 8,
              span: 16,
            }}
            >
              <Button type="primary" htmlType="submit">
                Checkout
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default Order
