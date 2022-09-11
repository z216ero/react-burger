import React, { useState } from 'react';
import Style from './BurgerIngredients.module.css';
import { CurrencyIcon, Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../../utils/data';

export default function BurgerIngredients() {

    const [current, setCurrent] = useState("bread")

    return (
        <>
            <div className={Style.burgerIngredients}>
                <p className={`${Style.title} mt-10 mb-5`}>Соберите бургер</p>

                <nav className={"mb-10"} >
                    <ul className={`${Style.flR}`}>
                        <li><Tab active={current === "bread"} onClick={setCurrent} value={"bread"}>Булки</Tab> </li>
                        <li><Tab active={current === "souse"} onClick={setCurrent} value={"souse"}>Соусы</Tab> </li>
                        <li><Tab active={current === "topping"} onClick={setCurrent} value={"topping"}>Начинки</Tab> </li>
                    </ul>
                </nav>
                <ul className={Style.ingridientsCards}>
                    <li className={Style.ingridientCategory}>
                        <p className={`${Style.ingridientCategoryName}  mb-6`}>Булки</p>
                        <ul className={`${Style.flRW} ml-4`} >
                            {data.map((item) => {
                                if (item.type === "bun") {
                                    return (<li key={item._id} className={Style.ingridientCard}>
                                        {item.__v > 0 && (<div className={Style.Count}>
                                            <Counter count={item.__v}></Counter>
                                        </div>)}
                                        <img className={Style.ingridientPoto} alt="Фото ингридента" src={item.image}></img>
                                        <div className={Style.ingridientCost}>{item.price} <CurrencyIcon type="primary" /> </div>
                                        <p className={Style.ingridientName}>{item.name}</p>
                                    </li>)
                                }
                            })}
                        </ul>
                    </li>
                    <li className={Style.ingridientCategory}>
                        <p className={`${Style.ingridientCategoryName}  mb-6`}>Соусы</p>
                        <ul className={`${Style.flRW} ml-4`} >
                            {data.map((item) => {
                                if (item.type === "sauce") {
                                    return (<li key={item._id} className={Style.ingridientCard}>
                                        {item.__v > 0 && (<div className={Style.Count}>
                                            <Counter count={item.__v}></Counter>
                                        </div>)}
                                        <img className={Style.ingridientPoto} alt="Фото ингридента" src={item.image}></img>
                                        <div className={Style.ingridientCost}>{item.price} <CurrencyIcon type="primary" /> </div>
                                        <p className={Style.ingridientName}>{item.name}</p>
                                    </li>)
                                }
                            })}
                        </ul>
                    </li>
                    <li className={Style.ingridientCategory}>
                        <p className={`${Style.ingridientCategoryName}  mb-6`}>Начинки</p>
                        <ul className={`${Style.flRW} ml-4`} >
                            {data.map((item) => {
                                if (item.type === "main") {
                                    return (<li key={item._id} className={Style.ingridientCard}>
                                        {item.__v > 0 && (<div className={Style.Count}>
                                            <Counter count={item.__v}></Counter>
                                        </div>)}
                                        <img className={Style.ingridientPoto} alt="Фото ингридента" src={item.image}></img>
                                        <div className={Style.ingridientCost}>{item.price} <CurrencyIcon type="primary" /> </div>
                                        <p className={Style.ingridientName}>{item.name}</p>
                                    </li>)
                                }
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
