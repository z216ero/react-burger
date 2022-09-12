import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

function App() {
  return (
    <main className="App">
      <AppHeader />
      <div className={"Content"}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  );
}

export default App;
