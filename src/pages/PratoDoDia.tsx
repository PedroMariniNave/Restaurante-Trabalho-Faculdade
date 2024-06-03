import './PratoDoDia.css';

const PratoDoDia = () => {
  return (
    <div className="prato-do-dia">
      <header>
        <h1>Prato do Dia</h1>
      </header>
      <main>
        <img src="assets/img/prato-do-dia.jpg" alt="Prato do Dia" />
        <div className="details">
          <h2>Entrada: Salada</h2>
          <h2>Prato Principal: Frango Grelhado com Arroz</h2>
          <h2>Sobremesa: Pudim</h2>
          <h2>Preço Promocional: R$ 30,00</h2>
        </div>
      </main>
    </div>
  );
};

export default PratoDoDia;
