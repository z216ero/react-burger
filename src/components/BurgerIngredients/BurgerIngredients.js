import React, { useState } from 'react';
import Style from './BurgerIngredients.module.css';
import { CurrencyIcon, Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

export default function BurgerIngredients(props) {
    const [current, setCurrent] = useState("bread");
    const { ingridients } = props;
    const [currentItem, setCurrentItem] = useState();
    const buns = ingridients.filter(item => item.type === "bun");
    const sause = ingridients.filter(item => item.type === "sauce");
    const main = ingridients.filter(item => item.type === "main");

    const Close = () => {
        setCurrentItem(null);
    }

    return (
        <>
            {currentItem && (<Modal onClose={Close} children={(<IngredientDetails ingridient={currentItem} />)} />)}
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
                            {buns.map((item) => {
                                return (<li key={item._id} className={Style.ingridientCard} onClick={() => {
                                    setCurrentItem(item);
                                }}>
                                    <div className={Style.Count}>
                                        <Counter count={1}></Counter>
                                    </div>
                                    <img className={Style.ingridientPoto} alt="Фото ингридента" src={item.image}></img>
                                    <div className={Style.ingridientCost}>{item.price} <CurrencyIcon type="primary" /> </div>
                                    <p className={Style.ingridientName}>{item.name}</p>
                                </li>)
                            })}
                        </ul>
                    </li>
                    <li className={Style.ingridientCategory}>
                        <p className={`${Style.ingridientCategoryName}  mb-6`}>Соусы</p>
                        <ul className={`${Style.flRW} ml-4`} >
                            {sause.map((item) => {
                                return (<li key={item._id} className={Style.ingridientCard} onClick={() => {
                                    setCurrentItem(item);
                                }}>
                                    <div className={Style.Count}>
                                        <Counter count={1}></Counter>
                                    </div>
                                    <img className={Style.ingridientPoto} alt="Фото ингридента" src={item.image}></img>
                                    <div className={Style.ingridientCost}>{item.price} <CurrencyIcon type="primary" /> </div>
                                    <p className={Style.ingridientName}>{item.name}</p>
                                </li>)
                            })}
                        </ul>
                    </li>
                    <li className={Style.ingridientCategory}>
                        <p className={`${Style.ingridientCategoryName}  mb-6`}>Начинки</p>
                        <ul className={`${Style.flRW} ml-4`} >
                            {main.map((item) => {
                                return (<li key={item._id} className={Style.ingridientCard} onClick={() => {
                                    setCurrentItem(item);
                                }}>
                                    <div className={Style.Count}>
                                        <Counter count={1}></Counter>
                                    </div>
                                    <img className={Style.ingridientPoto} alt="Фото ингридента" src={item.image}></img>
                                    <div className={Style.ingridientCost}>{item.price} <CurrencyIcon type="primary" /> </div>
                                    <p className={Style.ingridientName}>{item.name}</p>
                                </li>)
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

BurgerIngredients.propTypes = {
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
