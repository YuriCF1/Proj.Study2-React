// Posso passar o parâmtro como props, passando ele no App.js, do componente pai para o filho
// Também posso desestruturar as Props, já que se recebe vários parâmetros. Para isso, usa-se chaves
const RenderCond = ({ x, y }) => {
// const RenderCond = (Props) => {
    // const x = 10;


    return (
        <div>   
        {x > 5 && <p>X é maior que</p>}
        {x > 5 ? <p>X é um número alto</p> : <p>X é um número baixo</p>}
        <p>O valor de Y é: {y}</p>
        {/* {Props.x > 5 ? <p>X é um número alto</p> : <p>X é um número baixo</p>} */}
        </div>
    )

}

export default RenderCond;