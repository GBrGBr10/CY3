function Saudacao(props) {

    if (typeof props.nome == 'string') {
         return(
            <div>Olá, {props.nome}</div>
         )   
        }

    if (typeof props.nome == 'object' && !Array.isArray(props.nome)) {
         return(
            <div>Olá, {props.nome.nome}, você tem {props.nome.idade} anos, seu CPF é {props.nome.numero}</div>
         )   
        }

        if (Array.isArray(props.nome)){
            return(
                <div>
                    <h3>Lista de Filhos</h3>
                    <ul>
                        {props.nome.map( (filho) => {
                            return(
                                <li>Olá, {filho.x}. Idade: {filho.idade}. Número: {filho.numero}.</li>
                            )
                        } )}
                    </ul>
                </div>
            )
        }

    return(
        <div>
            Olá, filho desconhecido!
        </div>
    )
}

export default Saudacao;