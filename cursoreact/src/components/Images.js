// ANOTAÇÕES
// Eu posso importar diretamente de public só com a barra '/bb8.jpg'
// Já em outras pastas, eu preciso usar o 'import', e acabo renomeando o arquivo

import Witcher from "../assets/tw.jpg"

const Images = () => {
  return (
    <div>
      <img alt="Imagem do BB8" src="/bb8.jpg" />
      <img alt="Imagem do TW" src={Witcher} />
    </div>
  );
};

export default Images;
