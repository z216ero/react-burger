import React from 'react';
import Style from './IngredientDetails.module.css';

export default function IngredientDetails(props) {
    const { ingridient } = props;
    return (
        <>
            <div className={Style.detailContainer}>
                <div className={`text text_type_main-large ${Style.title}`}>Детали ингридента</div>
                <img className={Style.image} src={ingridient.image}></img>
                <p className={`text text_type_main-medium ${Style.name}`}>{ingridient.name}</p>
                <div className={Style.values}>
                    <div className={Style.value}>
                        <p>Калории,ккал</p>
                        <p className="text text_type_digits-default">{ingridient.calories}</p>
                    </div>
                    <div className={Style.value}>
                        <p>Белки, г</p>
                        <p className="text text_type_digits-default">{ingridient.proteins}</p>
                    </div>
                    <div className={Style.value}>
                        <p>Жиры, г</p>
                        <p className="text text_type_digits-default">{ingridient.fat}</p>
                    </div>
                    <div className={Style.value}>
                        <p>Углеводы, г</p>
                        <p className="text text_type_digits-default">{ingridient.carbohydrates}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
