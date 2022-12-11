import Link from 'next/link'
import Order from 'modules/OrderCard';
import React from 'react';
import s from './OrderPage.module.scss';

const HomePage = () => (
  <div className={s.root}>
    <Link href="/cart">Edit Order</Link>
    <div className={s.container}>
      <Order />
    </div>
  </div>
);

export default HomePage;
