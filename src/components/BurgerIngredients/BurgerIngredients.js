import { useContext, useState, useEffect, useRef, createRef } from 'react';
import Style from './BurgerIngredients.module.css';
import { CurrencyIcon, Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { IngridientsContext } from '../../utils/IngridientsContext';
import { Ingridient } from '../../utils/types';

export default function BurgerIngredients() {
    const ingridients = useContext(IngridientsContext);
    const [current, setCurrent] = useState("bread");
    const [currentItem, setCurrentItem] = useState();

    const buns = ingridients.filter(item => item.type === "bun");
    const sause = ingridients.filter(item => item.type === "sauce");
    const main = ingridients.filter(item => item.type === "main");

    const bunElement = useRef(null);
    const sauseElement = useRef(null);
    const mainElement = useRef(null);

    const Close = () => {
        setCurrentItem(null);
    }

    const scroll = (value) => {
        switch (value) {
            case "bread":
                bunElement.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "souse":
                sauseElement.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "topping":
                mainElement.current.scrollIntoView({ behavior: "smooth" });
                break;
        }
        setCurrent(value);
    }

    return (
        <>
            {currentItem && (<Modal onClose={Close} children={(<IngredientDetails ingridient={currentItem} />)} />)}
            <div className={Style.burgerIngredients}>
                <p className={`${Style.title} mt-10 mb-5`}>Соберите бургер</p>
                <nav className={"mb-10"} >
                    <ul className={`${Style.flR}`}>
                        <li><Tab active={current === "bread"} onClick={scroll} value={"bread"}>Булки</Tab> </li>
                        <li><Tab active={current === "souse"} ref={sauseElement} onClick={scroll} value={"souse"}>Соусы</Tab> </li>
                        <li><Tab active={current === "topping"} ref={mainElement} onClick={scroll} value={"topping"}>Начинки</Tab> </li>
                    </ul>
                </nav>
                <ul className={Style.ingridientsCards}>
                    <li className={Style.ingridientCategory}>
                        <p ref={bunElement} className={`${Style.ingridientCategoryName}  mb-6`}>Булки</p>
                        <ul className={`${Style.flRW} ml-4`} >
                            {buns.map((item) => {
                                return (<li key={item._id} className={Style.ingridientCard} onClick={() => {
                                    setCurrentItem(new Ingridient(item));
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
                        <p ref={sauseElement} className={`${Style.ingridientCategoryName}  mb-6`}>Соусы</p>
                        <ul className={`${Style.flRW} ml-4`} >
                            {sause.map((item) => {
                                return (<li key={item._id} className={Style.ingridientCard} onClick={() => {
                                    setCurrentItem(new Ingridient(item));
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
                        <p ref={mainElement} className={`${Style.ingridientCategoryName}  mb-6`}>Начинки</p>
                        <ul className={`${Style.flRW} ml-4`} >
                            {main.map((item) => {
                                return (<li key={item._id} className={Style.ingridientCard} onClick={() => {
                                    setCurrentItem(new Ingridient(item));
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
