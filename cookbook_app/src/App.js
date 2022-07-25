import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Recipes from './Recipes';
import Recipe from './Recipe';

function App() {
  return (
    <div className='container'>

      <header>
        <h1>Книга о вкусной и здоровой пище людоеда</h1>
        <h2>Григорий Остер</h2>
        <Link to="/" className="menulink">Главная</Link>
        <Link to="soup" className="menulink">Супы</Link>
        <Link to="main" className="menulink">Основные блюда</Link>
        <Link to="dessert" className="menulink">Десерты</Link>
      </header>
      
      <main>
      <h3 className='greeting'>Добро пожаловать и приятного аппетита!</h3>
      <Routes>
          <Route path="/"></Route>
          <Route path=":category" element={<Recipes/>}> </Route>
          <Route path=":category/:index" element={<Recipe/>}></Route>
      </Routes>
      </main >
    </div>
  );
}

export default App;
