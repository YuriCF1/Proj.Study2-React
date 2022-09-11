// ANOTAÇÕES
//Código JS se executa entre chaves.
//Os componentes tem de retornar algo
//Só pode ter um elemento pai
//Posso criar funções e/ou variáveis junto com o template (tem gente que n gost)
//Há nomes do JS que são iguais aos do html, então deve-se mudar
//Posso executar as funções em chave e ele já transforma para texto
//Posso chamar outros componentes dentr de outro 

import SecondComponent from "./SecondComponent";

function FirstComponent() {
    const name = "Yuri";
    return (
    <div>
      <p>Primeiro componente</p>
      <label htmlFor="name">Nome: </label>
      <input type="text" name="name" />
      <br />
      {2+2}
      <p>Nome: {name}</p>
      <SecondComponent />
    </div>
  );
}

export default FirstComponent;
