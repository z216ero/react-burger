import React from 'react';
import { ConstructorElement, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Style from '../IngridientItem/IngridientItem.module.css';

export default function BunItem(props) {
    const { bun, type } = props;
    return (
        <li className={Style.ingridient}>
            <div className={Style.dragble}></div>
            <ConstructorElement
                type={type}
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
            />
        </li>
    );
}
