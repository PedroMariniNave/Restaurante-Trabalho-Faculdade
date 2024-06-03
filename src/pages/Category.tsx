import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Category.css';

const data = {
  lanches: [
    { name: 'Sanduíche', price: 10.00, img: 'assets/img/sanduiche.jpg' },
    { name: 'Hambúrguer', price: 12.00, img: 'assets/img/hamburguer.jpg' },
    { name: 'Wrap de Frango', price: 11.00, img: 'assets/img/wrap-frango.jpg' },
    { name: 'Taco Mexicano', price: 14.00, img: 'assets/img/taco-mexicano.jpg' },
    { name: 'Quesadilla', price: 13.00, img: 'assets/img/quesadilla.jpg' }
  ],
  pratos: [
    { name: 'Frango Grelhado', price: 20.00, img: 'assets/img/frango-grelhado.jpg' },
    { name: 'Arroz com Feijão', price: 15.00, img: 'assets/img/arroz-feijao.jpg' },
    { name: 'Peixe Assado', price: 25.00, img: 'assets/img/peixe-assado.jpg' },
    { name: 'Macarrão ao Molho', price: 18.00, img: 'assets/img/macarrao-molho.jpg' },
    { name: 'Carne de Panela', price: 22.00, img: 'assets/img/carne-panela.jpg' }
  ],
  sobremesas: [
    { name: 'Pudim', price: 8.00, img: 'assets/img/pudim.jpg' },
    { name: 'Bolo', price: 6.00, img: 'assets/img/bolo.jpg' },
    { name: 'Sorvete', price: 7.00, img: 'assets/img/sorvete.jpg' },
    { name: 'Torta de Limão', price: 9.00, img: 'assets/img/torta-limao.jpg' },
    { name: 'Mousse de Maracujá', price: 8.50, img: 'assets/img/mousse-maracuja.jpg' }
  ],
  bebidas: [
    { name: 'Suco', price: 5.00, img: 'assets/img/suco.jpg' },
    { name: 'Refrigerante', price: 4.00, img: 'assets/img/refrigerante.jpg' },
    { name: 'Água', price: 3.00, img: 'assets/img/agua.jpg' },
    { name: 'Chá Gelado', price: 5.50, img: 'assets/img/cha-gelado.jpg' },
    { name: 'Café', price: 2.50, img: 'assets/img/cafe.jpg' }
  ],
};

interface Item {
  name: string;
  price: number;
  img: string;
}

interface Params {
  category: string;
}

const Category: React.FC = () => {
  const { category } = useParams<Params>();
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const categoryData = data[category as keyof typeof data];
    if (categoryData) {
      setItems(categoryData);
    } else {
      setItems([]);
    }
  }, [category]);

  if (items.length === 0) {
    return (
      <div className="category">
        <header>
          <h1>Categoria não encontrada</h1>
        </header>
        <main>
          <p>Desculpe, não conseguimos encontrar a categoria solicitada.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="category">
      <header>
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      </header>
      <main>
        <div className="item-list">
          {items.map((item, index) => (
            <Link key={index} to={`/item-details/${category}/${index}`} className="item-card">
              <img src={`/${item.img}`} alt={item.name} />
              <h2>{item.name}</h2>
              <p>R$ {item.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Category;
