import Style from './OrderDetails.module.css';
import doneImageSrc from '../../images/done.svg';

export default function OrderDetails() {
    return (
        <>
            <div className={Style.detailContainer}>
                <p className={`text text_type_digits-large ${Style.orderId}`}>034536</p>
                <p className={`text text_type_main-medium ${Style.idTitle}`}>идентификатор заказа</p>
                <img src={doneImageSrc} className={Style.doneImage}></img>
                <p className={`text text_type_main-medium ${Style.orderReady}`}>Ваш заказ начали готовить</p>
                <p className={`text text_type_main-default ${Style.orderWait}`}>Дождитесь готовности на орбитальной станции</p>
            </div>
        </>
    );
}
