import { data } from '../../utils/data';
import Style from './BurgerConstructor.module.css';
import { Button, ConstructorElement, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor() {
  return (
    <div className={`${Style.burgerConstructor} mt-25`} >
      <ul className={Style.ingridients}>
        <li className={Style.ingridient}>
          <div className={Style.dragble}></div>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail={data[0].image}
          />
        </li>
        <li className={Style.ingridient}>
          <div className={Style.dragble}>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Соус традиционный галактический"
            price={30}
            thumbnail={data[0].image}
          />
        </li>
        <li className={Style.ingridient}>
          <div className={Style.dragble}>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Мясо бессмертных моллюсков Protostomia"
            price={300}
            thumbnail={data[0].image}
          />
        </li>
        <li className={Style.ingridient}>
          <div className={Style.dragble}>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Плоды Фалленианского дерева"
            price={80}
            thumbnail={data[0].image}
          />
        </li>
        <li className={Style.ingridient}>
          <div className={Style.dragble}>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Хрустящие минеральные кольца"
            price={80}
            thumbnail={data[0].image}
          />
        </li>
        <li className={Style.ingridient}>
          <div className={Style.dragble}>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Хрустящие минеральные кольца"
            price={80}
            thumbnail={data[0].image}
          />
        </li>
        <li className={Style.ingridient}>
          <div className={Style.dragble}></div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={data[0].image}
          />
        </li>
      </ul>
      <div className={`${Style.orderContainer} mt-10`}>
        <div className={Style.totalPrice}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" style={{ heith: '33px', withd: '33px' }} /></div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
