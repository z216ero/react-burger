import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Style from '../IngridientItem/IngridientItem.module.css';
import { Ingridient } from '../../utils/types';

export default function BunItem(props) {
    const { bun, type } = props;
    const getPositionText = (type) => type === 'top' ? 'Вверх' : 'низ';

    return (
        <li className={Style.ingridient}>
            <div className={Style.dragble}></div>
            <ConstructorElement
                type={type}
                isLocked={true}
                text={`${bun.name} (${getPositionText(type)})`}
                price={bun.price}
                thumbnail={bun.image}
            />
        </li>
    );
}

BunItem.propTypes = {
    type: PropTypes.string.isRequired,
    bun: PropTypes.instanceOf(Ingridient).isRequired
}
