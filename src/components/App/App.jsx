import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import React, { useEffect, useState } from 'react';
import { getIngredients } from '../../utils/burger-api';
import { IngridientsContext } from '../../utils/IngridientsContext';
import { CardContext } from '../../utils/CartContext';

function App() {
  const [ingridients, setIngridients] = useState([]);
  const [cart, setCard] = useState();
  useEffect(() => {
    getIngredients().then(res => {
      setCard([res.data[0], res.data[5]]);
      setIngridients(res.data);
    });
  }, []);

  return (
    <main className="App">
      <AppHeader />
      <div className={"Content"}>
        <IngridientsContext.Provider value={ingridients}>
          <CardContext.Provider value={cart}>
            <BurgerIngredients />
            <BurgerConstructor />
          </CardContext.Provider>
        </IngridientsContext.Provider>
      </div>
    </main>
  );
}

export default App;
