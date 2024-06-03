import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetails.css';

const data = {
  lanches: [
    { name: 'Sanduíche', price: 10.00, img: 'assets/img/item1.jpg', description: 'Delicioso sanduíche natural.' },
    { name: 'Hambúrguer', price: 12.00, img: 'assets/img/item2.jpg', description: 'Hambúrguer artesanal.' }
  ],
  pratos: [
    { name: 'Frango Grelhado', price: 20.00, img: 'assets/img/item3.jpg', description: 'Frango grelhado com tempero especial.' },
    { name: 'Arroz com Feijão', price: 15.00, img: 'assets/img/item4.jpg', description: 'Tradicional arroz com feijão.' }
  ],
  sobremesas: [
    { name: 'Pudim', price: 8.00, img: 'assets/img/item5.jpg', description: 'Pudim de leite condensado.' },
    { name: 'Bolo', price: 6.00, img: 'assets/img/item6.jpg', description: 'Bolo caseiro de chocolate.' }
  ],
  bebidas: [
    { name: 'Suco', price: 5.00, img: 'assets/img/item7.jpg', description: 'Suco natural de frutas.' },
    { name: 'Refrigerante', price: 4.00, img: 'assets/img/item8.jpg', description: 'Refrigerante gelado.' }
  ],
};

interface Params {
  category: string;
  index: string;
}

const ItemDetails: React.FC = () => {
  const { category, index } = useParams<Params>();
  const [item, setItem] = useState<{ name: string; price: number; img: string; description: string } | null>(null);

  useEffect(() => {
    const categoryData = data[category as keyof typeof data];
    if (categoryData && categoryData[parseInt(index)]) {
      setItem(categoryData[parseInt(index)]);
    } else {
      setItem(null);
    }
  }, [category, index]);

  if (!item) {
    return (
      <div className="item-details">
        <header>
          <h1>Item não encontrado</h1>
        </header>
        <main>
          <p>Desculpe, não conseguimos encontrar o item solicitado.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="item-details">
      <header>
        <h1>{item.name}</h1>
      </header>
      <main>
        <img src={`/${item.img}`} alt={item.name} />
        <p>{item.description}</p>
        <h2>R$ {item.price.toFixed(2)}</h2>
      </main>
    </div>
  );
};

export default ItemDetails;