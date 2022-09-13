import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import React, { useEffect, useState } from 'react';

function App() {
  const ingridientsApi = 'https://norma.nomoreparties.space/api/ingredients';
  const [ingridients, setIngridients] = React.useState([]);

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
  }, []);

  return (
    <main className="App">
      <AppHeader />
      <div className={"Content"}>
        <BurgerIngredients ingridients={ingridients} />
        <BurgerConstructor />
      </div>
    </main>
  );
}

export default App;
