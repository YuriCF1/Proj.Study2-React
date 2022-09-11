// Usa-se 'useState' para mudar o estado de algo específico, dando o valor padrão para aquilo. Ex: const [valorPadrão, funçãoMudar] = usestate(valor do valorPadrão)
// O useEffect ele executa algo toda vez que o DOM virtual é mudado. Ele também pode mudar quando algo expecífico é mudado, estando no segundo parâmetro

import { useEffect, useState } from "react";

const Hooks = () => {
  let idade = 30;

  const [novaIdade, setNovaIdade] = useState(40);

  const changeAge = () => {
    console.log(idade);
    idade = 31;
  };

  const changeNewAge = () => {
    setNovaIdade(50);
  };

  useEffect(() => {
    console.log('Testando');
  });

  return (
    <div>
      <p>Idade: {idade}</p>
      <button onClick={changeAge}>Muda idade</button>
      <p>Nova Idade: {novaIdade}</p>
      <button onClick={changeNewAge}>Muda nova idade</button>
    </div>
  );
};

export default Hooks;
