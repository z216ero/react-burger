import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import React, { useEffect, useState } from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function App() {
  const ingridientsApi = 'https://norma.nomoreparties.space/api/ingredients';
  const [ingridients, setIngridients] = React.useState([]);
  const [visible, SetVisible] = React.useState(false);
  const [content, SetContent] = React.useState();
  const onClose = () => {
    SetVisible(false);
  }

  const onClick = () => {
    SetVisible(true);
  }

  useEffect(() => {
    const getIngridients = async () => {
      try {
        const res = await fetch(ingridientsApi);
        const data = await res.json();
        setIngridients(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getIngridients();
  }, [visible]);

  return (
    <main className="App">
      <AppHeader />
      {visible && <ModalOverlay onClose={onClose} >
        {content}
      </ModalOverlay>}
      <div className={"Content"}>
        <BurgerIngredients ingridients={ingridients} onClick={onClick} setContent={SetContent} />
        <BurgerConstructor ingridients={ingridients} onClick={onClick} setContent={SetContent} />
      </div>
    </main>
  );
}

export default App;
