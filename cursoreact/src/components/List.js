const List = () => {
  const items = [ //Normalmente isso vem de uma API
    {
      id: 1,
      name: "Yuri",
    },
    {
      id: 2,
      name: "Yago",
    },
    {
      id: 3,
      name: "Diego",
    },
  ];

  return (
    <div>
        {/* Usei parenteses depois da arrow funciont pois está retornando um objeto */}
        {/* Obrigatoriamente, cada item da lista deve ter uma propriedade key, para servir de identificação  */}
      {items.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default List;
