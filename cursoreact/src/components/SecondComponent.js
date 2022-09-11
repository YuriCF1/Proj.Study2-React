// Por convenção se usa 'handleClick' como função no onClick do react

const SecondComponent = () => {
  const handleClick = () => {
    console.log("Clicou");
  };

  return (
    <div>
      <p>Segundo Componente</p>
      <button onClick={handleClick}>Clicado</button>
      <hr />
      <button
        onClick={() => {
          console.log("Teste");
        }}
      >
        Evento no Elemento
      </button>
    </div>
  );
};

export default SecondComponent;
