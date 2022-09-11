import HeaderStyle from './AppHeader.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader() {
    return (
        <>
            <nav className={`${HeaderStyle.header} mt-10`}>
                <ul className={HeaderStyle.menu}>
                    <div className={HeaderStyle.item}>
                        <li className={HeaderStyle.item}><BurgerIcon type="primary" />Конструктор</li>
                        <li className={`${HeaderStyle.item} ${HeaderStyle.purple}`}><ListIcon type="secondary" />Лента заказов</li>
                    </div>
                    <Logo />
                    <li className={`${HeaderStyle.item} ${HeaderStyle.purple}`}><ProfileIcon type="secondary" />Личный кабинет</li>
                </ul>
            </nav >
        </>
    )
}
