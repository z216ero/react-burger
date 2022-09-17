import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { getIngredients } from '../../utils/burger-api';

function App() {
  const [ingridients, setIngridients] = React.useState([]);
  const [visible, SetVisible] = React.useState(false);
  const [content, SetContent] = React.useState();

  useEffect(() => {
    getIngredients().then(data => setIngridients(data.data));

  }, [visible]);

  return (
    <main className="App">
      <AppHeader />
      <div className={"Content"}>
        <BurgerIngredients ingridients={ingridients} />
        <BurgerConstructor ingridients={ingridients} />
      </div>
    </main>
  );
}

export default App;
