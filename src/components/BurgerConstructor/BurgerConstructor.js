import Style from './BurgerConstructor.module.css';
import React, { useState } from 'react';
import { Button, ConstructorElement, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

export default function BurgerConstructor(props) {
  const { ingridients } = props;
  const [visible, setVisible] = useState(false);
  const Close = () => {
    setVisible(false);
  }

  return (
    <>{visible && (<Modal onClose={Close} children={<OrderDetails />} />)}
      <div className={`${Style.burgerConstructor} mt-25`} >
        {ingridients.length > 0 && <ul className={Style.ingridients}>
          <li className={Style.ingridient}>
            <div className={Style.dragble}></div>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={20}
              thumbnail={ingridients[0].image}
            />
          </li>
          <li className={Style.ingridient}>
            <div className={Style.dragble}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={ingridients[0].image}
            />
          </li>
          <li className={Style.ingridient}>
            <div className={Style.dragble}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={ingridients[0].image}
            />
          </li>
          <li className={Style.ingridient}>
            <div className={Style.dragble}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={ingridients[0].image}
            />
          </li>
          <li className={Style.ingridient}>
            <div className={Style.dragble}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={ingridients[0].image}
            />
          </li>
          <li className={Style.ingridient}>
            <div className={Style.dragble}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={ingridients[0].image}
            />
          </li>
          <li className={Style.ingridient}>
            <div className={Style.dragble}></div>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail={ingridients[0].image}
            />
          </li>
        </ul>}
        <div className={`${Style.orderContainer} mt-10`}>
          <div className={Style.totalPrice}>
            <p className="text text_type_digits-medium">610</p>
            <CurrencyIcon type="primary" style={{ heith: '33px', withd: '33px' }} /></div>
          <Button type="primary" size="large" onClick={() => {
            setVisible(true);
          }}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
}

BurgerConstructor.propTypes = {
  ingridients: PropTypes.arrayOf(PropTypes.exact({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
  })).isRequired
}