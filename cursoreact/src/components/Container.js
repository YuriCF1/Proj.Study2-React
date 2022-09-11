// Para utilizar o componente como as tags do html, preciso desestruturar e usar o 'children'

const Container = ( {children} ) => {
    return (
        <div className="container">
            {children}
        </div>

    )

    
}

export default Container;