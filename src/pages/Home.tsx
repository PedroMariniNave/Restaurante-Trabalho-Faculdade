import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const categories = [
  { name: 'Lanches', img: 'assets/img/lanches.jpg' },
  { name: 'Pratos', img: 'assets/img/pratos.jpg' },
  { name: 'Sobremesas', img: 'assets/img/sobremesas.jpg' },
  { name: 'Bebidas', img: 'assets/img/bebidas.jpg' }
];

const Home: React.FC = () => {
  return (
    <div className="home">
      <header>
        <h1>Restaurante do Pedro</h1>
      </header>
      <div className="categories">
        {categories.map((category, index) => (
          <Link key={index} to={`/category/${category.name.toLowerCase()}`} className="category-card">
            <img src={category.img} alt={category.name} />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
      <div className="dish-of-the-day">
        <Link to="/prato-do-dia">
          <img src="assets/img/prato-do-dia.jpg" alt="Prato do Dia" />
          <h2>Prato do Dia</h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
