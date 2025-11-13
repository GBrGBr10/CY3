import { useNavigate } from "react-router-dom"

function Members() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Membros</h1>
            <button onClick={ () =>{navigate('testeId')}}>Editar</button>
        </div>
    )
}

export default Members