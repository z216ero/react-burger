import React from 'react'
import { ConstructorElement, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Style from './IngridientItem.module.css';

export default function IngridientItem(props) {
    const { ingridient } = props;
    return (
        <li className={Style.ingridient}>
            <div className={Style.dragble}></div>
            <ConstructorElement
                text={ingridient.name}
                price={ingridient.price}
                thumbnail={ingridient.image}
            />
        </li>
    );
}
