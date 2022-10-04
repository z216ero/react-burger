import Style from './BurgerConstructor.module.css';
import React, { useContext, useEffect, useState } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';
import { CardContext } from '../../utils/CartContext';
import IngridientItem from '../IngridientItem/IngridientItem';
import BunItem from '../BunItem/BunItem';
import { createOrder } from '../../utils/burger-api';
import { Ingridient } from '../../utils/types';

const initValue = 0;

const getTotalPrice = (state, cart) => {
  if (!cart) return;
  state = cart.reduce((prev, curr) => {
    if (curr.type === "bun") {
      return prev + curr.price * 2;
    }
    else {
      return prev + curr.price;
    }

  }, 0);
  return state;
}

export default function BurgerConstructor() {
  const cart = useContext(CardContext);
  const [visible, setVisible] = useState(false);
  const [totalPrice, reducer] = React.useReducer(getTotalPrice, initValue);
  const [orderId, setOrderId] = useState(0);
  const Close = () => {
    setVisible(false);
  }

  useEffect(() => reducer(cart), [cart]);

  return (
    <>{visible && (<Modal onClose={Close} children={<OrderDetails orderId={orderId} />} />)}
      <div className={`${Style.burgerConstructor} mt-25`} >
        <ul className={Style.ingridients}>
          {cart && cart.length > 0 &&
            <>
              <BunItem type={'top'} bun={new Ingridient(cart.find((el) => el.type === 'bun'))}></BunItem>
              {cart.map((item) => {
                if (item.type !== 'bun') {
                  return (<IngridientItem key={item._id} ingridient={new Ingridient(item)} />);
                }
              })}
              <BunItem type={'bottom'} bun={new Ingridient(cart.find((el) => el.type === 'bun'))}></BunItem>
            </>
          }
        </ul>
        <div className={`${Style.orderContainer} mt-10`}>
          <div className={Style.totalPrice}>
            <p className="text text_type_digits-medium">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={() => {
            const ids = cart.map(el => el._id);
            createOrder(ids).then(res => {
              setOrderId(res.order.number);
              setVisible(true);
            }).catch((err) => console.log(err));
          }}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
}